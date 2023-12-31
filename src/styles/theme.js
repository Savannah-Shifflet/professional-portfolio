import {createTheme, responsiveFontSizes } from '@mui/material';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1920
        }
    },
    palette: {
        primary: {
            main: '#344E41',
            transparent: 'rgba(52, 78, 65, 0.5)'
        },
        secondary: {
            main: '#E29263',
            transparent: 'rgba(226, 146, 99, 0.5)'
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
        h2: {
            fontFamily:  [ '"Overpass"', 'sans-serif'].join(','),
            fontSize: '2rem',
            fontWeight: 'bold',
            color: 'primary',
            lineHeight: 1
        },
        // for page headers
        h3: {
            fontSize: '3rem',
            fontFamily: 'exo'
        },
        // Subtitles for sections on page - ex: 'my strengths'
        h4: {
            fontFamily: 'exo',
            fontSize: '2rem'
        },
        // subtitles for individual list items - ex: job title in experience section
        h5: {
            fontFamily: 'nunito',
            fontSize: '1.5rem',
            fontWeight: 'bold'
        },
        body1: {
            fontFamily: 'nunito',
            fontSize: '1.2rem',
            fontWeight: 'bold'
        }
    }
})

export default responsiveFontSizes(theme);