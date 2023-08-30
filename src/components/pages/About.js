import React from 'react';
import Header from '../Header';
import { Typography, Grid, Box, Slide } from '@mui/material';

export default function About() {
    return (
    <div>
        <Header />
        <Slide direction='right' in= 'true' timeout={{enter: 2000 }}>
        <Grid container sx ={{position: 'absolute', top: '6rem'}}>
            <Grid item xs={8} md={4.5}>
                <Box sx = {{bgcolor: 'primary.main', borderRadius: '0 110px 110px 0', height:'140%', minHeight: 'fit-content', display: 'flex'}} justifyContent='flex-end' alignItems='center'>
                    <Grid item xs={8} sm={5}>
                        <Typography sx = {{color: 'background.default', fontFamily: 'Exo', mr:'60px' }}  variant='h2'  >About Me</Typography>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
        </Slide>
    </div>)
}