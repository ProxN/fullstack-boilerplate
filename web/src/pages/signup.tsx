import { Button } from '@components/elements/Button';
import { TextInput } from '@components/elements/TextInput';
import { AuthForm } from '@components/templates/AuthForm';

const SignUp = () => {
  return (
    <AuthForm page='signup' title='Sign up.'>
      <TextInput placeholder='Enter your email' label='Email' />
      <TextInput
        placeholder='Enter your password'
        type='password'
        label='Password'
      />
      <Button radius='sm' isPrimary>
        Sign Up
      </Button>
    </AuthForm>
  );
};

export default SignUp;
