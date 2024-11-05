import { Grid, Typography, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Assessment = () => {
    const navigate = useNavigate();

    const handleTestClick = (testPath) => {
        const user = JSON.parse(localStorage.getItem('user'));
        
        if (user) {
            // User is logged in, navigate to the specified test
            navigate(testPath);
        } else {
            // User not logged in, navigate to login and pass the intended path
            navigate('/login', { state: { from: testPath } });
        }
    };

    return (
        <Paper elevation={3} sx={{ p: 4, my: 2 }}>
            <Typography variant="h4" gutterBottom align='center'>
                Assessment
            </Typography>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid item xs={12} md={8}>
                    <Typography paragraph>
                        When you’re going through a tough time it’s normal to feel down for a while, emotions like sadness and grief help make us human. But if you’re feeling sad or miserable most of the time over a long period of time, you might have depression.
                    </Typography>
                    <Typography paragraph>
                        Think about the last two weeks, rather than just today or yesterday. Take this self-test to help figure out whether you’re showing any of the warning signs of depression. This won’t give you a diagnosis but it will help you decide the next step.
                    </Typography>
                    <Button
                        variant="outlined"
                        className='button'
                        sx={{ mr: 2, my: 2 }}
                        onClick={() => handleTestClick('/depression-test')}
                    >
                        Depression Test
                    </Button>
                    <Button
                        variant="outlined"
                        className='button'
                        onClick={() => handleTestClick('/anxiety-test')}
                    >
                        Anxiety Test
                    </Button>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img
                        src="https://www.lakeb2b.com/list/wp-content/uploads/2021/04/1.jpg"
                        width={'100%'}
                        height={'100%'}
                        alt="Assessment Illustration"
                    />
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Assessment;