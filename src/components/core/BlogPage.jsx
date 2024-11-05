import { useState, useEffect } from 'react';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from "firebase/firestore";
import { Card, CardContent, CardMedia, Typography, Grid, Box, Divider, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BlogPage = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [mainBlog, setMainBlog] = useState(null);
  const handleCreateClick = (testPath) => {
        const user = JSON.parse(localStorage.getItem('user'));
        
        if (user) {
            // User is logged in, navigate to the specified test
            navigate(testPath);
        } else {
            // User not logged in, navigate to login and pass the intended path
            navigate('/login', { state: { from: testPath } });
        }
    };
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const dbRef = collection(db, 'blogs');
        const querySnapshot = await getDocs(dbRef);
        const blogsArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setBlogs(blogsArray);
        setMainBlog(blogsArray[0]);
      } catch (error) {
        console.error("Error fetching blogs: ", error);
      }
    };

    fetchBlogs();
  }, []);

  const handleRecentPostClick = (blog) => {
    setMainBlog(blog);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' }, // Stack column on mobile, row on larger screens
      backgroundColor: '#6d9fd1',
      padding: 3,
    }}>
      <Box sx={{
        flex: 2,
        mr: { sm: 5, xs: 0 }, // Add right margin on larger screens
        mb: { xs: 3, sm: 0 }  // Add bottom margin for spacing on mobile
      }}>
        {mainBlog && (
          <Card sx={{ borderRadius: 2 }}>
            <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
              <Typography variant="h3" textAlign={'center'} component="h2" gutterBottom>
                {mainBlog.title}
              </Typography>
              <Typography variant="h5" color="textSecondary" gutterBottom>
                Author - {mainBlog.author}
              </Typography>
              <CardMedia
                component="img"
                height={"100%"}
                width={"100%"}
                image={mainBlog.image}
                alt="Main Blog Image"
              />
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1" color="textPrimary">
                {Array.isArray(mainBlog.content) ? (
                  mainBlog.content.map((paragraph, index) => (
                    <Typography key={index} paragraph>
                      {paragraph}
                    </Typography>
                  ))
                ) : (
                  <Typography>{mainBlog.content}</Typography>
                )}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Box>

      <Box sx={{
        flex: 1,
        mt: { xs: 2, sm: 0 } // Adjust margin for spacing on mobile
      }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Recent Posts
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          {blogs.map((blog) => (
            <Grid item xs={12} key={blog.id}>
              <Card
                sx={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: { xs: 'column', sm: 'row' },
                  padding: { xs: 1, sm: 0 },
                }}
                onClick={() => handleRecentPostClick(blog)}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: '100%', sm: 80 },
                    height: { xs: 120, sm: 80 },
                    borderRadius: 1,
                    ml: { sm: 1, xs: 0 },
                  }}
                  image={blog.image}
                  alt={blog.title}
                />
                <CardContent sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                  <Typography variant="h6" component="h3">
                    {blog.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div style={{display:'flex',justifyContent:'center',margin:'25px'}}>
            <Button variant='contained' size='large' onClick={() => handleCreateClick('/create-blogpage')}>Create a Blog</Button>
        </div>
      </Box>
    </Box>
  );
};

export default BlogPage;
