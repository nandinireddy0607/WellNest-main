import { Typography, Box, Grid, Button } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/system';
import { Link } from "react-router-dom";
import Footer from "../Footer";

const MainContent = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fcebec',
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
    paddingTop: '3%',
    paddingRight: '27%',
    paddingBottom: '3%',
    backgroundImage: `url('https://worktowellness.com/wp-content/uploads/2019/05/work-to-wellness-retum-to-work-icon.svg')`,
    backgroundSize: '35% 90%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      paddingRight: '5%',
      paddingLeft: '5%',
      backgroundSize: '70% 100%',
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

const Workshop = () => {
  return (
    <div>
        <div>
        <MainContent>
            <TextContent>
            <Typography variant="h6" fontWeight={'bold'} sx={{fontFamily:'Itim', pb:1, opacity:0.8}}>WORKSHOP</Typography>
            <Typography variant="h3" fontWeight={'bold'} sx={{opacity:0.8}}>For Fun</Typography>
            <Typography variant="body1" sx={{pt: 3, opacity:0.8}}>Sometimes (often), our people just need some fun. It’s hard (impossible) to be stressed while having fun. In these workshops, participants can expect to spend time feeling good and having fun… with one or two new concepts “accidentally” sticking with them. We turn concepts from our in-depth mental health workshops into games and exercises that melt stress (even create joy) so participants go back to work feeling recharged with renewed focus. This series is awesome for workplace mental health themed events and can be added onto corporate meetings to increase awareness of and interest in workplace mental health.</Typography>
            </TextContent>
        </MainContent>
        </div>
        <div style={{flexGrow: 1, mt: 4, padding: '7% 5% 5% 5%'}}>
            <Grid container spacing={2}>
            <Grid xs={12} md={6} sx={{p:3}}>
                <Link to={'/workshop-details'} className="hoverEffect"><Typography variant="h5" fontWeight={'bold'}>How to Prioritize Yourself: Goal-setting for improved mental health and productivity</Typography></Link>
                <Typography variant="body1" sx={{py:3, px:2}}>Without exciting goal-setting, our default becomes “survival” and “doing the same thing we did yesterday”. The result is a loss of morale and less excitement about our own lives… we stop showing up with initiative and new ideas. Many teams have goals, but very few are based on…</Typography>
            </Grid>
            <Grid xs={12} md={6} sx={{display:'flex',justifyContent:'center',m:'auto 0'}}>
                <div style={{flexDirection:'column'}}>
                    <Typography variant="h6"><span style={{fontWeight:'bold'}}>Category</span>  : <span>For Fun</span></Typography>
                    <Typography variant="h6"><span style={{fontWeight:'bold'}}>Type</span>  : <span>Half-day or virtual</span></Typography>
                    <Typography variant="h6"><span style={{fontWeight:'bold'}}>Audience</span>  : <span>Employees of all levels</span></Typography>
                    <div style={{display:'flex',justifyContent:'center', padding:'20px 0'}}>
                        <Link to={'/workshop-details'}><Button endIcon={<SendIcon />} size="large" variant="outlined" className="button">WORKSHOP DETAILS</Button></Link>
                    </div>
                </div>
            </Grid>
            </Grid>
        </div>
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

export default Workshop