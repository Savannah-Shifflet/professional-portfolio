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
        <Box sx = {{mt: '1%'}}>
            <IconButton sx={{m:1}} target='_blank' rel='noreferrer' href = 'https://www.linkedin.com/in/savannah-shifflet/' aria-label="Link to Savannah Shifflet's LinkedIn">
                <LinkedInIcon color='primary'/>
            </IconButton>

            <IconButton sx={{m:1}} target='_blank' rel='noreferrer' href = 'https://github.com/Savannah-Shifflet' aria-label="Link to Savannah Shifflet's GitHub" >
                <GitHubIcon color='primary'/>
            </IconButton>

            {/* tooltip that email copied */}
            <ClickAwayListener onClickAway={handleTooltipClose}>
                    <Tooltip
                        componentsProps={{
                            tooltip: {
                                sx: {bgcolor: 'accent.main', color: 'primary.main', fontWeight: 'bold'}
                            },
                            arrow: {
                                sx: {color: 'accent.main'}
                            }
                        }}
                        onClose={handleTooltipClose}
                        open={open}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title = "Copied to clipboard!" 
                        arrow>
                        <IconButton sx={{m:1}} onClick={handleTooltipOpen} aria-label="Click to copy Savannah Shifflet's email" >
                            <EmailIcon color='primary'/>
                        </IconButton>
                    </Tooltip>
            </ClickAwayListener>
        </Box>
    )
}