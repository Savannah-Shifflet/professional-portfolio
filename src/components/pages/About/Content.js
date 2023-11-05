import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function Content() {

    const [blogs, setBlogs] = useState([])


    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@savannah.shifflet')
        .then(resp => resp.json())
        .then(data => {
            setBlogs(data.items)
        })
    }, [])

  console.log(blogs)
    return (
        <Grid container item xs={12} sx={{ mt: '0.5%' }} justifyContent={'space-between'}>
            {blogs.map((blog) => {
                return(
                    <Grid item key={blog.title} xs={12} md={5} sx ={{pt: '0.2em', pb: '1em', pr:'1.4em'}}>
                    <Card>
                        <CardActionArea href={blog.link} target="_blank" rel="noopener noreferrer">
                        <CardMedia
                            sx={{height: 150}}
                            image={blog.thumbnail}
                            title={blog.title}
                            />
                            <CardContent>
                                <Typography variant='h5' sx={{padding: '2px', fontWeight: 'bold'}}>{blog.title}</Typography>
                            </CardContent>
                            </CardActionArea>
                    </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}
