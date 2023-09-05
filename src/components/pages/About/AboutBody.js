import React from 'react';
import { Typography, Grid } from '@mui/material';
import Strengths from './Strengths';
import History from './History'; 
import './about.css'

export default function AboutBody() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant='h3' sx={{ ml: '10%', mr: '10%', mt: '2.5%' }}>
                    My passion: bridging science and logic with real-world complexities
                </Typography>
            <Grid item container xs={12}>
                <Grid item xs ={3} sx={{ pl: '10%', mt:'1%' }}>
                    <svg  className='arrow' width="100%" height="77" viewBox="0 0 90 77" xmlns="http://www.w3.org/2000/svg">
                        <path  d="M89.0852 66.0356C89.6571 65.4362 89.6349 64.4868 89.0356 63.9148L79.269 54.5947C78.6697 54.0228 77.7202 54.045 77.1483 54.6443C76.5763 55.2436 76.5986 56.1931 77.1979 56.7651L85.8793 65.0496L77.5947 73.731C77.0228 74.3303 77.045 75.2798 77.6443 75.8517C78.2436 76.4237 79.1931 76.4014 79.7651 75.8021L89.0852 66.0356ZM0.641333 0.0597098C-0.409381 33.8882 4.8145 51.3658 19.2732 59.7944C26.399 63.9483 35.5891 65.7817 46.9071 66.5122C58.2339 67.2433 71.8943 66.8771 88.0351 66.4996L87.9649 63.5004C71.7677 63.8793 58.264 64.239 47.1003 63.5184C35.928 62.7974 27.3013 61.0018 20.784 57.2026C7.95647 49.7248 2.58862 33.9992 3.63989 0.152845L0.641333 0.0597098Z" fill="#E29263"/>
                    </svg>
                </Grid>
                <Grid item xs={12} md={7} sx={{ mr: '10%', mt: '1%', '@media (max-width: 900px)': {
        ml: '10%'} }} className='passion'>
                    <Typography variant='body1'>
                        I have cultivated proficiencies in social sciences and computer science, creating a unique interdisciplinary perspective. I believe looking to where science and nature merge is where innovation and creativity are born.
                    </Typography>
                </Grid>
            </Grid>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h3' sx={{ ml: '10%', mr: '10%', mt: '2.5%' }}>
                    My Strengths
                </Typography>
            </Grid>
            <Grid item container xs={12}>
                <Strengths />
            </Grid>
            <Grid item xs={12} >
                <History />
            </Grid>
        </Grid>
    )
}

// Three categories/traits
// 1. Scrappy
// 2. human centered
// 3. data-driven 

// one template for three categories with a fun arrow and then animated toggle to view information

// Page sections: 
// 1. short professional interest paragraph,
// traits- My Strengths: 
// 2. in collapse: A brief history,
// 3. My daily life, 


// <Grid container item xs={12} sx={{ ml: '10%', mr: '10%', mt: '0.5%' }} justifyContent={'space-between'}>
{/* <Grid item xs={12} md={4} sx ={{pt: '0.2em', pb: '1em', px: '0.9em'}}>
<Typography variant='h5' sx={{padding: '2px', fontWeight: 'bold'}}>Scrappy</Typography>
<Divider sx={{bgcolor: 'accent.main'}} />
<Typography variant='body1'>Many supervisors and co-workers have told me I am 'scrappy.' With this one word, it shows I have consistently demonstrated resourcefulness, tenacity, self-reliance, and adaptability in a variety of circumstances. </Typography>
</Grid>
<Grid item xs={12} md={4} sx ={{pt: '0.2em', pb: '1em', px: '0.9em'}}>
<Typography variant='h5' sx={{padding: '2px'}} >Human-Centered</Typography>
<Divider sx={{bgcolor: 'accent.main'}} />
<Typography variant='body1'>With a background in social work, I have training and real-world experience in understanding human behavior, social dynamics, and the needs of diverse populations.</Typography>
</Grid>
<Grid item xs={12} md={4} sx ={{pt: '0.2em', pb: '1em', px: '0.9em'}}>
<Typography variant='h5' sx={{padding: '2px'}}>Data-Driven</Typography>
<Divider sx={{bgcolor: 'accent.main'}} />
<Typography variant='body1'>My time in academia has instilled rigorous research and data methodologies. I am passionate about translating real-world, unstructured data into impact.</Typography>
</Grid>
</Grid> */}