import { Box, Container, useMediaQuery } from '@mui/material';
import SideMenu from './SideMenu';
import TherapiesAndGames from './TherapiesAndGames';
import Assessment from './Assessment';
import BlogCover from './BlogCover';
import Doctors from './Doctors';
import Medication from './WorkshopCover';
import SelfAssessment from './SelfAssessment';
import { useTheme } from '@mui/material/styles';
import Footer from './Footer';

const MainLayout = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return(
    <>
    <Box sx={{ display: 'flex' }}>
        {!isSmallScreen && <SideMenu />}
        <Box
            component="main"
            sx={{
                mx: 'auto',
                bgcolor: 'background.default',
                p: 3,
            }}
        >
            <Container maxWidth="md">
                <Assessment />
                <TherapiesAndGames />
                <BlogCover />
                <Doctors />
                <Medication />
                <SelfAssessment />
            </Container>
        </Box>
    </Box>
    {isSmallScreen && <Footer/>}
    </>
);
};

const HomePage = () => (
    <MainLayout />
);

export default HomePage;
