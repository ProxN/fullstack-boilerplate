import { ComponentProps } from '@lib/types/utility-types';
import {
  DefaultInput,
  FilledInput,
  UnStyledInput,
  InputBaseProps,
  InputContainer,
  InputIcon,
} from './Input.styles';

type Omitted = 'disabled' | 'required';

export interface InputProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, Omitted>,
    InputBaseProps {
  /** if "true", disable ionput element */
  isDisabled?: boolean;

  /** if "true", set aria-required   */
  isRequired?: boolean;

  /** Add icon on left side of input */
  icon?: React.ReactNode;
}

const getInput = (variant: string) => {
  if (variant === 'filled') {
    return FilledInput;
  }

  if (variant === 'unstyled') {
    return UnStyledInput;
  }

  return DefaultInput;
};

const Input = <C extends React.ElementType = 'input'>(
  props: ComponentProps<C, InputProps>
) => {
  const {
    isDisabled = false,
    isInvalid = false,
    isRequired = false,
    variant = 'default',
    borderRadius = 'sm',
    radius = 'sm',
    icon,
    ...rest
  } = props;

  const StyledInput = getInput(variant);

  const input = (
    <StyledInput
      radius={radius}
      required={isRequired}
      aria-invalid={isInvalid}
      aria-required={isRequired}
      isInvalid={isInvalid}
      disabled={isDisabled}
      borderRadius={borderRadius}
      {...rest}
    />
  );

  if (icon) {
    return (
      <InputContainer withIcon>
        <InputIcon>{icon}</InputIcon>
        {input}
      </InputContainer>
    );
  }

  return input;
};

export default Input;
