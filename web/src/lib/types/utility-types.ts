export type Tuple<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : TupleOf<T, N, []>
  : never;
type TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N
  ? R
  : TupleOf<T, N, [T, ...R]>;

export type ComponentProps<C extends React.ElementType, P> = Omit<
  React.ComponentPropsWithRef<C>,
  keyof P
> & {
  /** HTML tag or component that will be used as root element */
  as?: C;
} & P;
