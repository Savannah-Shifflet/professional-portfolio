import React from 'react';
import Header from '../../Header';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Education from './Education';
import Experience from './Experience';

export default function Resume() {
    return (
        <Grid container item xs={12} justifyContent={'center'}>
            <Grid container item xs={12} >
                <Header />
            </Grid>
            <Grid item xs={10}>
                <Typography variant='h3' sx={{ mt: '2.5%' }}>
                    Experience
                </Typography>
            </Grid>
            <Grid item container xs ={10} justifyContent={'center'} >
                <Experience />
            </Grid>
            <Grid item xs={10}>
                <Typography variant='h3' sx={{ mt: '2.5%' }}>
                    Education
                </Typography>
            </Grid>
            <Grid item container xs ={10} justifyContent={'center'} >
                <Education />
            </Grid>
            {/* <Grid item container xs ={10} justifyContent={'center'} >
                <Divider sx={{bgcolor: 'accent.main', width: '100%'}} />
            </Grid> */}
        </Grid>
    )
};