import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './styles/theme';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
    <ThemeProvider theme = {theme}>
    <CssBaseline/>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)