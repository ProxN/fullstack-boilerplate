import { FontSizes } from '@lib/theme/theme';
import { ComponentProps } from '@lib/types/utility-types';
import { TextDiv, TextBaseProps } from './Text.styles';

export interface TextProps extends Omit<TextBaseProps, 'fontSize'> {
  size?: FontSizes | number | Record<string, string>;
}

const Text = <C extends React.ElementType = 'div'>(
  props: ComponentProps<C, TextProps>
) => {
  const {
    size = 'sm',
    isLink = false,
    fontWeight = 400,
    children,
    lineHeight = '1.4',
    ...rest
  } = props;

  return (
    <TextDiv
      isLink={isLink}
      fontWeight={fontWeight}
      fontSize={size}
      lineHeight={lineHeight}
      {...rest}
    >
      {children}
    </TextDiv>
  );
};

export default Text;
