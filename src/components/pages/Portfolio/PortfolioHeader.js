import React from 'react';
import './style.css';
import { Grid, Typography } from '@mui/material';

export default function PortfolioHeader() {
    return(
        <Grid item xs={12}>
            <Typography variant='h2' textAlign={'center'}>My Work</Typography>
        </Grid>
    )
}