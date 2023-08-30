import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
            <Box height = '100vh' alignItems = 'center' sx = {{position: 'fixed', right: 12, display:'flex'}} >
                <Box sx = {{writingMode: 'vertical-rl', textOrientation: 'revert', transform: 'rotate(180deg)'}}>
                    <Link href="/about-me">About Me</Link>
                    <Link href="/portfolio">Portfolio</Link>
                    <Link href="/resume">Resume</Link>
                </Box>
            </Box>
    )
}