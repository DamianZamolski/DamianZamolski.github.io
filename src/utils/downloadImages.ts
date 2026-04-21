import { corsHttp } from './corsHttp';

async function fetchArrayBuffer(link: string): Promise<ArrayBuffer> {
  const response = await corsHttp.get<ArrayBuffer>(link, {
    responseType: 'arraybuffer',
  });

  return response.data;
}

export async function downloadImages(
  links: ReadonlyArray<string>,
  opts: {
    onProgress?: (done: number, total: number) => void;
  } = {},
): Promise<{
  images: ReadonlyArray<ArrayBuffer>;
  failedUrls: ReadonlyArray<string>;
}> {
  const { onProgress } = opts;
  const cache = new Map<string, Promise<ArrayBuffer>>();

  const fetchOnceWithRetry = (link: string): Promise<ArrayBuffer> => {
    const cached = cache.get(link);
    if (cached) return cached;

    const promise = (async () => {
      try {
        return await fetchArrayBuffer(link);
      } catch {
        return await fetchArrayBuffer(link);
      }
    })();

    cache.set(link, promise);

    return promise;
  };

  let done = 0;
  const total = links.length;
  onProgress?.(done, total);

  const results = await Promise.allSettled(
    links.map((link) =>
      fetchOnceWithRetry(link).finally(() => {
        done++;
        onProgress?.(done, total);
      }),
    ),
  );

  const failedUrls: Array<string> = [];
  const images: Array<ArrayBuffer> = [];

  for (let i = 0; i < results.length; i++) {
    const result = results[i]!;

    if (result.status === 'fulfilled') {
      images.push(result.value);
    } else {
      failedUrls.push(links[i]!);
    }
  }

  return { images, failedUrls: Array.from(new Set(failedUrls)) };
}
