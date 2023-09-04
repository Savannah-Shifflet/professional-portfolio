import React from 'react';
import Header from '../../Header';
import AboutHeader from './AboutHeader';
import { Grid } from '@mui/material';

export default function About() {
    return (
        <Grid container item xs={12}>
            <Grid container item xs={12} >
                <Header />
            </Grid>
            <Grid item lg={12}>
                <AboutHeader/>
            </Grid>
        </Grid>
    )
};