import { useState } from 'react';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from || '/';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      localStorage.setItem('user', JSON.stringify({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL
      }));
      alert('Login successful!');
      navigate(redirectPath);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem('user', JSON.stringify({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL
      }));
      alert('Google Sign-In successful!');
      navigate(redirectPath);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 5 }}>
      <Box component="form" onSubmit={handleLogin} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Login
        </Typography>
        
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
        />
        <Button variant="contained" type="submit" color="primary" fullWidth sx={{ mt: 2 }}>
          Log In
        </Button>
        {error && <Alert severity="error">{error}</Alert>}

        <Typography align="center" sx={{ mt: 2 }}>Or</Typography>
        
        <Button 
          variant="outlined" 
          fullWidth 
          sx={{
            mt: 1,
            color: 'black',
            borderColor: '#4285F4',
            textTransform: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          startIcon={<GoogleIcon style={{ color: '#4285F4' }} />}
          onClick={handleGoogleSignIn}
        >
          Sign in with Google
        </Button>

        <Typography align="center" sx={{ mt: 2 }}>New to the WellNest <Link to='/signup' style={{textDecoration:'none', color:'primary'}}>SignUp</Link> now</Typography>
      </Box>
    </Container>
  );
};

export default Login;
