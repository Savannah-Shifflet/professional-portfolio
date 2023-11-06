import React from 'react';
import headshot from '../../../assets/headshot.png';
import './about.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';


export default function AboutHeader() {
    const imgStyles = {
        img: {
            width: '90%',
            zIndex: '200',
            objectFit: 'contain',
            alignSelf: 'flex-start',
        }
    }

    return (
        <Grid item container  justifyContent={'space-between'}>
            {/* About me title with slide transition */}
            <Slide direction='right' in={true} timeout={{enter: 2000 }}>
                <Grid item container xs={8} md={6} >
                    <Grid item xs={10}>
                        <Box sx = {{bgcolor: 'primary.main', borderRadius: '0 110px 110px 0', py:'2rem', display: 'flex'}} justifyContent='flex-end' alignItems='center' >
                            <Grid item xs={8} sm={5}>
                                <Typography sx = {{color: 'background.default', fontFamily: 'Exo', mr:'60px' }}  variant='h3'  >About Me</Typography>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Slide>
            {/* Headshot with art background */}
            <Fade in={true} timeout={700}>
                <Grid item container justifyContent={'space-around'} xs={8} md={4.5}>
                        <Grid item container sx ={{height: '14rem', width: '15rem', position: 'relative', mr: '10%'}} justifyContent={'center'}>
                            <Box sx={{bgcolor:'pink.main', position: 'absolute', bottom: '0', left: '200', width: '100%', height: '70%'}} md={12}>
                            </Box>
                            <img src = {headshot} alt ='Headshot of Savannah Shifflet' style={imgStyles.img} className='headshot'/>
                        </Grid>
                </Grid>
            </Fade>
        </Grid>
    )
}