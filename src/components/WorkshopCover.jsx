import { Grid, Typography, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const WorkshopCover = () => {
    const navigate = useNavigate();

    const handleGetStartedClick = ()=>{
        const user= JSON.parse(localStorage.getItem('user'));

        if(user){
            navigate('/workshops');
        }else{
            navigate('/login',{state: {from : '/workshops'}});
        }
    }

    return (
        <Paper elevation={3} sx={{ p: 4, my: 2 }}>
            <Typography variant="h4" gutterBottom align='center'>
                Upcoming Workshops
            </Typography>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid item xs={12} md={8} sx={{ px: 2,pt:2}}>
                    <Typography paragraph>
                    Sometimes (often), our people just need some fun. It’s hard (impossible) to be stressed while having fun. In these workshops, participants can expect to spend time feeling good and having fun… with one or two new concepts “accidentally” sticking with them. 
                    </Typography>
                    <Typography paragraph>
                    We turn concepts from our in-depth mental health workshops into games and exercises that melt stress (even create joy) so participants go back to work feeling recharged with renewed focus. This series is awesome for workplace mental health themed events and can be added onto corporate meetings to increase awareness of and interest in workplace mental health.
                    </Typography>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <Button className='button' variant="outlined" sx={{ my:2 }} onClick={handleGetStartedClick}>Track</Button>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img src="https://cdn.prod.website-files.com/5ffcfb4c465d785f205b6017/638683d4d01083346e13496d_mh-header.png" width={'95%'} height={'80%'} alt="" />
                </Grid>
            </Grid>
        </Paper>
    );
};

export default WorkshopCover;