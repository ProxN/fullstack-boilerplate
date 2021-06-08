import styled, { system, SystemProps } from '@xstyled/styled-components';

export interface BoxProps extends SystemProps {
  color?: React.HTMLAttributes<HTMLDivElement>['color'];
}

const CustomBox = styled.div<BoxProps>`
  ${system}
`;

const Box: React.FC<BoxProps> = ({ children, ...rest }) => {
  return <CustomBox {...rest}>{children}</CustomBox>;
};

export default Box;
