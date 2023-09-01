import React from 'react';
import { Typography, Grid } from '@mui/material';

export default function Home() {
    return (
        <Grid container justifyContent="center" alignItems="center" height = "89vh" rowSpacing={1} >
            <Grid row>
                <Grid item sx={{ bgcolor:'secondary.main', px:5, pt:1, position: 'absolute'}}>
                    <Typography variant = 'h1' >SAVANNAH</Typography>
                    <Typography variant = 'h1'>SHIFFLET</Typography>
                </Grid>
                <Grid item sx={{ bgcolor:'accent.main', px:4.5, position: 'relative', top: '1rem', ml:-1, zIndex: -1 }} >
                    <Typography variant = 'h1' sx={{ color: 'transparent'}} >SAVANNAH</Typography>
                    <Typography variant = 'h1' sx={{ color: 'transparent'}} >SHIFFLET</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}