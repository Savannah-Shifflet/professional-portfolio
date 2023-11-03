import React from 'react';
import Header from '../../Header';
import Grid from '@mui/material/Grid';
import Presence from './Presence';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function Resume() {
    return (
        <Grid container item xs={12} justifyContent={'center'}>
            <Grid container item xs={12} >
                <Header />
            </Grid>
            <Grid item xs={10}>
                <Typography variant='h3' sx={{ mt: '2.5%' }}>
                    Education
                </Typography>
            </Grid>
            {/* <Grid item container xs ={10} justifyContent={'center'} >
                <Divider sx={{bgcolor: 'accent.main', width: '100%'}} />
            </Grid> */}
            <Grid item xs={10}>
                <Typography variant='h3' sx={{ mt: '2.5%' }}>
                    My Presence
                </Typography>
            </Grid>
            <Grid item container xs ={10} justifyContent={'center'} >
                <Presence />
            </Grid>
        </Grid>
    )
};