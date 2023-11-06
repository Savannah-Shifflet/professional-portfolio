import React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';



export default function Honors() {

    const honors = [
        'Graduated UT with Highest Honors',
        'Valedictorian – Dripping Springs High School',
        "2021 ACC Chancellor’s Honor Award",
        "2018-2019 UT HEALS Scholar",
        "2018-2019 Tu-Ting and Rachel Tsan Endowed Presidential Scholar",
        "2017-2018, 2018-2019 UT Distinguished College Scholar",
        "2017-2018 School of Social Work Anniversary Excellence Fund recipient",
        "2016-2017 UT College Scholar"
    ];

    return (
        <Grid container item xs={12} sx={{ mt: '0.5%' }} >
            <List >
            {honors.map((honor) => {
                return(
                    <ListItem sx={{pt: 0, pb: 0}}>
                        <ListItemText
                            primary={honor}
                        />
                    </ListItem>
                )
            })}
            </List>
        </Grid>
    )
}