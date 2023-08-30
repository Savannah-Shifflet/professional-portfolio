import React from 'react';
import { Typography, Grid, Box, Link } from '@mui/material';

export default function Home() {
    return (
        <Box sx={{ position: 'fixed', top: 20, left: 15 }}>
            <Grid container justifyContent="center" alignItems="center"  rowSpacing={1} >
                <Grid row>
                    <Grid item sx={{ bgcolor:'secondary.main', px:1, pt: 0.7, position: 'absolute'}}>
                    <Link variant = 'header' href = "/"><Typography noWrap variant = 'h4' >SAVANNAH SHIFFLET</Typography></Link>
                    </Grid>
                    <Grid item sx={{ bgcolor:'accent.main', px:0.8, pt: 0.2, position: 'relative', top: 8, ml:-0.5, zIndex: -1 }} >
                        <Typography noWrap variant = 'h4' sx={{ color: 'transparent'}} >SAVANNAH SHIFFLET</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}