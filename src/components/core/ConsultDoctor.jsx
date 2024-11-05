import { useState, useEffect } from "react";
import { Grid, Typography, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
const ConsultDoctor = () => {
    const [doctors,setDoctors] = useState([]);

    useEffect(()=>{
        const fetchDoctors = async () =>{
            const doctorsCollection = collection(db, 'doctors');
            const doctorsSnapshot = await getDocs(doctorsCollection);
            const doctorsList = doctorsSnapshot.docs.map(doc => doc.data());
            setDoctors(doctorsList);
        };
        fetchDoctors();
    },[]);

    return (
        <div>
            <div style={{ backgroundColor: "#222222", padding: "10px 0" }}>
                <Typography variant="h6" color='white' textAlign={"center"} sx={{fontWeight:'bold'}}>
                    WELLNEST
                </Typography>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src="data:image/jpeg;base64,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" width={'10%'} alt="" />
                </div>
                <Typography variant="h3" color="white" textAlign={"center"} sx={{fontFamily:'Itim'}}>
                    Expert Doctors
                </Typography>
            </div>
            <Grid container justifyContent="center" spacing={4} sx={{ p: 4 }}>
            {doctors.map((doctor, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                <Card>
                    <CardMedia
                        component="img"
                        height="300"
                        image={doctor.img}
                        alt={doctor.name}
                    />
                    <CardContent style={{textAlign:'center'}}>
                    <Typography variant="h6">Dr. {doctor.name}</Typography>
                    <Typography variant="subtitle1">{doctor.specialty} {doctor.experience} yrs Experience</Typography>
                    <Typography variant="body2">{doctor.degree}</Typography>
                    <Typography variant="body2">{doctor.timings}</Typography>
                    <Typography variant="body2">{doctor.fee} INR</Typography>
                    </CardContent>
                    <CardActions sx={{display:'flex',justifyContent:'center'}}>
                    <Button variant="outlined" className="button">Consult</Button>
                    </CardActions>
                </Card>
                </Grid>
            ))}
            </Grid>
        </div>
    );
};

export default ConsultDoctor