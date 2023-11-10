import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Home() {
    return (
        <Grid container justifyContent="center" alignItems="center" height = "89vh" rowSpacing={1} >
            <Grid item sx={{ bgcolor:'secondary.main', px:5, pt:1, boxShadow: '#9CA92E -0.5em 0.5em'}}>
                <Typography variant = 'h1' >SAVANNAH</Typography>
                <Typography variant = 'h1'>SHIFFLET</Typography>
            </Grid>
        </Grid>
    )
}