import React from 'react';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


export default function Experience() {

    const experience = [
        {
            title: 'Business Analyst',
            company: "McKinsey & Company, Digital and Analytics Practice",
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
        <Grid container item xs={12} sx={{ mt: '0.5%' }} >
            {experience.map((experience) => {
                return(
                    <>
                    <Grid item container justifyContent={'space-between'} key={experience.title} xs={12} lg={6} sx ={{pt: '0.2em', pb: '1em', pr:'1.4em'}}>
                        <Grid item xs={12}>
                            <Typography variant='body1' >{experience.title}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body1'>{experience.company}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body1'>{experience.time}</Typography>
                        </Grid>
                    </Grid>

                    </>
                )
            })}
        </Grid>
    )
}