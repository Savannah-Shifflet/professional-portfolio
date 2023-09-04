import React from 'react';
import { Typography, Grid, Box, Link } from '@mui/material';
import Blob from '../../../images/blob_mania.gif';
import DnD from '../../../images/DnD.gif';

const pieces = [
    {
        title: 'Blob Mania',
        media: Blob,
        github: 'https://github.com/Savannah-Shifflet/blob-mania',
        deployed: 'https://blob-mania-322037286e7b.herokuapp.com/',
        summary: 'A full-stack web-based multiplayer 2D shooter game with a retro aesthetic. The application is structured using the MVC paradigm and utilizes Node.js, sockets, and MySQL.',
        technology: [
            { source: 'https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black',
            alt: 'JavaScript'
            },
            { source: 'https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white',
            alt: 'HTML'
            },
            { source: 'https://img.shields.io/badge/Bootstrap-7952B3.svg?style=for-the-badge&logo=Bootstrap&logoColor=white',
            alt: 'Bootstrap'
            },
            { source: 'https://img.shields.io/badge/Handlebars.js-000000.svg?style=for-the-badge&logo=handlebarsdotjs&logoColor=white',
            alt: 'Handlebars'
            },
            { source: 'https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=MySQL&logoColor=white',
            alt: 'MySQL'
            },
            { source: 'https://img.shields.io/badge/Heroku-430098.svg?style=for-the-badge&logo=Heroku&logoColor=white',
            alt: 'Heroku'
            },
            { source: 'https://img.shields.io/badge/Socket.io-010101.svg?style=for-the-badge&logo=socketdotio&logoColor=white',
            alt: 'Socket.io'
            },
            { source: 'https://img.shields.io/badge/Sequelize-52B0E7.svg?style=for-the-badge&logo=Sequelize&logoColor=white',
            alt: 'Sequelize'
            },
            { source: 'https://img.shields.io/badge/Socket.io-010101.svg?style=for-the-badge&logo=socketdotio&logoColor=white',
            alt: 'Express'
            },
            { source: 'https://img.shields.io/badge/.ENV-ECD53F.svg?style=for-the-badge&logo=dotenv&logoColor=black',
            alt: 'dotenv'
            }
        ],
        responsibilities: ['Implemented sockets using the Node.js package Socket.io', 'Designed the web page aesthetic and branding for the game', 'Developed back-end RESTful API routes', 'Architected database models utilizing MySQL and Sequelize', 'Troubleshooted and debugged with team members across front-end and back-end code']
    },
    {
        title: 'Dungeons & Dragons: Quest for Glory!',
        media: DnD,
        github: 'https://github.com/BantaChristopher/DnD-quest-for-glory',
        deployed: 'https://bantachristopher.github.io/DnD-quest-for-glory/',
        summary: 'A front-end application that utilizes server-side APIs to randomize a creative D&D character and then generate a quest for that character with ChatGPT’s generative artificial intelligence.',
        responsibilities: ['Implemented the server-side APIs', 'Developed the interactive components through JavaScript', 'Troubleshooted and debugged with team members'],
        technology: [
            { source: 'https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black',
            alt: 'JavaScript'
            },
            { source: 'https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white',
            alt: 'HTML'
            },
            { source: 'https://img.shields.io/badge/Bulma-00D1B2.svg?style=for-the-badge&logo=Bulma&logoColor=white',
            alt: 'Bulma CSS Framework'
            },
            { source: 'https://img.shields.io/badge/jQuery-0769AD.svg?style=for-the-badge&logo=jQuery&logoColor=white',
            alt: 'JQuery'
            },

        ]
    }
];

export default function PortfolioList() {
    const styles = {
        gif:{
            width: '100%',
            height: '90%',
            boxShadow: '#FFDDD2 -0.3em -0.3em'
        },
        badge: {
            margin: 3
        }
    }
    return (
        <Grid item container xs ={12} justifyContent={'center'}>
            {pieces && pieces.map((piece) => {
                return(
                <Grid item container md={9} xs ={11} key={piece.title} spacing={1} sx={{mt: 3}}>
                    <Grid item xs={6}>
                        <img src={piece.media} alt ='gif of portfolio piece' style ={styles.gif}/>
                    </Grid>
                    <Grid item xs = {6}>
                        <Typography variant ='h3'>{piece.title}</Typography>
                    </Grid>
                    <Grid item container xs ={12}>
                        <Grid item xs ={6}>
                            <Link href={piece.github}>GitHub Repository</Link>
                        </Grid>
                        <Grid item xs ={6}>
                            <Link href={piece.deployed}>Deployed Project</Link>
                        </Grid>
                    </Grid>
                    <Grid item xs ={12} spacing={1}>
                        {piece.technology.map((tech)=>{
                            return(<img src={tech.source} alt = {tech.alt} style ={styles.badge}/>)
                        })}
                    </Grid>
                </Grid>)
            })}
        </Grid>
    )
}