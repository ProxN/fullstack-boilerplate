import { Input, InputProps } from '../Input';
import { InputWrapper, InputWrapperProps } from '../InputWrapper';

interface TextInputProps
  extends InputProps,
    Omit<InputWrapperProps, 'children'> {
  type?: 'number' | 'text' | 'search' | 'tel' | 'url' | 'email' | 'password';
}

const TextInput: React.FC<TextInputProps> = ({
  icon,
  id,
  label,
  isRequired,
  error,
  type = 'text',
  ...inputProps
}) => {
  return (
    <InputWrapper id={id} label={label} error={error} isRequired={isRequired}>
      <Input
        type={type}
        isRequired={isRequired}
        id={id}
        icon={icon}
        {...inputProps}
      />
    </InputWrapper>
  );
};

export default TextInput;
