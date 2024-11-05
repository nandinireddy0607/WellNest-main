import { useState } from "react";
import { TextField, Button, Box, Typography, MenuItem, FormControl, FormControlLabel, Checkbox, Grid } from "@mui/material"
import { styled } from '@mui/system';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import { Link } from "react-router-dom";
import Footer from "../Footer";

const MainContent = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '3%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      padding: theme.spacing(2),
    },
  }));
  
  const TextContent = styled(Box)(({ theme }) => ({
    flex: 1,
    padding: '1em',
    paddingTop: '2%',
    paddingRight: '27%',
    paddingBottom: '3%',
    backgroundImage: `url('chat-characters.svg')`,
    backgroundSize: '35% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      paddingRight: '5%',
      paddingLeft: '5%',
      backgroundSize: '70% 90%',
      backgroundPosition: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      paddingRight: '5%',
      '&::before': {
        content: '""',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 0, // Adjust as needed
      },
    },
  }));


const BookWorkshop = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        company: '',
        email: '',
        requestInfo: '',
        categories: [],
        additionalMessage: '',
      });
    
      
      const workshopCategories = [
        'Performance Without Burnout',
        'Work-life Balance',
        'For Fun',
      ];
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleCategoryChange = (e) => {
        const { value } = e.target;
        if (formData.categories.includes(value)) {
          setFormData({ ...formData, categories: formData.categories.filter(item => item !== value) });
        } else {
          setFormData({ ...formData, categories: [...formData.categories, value] });
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await addDoc(collection(db, 'workshop-registrations'), formData);
          await fetch('https://wellnest-backend.onrender.com/send-registration-confirmation', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: formData.email,
              fullName: formData.fullName,
            }),
          });
          alert("Form submitted successfully!");
          setFormData({
            fullName: '',
            company: '',
            email: '',
            requestInfo: '',
            categories: [],
            additionalMessage: '',
          });
        } catch (error) {
          console.error("Error submitting form: ", error);
          alert("There was an error submitting the form.");
        }
      };
  return (
    <div>
        <MainContent>
            <TextContent>
            <div style={{backgroundColor:'rgba(230, 245, 252, 0.5)', padding:'15px 0 10px 25px', borderRadius: 5}}>
                <Typography variant="h3" fontWeight={'bold'} sx={{opacity:0.8,fontSize: {xs: '1.8rem',sm: '2.5rem', md: '3rem'}}}>Book a Workshop</Typography>
                <Typography variant="h4" sx={{pt: 3,fontSize: { xs: '1.3rem', sm: '1.8rem', md: '2.3rem'}}}>Show them you care and give them the gift of new tools to manage unavoidable stress. Book a workshop today.</Typography>
                <Typography variant="body1" sx={{pt: 3, opacity:0.8}}>From workshops, consulting, to keynote speakers, we are committed to creating a supportive and inclusive workplace. Just as each workplace is unique, all our workshops and consulting programs are specialized. Fill out the form below to speak with us about the best needs for your workplace.</Typography>
            </div>
            </TextContent>
        </MainContent>
        <div style={{backgroundColor:'rgb(240, 240, 240)'}}>
            <Grid container sx={{py:{xs:3,md:5},px:{xs:5,sm:5,md:10} }}>
                <Grid xs={12} sm={6} sx={{backgroundColor:'white',p:2,borderRadius:{xs:'25px 25px 0 0',sm:'25px 0 0 25px'}}}>
                    <Typography variant="h4" sx={{fontSize: {xs: '1.3rem',sm: '1.5rem', md: '2rem'}}}>What happens next?</Typography>
                    <Typography variant="h1" sx={{opacity:0.8,fontSize: {xs: '1.3rem',sm: '1.7rem', md: '2rem'}, fontWeight:'bold',py:1}}>Step 1</Typography>
                    <Typography variant="body1" sx={{opacity:0.8}}>Fill out your contact information into the below form. Please select the service offerings (Workshops and/or Consulting) you are interested in.</Typography>
                </Grid>
                <Grid xs={12} sm={6} sx={{backgroundColor:'white',p:2,borderRadius:{xs:'0 0 25px 25px',sm:'0 25px 25px 0'}}}>
                    <Typography variant="h1" sx={{opacity:0.8,fontSize: {xs: '1.3rem',sm: '1.7rem', md: '2rem'}, fontWeight:'bold',pt:{xs:'0px',sm:'3rem'},py:1}}>Step 2</Typography>
                    <Typography variant="body1" sx={{opacity:0.8}}>We will get back to you within the next 2 business days with detailed information outlining the best solution for you workplace.</Typography>
                </Grid>
            </Grid>
        </div>
        <Grid container spacing={4} sx={{ my: { sm: 5, md: 10 } }}>
            <Grid item xs={12} md={8}>
                <Box sx={{ maxWidth: 700, mx: 'auto', p: 2 }}>
                    <Typography variant="h4" gutterBottom>Contact Form</Typography>
                    <Box display="flex" alignItems="stretch">
                                <Box 
                                sx={{ 
                                    width: '10px', 
                                    bgcolor: 'primary.main',
                                    mr: 2,
                                }} 
                                />
                    <form onSubmit={handleSubmit}>
                        <TextField
                        label="Full Name"
                        variant="outlined"
                        fullWidth
                        required
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        sx={{ mb: 2 }}
                        />
                        <TextField
                        label="Company"
                        variant="outlined"
                        fullWidth
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        sx={{ mb: 2 }}
                        />
                        <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        required
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        sx={{ mb: 2 }}
                        />
                        <TextField
                        select
                        label="Request more info for..."
                        fullWidth
                        required
                        name="requestInfo"
                        value={formData.requestInfo}
                        onChange={handleChange}
                        sx={{ mb: 2 }}
                        >
                        <MenuItem value="Free Workshops">Free Workshops</MenuItem>
                        <MenuItem value="Paid Workshops">Paid Workshops</MenuItem>
                        <MenuItem value="Corporate Events">Corporate Events</MenuItem>
                        </TextField>
                        <FormControl component="fieldset" sx={{ mb: 2 }}>
                        <Typography variant="subtitle1">Workshop Categories</Typography>
                        {workshopCategories.map((category) => (
                            <FormControlLabel
                            key={category}
                            control={
                                <Checkbox
                                checked={formData.categories.includes(category)}
                                onChange={handleCategoryChange}
                                value={category}
                                />
                            }
                            label={category}
                            />
                        ))}
                        </FormControl>
                        <TextField
                        label="Additional Message"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        name="additionalMessage"
                        value={formData.additionalMessage}
                        onChange={handleChange}
                        sx={{ mb: 2 }}
                        />
                        <Button type="submit" variant="contained" sx={{px:5}} className="button-hover-reverse">
                        Submit
                        </Button>
                    </form>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} md={4}>
                <Box 
                sx={{ 
                    padding: '20px', 
                    backgroundColor: 'rgb(240,240,240)', 
                    borderRadius: 2,
                    position: 'sticky',
                    top: 75,
                    maxHeight: 'fit-content',
                    ml:{xs:4},
                    mr:{xs:4}
                }}
                >
                <Typography variant="h5" mb={2} fontWeight="bold">
                    Direct Contact Info
                </Typography>
                <Typography>
                    If you would like to talk about a session that might be right for you, 
                    feel free to call us for a complementary consultation
                </Typography>
                <Typography variant="subtitle2" fontWeight="bold" mt={2}>
                    &#x2022; wellnest@worktowellness.com
                </Typography>
                </Box>
            </Grid>
        </Grid>
        <div style={{backgroundColor:'#f0f0f0'}}>
        <Box sx={{ flexGrow: 1, mt: 4, padding: '5% 7% 5% 10%'}}>
            <Grid container spacing={2}>
            <Grid item xs={12} md={4} sx={{display:'flex', justifyContent:{ xs: 'center', md: 'flex-start' } }}>
                <div style={{display:'flex',justifyContent:'center',height:'250px',width:'250px', borderRadius: '50%', backgroundColor:'white'}}>
                <img
                src="chat-characters.svg"
                width={'100%'}
                alt="Assessment Illustration"
                />
                </div>
            </Grid>
            <Grid item xs={12} md={8} sx={{display:'flex', flexDirection:'column'}}>
            <Typography variant="h4" gutterBottom sx={{fontWeight:'bold', textAlign:{xs:'center',md:'start'}}}>
                    Ready to get started?
            </Typography>
                <Typography variant="h4" sx={{pt:2,textAlign:{xs:'center',md:'start'}}}>
                    Let’s make your workplace a healthier place to be.
                </Typography>
                <Box sx={{marginTop: '35px',display: 'flex',justifyContent: { xs: 'center', lg: 'flex-start' }}}>
                    <Link to={'/book-a-workshop'}><Button size="large" variant="contained" sx={{backgroundColor:'#48C5B6', borderColor:'#48C5B6'}} className="connect-button">
                        CONNECT WITH US
                    </Button></Link>
                </Box>
            </Grid>
            </Grid>
        </Box>
        </div>
        <Footer />
    </div>
  )
}

export default BookWorkshop