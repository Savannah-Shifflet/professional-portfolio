import React from 'react';
import { Typography, Grid, Box, Link, Button } from '@mui/material';
import Divider from '@mui/material/Divider';


// TODO: figure out how to format title of whole page
// TODO: add svg decorations

export default function PortfolioList({ pieces }) {
    const styles = {
        gif:{
            width: '100%',
            height: '100%',
            boxShadow: '#FFDDD2 -0.7em -0.7em'
        },
        badge: {
            margin: 3
        }
    }
    console.log(pieces)
    return (
        <Grid item container xs ={12} justifyContent={'center'} >
            {/* map each portfolio piece to formatting section */}
            {pieces.map((piece, index) => {
                let isLast = false;
                if(index === pieces.length-1){
                    isLast = true;
                }
                console.log(index);
                console.log(isLast)
                return(
                <Grid item container md={9} xs ={11} key={piece.title} sx={{m: 3}}>
                    {/* gif and title take up one row */}
                    <Grid item xs={7}>
                        <img src={piece.media} alt ='gif of portfolio piece' style ={styles.gif}/>
                    </Grid>
                    <Grid item xs = {5} sx ={{textAlign: 'right'}} >
                        <Typography variant ='h3'>{piece.title}</Typography>
                    </Grid>
                    {/* Links to the piece's github and deployed project are second row */}
                    <Grid item container xs ={12} sx={{my:2}} >
                        <Grid container item xs ={6} justifyContent='center'>
                            <Button target = "_blank" href={piece.github} variant="project">GitHub Repository</Button>
                        </Grid>
                        <Grid container item xs ={6} justifyContent='center'>
                            <Button variant='project' target = "_blank" href={piece.deployed} >Deployed Project</Button>
                        </Grid>
                    </Grid>
                    {/* list of technology badges used for the project */}
                    <Grid item xs ={12} >
                        {piece.technology.map((tech)=>{
                            return(<img key= {tech.alt} src={tech.source} alt = {tech.alt} style ={styles.badge}/>)
                        })}
                    </Grid>
                    <Grid item xs ={12} sx={{mt:'2.5%'}}>
                        { !isLast ? (<Divider  sx={{bgcolor: 'accent.main', height: '0.2em'}}/>) : (<div></div>)}
                    </Grid>
                </Grid>)
            })}
        </Grid>
    )
}