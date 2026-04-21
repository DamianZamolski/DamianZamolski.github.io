export type ValueOrError<T, E = string> = [T, null] | [null, E];
