import React from 'react';
import { Typography, Grid } from '@mui/material';
import Divider from '@mui/material/Divider';

export default function Strengths() {

    const strengths = [
        {
            title: 'Scrappy',
            description: "Many have told me I am 'scrappy.' With this one word, it shows I have consistently demonstrated resourcefulness, tenacity, self-reliance, and adaptability in a variety of circumstances."
        },
        {
            title: 'Human Centered',
            description: 'With a background in social work, I have training and real-world experience in understanding human behavior, social dynamics, and the needs of diverse populations.'
        },
        {
            title: 'Data Driven',
            description: 'My time in academia has instilled rigorous research and data methodologies. I am passionate about translating real-world, unstructured data into impact.'
        }
    ];

    return (
        <Grid container item xs={12} sx={{ ml: '10%', mr: '10%', mt: '0.5%' }} justifyContent={'space-between'}>
            {strengths.map((strength) => {
                return(
                    <Grid item xs={12} md={4} sx ={{pt: '0.2em', pb: '1em', pr:'1.4em'}}>
                        <Typography variant='h5' sx={{padding: '2px', fontWeight: 'bold'}}>{strength.title}</Typography>
                        <Divider sx={{bgcolor: 'accent.main'}} />
                        <Typography variant='body1'>{strength.description}</Typography>
            </Grid>
                )
            })}
        </Grid>
    )
}