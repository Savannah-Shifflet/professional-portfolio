// import components 
import React from "react";
import Nav from './components/Nav';
import Footer from "./components/Footer";
import {Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio'
import About from './components/pages/About';

import { Box, Grid } from "@mui/material";
import { BrowserRouter } from 'react-router-dom';

// style = {{minHeight:'100vh', position: 'relative'}}
function App() {
    return(
        <BrowserRouter>
            <Grid container sx={{minHeight: 'fit-content'}}>
                <Nav/>
                <Grid item xs={12} lg={12}>
                    <Routes>
                        <Route path = '/' >
                            <Route index element={<Home />} />
                            <Route path='about-me' element={<About />} />
                            <Route path='portfolio' element={<Portfolio />} />
                        </Route>
                    </Routes>
                </Grid>
                <Grid item xs={12} lg={12} sx={{ alignSelf: 'flex-end' }}>
                    <Footer  />
                </Grid>
            </Grid>
        </BrowserRouter>

    )
}

export default App;