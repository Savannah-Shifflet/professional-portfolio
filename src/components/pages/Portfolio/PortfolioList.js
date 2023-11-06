import React from 'react';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';


// TODO: add svg decorations

export default function PortfolioList({ pieces }) {
    const mobile = useMediaQuery('(max-width:900px)');

    const styles = {
        gif:{
            width: '100%',
            height: 'auto',
            boxShadow: '#FFDDD2 -0.7em -0.7em',
            maxWidth: '50rem'
        },
        badge: {
            margin: 3
        }
    }
    return (
        <Grid item container xs ={12} justifyContent={'space-between'} >
            {/* map each portfolio piece to formatting section */}
            {pieces.map((piece, index) => {
                let isLast = false;
                if(index === pieces.length-1){
                    isLast = true;
                }

                let disabled = false;
                if(piece.disabled){
                    disabled=true;
                }
                return(
                <Grid item container xs ={12} xl={5} key={piece.title} sx={{m: 3}}>
                    {/* gif, title, summary take up one row */}
                    <Grid item xs={11} md={7}>
                        {
                            mobile?
                            (<img src={piece.mobileMedia} style ={styles.gif} alt={piece.title}/>):
                            (<video autoPlay loop muted playsInline src={piece.media} style ={styles.gif}></video>)
                        }
                    </Grid>

                    <Grid container item xs = {11} md={5}  justifyContent='flex-end'>
                        <Grid item xs={11} sx={{height: 'fit-content'}}>
                            <Typography variant ='h4' sx={{textAlign: 'right'}}>{piece.title}</Typography>
                        </Grid>
                        <Grid item xs={11}>
                            <Typography variant ='body1'>{piece.summary}</Typography>
                        </Grid>

                    </Grid>

                    {/* list of technology badges used for the project */}
                    <Grid container item xs ={12} sx={{mt:'2.5%'}}>
                            {piece.technology.map((tech)=>{
                                return(
                                    <Grid item sx={{height:'fit-content'}} key={tech.source}>
                                        <img key= {tech.alt} src={tech.source} alt = {tech.alt} style ={styles.badge}/>
                                    </Grid>)
                            })}
                    </Grid>

                    {/* Links to the piece's github and deployed project are second row */}
                    <Grid item container xs ={11} md={12}sx={{my:2}} justifyContent='space-between'>
                        <Grid container item xs ={5} md={6} justifyContent='center'>
                            <Button target = "_blank" href={piece.github} aria-label='Link to GitHub repo for project' variant="project" sx={{textAlign: 'center'}}>GitHub Repository</Button>
                        </Grid>
                        <Grid container item xs ={5} md={6} justifyContent='center'>
                            {disabled?<Button variant='project' target = "_blank" href={piece.deployed} disabled sx={{textAlign: 'center'}}>Coming soon...</Button>: <Button variant='project' target = "_blank" href={piece.deployed} aria-label='Link to deployed project' sx={{textAlign: 'center'}}>Deployed Project</Button>
                            }
                        </Grid>
                    </Grid>

                    <Grid item xs ={12} sx={{mt:'2.5%'}}>
                        { !isLast ? (<Divider  sx={{bgcolor: 'accent.main', height: '0.2em'}}/>) : (<div></div>)}
                    </Grid>
                </Grid>)
            })}
        </Grid>
    )
}