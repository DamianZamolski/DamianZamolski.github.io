import { corsHttp } from './corsHttp';

export async function downloadImages(
  links: ReadonlyArray<string>,
): Promise<ReadonlyArray<ArrayBuffer>> {
  const cache = new Map<string, Promise<ArrayBuffer>>();

  const fetchOnce = (link: string): Promise<ArrayBuffer> => {
    let promise = cache.get(link);

    if (!promise) {
      promise = corsHttp
        .get<ArrayBuffer>(link, { responseType: 'arraybuffer' })
        .then((response) => response.data);

      cache.set(link, promise);
    }

    return promise;
  };

  const results = await Promise.allSettled(links.map(fetchOnce));

  return results
    .filter(
      (result): result is PromiseFulfilledResult<ArrayBuffer> =>
        result.status === 'fulfilled',
    )
    .map((result) => result.value);
}
