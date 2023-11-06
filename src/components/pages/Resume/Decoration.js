import React from 'react';
import Grid from '@mui/material/Grid';
import blend from '../../../assets/green_blend.svg'
import './decoration.css';
import Slide from '@mui/material/Slide';




export default function Decoration() {

    return (
        <Slide in={true} timeout={1500}>
            <Grid container item xs={12} sx={{position: 'relative'}}>
            <img src={blend} className='green' alt='geometric wavy line decoration on the right side of the page' style={{rotate: '110deg', aspectRatio: 1, width: '40%', position:'absolute', top: '5%', right: '5%', maxWidth: 600 }}/>
            </Grid>
        </Slide>
    )
}