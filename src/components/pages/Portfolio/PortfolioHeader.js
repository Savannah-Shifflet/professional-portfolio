import React from 'react';
import './style.css';
import { Grid, Typography } from '@mui/material';

// TODO: figure out how to format title of whole page
const titleOpen = '< '
const titleClose = ' />'
const title = 'My Work'
export default function PortfolioHeader() {
    return(
        <Grid container item xs={12} justifyContent='center'>
            <Typography variant='h2' textAlign={'center'} sx={{width: 'fit-content', margin: 0, pr: '1%', color: 'secondary.main'}}>{titleOpen}</Typography>
            <Typography variant='h2' textAlign={'center'} sx={{width: 'fit-content'}}>{title}</Typography>
            <Typography variant='h2' textAlign={'center'} sx={{width: 'fit-content', margin: 0, pl: '1%', color: 'secondary.main'}}>{titleClose}</Typography>
        </Grid>
    )
}