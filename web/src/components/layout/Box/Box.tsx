import styled, {
  createX,
  compose,
  layout,
  flexboxes,
  space,
  typography,
  sizing,
  backgrounds,
  LayoutProps,
  FlexboxesProps,
  SpaceProps,
  TypographyProps,
  SizingProps,
  BackgroundsProps,
} from '@xstyled/styled-components';

type BaseProps = LayoutProps &
  FlexboxesProps &
  SpaceProps &
  TypographyProps &
  SizingProps &
  BackgroundsProps;

interface BoxProps extends BaseProps {}

const x = createX(
  compose(layout, flexboxes, space, typography, sizing, backgrounds)
);

const XBox = styled(x.div)<BoxProps>``;

const Box: React.FC<BoxProps> = ({ children, ...rest }) => {
  return <XBox {...rest}> {children}</XBox>;
};

export default Box;
