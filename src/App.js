// import components 
import React from "react";
import Menu from './components/Menu';
import Footer from "./components/Footer";
import {Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import About from './components/pages/About';
import Resume from './components/pages/Resume';


function App() {
    return(
        <div >
            <Menu/>
            <Routes>
                <Route path = '/' >
                    <Route index element={<Home />} />
                    <Route path='about-me' element={<About />} />
                    <Route path='portfolio' element={<Portfolio />} />
                    <Route path='resume' element={<Resume />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    )
}

export default App;