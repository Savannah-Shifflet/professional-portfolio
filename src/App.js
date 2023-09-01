// import components 
import React from "react";
import Menu from './components/Menu';
import Footer from "./components/Footer";
import {Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import { Box, Grid } from "@mui/material";
import { BrowserRouter } from 'react-router-dom';

// style = {{minHeight:'100vh', position: 'relative'}}
function App() {
    return(
        <BrowserRouter>
            <Grid container sx={{minHeight: 'fit-content'}}>
                <Grid item height = '100vh' alignItems = 'center' sx = {{position: 'fixed', right: 12, display:'flex', zIndex: '2000'}} >
                    <Menu/>
                </Grid>
                <Grid item xs={12} lg={12}>
                    <Routes>
                        <Route path = '/' >
                            <Route index element={<Home />} />
                            <Route path='about-me' element={<About />} />
                            <Route path='portfolio' element={<Portfolio />} />
                            <Route path='resume' element={<Resume />} />
                        </Route>
                    </Routes>
                </Grid>
                <Grid item xs={12} lg={12} sx={{ alignSelf: 'flex-end' }}>
                    {/* <Box sx={{position: 'absolute', bottom: 8, left: 8}}> */}
                    <Footer  />
                </Grid>
            </Grid>
        </BrowserRouter>

    )
}

export default App;