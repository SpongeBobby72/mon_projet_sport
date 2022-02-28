import React from 'react';
import { theme } from "../configs/theme";

import { ThemeProvider } from "@mui/material";
import { styled } from "@mui/material/styles";
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

import { useNavigate } from 'react-router-dom';

const Main = styled("div")(({ theme }) => ({
    marginTop: 50,
    alignItems: "center",
    padding: theme.spacing(0, 1),
}));

export default function MainLayout({ children }) {

    const iconButtonList = [
        { icon: <EventIcon />, title: 'Calendrier', link: "calendrier" },
        { icon: <ChatBubbleOutlineIcon />, title: 'Messagerie', link: "messagerie" },
        { icon: <GroupsIcon />, title: 'Equipe', link: "equipe" },
        { icon: <PermIdentityIcon />, title: 'Profil', link: "profil" },
    ];

    const navigate = useNavigate();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="fixed" color="primary" sx={{ top: 0, bottom: 'auto' }}>
                <Toolbar >
                    <Box>
                        <Avatar sx={{ bgcolor: "#000", m: 1 }}>
                            <AssignmentIcon />
                        </Avatar>
                    </Box>
                    <IconButton color="icon" sx={{ position: 'absolute', right: 5 }}>
                        <AddCircleOutlineIcon fontSize='large' />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Main>{children}</Main>

            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    {iconButtonList.map((value, index) => (
                        <Button
                            key={index}
                            onClick={() => navigate({ pathname: `/${value.link}` })}
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