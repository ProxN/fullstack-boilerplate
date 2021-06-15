import { Button } from '@components/elements/Button';
import { TextInput } from '@components/elements/TextInput';
import { AuthForm } from '@components/templates/AuthForm';

const ResetPassword = () => {
  return (
    <AuthForm hideLinks title='Set new password.'>
      <TextInput placeholder='New password' label='Password' />
      <TextInput placeholder='Confirm new password' label='Confirm password' />
      <Button isPrimary>Set new password</Button>
    </AuthForm>
  );
};

export default ResetPassword;
