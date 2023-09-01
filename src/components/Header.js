import React from 'react';
import { Typography, Grid, Box, Link } from '@mui/material';
// sx={{ position: 'absolute', top: 20, left: 15 }}
// justifyContent="center" alignItems="center"
export default function Home() {
    return (
            <Grid item container xs={12}>
                <Grid item xs={12}>
                    <Grid item sx={{ bgcolor:'secondary.main', px:1, pt: 0.7, mt: 2.5, ml: 3, mb: 4, width: 'fit-content', zIndex: '200', boxShadow: '#9CA92E -0.3em 0.3em' }}>
                        <Link variant = 'header' href = "/"><Typography noWrap variant = 'h4' >SAVANNAH SHIFFLET</Typography></Link>
                    </Grid>
                </Grid>
            </Grid>
    )
}