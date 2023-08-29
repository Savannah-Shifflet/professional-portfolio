import React from 'react';
import { useTheme } from '@emotion/react';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Box from '@mui/material/Box';


export default function Footer() {
    const theme = useTheme();
    return (
        <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
            {/* make links take you to a new tab */}
            <IconButton href = 'https://www.linkedin.com/in/savannah-shifflet/'>
                <LinkedInIcon color='primary'/>
            </IconButton>

            <IconButton href = 'https://github.com/Savannah-Shifflet'>
                <GitHubIcon color='primary'/>
            </IconButton>

            {/* TODO: add copy email functionality with snackbar notification or tooltip that email copied */}
            <IconButton href = 'savannah.shifflet@gmail.com'>
                <EmailIcon color='primary'/>
            </IconButton>
        </Box>
    )
}