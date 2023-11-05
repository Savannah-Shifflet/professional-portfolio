import React from 'react';
import Strengths from './Strengths';
import History from './History';
import './about.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import Content from './Content'


export default function AboutBody() {
    return (
        <Slide direction='up' in={true} timeout={{enter: 1000 }}>
            <Grid container justifyContent='center'>
                <Grid item xs={10}>
                    <Typography variant='h3' sx={{ mt: '2.5%' }}>
                        My passion: bridging science and logic with real-world complexities
                    </Typography>
                    <Grid item container xs={12}>
                        <Grid item xs ={3} lg={2} xl={1} sx={{ mt:'1%' }}>
                            <svg  className='arrow' width="100%" height="77" viewBox="0 0 90 77" xmlns="http://www.w3.org/2000/svg">
                                <path  d="M89.0852 66.0356C89.6571 65.4362 89.6349 64.4868 89.0356 63.9148L79.269 54.5947C78.6697 54.0228 77.7202 54.045 77.1483 54.6443C76.5763 55.2436 76.5986 56.1931 77.1979 56.7651L85.8793 65.0496L77.5947 73.731C77.0228 74.3303 77.045 75.2798 77.6443 75.8517C78.2436 76.4237 79.1931 76.4014 79.7651 75.8021L89.0852 66.0356ZM0.641333 0.0597098C-0.409381 33.8882 4.8145 51.3658 19.2732 59.7944C26.399 63.9483 35.5891 65.7817 46.9071 66.5122C58.2339 67.2433 71.8943 66.8771 88.0351 66.4996L87.9649 63.5004C71.7677 63.8793 58.264 64.239 47.1003 63.5184C35.928 62.7974 27.3013 61.0018 20.784 57.2026C7.95647 49.7248 2.58862 33.9992 3.63989 0.152845L0.641333 0.0597098Z" fill="#E29263"/>
                            </svg>
                        </Grid>
                        <Grid item xs={12} md={8} lg={7} xl={6} sx={{ mt: '1%' }} className='passion'>
                            <Typography variant='body1'>
                                I have cultivated proficiencies in social sciences and computer science, creating a unique interdisciplinary perspective. I believe looking to where science and nature merge is where innovation and creativity are born.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant='h3' sx={{ mt: '2.5%' }}>
                        My Strengths
                    </Typography>
                </Grid>
                <Grid item container xs={10}>
                    <Strengths />
                </Grid>
                <Grid item container xs ={10} justifyContent={'center'} >
                    <History />
                </Grid>
                <Grid item xs={10}>
                    <Typography variant='h3' sx={{ mt: '2.5%' }}>
                        Content
                    </Typography>
                </Grid>
                <Grid item container xs ={10} justifyContent={'center'} >
                <Content />
            </Grid>
            </Grid>
        </Slide>
    )
}
