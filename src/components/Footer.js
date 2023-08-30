import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';


export default function Footer() {
    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        navigator.clipboard.writeText('Savannah.Shifflet@gmail.com');
        setOpen(true);
    }

    return (
        <Box sx={{ position: 'fixed', bottom: 8, left: 8 }}>
            <IconButton sx={{m:1}} target='_blank' rel='noreferrer' href = 'https://www.linkedin.com/in/savannah-shifflet/'>
                <LinkedInIcon color='primary'/>
            </IconButton>

            <IconButton sx={{m:1}} target='_blank' rel='noreferrer' href = 'https://github.com/Savannah-Shifflet'>
                <GitHubIcon color='primary'/>
            </IconButton>

            {/* TODO: add copy email functionality with snackbar notification or tooltip that email copied */}
            <ClickAwayListener onClickAway={handleTooltipClose}>
                    <Tooltip 
                        PopperProps={{
                            disablePortal: true,
                        }}
                        onClose={handleTooltipClose}
                        open={open}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title = "Copied to clipboard!" 
                        arrow>
                        <IconButton sx={{m:1}} onClick={handleTooltipOpen}>
                            <EmailIcon color='primary'/>
                        </IconButton>
                    </Tooltip>
            </ClickAwayListener>
        </Box>
    )
}