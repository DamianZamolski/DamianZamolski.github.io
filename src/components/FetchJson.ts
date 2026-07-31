import type { ValueOrError } from '@/utils/ValueOrError';

export type FetchJson = (url: string) => Promise<ValueOrError<unknown>>;
