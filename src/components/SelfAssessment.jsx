import { Grid, Typography, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SelfAssessment = () => {
    const navigate = useNavigate();

    const handleGetStartedClick = () => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (user) {
            // User is logged in, navigate to the self-assessment dashboard or page
            navigate('/self-assessment-dashboard');
        } else {
            // User not logged in, redirect to login page with the intended path
            navigate('/login', { state: { from: '/self-assessment-dashboard' } });
        }
    };

    return (
        <Paper elevation={3} sx={{ p: 4, my: 2 }}>
            <Typography variant="h4" gutterBottom align="center">
                Self Tracking and Assessment
            </Typography>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid item xs={12} md={4}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZNsu7Y-rlQKjD3iBiqMNaSEYQDkfEpPca7mVS02A41zboGffddjgOrem9SgGqn-5vU4&usqp=CAU"
                        width={'90%'}
                        height={'85%'}
                        alt="Self Tracking and Assessment Illustration"
                    />
                </Grid>
                <Grid item xs={12} md={8} sx={{ px: 2, pt: 2 }}>
                    <Typography paragraph>
                        A portal that gamifies stress/anxiety/depression management in an actionable manner to provide relief. It quantifies the difference in a user&apos;s actual and ideal stress/anxiety/depression level as credits to be spent on a prescribed set of activities before the day ends. By doing so, users inadvertently take actionable steps to deal with their condition.
                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            className="button"
                            variant="outlined"
                            sx={{ my: 2 }}
                            onClick={handleGetStartedClick}
                        >
                            Get Started
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default SelfAssessment;
