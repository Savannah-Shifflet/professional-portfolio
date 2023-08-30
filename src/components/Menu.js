import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';


export default function Menu() {
    // TODO: resize menu for smaller screens
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
        <div>
            <Box height = '100vh' alignItems = 'center' sx = {{position: 'fixed', right: 12, display:'flex'}} >
                <Box sx = {{writingMode: 'vertical-rl', textOrientation: 'revert', transform: 'rotate(180deg)'}}>
                    <Link variant='nav' href="/about-me" >About Me</Link>
                    <Link variant='nav' href="/portfolio" >Portfolio</Link>
                    <Link variant='nav' href="/resume" >Resume</Link>
                </Box>
            </Box>
        </div>
)
}