import styled, {
  alignItems,
  justifyContent,
  css,
  flexDirection,
  getSpace,
  compose,
  margin,
  marginTop,
  marginBottom,
  MarginProps,
  MarginTopProps,
  MarginBottomProps,
} from '@xstyled/styled-components';

export interface SpaceBaseProps
  extends MarginProps,
    MarginTopProps,
    MarginBottomProps {
  /** if "true", set flex-wrap:wrap */
  $wrap?: boolean;

  /** horizontal space */
  hSize?: number;

  /** vertical   space */
  vSize?: number;
}

const SpaceSystem = compose(margin, marginTop, marginBottom);

export const SpaceContainer = styled.div<SpaceBaseProps>`
  display: flex;
  ${({ $wrap }) => $wrap && css({ flexWrap: $wrap ? 'wrap' : 'nowrap' })}
  ${alignItems}
  ${justifyContent}
  ${flexDirection}
  ${SpaceSystem}
  & > *:not(:last-child) {
    ${({ hSize }) =>
      hSize &&
      css`
        margin-right: ${getSpace(hSize)};
      `}

    ${({ $wrap, vSize }) =>
      $wrap &&
      vSize &&
      css`
        margin-bottom: ${getSpace(vSize)};
      `}
  }
`;
