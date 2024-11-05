import { Grid, Typography, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const BlogCover = () => (
    <Paper elevation={3} sx={{ p: 4, my: 2 }}>
        <Typography variant="h4" gutterBottom align='center'>
            Blogs
        </Typography>
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid item xs={12} md={8} sx={{ px: 2,pt:2}}>
                <Typography paragraph>
                    Finding the best depression treatment for you
                </Typography>
                <Typography paragraph>
                    When you’re depressed, it can feel like you’ll never get out from under a dark shadow. However, even the most severe depression is treatable. So, if your depression is keeping you from living the life you want to, don’t hesitate to seek help. From therapy to medication to healthy lifestyle changes, there are many different treatment options available.Of course, just as no two people are affected by depression in exactly the same way, neither is there a “one size fits all” treatment to cure depression. What works for one person might not work for another. By becoming as informed as possible, though, you can find the treatments...
                </Typography>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <Link to='/blogpage'><Button className='button' variant="outlined" sx={{ my:2 }}>Read Here</Button></Link>
                </div>
            </Grid>
            <Grid item xs={12} md={4}>
                <img src="https://ethico.com/wp-content/uploads/2024/08/shutterstock_1505014265-2-1024x601.jpg.webp" width={'100%'} height={'80%'} alt="" />
            </Grid>
        </Grid>
    </Paper>
);

export default BlogCover;