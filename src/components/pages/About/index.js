import React from 'react';
import Header from '../../Header';
import AboutHeader from './AboutHeader';
import AboutBody from './AboutBody';
import { Typography, Grid, Box, Slide } from '@mui/material';
import Footer from '../../Footer';


export default function About() {
    return (
        <Grid container item xs={12}>
            <Grid container item xs={12} >
                <Header />
            </Grid>
            <Grid item lg={12}>
                <AboutHeader/>
            </Grid>
            {/* <Grid item lg={12}>
                <Footer/>
            </Grid> */}
        </Grid>
    )
}