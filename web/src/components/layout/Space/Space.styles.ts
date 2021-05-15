import styled, {
  alignItems,
  justifyContent,
  css,
  flexDirection,
  getSpace,
} from '@xstyled/styled-components';

export interface SpaceBaseProps {
  /** if "true", set flex-wrap:wrap */
  wrap?: boolean;

  /** horizontal space */
  hSize?: number;

  /** vertical   space */
  vSize?: number;
}

export const SpaceContainer = styled.div<SpaceBaseProps>`
  display: flex;
  ${({ wrap }) => wrap && css({ flexWrap: wrap ? 'wrap' : 'nowrap' })}
  ${alignItems}
  ${justifyContent}
  ${flexDirection}
  & > *:not(:last-child) {
    ${({ hSize }) =>
      hSize &&
      css`
        margin-right: ${getSpace(hSize)};
      `}

    ${({ wrap, vSize }) =>
      wrap &&
      vSize &&
      css`
        margin-bottom: ${getSpace(vSize)};
      `}
  }
`;
