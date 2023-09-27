/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useCallback, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginState } from '../../redux/reducers/reducers';
import { LoginPageProps } from '../../types/types';

const Login = ({ handleLogin }: LoginPageProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (email && password) {
        handleLogin(email, password);
        setEmail('');
        setPassword('');
        dispatch(getLoginState());
      }
    },
    [email, password]
  );

  const isLoggedIn = useSelector((state: any) => state.isLoggedIn);
  console.log('>>', isLoggedIn);
  const styles = css`
    .login-form {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60vw;
      min-widht: 65vh;
      height: 70vh;
    }
    .signIn-btn {
      margin: 10px 0;
    }
  `;

  return (
    <Container css={styles} component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          padding: '30px',
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            fullWidth
            id='email address'
            label='Email Address'
            name='email address'
            autoComplete='email'
            autoFocus
            disabled={isLoggedIn}
          />
          <TextField
            margin='normal'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            disabled={isLoggedIn}
          />
          <Button
            type='submit'
            className='signIn-btn'
            fullWidth
            variant='contained'
          >
            {isLoggedIn ? 'Already Signed In' : 'Sign In'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
