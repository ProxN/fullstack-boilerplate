import { Button } from '@components/elements/Button';
import { TextInput } from '@components/elements/TextInput';
import { AuthForm } from '@components/templates/AuthForm';

const Login = () => {
  return (
    <AuthForm title='Log in.'>
      <TextInput placeholder='Enter your email' label='Email' />
      <TextInput
        placeholder='Enter your password'
        type='password'
        label='Password'
      />
      <Button radius='sm' isPrimary>
        Login
      </Button>
    </AuthForm>
  );
};

export default Login;
