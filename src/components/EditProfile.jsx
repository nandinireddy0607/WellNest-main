import { useState, useEffect } from 'react';
import { auth, storage } from '../firebaseConfig';
import { updateProfile } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Card, CardContent, TextField, Button, Typography, Box, Avatar, CircularProgress } from '@mui/material';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    favoriteWorkshops: '',
  });
  const [profilePic, setProfilePic] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    setFormData(prev => ({
      ...prev,
      name: user.displayName || '',
      email: user.email || '',
      phoneNumber: user.phoneNumber || '',
      address: user.address || '',
      favoriteWorkshops: user.favoriteWorkshops || '',
    }));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileInput = (e) => {
    if (e.target.files[0]) {
      setProfilePic(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const user = auth.currentUser;
      if (!user) throw new Error('No user logged in');

      let photoURL = user.photoURL;

      if (profilePic) {
        const fileRef = ref(storage, `profilePictures/${user.uid}`);
        await uploadBytes(fileRef, profilePic);
        photoURL = await getDownloadURL(fileRef);
      }

      await updateProfile(user, {
        displayName: formData.name,
        photoURL,
      });

      const updatedUser = {
        ...JSON.parse(localStorage.getItem('user') || '{}'),
        displayName: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
        favoriteWorkshops: formData.favoriteWorkshops,
        photoURL,
      };
      localStorage.setItem('user', JSON.stringify(updatedUser));

      alert('Profile updated successfully!');
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 4 }}>
      <Box sx={{ maxWidth: 600, mx: 'auto', px: 2 }}>
        <Card elevation={3} sx={{ p: 3 }}>
          <CardContent>
            <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
              <Avatar
                sx={{ width: 96, height: 96, mb: 2 }}
                src={profilePic ? URL.createObjectURL(profilePic) : auth.currentUser?.photoURL}
                alt="Profile"
              >
                {formData.name?.charAt(0)?.toUpperCase() || 'U'}
              </Avatar>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                User Profile
              </Typography>
            </Box>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                fullWidth
                required
              />

              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                fullWidth
                required
                type="email"
                disabled
              />

              <TextField
                label="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                fullWidth
                type="tel"
              />

              <TextField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                fullWidth
                multiline
                rows={3}
              />

              <TextField
                label="Favorite Workshops"
                name="favoriteWorkshops"
                value={formData.favoriteWorkshops}
                onChange={handleInputChange}
                fullWidth
              />

              <Button
                variant="outlined"
                component="label"
                fullWidth
                sx={{ textTransform: 'none' }}
              >
                Upload Profile Picture
                <input
                  type="file"
                  hidden
                  onChange={handleFileInput}
                  accept="image/*"
                />
              </Button>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={loading}
                sx={{ textTransform: 'none' }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Edit Profile'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default EditProfile;
