import axios from 'axios';

export const corsHttp = axios.create({
  baseURL: 'https://cors-proxy.damian-zamola-zamolski.workers.dev',
  allowAbsoluteUrls: false,
});
