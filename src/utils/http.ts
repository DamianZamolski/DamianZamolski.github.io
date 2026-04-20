import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios';

export const http = axios.create();

export const corsHttp = axios.create({
  baseURL: 'https://cors-proxy.damian-zamola-zamolski.workers.dev/?url=',
});

export async function requestWithCorsFallback<T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> {
  try {
    return await http.get<T>(url, config);
  } catch (error) {
    if (error instanceof AxiosError && error.response === undefined) {
      return await corsHttp.get<T>(url, config);
    }
    throw error;
  }
}
