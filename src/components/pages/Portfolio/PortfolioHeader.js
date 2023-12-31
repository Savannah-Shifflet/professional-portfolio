import React from 'react';
import './style.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const titleOpen = '< '
const titleClose = ' />'
const title = 'My Work'
export default function PortfolioHeader() {
    return(
        <Grid container item xs={12} justifyContent='center'>
            <Typography variant='h3' textAlign={'center'} sx={{width: 'fit-content', margin: 0, pr: '1%', color: 'secondary.main'}}>{titleOpen}</Typography>
            <Typography variant='h3' textAlign={'center'} sx={{width: 'fit-content'}}>{title}</Typography>
            <Typography variant='h3' textAlign={'center'} sx={{width: 'fit-content', margin: 0, pl: '1%', color: 'secondary.main'}}>{titleClose}</Typography>
        </Grid>
    )
}