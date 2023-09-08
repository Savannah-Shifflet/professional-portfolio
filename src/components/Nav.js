import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Pdf from '../assets/Savannah_Shifflet_Resume.pdf'
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid, Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


// TODO: add resume page as well 

export default function Nav() {
    // TODO: resize menu for smaller screens - useMediaQuery hook for conditional rendering
    const mobile = useMediaQuery('(max-width:900px)');
    
    // Menu 
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    

    return (
        <Grid item height = '100vh' alignItems = 'center' sx = {{position: 'fixed', right: 12, display:'flex', zIndex: '2000'}} >
            { 
            mobile ? 
            (<Grid item sx={{alignSelf:'start'}}>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{mt:'20%'}}
                >
                    Menu
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}><Link variant='nav' sx={{m:0}} href="/about-me" >About Me</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link variant='nav' sx={{m:0}} href="/portfolio" >Portfolio</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link variant='nav' sx={{m:0}} target = "_blank" href={Pdf} >Resume</Link></MenuItem>
                </Menu>
            </Grid>)
            : (<Box sx = {{writingMode: 'vertical-rl', textOrientation: 'revert', transform: 'rotate(180deg)'}}>
                <Link variant='nav' href="/about-me" >About Me</Link>
                <Link variant='nav' href="/portfolio" >Portfolio</Link>
                <Link variant='nav' target = "_blank" href={Pdf} >Resume</Link>
            </Box>)
        }
    </Grid>
)
}


// const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Button
//         id="basic-button"
//         aria-controls={open ? 'basic-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         onClick={handleClick}
//       >
//         Dashboard
//       </Button>
//       <Menu
//         id="basic-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           'aria-labelledby': 'basic-button',
//         }}
//       >
//         <MenuItem onClick={handleClose}>Profile</MenuItem>
//         <MenuItem onClick={handleClose}>My account</MenuItem>
//         <MenuItem onClick={handleClose}>Logout</MenuItem>
//       </Menu>
//     </div>
//   );