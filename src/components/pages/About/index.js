import React from 'react';
import Header from '../../Header';
import AboutHeader from './AboutHeader';
import AboutBody from './AboutBody';
import { Grid } from '@mui/material';

export default function About() {
    return (
        <Grid container item xs={12}>
            <Grid container item xs={12} >
                <Header />
            </Grid>
            <Grid container item xs={12}>
                <AboutHeader/>
            </Grid>
            <Grid container item xs={12}>
                <AboutBody/>
            </Grid>
        </Grid>
    )
};