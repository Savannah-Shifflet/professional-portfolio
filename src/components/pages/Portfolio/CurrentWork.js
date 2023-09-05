import React from 'react';
import { Typography, Grid, Link, Card, CardHeader, CardContent } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

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
        <Card raised sx={{ ml: '10%', mr: '10%', mt: '2.5%' }}>
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
                sx={{bgcolor: 'secondary.main', color: 'background.default', fontFamily: 'exo'}}
                title="Work in Progress"
                titleTypographyProps={{variant: 'h3' }} />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent sx= {{bgcolor: 'secondary.main', opactiy: '0.5'}}>
                    
                </CardContent>
            </Collapse>

        </Card>
    )
}