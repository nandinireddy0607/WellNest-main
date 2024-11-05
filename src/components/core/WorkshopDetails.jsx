import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Footer from "../Footer";
const WorkshopDetails = () => {
  return (
    <div>
        <div>
            <Box sx={{backgroundColor:'#8ed1fc', pt: {xs:5,md:10},pl: {xs:5,md:10},pb:7, pr:{xs:10,md:40}}}>
                <Typography variant="h6" fontWeight={'bold'} sx={{fontFamily:'Itim', pb:1, opacity:0.8}}>WORKSHOP - For Fun</Typography>
                <Typography variant="h3" fontWeight={'bold'} sx={{fontFamily:'Itim', opacity:0.8,fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },}}>How to Prioritize Yourself: Goal-setting for improved mental health and productivity</Typography>
                <Typography variant="body1" sx={{pt: 3,fontSize: '1rem',color: '#4A4A4A',
                            width: '95%',
                            lineHeight: 1.6,}}>Sometimes (often), our people just need some fun. It’s hard (impossible) to be stressed while having fun. In these workshops, participants can expect to spend time feeling good and having fun… with one or two new concepts “accidentally” sticking with them. We turn concepts from our in-depth mental health workshops into games and exercises that melt stress (even create joy) so participants go back to work feeling recharged with renewed focus. This series is awesome for workplace mental health themed events and can be added onto corporate meetings to increase awareness of and interest in workplace mental health.</Typography>
            </Box>
            <Box sx={{ padding: { xs: '2%', md: '5%' } }}>
            <Grid container spacing={4}>
                {/* Left Column */}
                <Grid item xs={12} md={8}>
                {/* Type */}
                <Box mb={5}>
                    <Typography 
                        variant="h5" 
                        mb={2} 
                        fontWeight="bold"
                    >
                        Type
                    </Typography>
                    
                    <Box display="flex" alignItems="stretch">
                        <Box 
                        sx={{ 
                            width: '4px', 
                            bgcolor: '#8ed1fc',
                            mr: 2
                        }} 
                        />
                        <Typography 
                        variant="body1"
                        sx={{ 
                            color: '#4A4A4A',
                            width: '85%',
                            lineHeight: 1.6,
                        }}
                        >
                        Half-day or virtual
                        </Typography>
                    </Box>
                </Box>

                {/* Audience */}
                <Box mb={5}>
                    <Typography 
                        variant="h5" 
                        mb={2} 
                        fontWeight="bold"
                    >
                        Audience
                    </Typography>
                    
                    <Box display="flex" alignItems="stretch">
                        <Box 
                        sx={{ 
                            width: '4px', 
                            bgcolor: '#8ed1fc',
                            mr: 2
                        }} 
                        />
                        <Typography 
                        variant="body1"
                        sx={{ 
                            color: '#4A4A4A',
                            width: '85%',
                            lineHeight: 1.6,
                        }}
                        >
                        Employees of all levels
                        </Typography>
                    </Box>
                </Box>

                {/* Industry */}
                <Box mb={5}>
                    <Typography 
                        variant="h5" 
                        mb={2} 
                        fontWeight="bold"
                    >
                        Industry
                    </Typography>
                    
                    <Box display="flex" alignItems="stretch">
                        <Box 
                        sx={{ 
                            width: '4px', 
                            bgcolor: '#8ed1fc',
                            mr: 2
                        }} 
                        />
                        <Typography 
                        variant="body1"
                        sx={{ 
                            color: '#4A4A4A',
                            width: '85%',
                            lineHeight: 1.6,
                        }}
                        >
                        Any industries including manufacturing, government, education, healthcare, engineering & sciences, technology, not-for-profit, financial (banking and insurance).
                        </Typography>
                    </Box>
                </Box>

                {/* Description */}
                <Box mb={5}>
                    <Typography 
                        variant="h5" 
                        mb={2} 
                        fontWeight="bold"
                    >
                        Description
                    </Typography>
                    
                    <Box display="flex" alignItems="stretch">
                        <Box 
                        sx={{ 
                            width: '4px', 
                            bgcolor: '#8ed1fc',
                            mr: 2
                        }} 
                        />
                        <Typography 
                        variant="body1"
                        sx={{ 
                            color: '#4A4A4A',
                            width: '85%',
                            lineHeight: 1.6,
                        }}
                        >
                        This workshop gives participants a chance to flex and strengthen their creativity muscle and 
                        to apply it to inspiring goal-setting techniques that will improve resilience and help them get 
                        excited about their life (and work) again. For teams who are not suffering from low morale, 
                        this creativity translates into better problem-solving, an increased desire to take on new 
                        challenges, and protection from burnout. In high-performance cultures, &quot;forcing&quot; ourselves to 
                        work harder can work well in the short term, but creates stress. Creating inspiration by tapping 
                        into intrinsic desire and mapping those onto the task at hand can help create deeper initiative, 
                        and less stress while still boosting productivity.
                        </Typography>
                    </Box>
                </Box>

                {/* Learn */}
                <Box mb={5}>
                    <Typography 
                        variant="h5" 
                        mb={2} 
                        fontWeight="bold"
                    >
                        What will you Learn?
                    </Typography>
                    
                    <Box display="flex" alignItems="stretch">
                        <Box 
                        sx={{ 
                            width: '4px', 
                            bgcolor: '#8ed1fc',
                            mr: 2
                        }} 
                        />
                        <Typography 
                        variant="body1"
                        sx={{ 
                            color: '#4A4A4A',
                            width: '85%',
                            lineHeight: 1.6,
                        }}
                        >
                        &#x2022; When to set goals <br />
                        &#x2022; The difference between long-term and short-term goals <br />
                        &#x2022; The difference between intrinsic and extrinsically motivated goals <br />
                        &#x2022; How to create goals that are exciting and boost resilience <br />
                        &#x2022; A simple goal-setting personal audit tool <br />
                        </Typography>
                    </Box>
                </Box>

                {/* Course */}
                <Box mb={7}>
                    <Typography 
                        variant="h5" 
                        mb={2} 
                        fontWeight="bold"
                    >
                        Who Should Attend this Course?
                    </Typography>
                    
                    <Box display="flex" alignItems="stretch">
                        <Box 
                        sx={{ 
                            width: '4px', 
                            bgcolor: '#8ed1fc',
                            mr: 2
                        }} 
                        />
                        <Typography 
                        variant="body1"
                        sx={{ 
                            color: '#4A4A4A',
                            width: '85%',
                            lineHeight: 1.6,
                        }}
                        >
                        This is great for teams experiencing low morale and/or for teams that tend to be performance-driven with high levels of burnout.
                        </Typography>
                    </Box>
                </Box>

                {/* Interested Box */}
                <Box sx={{bgcolor: '#8ed1fc',border: 'solid #1976d2 5px',p:{xs:3,md:5}}}>
                    <Typography variant="h5" sx={{fontWeight:'bold'}}>Interested in booking &apos;How to Prioritize Yourself: Goal-setting for improved mental health and productivity&apos;?</Typography>
                    <Typography variant="h5" sx={{color: '#4A4A4A',width: '95%',lineHeight: 1.6, py:3}}>Contact us today for more details.</Typography>
                    <Link to={'/book-a-workshop'}><Button size="large" variant="contained" className="button-hover-reverse">
                        CONNECT WITH US
                    </Button></Link>
                </Box>
                </Grid>

                {/* Right Column (Testimonials) */}
                <Grid item xs={12} md={4}>
                <Typography variant="h5" mb={2} fontWeight="bold">Testimonials</Typography>
                <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#8ed1fc', borderRadius: 2, mt: 2 }}>
                    <Box display="flex" alignItems="center" mb={2}>
                    <FormatQuoteIcon sx={{ color: 'primary.main', fontSize: '5rem', transform: 'rotate(180deg)' }} />
                    </Box>
                    <Typography>
                    This workshop was such a fresh take on goal-setting. I’ve attended lots of goal-setting workshops; this was really well conducted and a totally different approach.
                    </Typography>
                    <Typography variant="subtitle2" fontWeight="bold" mt={2} color="textSecondary">
                    — PARTICIPANT
                    </Typography>
                </Paper>
                </Grid>
            </Grid>
            </Box>
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

export default WorkshopDetails