import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Experience() {

    const experience = [
        {
            title: 'Business Analyst, Digital and Analytics Practice',
            company: "McKinsey & Company",
            time: "October 2022 – July 2023"
        },
        {
            title: 'Researcher & Data Analyst',
            company: "The University of Texas at Austin ",
            time: "September 2021 – August 2022"
        },
        {
            title: 'Crisis Counselor',
            company: "Integral Care: Psychiatric Emergency Services",
            time: "October 2020 – September 2021"
        },
        {
            title: 'Social Work Consultant',
            company: "Monroe & Weisbrod",
            time: "January 2020 – October 2020"
        }
    ];

    return (
        <Grid container item xs={12} sx={{ mt: '0.5%', backgroundColor: 'secondary.transparent', padding: '1rem', borderRadius: 5, }} >
            {experience.map((experience) => {
                return(
                    <Grid item container key={experience.title} xs={12} lg={6} sx ={{pt: '0.2em', pb: '1em', pr:'1.4em', height: 'fit-content', zIndex: 2}}>
                        <Grid item xs={12}>
                            <Typography variant='h5' >{experience.title}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body1'>{experience.company}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body1'>{experience.time}</Typography>
                        </Grid>
                    </Grid>
                )
            })}
        </Grid>
    )
}