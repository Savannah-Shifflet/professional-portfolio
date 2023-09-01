import React from 'react';
import { Typography, Grid, Box, Slide, Link, Card, CardHeader, CardActionArea, CardActions, CardContent } from '@mui/material';
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
  
export default function AboutBody() {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Grid container>
            <Grid item md={10} xs={12}>
                <Typography variant='body1' sx={{ ml: '10%', mr: '10%', mt: '1%' }}>
                    &emsp; &emsp;From a young age, I've loved solving puzzles and making my ideas come to life. I can vividly remember <Link href="http://www.legoengineering.com/platform/robolab/">ROBOLAB</Link> being my favorite part of school in my elementary years - engineering inventions out of legos and programming them to come to life. I have dedicated my career journey, no matter the field I'm in, to solving real world problems and designing creative solutions.

                    <br />
                    <br />

                    &emsp; &emsp; My passion: merging science and logic with real-world chaos. Take fractals: a mathematical concept of repeating simple processes, yet are the picture of chaos when we consider fractals in nature.  Looking to where science and nature merge is where innovation and creativity are born. This is why I have curated an interdisciplinary expertise in social work and programming.

                    <br />
                    <br />
                </Typography>
            </Grid>
            <Grid item md={10} xs={12} >
            <Card raised sx={{ ml: '10%', mr: '10%' }}>
                <CardHeader 
                    action = {
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            
                            <ExpandMoreIcon />
                        </ExpandMore>
                    }
                    title = "Want the long story?" />
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography variant='body1'>
                            &emsp; &emsp;I pursued a degree in social work because after years of STEM classes, I felt unbalanced. I understood reality through a rational, scientific lens, but we all know life is more complex than that. I wanted to challenge myself to understand the human condition, what motivates us, what causes impact in our lives, how we can impact each other. My academic training as well as my real-world experiences have allowed to build my understanding of others, communication, and confidence as a collaborator and leader.
                            <br/>
                            <br/>
                            &emsp; &emsp;I had originally planned to utilize this training to become a physician and go to medical school. While working in clinical research, I started to teach myself coding and data analytics. My lab was also unique because we were actively building a web application and acting more like a tech start-up. I realized, I actually loved coding and only thought I hated it cause I was bullied in my AP Computer Science as the only girl in a room of 30 boys. I started to better understand what product designed and data analysis entailed and saw that it merges the technical with the messy human condition. And well, since then, I've been trying to break into the technical world.
                        </Typography>
                    </CardContent>
                </Collapse>

            </Card>
            </Grid>
        </Grid>
    )
}

// Three categories/traits
// 1. Scrappy
// 2.

// one template for three categories with a fun arrow and then animated toggle to view information

