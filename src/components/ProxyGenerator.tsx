'use client';
import { useAtom } from 'jotai';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Page } from '@/components/Page';
import { Form } from '@/components/Form';
import { SubmitButton } from '@/components/SubmitButton';
import { SecondaryButton } from '@/components/SecondaryButton/SecondaryButton';
import { Group } from '@/components/Group';
import { PrintSettings } from '@/components/PrintSettings';
import { cardWidthAtom } from '@/utils/cardWidthAtom';
import { cardHeightAtom } from '@/utils/cardHeightAtom';
import { paperSizeAtom } from '@/utils/paperSizeAtom';
import { downloadImages } from '@/utils/downloadImages';
import { generateProxyPdf } from '@/utils/generateProxyPdf';
import { createCache } from '@/utils/createCache';
import { http } from '@/utils/http';
import { corsHttp } from '@/utils/corsHttp';
import type { ValueOrError } from '@/utils/ValueOrError';
import type { FetchJson } from '@/components/FetchJson';
import type { ReportProgress } from '@/components/ReportProgress';
import type { ProxyWarning } from '@/components/ProxyWarning';
import type { ProxyGeneratorConfig } from '@/components/ProxyGeneratorConfig';

type Status =
  | { kind: 'idle' }
  | {
      kind: 'working';
      label: string;
      done?: number | undefined;
      total?: number | undefined;
    }
  | { kind: 'success'; warnings: ReadonlyArray<ProxyWarning> }
  | {
      kind: 'error';
      message: string;
      urls?: ReadonlyArray<string> | undefined;
    };

export function ProxyGenerator({ config }: { config: ProxyGeneratorConfig }) {
  const [text, setText] = useAtom(config.textAtom);
  const [cardWidth] = useAtom(cardWidthAtom);
  const [cardHeight] = useAtom(cardHeightAtom);
  const [paperSize] = useAtom(paperSizeAtom);
  const [status, setStatus] = useState<Status>({ kind: 'idle' });
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  const cache = useMemo(
    () => createCache<unknown>(config.cacheKey),
    [config.cacheKey],
  );

  const items = useMemo(() => config.extractItems(text), [config, text]);

  const isFetching = status.kind === 'working';
  const hasNoMatches = text.trim().length > 0 && items.length === 0;

  const onTextChange = (value: string) => {
    setText(value);

    if (status.kind === 'success' || status.kind === 'error') {
      setStatus({ kind: 'idle' });
    }
  };

  const fetchJson: FetchJson = async (url) => {
    const cached = cache.get(url);
    if (cached !== undefined) return [cached, null];

    const client = config.useCors ? corsHttp : http;

    const attempt = async (): Promise<ValueOrError<unknown>> => {
      try {
        const response = await client.get<unknown>(url);

        return [response.data, null];
      } catch {
        return [null, 'fetch failed'];
      }
    };

    let result = await attempt();
    if (result[1]) result = await attempt();

    if (result[0] !== null) cache.set(url, result[0]);

    return result;
  };

  const download = async () => {
    const report: ReportProgress = (label, done, total) => {
      setStatus({ kind: 'working', label, done, total });
    };

    const build = await config.buildImageLinks(items, { fetchJson, report });

    if (build.imageLinks.length === 0) {
      setStatus({
        kind: 'error',
        message:
          build.emptyError?.message ?? 'No card images available to download.',
        urls: build.emptyError?.urls,
      });

      return;
    }

    report('Downloading image', 0, build.imageLinks.length);

    const { images, failedUrls } = await downloadImages([...build.imageLinks], {
      onProgress: (done, total) => report('Downloading image', done, total),
    });

    if (images.length === 0) {
      setStatus({
        kind: 'error',
        message: 'All images failed to download:',
        urls: failedUrls,
      });

      return;
    }

    report('Generating PDF…');

    try {
      await generateProxyPdf({
        images,
        cardWidth,
        cardHeight,
        imageMimeType: config.imageMimeType,
        filename: config.pdfFilename,
        paperSize,
      });
    } catch (error) {
      setStatus({
        kind: 'error',
        message:
          error instanceof Error
            ? `PDF generation failed: ${error.message}`
            : 'PDF generation failed.',
      });

      return;
    }

    const warnings = (build.warnings ?? []).filter((w) => w.items.length > 0);

    if (failedUrls.length > 0) {
      warnings.push({ label: 'image(s) skipped', items: failedUrls });
    }

    setStatus({ kind: 'success', warnings });
  };

  const isDeterminate = status.kind === 'working' && status.total !== undefined;

  const phaseText =
    status.kind === 'working'
      ? status.total !== undefined
        ? `${status.label} ${status.done}/${status.total}`
        : status.label
      : null;

  const warningCount =
    status.kind === 'success'
      ? status.warnings.reduce((sum, w) => sum + w.items.length, 0)
      : 0;

  return (
    <Page>
      <Form onSubmit={download}>
        <fieldset disabled={isFetching}>
          <label>
            {config.sourceName} URLs
            <textarea
              ref={textareaRef}
              onChange={(event) => onTextChange(event.target.value)}
              placeholder={config.placeholder}
              rows={8}
              value={text}
              aria-invalid={hasNoMatches ? true : undefined}
            />
            <small>
              {items.length === 0
                ? hasNoMatches
                  ? `No ${config.sourceName} URLs detected.`
                  : config.example
                : `${items.length} ${config.sourceName} URL(s) detected.`}
            </small>
          </label>

          <PrintSettings />

          <Group>
            <SubmitButton
              disabled={items.length === 0 || isFetching}
              aria-busy={isFetching}
            >
              Download
            </SubmitButton>
            <SecondaryButton onClick={cache.clear}>Clear cache</SecondaryButton>
          </Group>
        </fieldset>

        <output>
          {isFetching && (
            <>
              {isDeterminate && status.kind === 'working' ? (
                <progress value={status.done} max={status.total} />
              ) : (
                <progress />
              )}
              {phaseText && <small>{phaseText}</small>}
            </>
          )}
          {status.kind === 'success' && (
            <>
              <p role='status'>
                Done — PDF downloaded as <code>{config.pdfFilename}</code>.
              </p>
              {status.warnings.length > 0 && (
                <details>
                  <summary>{`${warningCount} warning(s)`}</summary>
                  {status.warnings.map((warning) => (
                    <div key={warning.label}>
                      <small>{`${warning.items.length} ${warning.label}:`}</small>
                      <ul>
                        {warning.items.map((item) => (
                          <li key={item}>
                            <code>{item}</code>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </details>
              )}
            </>
          )}
          {status.kind === 'error' && (
            <article>
              <p role='alert'>
                <strong>{status.message}</strong>
              </p>
              {status.urls && status.urls.length > 0 && (
                <ul>
                  {status.urls.map((url) => (
                    <li key={url}>
                      <code>{url}</code>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          )}
        </output>
      </Form>
    </Page>
  );
}
