import styled, {
  compose,
  textAlign,
  textTransform,
  fontWeight,
  fontSize,
  TextAlignProps,
  FontWeightProps,
  TextTransformProps,
  FontSizeProps,
  lineHeight,
  LineHeightProps,
  margin,
  MarginProps,
  css,
  th,
} from '@xstyled/styled-components';

const TextSystem = compose(
  textAlign,
  textTransform,
  fontWeight,
  fontSize,
  lineHeight,
  margin
);

export interface TextBaseProps
  extends TextAlignProps,
    FontWeightProps,
    TextTransformProps,
    FontSizeProps,
    LineHeightProps,
    MarginProps {
  /** color from theme.colors */
  color?: string;

  /** */
  isLink?: boolean;
}

const LinkStyles = css`
  color: blue.6;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

export const TextDiv = styled.div.withConfig({
  shouldForwardProp: (props, validate) =>
    validate(props) && !TextSystem.meta.props.includes(props),
})<TextBaseProps>`
  ${TextSystem};
  color: ${({ theme, color }) =>
    color ? theme.colors[color][6] : theme.black};
  font-family: ${th('fontFamily')};
  ${({ isLink }) => isLink && LinkStyles}
`;
