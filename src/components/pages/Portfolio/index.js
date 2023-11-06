import React from 'react';
import Header from '../../Header';
import PortfolioList from './PortfolioList';
import PortfolioHeader from './PortfolioHeader';
import { completedPieces } from './data/CompletedPieces';
import CurrentWork from './CurrentWork';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';


export default function Portfolio() {
    return (
        <Grid container item xs={12} justifyContent={'center'}>
            <Grid container item xs={12} >
                <Header />
            </Grid>
            <Grow in={true} timeout={600}>
                <Grid item xs={12} >
                    <PortfolioHeader/>
                </Grid>
            </Grow>

            {/* Expandable card with current projects */}
            <Grow in={true} timeout={1000}>
                <Grid item container xs ={12} justifyContent={'center'} >
                    <Grid item md={9} xs ={11} sx={{mt:'2.5%'}}>
                        <CurrentWork/>
                    </Grid>
                </Grid>
            </Grow>

            {/* Completed pieces heading: */}
            <Slide direction='up' in={true} timeout={{enter: 1000 }}>
                <Grid item container xs ={12} justifyContent={'center'} >
                    <Grid item md={9} xs ={11} sx={{mt:'2.5%'}}>
                    <Typography variant='h3' sx={{mb: '1%'}}>
                        Completed Projects:
                    </Typography>
                        <Divider  sx={{bgcolor: 'accent.main', height: '0.2em', mb:'9px'}}/>
                    </Grid>
                </Grid>
            </Slide>

            {/* Completed pieces body */}
            <Slide direction='up' in={true} timeout={{enter: 1000 }}>
                <Grid item container md={9} xs ={11} justifyContent={'space-between'}>
                    <PortfolioList pieces={completedPieces}/>
                </Grid>
            </Slide>
        </Grid>
    )
};