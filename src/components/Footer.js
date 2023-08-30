import React from 'react';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Box from '@mui/material/Box';


export default function Footer() {
    return (
        <Box sx={{ position: 'fixed', bottom: 8, left: 8 }}>
            <IconButton sx={{m:1}} target='_blank' rel='noreferrer' href = 'https://www.linkedin.com/in/savannah-shifflet/'>
                <LinkedInIcon color='primary'/>
            </IconButton>

            <IconButton sx={{m:1}} target='_blank' rel='noreferrer' href = 'https://github.com/Savannah-Shifflet'>
                <GitHubIcon color='primary'/>
            </IconButton>

            {/* TODO: add copy email functionality with snackbar notification or tooltip that email copied */}
            <IconButton sx={{m:1}} href = 'savannah.shifflet@gmail.com'>
                <EmailIcon color='primary'/>
            </IconButton>
        </Box>
    )
}