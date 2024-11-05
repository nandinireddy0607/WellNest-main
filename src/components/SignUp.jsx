import { useState } from 'react';
import { auth, storage } from '../firebaseConfig';  // Import storage from your Firebase config
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Upload file to Firebase Storage if file exists
      let photoURL = '';
      if (file) {
        const fileRef = ref(storage, `profilePictures/${user.uid}`);
        await uploadBytes(fileRef, file);
        photoURL = await getDownloadURL(fileRef);
      }

      // Update Firebase Auth profile with username and photoURL
      await updateProfile(user, {
        displayName: username,
        photoURL,
      });

      // Send welcome email
      await axios.post('https://wellnest-backend.onrender.com/send-welcome-email', {
        email: user.email,
        displayName: username || "WellNest Member",
      });

      // Save user details in local storage
      localStorage.setItem('user', JSON.stringify({
        displayName: user.displayName,
        email: user.email,
        photoURL,
      }));

      alert('Signup successful!');
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFileInput = (e) => {
    setFile(e.target.files[0]);
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
      navigate('/')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ my: 5 }}>
      <Box component="form" onSubmit={handleSignup} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Signup
        </Typography>
        
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          required
        />
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
        <TextField
          label="Confirm Password"
          variant="outlined"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
          required
        />

        <Button
          variant="outlined"
          component="label"
          sx={{
            mt: 1,
            color: 'gray',
            borderColor: 'lightgray',
            textTransform: 'none',
            justifyContent: 'flex-start',
            '&:hover': {
              borderColor: 'primary.main',
            },
          }}
        >
          {file ? file.name : "Upload Profile Picture"}
          <input
            type="file"
            hidden
            onChange={handleFileInput}
            accept="image/*"
          />
        </Button>

        <Button variant="contained" type="submit" color="primary" fullWidth sx={{ mt: 2 }}>
          Sign Up
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

        <Typography align="center" sx={{ mt: 2 }}>Already a user in WellNest <Link to='/login' style={{textDecoration:'none', color:'primary'}}>SignUp</Link> now</Typography>
      </Box>
    </Container>
  );
};

export default Signup;
