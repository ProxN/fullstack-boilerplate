import React from 'react';
import { ComponentWithAs, PropsWithAs, As } from '../types/utility-types';

const forwardRef = <P, C extends React.ElementType>(
  component: React.ForwardRefRenderFunction<
    any,
    PropsWithAs<C, P> & { as?: As }
  >
) => {
  return React.forwardRef(component) as unknown as ComponentWithAs<P, C>;
};

export { forwardRef };
