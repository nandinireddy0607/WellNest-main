import { Grid, Typography, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Doctors = () => {
    const navigate = useNavigate();

    const handleConsultClick = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        
        if (user) {
            navigate('/consult-doctor');
        } else {
            navigate('/login', { state: { from: '/consult-doctor' } });
        }
    };

    return (
        <Paper elevation={3} sx={{ p: 4, my: 2 }}>
            <Typography variant="h4" gutterBottom align="center">
                Expert Doctors
            </Typography>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid item xs={12} md={4}>
                    <img
                        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRMJxLS6aG5-3K4rgKJJH0ttb4pSocM_yh3wqVQP6iKxLK3qMAA"
                        style={{ marginTop: '20px', width: '100%', height: '75%' }}
                        alt="Expert Doctors"
                    />
                </Grid>
                <Grid item xs={12} md={8} sx={{ px: 2, pt: 2 }}>
                    <Typography paragraph>
                        Do you feel depressed, anxious, worried about relationship issues or suicidal? Do you have a question related to your own or someone else&apos;s mental health?
                    </Typography>
                    <Typography paragraph>
                        India&apos;s Best Online Therapy and Counselling Consultation Website. Soothe provides the best psychologists and counsellors in India. Our trained counsellors are qualified and are available day and night. We are here to help answer any questions you might have about mental health. Get Face-to-face Counselling Therapy Consultation. It is convenient, Affordable, and Private. Confidentiality is highly maintained. You can take up therapy as per your convenience without hampering your daily schedules. You can mutually fix the session with the therapist as well.
                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button 
                            className="button" 
                            variant="outlined" 
                            sx={{ my: 2 }} 
                            onClick={handleConsultClick}
                        >
                            Consult Doctor
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Doctors;
