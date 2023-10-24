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
                        fontFamily: 'nunito',
                        fontSize: '1.1rem',
                        fontWeight: 'normal',
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
        },
        MuiButton: {
            variants: [
                {
                    props: { variant: 'project', color: 'primary' },
                    style: {
                        background: '#E29263',
                        color: '#344E41',
                        fontFamily: 'nunito',
                        fontWeight: 'bold',
                        "&:hover":{
                            background: 'rgba(226, 146, 99, 0.5)',
                        }
                    }
                }
            ]
        }
    },
    typography: {
        // for home page
        h1: {
            fontFamily:  [ '"Overpass"', 'sans-serif'].join(','),
            fontSize: '4rem',
            fontWeight: 'bold',
            color: 'primary',
            lineHeight: 1
        },
        // for Savannah Shifflet header on pages
        h4: {
            fontFamily:  [ '"Overpass"', 'sans-serif'].join(','),
            fontSize: '2rem',
            fontWeight: 'bold',
            color: 'primary',
            lineHeight: 1
        },
        // for page headers
        h2: {
            fontSize: '3rem',
            fontFamily: 'exo'
        },
        // Subtitles - 'my strengths'
        h3: {
            fontFamily: 'exo',
            fontSize: '2rem'
        },
        body1: {
            fontFamily: 'nunito',
            fontSize: '1.2rem',
            fontWeight: 'bold'
        }
    }
})

export default responsiveFontSizes(theme); 