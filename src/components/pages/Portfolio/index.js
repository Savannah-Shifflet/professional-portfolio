import React from 'react';
import Header from '../../Header';
import { Grid, Typography } from '@mui/material';
import PortfolioList from './PortfolioList';

export default function Portfolio() {
    return (
        <Grid container item xs={12}>
            <Grid container item xs={12} >
                <Header />
            </Grid>
            <Grid item lg={12} >
                <Typography variant='h2' textAlign={'center'}>My Work</Typography>
                <PortfolioList />
            </Grid>
        </Grid>
    )
};