import { db } from '../firebaseConfig'
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { Button, Grid2, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Check = () => {
  const [arr, setArr] = useState([]);

  const myfun = async() => {
    let fetched_data=[];
    const querySnapshot = await getDocs(collection(db, "check"));
    querySnapshot.forEach((doc) => {
      fetched_data.push({...doc.data(),id: doc.id});
    });
    setArr(fetched_data);
  }

  useEffect(()=>{
    myfun();
  },[]);

  return (
    <div>
      <Link to='/contact-us'><Button variant='contained' size='large' style={{position: 'fixed', top: '50%', right:'-52px',transform: 'rotate(-90deg)'}}>Contact Us</Button></Link>
      <img src="https://cdn.sanity.io/images/0vv8moc6/oncnurse/4c3b90dcfaeae6723ed63f0d85e0a70618a3a371-5163x2905.jpg?fit=crop&auto=format" width={'100%'} alt="" />
      <Grid2 className="Home__page" container spacing={3} justifyContent="center" style={{ padding: '20px' }}>
      {arr.map((category) => (
        <Grid2 item xs={12} sm={6} md={4} key={category.id}>
          <Card className='Hover__item' sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height="250"
              image={category.img} // assuming 'img' is the URL of the image in Firebase
              alt={category.title}
            />
            <CardContent style={{backgroundColor:'#f0f0f0'}}>
              <Typography gutterBottom variant="h5" component="div" align="center">
                {category.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center" sx={{px:'15px'}}>
                {category.desc}
              </Typography>
              <Link to={category.ref}>
              <Button 
                className='button'
                variant="outlined"  
                fullWidth 
                style={{ marginTop: '10px' }}
              >
                Explore
              </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid2>
        ))}
      </Grid2>
      <div className='Footer-img' style={{backgroundImage:'url("https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjIxMWJhdGNoMTEtZmltZnVsLTk0LW1lbnRhaGVhbHRoXzIuanBn.jpg")'}}>
        <div className="Footer-img-content" style={{padding: '30px'}}>
          <Typography variant="h3" color='#212529' component="h1" align="center" sx={{margin: '30px'}}>Get in touch</Typography>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '30px' }}>
            <Link to={'/contact-us'}><Button className='button'>Contact Us</Button></Link>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Check