import React from 'react';
import Header from '../../Header';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Education from './Education';
import Experience from './Experience';
import pspo from '../../../assets/pspo_badge.png';
import Link from '@mui/material/Link';
import Honors from './Honors';
import Decoration from './Decoration';
import Slide from '@mui/material/Slide';


export default function Resume() {
    const imgStyles = {
        img: {
            aspectRatio: 1,
            width: '20%',
            minWidth: 100,
            maxWidth: 200
        }
    }

    return (
            <Grid container item xs={12} justifyContent={'center'} >
                <Grid container item xs={12} xl={10}>
                    <Header />
                </Grid>

                {/* Staggered fade of elements */}
                <Slide in={true} timeout={1800}>
                    <Grid item xs={12} xl={10} sx={{textAlign: 'center'}}>
                        <Typography variant='h3' >
                            Resume
                        </Typography>
                    </Grid>
                </Slide>

                <Decoration  />

                <Slide in={true} timeout={1400} >
                    <Grid item xs={10} xl={8}>
                        <Typography variant='h4' sx={{ mt: '2.5%' }}>
                            Experience
                        </Typography>
                    </Grid>
                </Slide>

                <Slide in={true} timeout={1200}>
                    <Grid item container xs ={10} xl={8} justifyContent={'center'} >
                        <Experience />
                    </Grid>
                </Slide>

                <Slide in={true} timeout={1300}>
                        <Grid item xs={10} xl={8}>
                            <Typography variant='h4' sx={{ mt: '2.5%' }}>
                                Education
                            </Typography>
                        </Grid>
                </Slide>

                <Slide in={true} timeout={1100}>
                    <Grid item container xs ={10} xl={8} justifyContent={'center'} >
                        <Education />
                    </Grid>
                </Slide>

                <Slide in={true} timeout={1200}>
                        <Grid item xs={10} xl={8}>
                            <Typography variant='h4' sx={{ mt: '2.5%' }}>
                                Certifications
                            </Typography>
                        </Grid>
                </Slide>

                <Slide in={true} timeout={1200}>
                    <Grid item container xs ={10} xl={8} sx={{flexDirection: 'column', pt: '1%'}} >
                        <img src={pspo} alt='Professional Scrum Product Owner Badge' style={imgStyles.img}/>
                        <Link target = "_blank" aria-label='Link to PSPO badge on Credly' href="https://www.credly.com/badges/2d4e3419-98d7-45e6-857a-eec8fb263fef/public_url" >Professional Scrum Product Owner</Link>
                    </Grid>
                </Slide>

                <Slide in={true} timeout={1000}>
                        <Grid item xs={10} xl={8}>
                            <Typography variant='h4' sx={{ mt: '2.5%' }}>
                                Honors
                            </Typography>
                        </Grid>
                </Slide>

                <Slide in={true} timeout={800}>
                    <Grid item container xs ={10} xl={8} justifyContent={'center'} >
                        <Honors />
                    </Grid>
                </Slide>
            </Grid>
    )
};