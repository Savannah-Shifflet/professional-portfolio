import React from 'react';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PortfolioList from './PortfolioList';
import { currentPieces } from './data/CurrentPieces';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Grid from '@mui/material/Grid';

export default function CurrentWork() {

    return (
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon  sx = {{color: 'background.default'}}/>}
                    sx={{bgcolor: 'accent.main', color: 'background.default', fontFamily: 'exo'}}>
                    <Typography variant= 'h3'>Projects in progress</Typography>
                </AccordionSummary>
                <AccordionDetails sx= {{bgcolor: 'background.default'}}>
                    <Grid item xs={12}>
                        <PortfolioList pieces={currentPieces}/>
                    </Grid>
                </AccordionDetails>
            </Accordion>
    )
}