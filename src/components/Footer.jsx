import { Box, Grid2, Typography, useMediaQuery } from '@mui/material';
import { Twitter, Facebook, Email, Instagram } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles';
const Footer = () => {
  const theme = useTheme();
  const smallscreens = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
    {!smallscreens && <Box sx={{ backgroundColor: '#6d9fd1', padding: '20px 0 0 0' }}>
      <Grid2 container spacing={4} sx={{paddingX:'5rem'}} justifyContent="space-between">
        {/* Menu Section */}
        <Grid2 item xs={12} sm={3}>
          <Typography variant="h4" color="textPrimary" gutterBottom>
            Menu
          </Typography>
          <Link to="/home" style={{textDecoration:'none'}}><Typography variant='h6' color="black" sx={{ '&:hover': { textDecoration: 'underline' } }}>Home</Typography></Link>
          <Link to="/blogs" style={{textDecoration:'none'}}><Typography variant='h6' color="black" sx={{ '&:hover': { textDecoration: 'underline' } }}>Blog</Typography></Link>
          <Link to="/therapies" style={{textDecoration:'none'}}><Typography variant='h6' color="black" sx={{ '&:hover': { textDecoration: 'underline' } }}>Games</Typography></Link>
          <Link to="/doctors" style={{textDecoration:'none'}}><Typography variant='h6' color="black" sx={{ '&:hover': { textDecoration: 'underline' } }}>Doctors</Typography></Link>
        </Grid2>

        {/* Follow Us Section */}
        <Grid2 item xs={12} sm={3}>
          <Typography variant="h4" color="textPrimary" gutterBottom>
            Follow us
          </Typography>
          <Box display="flex" gap={2}>
            <Twitter />
            <Facebook />
            <Email />
            <Instagram />
          </Box>
        </Grid2>

        {/* Signed Up Section */}
        <Grid2 item xs={12} sm={3}>
          <Typography variant="h4" color="textPrimary" gutterBottom>
            Signed up?
          </Typography>
          <Link to="/login" style={{textDecoration:'none'}}><Typography variant='h6' color="black" sx={{ '&:hover': { textDecoration: 'underline' } }}>Login</Typography></Link>
        </Grid2>

        {/* Support Section */}
        <Grid2 item xs={12} sm={3}>
          <Typography variant="h4" color="textPrimary" gutterBottom>
            Support
          </Typography>
          <Typography variant='h6' color="textPrimary">help@WELLNEST.com</Typography>
          <Typography variant='h6' color="textPrimary">(011)12345678</Typography>
        </Grid2>
      </Grid2>

      {/* Bottom Section */}
      <Box sx={{ backgroundColor: '#046bd1', padding: '10px 0', mt: 4 }}>
        <Grid2 container justifyContent="space-around" alignItems="center">
          <Grid2 item>
            <Typography color="textPrimary">Copyright © WELLNEST | All right reserved.</Typography>
          </Grid2>
          <Grid2 item>
            <Link href="#" color="inherit" underline="hover">Terms of Service</Link>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  }
    {smallscreens && <Box sx={{ backgroundColor: '#6d9fd1', padding: '20px 0 0 0' }}>
    <Grid2 item xs={12} sm={3} sx={{display:'flex',flexDirection:'column'}}>
    <Typography variant="h4" color="textPrimary" gutterBottom textAlign={'center'}>
      Follow us
    </Typography>
    <Box display="flex" justifyContent={'center'} gap={2}>
      <Twitter />
      <Facebook />
      <Email />
      <Instagram />
    </Box>
  </Grid2>
  <Box sx={{ backgroundColor: '#046bd1', padding: '10px 0', mt: 4 }}>
        <Grid2 container justifyContent="space-around" alignItems="center">
          <Grid2 item>
            <Typography color="textPrimary">Copyright © WELLNEST | All right reserved.</Typography>
          </Grid2>
          <Grid2 item>
            <Link href="#" color="inherit" underline="hover">Terms of Service</Link>
          </Grid2>
        </Grid2>
      </Box>
  </Box>}
  </>
  );
};

export default Footer;
