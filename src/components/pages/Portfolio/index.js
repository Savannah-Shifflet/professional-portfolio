import React from 'react';
import Header from '../../Header';
import { Grid, Typography } from '@mui/material';
import PortfolioList from './PortfolioList';
import PortfolioHeader from './PortfolioHeader';
import { completedPieces } from './data/CompletedPieces';


export default function Portfolio() {
    return (
        <Grid container item xs={12}>
            <Grid container item xs={12} >
                <Header />
            </Grid>
            <Grid item xs={12} >
                <PortfolioHeader/>
                
                <PortfolioList pieces={completedPieces}/>
            </Grid>
        </Grid>
    )
};