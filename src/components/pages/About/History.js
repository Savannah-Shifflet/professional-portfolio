import React from 'react';
import { Typography, Link, Card, CardHeader, CardContent } from '@mui/material';
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

export default function History() {
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
                title="A Brief History"
                titleTypographyProps={{variant: 'h3' }} />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent sx= {{bgcolor: 'secondary.main', opactiy: '0.5'}}>
                    <Typography variant='body1' sx={{color: 'background.default'}}>
                        &emsp; &emsp;From a young age, I've loved solving puzzles and making my ideas come to life. I can vividly remember <Link target = "_blank" href="http://www.legoengineering.com/platform/robolab/">ROBOLAB</Link> being my favorite part of school in my elementary years - engineering inventions out of legos and programming them to come to life. I have dedicated my career journey, no matter the field I'm in, to solving real world problems and designing creative solutions.
                        <br />
                        <br />
                        &emsp; &emsp;I pursued a degree in social work because after years of STEM classes, I felt unbalanced. I understood reality through a rational, scientific lens, but we all know life is more complex than that. I wanted to challenge myself to understand the human condition, what motivates us, what causes impact in our lives, and how we can impact each other. My academic training as well as my real-world experiences have allowed me to build my understanding of others, communication, and confidence as a collaborator and leader.
                        <br />
                        <br />
                        &emsp; &emsp;I had originally planned to utilize this training to become a physician and go to medical school. While working in clinical research, I started to teach myself coding and data analytics. My lab was also unique because we were actively building a web application and acting more like a tech start-up. I realized, I actually loved coding and only thought I hated it cause I was bullied in my AP Computer Science as the only girl in a room of 30 boys. I started to better understand what product designed and data analysis entailed and saw that it merges the technical with the messy human condition. And well, since then, I've been trying to break into the technical world.
                    </Typography>
                </CardContent>
            </Collapse>

        </Card>
    )
}