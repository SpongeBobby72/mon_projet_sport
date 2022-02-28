import React from 'react';
import MainLayout from '../layouts/mainLayout';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import { Box, CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import ListSubheader from '@mui/material/ListSubheader';

const messages = [
    {
        id: 1,
        primary: 'Dim 20 Février',
        secondary: "Division3-J15",
        teamA: 'Cormes',
        teamB: 'Le Breil',
        scoreA: 1,
        scoreB: 2,
    },
    {
        id: 2,
        primary: 'Dim 27 Février',
        secondary: "Division1-J17",
        teamA: 'Cormes',
        teamB: 'Changé 2',
    },
    {
        id: 3,
        primary: 'Dim 06 Mars',
        secondary: "Division1-J17",
        teamA: 'Cormes',
        teamB: 'Changé 2',
    },
    {
        id: 4,
        primary: 'Dim 13 Mars',
        secondary: "Division1-J17",
        teamA: 'Cormes',
        teamB: 'Changé 2',
    },
    {
        id: 5,
        primary: 'Dim 20 Mars',
        secondary: "Division1-J17",
        teamA: 'Cormes',
        teamB: 'Changé 2',
    },
    {
        id: 6,
        primary: 'Dim 27 Mars',
        secondary: "Division1-J17",
        teamA: 'Cormes',
        teamB: 'Changé 2',
    },
    {
        id: 7,
        primary: 'Dim 27 Mars',
        secondary: "Division1-J17",
        teamA: 'Cormes',
        teamB: 'Changé 2',
    },
    {
        id: 8,
        primary: 'Dim 27 Mars',
        secondary: "Division1-J17",
        teamA: 'Cormes',
        teamB: 'Changé 2',
    },
    {
        id: 9,
        primary: 'Dim 27 Mars',
        secondary: "Division1-J17",
        teamA: 'Cormes',
        teamB: 'Changé 2',
    },
    {
        id: 10,
        primary: 'Dim 27 Mars',
        secondary: "Division1-J17",
        teamA: 'Cormes',
        teamB: 'Changé 2',
    },
    {
        id: 11,
        primary: 'Dim 27 Mars',
        secondary: "Division1-J17",
    },
];

export default function Calendrier() {
    return (
        <MainLayout>
            <Paper square sx={{ bgcolor: 'bg.main', mb: '100px' }}>
                <List sx={{ px: 2 }}>
                    {messages.map(({ id, primary, secondary, teamA, teamB }) => (
                        <React.Fragment key={id}>
                            {id === 1 && (
                                <ListSubheader
                                    sx={{
                                        bgcolor: 'bg.main',
                                        color: '#fff',
                                        fontSize: 25,
                                        textAlign: 'center'
                                    }}
                                >
                                    Evenements finis
                                </ListSubheader>
                            )}

                            {id === 6 && (
                                <ListSubheader
                                    sx={{
                                        bgcolor: 'bg.main',
                                        color: '#fff',
                                        fontSize: 25,
                                        textAlign: 'center'
                                    }}
                                >
                                    Evenements à venir
                                </ListSubheader>
                            )}

                            <CardActionArea
                                sx={{
                                    bgcolor: 'card.main',
                                    my: 2,
                                    borderRadius: 2
                                }}
                            >
                                <Typography gutterBottom
                                    variant="h5"
                                    component="div"
                                    align='center'
                                >
                                    {primary}
                                </Typography>
                                <Typography gutterBottom
                                    variant="body1"
                                    component="div"
                                    align='center'
                                >
                                    {secondary}
                                </Typography>
                                <Box>
                                    {teamA && teamB && (
                                        <Typography gutterBottom
                                            variant="h5"
                                            component="div"
                                            align='center'
                                        >
                                            {teamA} - {teamB}
                                        </Typography>
                                    )}
                                    {/* {scoreA && scoreB && (
                                        <Typography gutterBottom
                                            variant="h5"
                                            component="div"
                                            align='center'
                                        >
                                            {scoreA} - {scoreB}
                                        </Typography>
                                    )} */}
                                </Box>
                            </CardActionArea>
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        </MainLayout>
    )
}