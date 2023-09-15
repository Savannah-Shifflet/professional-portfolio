import React from 'react';
import Header from '../../Header';
import PortfolioList from './PortfolioList';
import PortfolioHeader from './PortfolioHeader';
import { completedPieces } from './data/CompletedPieces';
import CurrentWork from './CurrentWork';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


export default function Portfolio() {
    return (
        <Grid container item xs={12}>
            <Grid container item xs={12} >
                <Header />
            </Grid>
            <Grid item xs={12} >
                <PortfolioHeader/>

                
                

                {/* Completed pieces heading: */}
                <Grid item container xs ={12} justifyContent={'center'} >
                    <Grid item md={9} xs ={11} sx={{mt:'2.5%'}}>
                    <Typography variant='h3' sx={{mb: '1%'}}>
                        Completed Projects:
                    </Typography>
                        <Divider  sx={{bgcolor: 'accent.main', height: '0.2em'}}/>
                    </Grid>
                </Grid>
                {/* Completed pieces body */}
                <PortfolioList pieces={completedPieces}/>

                {/* Expandable card with current projects */}
                <Grid item container xs ={12} justifyContent={'center'} >
                    <Grid item md={9} xs ={11} sx={{mt:'2.5%'}}>
                        <CurrentWork/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};