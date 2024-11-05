import { Grid, Typography, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const TherapiesAndGames = () => (
    <Paper elevation={3} sx={{ p: 4, my: 2 }}>
        <Typography variant="h4" gutterBottom align='center'>
            Therapies And Games
        </Typography>
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid item xs={12} md={4}>
                <img src="https://img.freepik.com/premium-vector/mental-health-therapy-emotional-state-mentality-healthcare-medical-therapies-prevention-mental-problem-illustration-set_102902-1422.jpg" width={'100%'} height={'100%'} alt="" />
            </Grid>
            <Grid item xs={12} md={8} sx={{ px: 2,pt:2}}>
                <Typography paragraph>
                    Are you struggling with feelings of anxiety, anger, or depression?
                </Typography>
                <Typography paragraph>
                    Do you feel ill-equipped to deal with conflict, a life transition, or the challenges of personal and professional relationships? Is your mind full of worried thoughts of not being good enough or competent?
                </Typography>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <Link to={'/games'}>
                        <Button className='button' variant="outlined" sx={{ my:2 }}>Take Therapy</Button>
                    </Link>
                </div>
            </Grid>
        </Grid>
    </Paper>
);

export default TherapiesAndGames;