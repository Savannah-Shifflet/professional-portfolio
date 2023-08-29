import {createTheme, responsiveFontSizes } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#344E41'
        },
        secondary: {
            main: '#E29263'
        },
        accent: {
            main: '#9CA92E'
        },
        background: {
            default: '#FEFAE0',
            paper: '#FEFAE0'
        },
        pink: {
            main: '#FFDDD2'
        },
        text: {
            primary: '#344E41',
            secondary: '#000000'
        }
    },
    components: {

    },
    typography: {
        h1: {
            fontFamily:  [ '"Overpass"', 'sans-serif'].join(','),
            fontSize: '4rem',
            fontWeight: 'bold',
            color: 'primary',
            lineHeight: 1
        }
    }
})

export default responsiveFontSizes(theme); 