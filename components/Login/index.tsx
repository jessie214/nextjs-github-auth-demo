import { useState } from 'react';
import { Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { signIn} from 'next-auth/react';


interface LoginPageProps {
  isShow: boolean;
  onClose: () => void;
}

const Login = (props: LoginPageProps) => {
  const { isShow = false } = props;
  const { onClose } = props;
  const [formData, setFormData] = useState({
    phone: '',
    verificationCode:''
  });
  const [isShowVerificationCode, setIsShowVerificationCode] = useState(false);
  







  return (
    <div>
      <Dialog
        open={isShow}
        onClose={onClose}
        maxWidth='xs'
      >
        <DialogTitle>Sign in</DialogTitle>
        <DialogContent>
        <Button variant='outlined' size="large" sx={{ mt: 3, mb: 2, width: '100%' }} onClick={() => signIn('github')}>Continue with github</Button>


        </DialogContent> 
      </Dialog>
    </div>
  );
};
export default Login;