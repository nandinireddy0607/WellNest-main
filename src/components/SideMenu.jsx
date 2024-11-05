import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import AssessmentIcon from '@mui/icons-material/Assessment';
import GamesIcon from '@mui/icons-material/Games';
import BookIcon from '@mui/icons-material/Book';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EventIcon from '@mui/icons-material/Event';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

const SideMenu = () => {
  return (
    <Drawer
        variant="permanent"
        sx={{
            width: 270,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: 300,
                boxSizing: 'border-box',
                backgroundColor: '#1976d2',
                marginTop: '63px',
            },
        }}
    >
        <List>
        {[
                { text: 'Assessment', icon: <AssessmentIcon />, path: '/assessment' },
                { text: 'Therapies and Games', icon: <GamesIcon />, path: '/therapies' },
                { text: 'Blogs', icon: <BookIcon />, path: '/blogs' },
                { text: 'Doctors', icon: <LocalHospitalIcon />, path: '/doctors' },
                { text: 'Upcoming Workshops', icon: <EventIcon />, path: '/workshopcover' },
                { text: 'Self Assessment', icon: <SelfImprovementIcon />, path: '/self-assessment' },
            ].map((item) => (
                <ListItem button key={item.text} component={Link} to={item.path}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText sx={{color:'black'}} primary={item.text} />
                </ListItem>
            ))}
        </List>
    </Drawer>
  );
};

export default SideMenu;
