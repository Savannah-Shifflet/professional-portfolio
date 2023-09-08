import React from 'react';
import { Typography, Grid, Link, Card, CardHeader, CardContent } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PortfolioList from './PortfolioList';
import { currentPieces } from './data/CurrentPieces';

// TODO: Add gif and summary for portfolio site
// TODO: Add POS system 

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function CurrentWork() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card raised>
            <CardHeader
                action={
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >

                        <ExpandMoreIcon sx = {{color: 'background.default'}} />
                    </ExpandMore>
                }
                sx={{bgcolor: 'accent.main', color: 'background.default', fontFamily: 'exo'}}
                title="Projects in progress"
                titleTypographyProps={{variant: 'h3' }} />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent sx= {{bgcolor: 'background.default'}}>
                    <PortfolioList pieces={currentPieces}/>
                </CardContent>
            </Collapse>

        </Card>
    )
}