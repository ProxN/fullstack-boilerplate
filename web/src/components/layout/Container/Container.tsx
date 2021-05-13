import styled, {
  compose,
  createX,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  css,
} from '@xstyled/styled-components';

interface ContainerProps extends LayoutProps, SpaceProps {
  /** If fluid is set to true, the Container will always  take 100% of width */
  fluid?: boolean;
}

const x = createX(compose(layout, space));

const XContainer = styled(x.div)<ContainerProps>`
  ${({ fluid }) => fluid && css({ maxWidth: '100%' })};
  margin-left: auto;
  margin-right: auto;
`;

const Container: React.FC<ContainerProps> = ({ fluid = false, ...rest }) => {
  return (
    <XContainer
      px={4}
      container={fluid ? {} : { sm: false }}
      fluid={fluid}
      {...rest}
    />
  );
};

export default Container;
