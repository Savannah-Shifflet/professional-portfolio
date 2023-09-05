import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Pdf from '../assets/Savannah_Shifflet_Resume.pdf'

// TODO: add resume page as well 

export default function Menu() {
    // TODO: resize menu for smaller screens - useMediaQuery hook for conditional rendering
    // const dimensions = {
    //     height: window.innerHeight,
    //     width: window.innerWidth
    // }

    // const handleResize = () => {
    //     dimensions.height = window.innerHeight
    //     dimensions.width = window.innerWidth
    //     return <div>`the width is ${dimensions.width} and the height is ${dimensions.height}`</div>;
    // }

    // window.addEventListener('resize', handleResize);

    // return <div>`the width is ${dimensions.width} and the height is ${dimensions.height}`</div>;

    return (
            <Box sx = {{writingMode: 'vertical-rl', textOrientation: 'revert', transform: 'rotate(180deg)'}}>
                <Link variant='nav' href="/about-me" >About Me</Link>
                <Link variant='nav' href="/portfolio" >Portfolio</Link>
                <Link variant='nav' target = "_blank" href={Pdf} >Resume</Link>
            </Box>
)
}