import { AuthForm } from '@components/templates/AuthForm';
import { TextInput } from '@components/elements/TextInput';
import { Button } from '@components/elements/Button';

const ForgotPassword = () => {
  return (
    <AuthForm page='forgot_password' title='Forgot your password?'>
      <TextInput placeholder='Enter your email' label='Email' />
      <Button isPrimary>Send me instructions</Button>
    </AuthForm>
  );
};

export default ForgotPassword;
