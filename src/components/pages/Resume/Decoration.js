import React from 'react';
import Grid from '@mui/material/Grid';
import blend from '../../../assets/green_blend.svg'
import './decoration.css'


export default function Decoration() {

    return (
        <Grid container item xs={12} sx={{position: 'relative'}}>
           <img src={blend} className='green' style={{rotate: '110deg', aspectRatio: 1, width: '40%', position:'absolute', zIndex: -999, top: '5%', right: '5%', maxWidth: 600 }}/>
        </Grid>
    )
}