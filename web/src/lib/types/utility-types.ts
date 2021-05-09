export type Tuple<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : TupleOf<T, N, []>
  : never;
type TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N
  ? R
  : TupleOf<T, N, [T, ...R]>;
