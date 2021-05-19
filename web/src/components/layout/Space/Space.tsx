import { useMemo } from 'react';
import { FlexboxesProps } from '@xstyled/styled-components';
import { Size } from '@lib/theme';
import { SpaceContainer, SpaceBaseProps } from './Space.styles';

export type SpaceSize = Size | number;

interface SpaceProps extends Omit<SpaceBaseProps, 'hSize ' | 'vSize'> {
  /** Flex align items */
  alignItems?: FlexboxesProps['alignItems'];

  /** Items directions */
  flexDirection?: FlexboxesProps['flexDirection'];

  /** Items positions */
  justifyContent?: FlexboxesProps['justifyContent'];

  /**  space Size */
  size?: SpaceSize | SpaceSize[];
}

const sizes = {
  xs: 1,
  sm: 2,
  md: 4,
  lg: 6,
  xl: 8,
};

const getSpaceSize = (spaceSize: SpaceSize) => {
  return typeof spaceSize === 'string' ? sizes[spaceSize] : spaceSize || 1;
};

const Space: React.FC<SpaceProps> = ({
  children,
  $wrap = false,
  size = 'sm',
  ...rest
}) => {
  const [hSize, vSize] = useMemo(
    () =>
      (Array.isArray(size) ? size : [size, size]).map((el) => getSpaceSize(el)),
    [size]
  );

  return (
    <SpaceContainer hSize={hSize} vSize={vSize} $wrap={$wrap} {...rest}>
      {children}
    </SpaceContainer>
  );
};
export default Space;
