import React from 'react';
import { ThemeProvider } from "@mui/material";
import { theme } from "../configs/theme";
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EventIcon from '@mui/icons-material/Event';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import GroupsIcon from '@mui/icons-material/Groups';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Typography from '@mui/material/Typography';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function MainLayout() {

    const iconButtonList = [
        { icon: <EventIcon />, title: 'Calendrier' },
        { icon: <ChatBubbleOutlineIcon />, title: 'Messagerie' },
        { icon: <GroupsIcon />, title: 'Equipe' },
        { icon: <PermIdentityIcon />, title: 'Profil' },
    ]

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="fixed" color="primary" sx={{ top: 0, bottom: 'auto' }}>
                <Toolbar >
                    <Box>
                        <Avatar sx={{ bgcolor: "#000", m: 1 }}>
                            <AssignmentIcon />
                        </Avatar>
                        <Typography variant="h2" sx={{ m: 1 }}>
                            Calendrier
                        </Typography>
                    </Box>
                    <IconButton color="icon" sx={{ position: 'absolute', right: 5 }}>
                        <AddCircleOutlineIcon fontSize='large' />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    {iconButtonList.map((value, index) => (
                        <Button
                            key={index}
                            sx={{
                                bgcolor: 'primary.main',
                                color: '#fff',
                                textAlign: 'center',
                                display: 'block',
                            }}>
                            {value.icon}
                            <Typography variant="body2">
                                {value.title}
                            </Typography>
                        </Button>
                    ))}
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}