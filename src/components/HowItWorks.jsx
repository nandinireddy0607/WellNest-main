import { Box, Typography, Grid, useMediaQuery, Alert } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import Footer from './Footer';
// Custom styles using MUI's styled function
const MainContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#8ed1fc',
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
  paddingTop: '6%',
  paddingRight: '45%',
  paddingBottom: '3%',
  backgroundImage: `url('/output-onlinepngtools.png')`,
  backgroundSize: '55% 100%',
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
    // backgroundImage: 'none',
    '&::before': {
      content: '""',
      // backgroundImage: `url('/howitworks.png')`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
      // opacity: 0.5, // Adjust opacity for small screens
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 0, // Adjust as needed
    },
  },
}));

const HowItWorks = () => {
  const theme= useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
    <div style={{ color: '#444' }}>
      <MainContent>
        <TextContent>
          <div style={{backgroundColor:'rgba(230, 245, 252, 0.5)', padding:'15px 0 0 25px', borderRadius: 5}}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: 'Itim',
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 'bold',
              zIndex: 1, // Ensure it appears above the background
            }}
          >
            Mental health support created by world-leading healthcare professionals
          </Typography>
          <Typography
            variant="body1"
            sx={{
              paddingTop: '5%',
              paddingBottom: '5%',
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
              paddingRight: { xs: '5%', sm: '10%' },
              color: '#5A6E7F',
              zIndex: 1,
            }}
          >
            Together, we’ll guide you through life’s challenges and help you take care of yourself. Imagine the possibilities.
          </Typography>
          </div>
        </TextContent>
      </MainContent>
      
      <Box sx={{ flexGrow: 1, mt: 4, padding: '7% 7% 5% 10%' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7} sx={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
          <Typography variant="h3" gutterBottom sx={{fontFamily: 'Itim',fontWeight:'bold'}}>
            The best tools available to improve your mind
          </Typography>
            <Typography paragraph sx={{pt:2}}>
            Teaming up with our friends at Priory Healthcare, world leaders in mental health, we have created interactive tools and techniques, using cognitive behavioural therapy (CBT), customised for digital use.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <img
              src="https://www.mypossibleself.com/wp-content/uploads/2021/03/howitworks_best_tools@2x-430x269.png"
              width={'100%'}
              height={'100%'}
              alt="Assessment Illustration"
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, mt: 4, padding: '0% 7% 0% 10%' }}>
        <Grid container spacing={2}>
          {!isSmallScreen && <Grid item xs={12} md={5}>
            <img
              src="https://www.mypossibleself.com/wp-content/uploads/2021/03/howitworks_CBT@2x-430x269.png"
              width={'100%'}
              height={'100%'}
              alt="Assessment Illustration"
            />
          </Grid>}
          <Grid item xs={12} md={7} sx={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
          <Typography variant="h3" gutterBottom sx={{fontFamily: 'Itim',fontWeight:'bold'}}>
              What is CBT?
          </Typography>
            <Typography paragraph sx={{pt:2}}>
              Cognitive behavioural therapy (CBT) can help you make sense of overwhelming problems by breaking them down into smaller parts.
            </Typography>
            <Typography paragraph>
            In CBT, problems are broken down into five main areas – situations, thoughts, emotions, physical feelings and actions.
            </Typography>
          </Grid>
          <Grid container spacing={2}>
          {isSmallScreen && <Grid item xs={12} md={5}>
            <img
              src="https://www.mypossibleself.com/wp-content/uploads/2021/03/howitworks_CBT@2x-430x269.png"
              width={'100%'}
              height={'100%'}
              alt="Assessment Illustration"
            />
          </Grid>}
        </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, mt: 4, padding: '5% 7% 5% 10%' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7} sx={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
          <Typography variant="h3" gutterBottom sx={{fontFamily: 'Itim',fontWeight:'bold'}}>
              In-the-moment activities
          </Typography>
            <Typography paragraph sx={{pt:2}}>
            Tools you can use every day to guide you through your life journey – identify habits you want to change, manage anxiety, tackle depression, improve sleep or reduce stress.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <img
              src="https://www.mypossibleself.com/wp-content/uploads/2021/03/howitworks_activities@2x-1-430x269.png"
              width={'100%'}
              height={'100%'}
              alt="Assessment Illustration"
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, mt: 4, padding: '0% 7% 0% 10%' }}>
        <Grid container spacing={2}>
          {!isSmallScreen && <Grid item xs={12} md={5}>
            <img
              src="https://www.mypossibleself.com/wp-content/uploads/2021/03/howitworks_activities@2x-430x269.png"
              width={'100%'}
              height={'100%'}
              alt="Assessment Illustration"
            />
          </Grid>}
          <Grid item xs={12} md={7} sx={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
          <Typography variant="h3" gutterBottom sx={{fontFamily: 'Itim',fontWeight:'bold'}}>
            Tools you can use every day
          </Typography>
          <Typography paragraph sx={{pt:2}}>
            Learn to reframe negative thoughts into positive thoughts. Track activities you enjoy. Identify areas causing anxiety, and become aware of the thinking traps you fall into. Get insights to help you understand yourself better, and do more of the things you like.
          </Typography>
          </Grid>
          <Grid container spacing={2}>
          {isSmallScreen && <Grid item xs={12} md={5}>
            <img
              src="https://www.mypossibleself.com/wp-content/uploads/2021/03/howitworks_activities@2x-430x269.png"
              width={'100%'}
              height={'100%'}
              alt="Assessment Illustration"
            />
          </Grid>}
        </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, mt: 4, padding: '5% 7% 5% 10%' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7} sx={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
          <Typography variant="h3" gutterBottom sx={{fontFamily: 'Itim',fontWeight:'bold'}}>
            Take a moment
          </Typography>
            <Typography paragraph sx={{pt:2}}>
            Help calm your busy mind with relaxation exercises, guided meditations, yoga, massage and grounding exercises. Get into good sleeping habits to improve your wellbeing.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <img
              src="https://www.mypossibleself.com/wp-content/uploads/2021/03/howitworks_moment@2x-430x269.png"
              width={'100%'}
              height={'100%'}
              alt="Assessment Illustration"
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, mt: 4, padding: '0% 7% 5% 10%' }}>
        <Grid container spacing={2}>
          {!isSmallScreen && <Grid item xs={12} md={5}>
            <img
              src="https://www.mypossibleself.com/wp-content/uploads/2021/03/howitworks_changes@2x-430x269.png"
              width={'100%'}
              height={'100%'}
              alt="Assessment Illustration"
            />
          </Grid>}
          <Grid item xs={12} md={7} sx={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
          <Typography variant="h3" gutterBottom sx={{fontFamily: 'Itim',fontWeight:'bold'}}>
            Make small behavioural changes
          </Typography>
          <Typography paragraph sx={{pt:2}}>
          There’s solid scientific evidence that the toolkits actually work. The more time you spend using them, the better your results will be.
          </Typography>
          <Typography paragraph>
            In short, the more you put in, the more you’ll get out! We’ll be there every step of the way.
          </Typography>
          </Grid>
          <Grid container spacing={2}>
          {isSmallScreen && <Grid item xs={12} md={5}>
            <img
              src="https://www.mypossibleself.com/wp-content/uploads/2021/03/howitworks_changes@2x-430x269.png"
              width={'100%'}
              height={'100%'}
              alt="Assessment Illustration"
            />
          </Grid>}
        </Grid>
        </Grid>
      </Box>
      <div>
        <Alert icon={false} severity="info" sx={{p:'25px',m:'7% 10%'}}>
          <Typography variant='h4' color='primary' textAlign={'center'} sx={{pb:'20px', fontFamily:'Itim'}}>Did you know?</Typography>
          <Typography textAlign={'center'}>One in four people experience mental health issues each year. 792 million people are affected by mental health issues worldwide. This means that you are not alone!</Typography>
        </Alert>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default HowItWorks;
