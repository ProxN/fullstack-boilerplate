import { Wrapper, Required } from './InputWrapper.styles';
import { Text } from '../Text';

export interface InputWrapperProps {
  /** Input that should be wrapped */
  children: React.ReactNode;

  /** htmlFor  label prop */
  id?: string;

  /** Input label, displayed before input */
  label?: string;

  /** Displays error message after input */
  error?: string;

  /** Adds red asterisk on the right side of label */
  isRequired?: boolean;
}

const InputWrapper = ({
  isRequired = false,
  children,
  label,
  id,
  error,
}: InputWrapperProps) => {
  return (
    <Wrapper>
      {label && (
        <Text fontWeight={500} as='label' htmlFor={id}>
          {label}

          {isRequired && <Required>*</Required>}
        </Text>
      )}
      {children}
      {error && <Text color='red'>{error}</Text>}
    </Wrapper>
  );
};

export default InputWrapper;
