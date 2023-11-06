import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


export default function Education() {

    const education = [
        {
            title: 'Professional Certificate: Full-stack coding',
            school: "The University of Texas at Austin",
            time: "June 2023 – September 2023"
        },
        {
            title: 'Pre-Medical Post-Baccalaureate',
            school: "Austin Community College & The University of Texas at Austin ",
            gpa: "4.00",
            mcat: '94th percentile',
            time: "September 2019 – December 2021"
        },
        {
            title: 'Bachelors of Science in Social Work',
            school: "The University of Texas at Austin",
            gpa: '3.99',
            time: "August 2015 – May 2019"
        }
    ];

    return (
        <Grid container item xs={12} sx={{ mt: '0.5%', backgroundColor: 'secondary.transparent', padding: '1rem', borderRadius: 5, }} >
            {education.map((education) => {
                return(
                    <>
                    <Grid item container key={education.title} xs={12} xl={6} sx ={{pt: '0.2em', pb: '1em', pr:'1.4em', height: 'fit-content', zIndex: 2}}>
                        <Grid item xs={12}>
                            <Typography variant='h5' >{education.title} </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body1'>{education.school}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body1'>{education.time}</Typography>
                        </Grid>
                        {education.gpa? (`GPA: ${education.gpa}`):null}{education.mcat? (` | MCAT: ${education.mcat}`):null}
                    </Grid>

                    </>
                )
            })}
        </Grid>
    )
}