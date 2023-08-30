import { WrapText } from '@mui/icons-material';
import {createTheme, responsiveFontSizes } from '@mui/material';
import { hover } from '@testing-library/user-event/dist/hover';

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
        MuiLink: {
            variants: [
                {
                    props: { variant: 'nav'},
                    style: {
                        fontSize: '1.1rem',
                        textDecoration: 'none',
                        margin: '1rem',
                        "&:hover":{
                            textShadow: '#E29263 -1.2px 0.3px',
                        }
                    }
                },
                {
                    props: {variant: 'header'},
                    style: {
                        fontFamily:  [ '"Overpass"', 'sans-serif'].join(','),
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        color: 'primary',
                        lineHeight: 1,
                        textDecoration: 'none'
                    }
                }
        ]
        }
    },
    typography: {
        h1: {
            fontFamily:  [ '"Overpass"', 'sans-serif'].join(','),
            fontSize: '4rem',
            fontWeight: 'bold',
            color: 'primary',
            lineHeight: 1
        },
        h4: {
            fontFamily:  [ '"Overpass"', 'sans-serif'].join(','),
            fontSize: '2rem',
            fontWeight: 'bold',
            color: 'primary',
            lineHeight: 1
        }
    }
})

export default responsiveFontSizes(theme); 