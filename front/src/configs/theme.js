import { createTheme } from "@mui/material/styles";

let theme = createTheme({
    palette: {
        primary: {
            main: "#7E88C1",
        },
        icon: {
            main: "#fff"
        },
        card: {
            main: "#7E88C1"
        },
        bg: {
            main: '#232636'
        }
    },
    typography: {
        h1: {
            textAlign: "center",
        },
        h2: {
            fontSize: 20,
            fontWeight: 'bold',
        },
        h5: {
            color: '#FFFFFF'
        },
        body1: {
            color: '#FFFFFF'
        },
        body2: {
            fontSize: 10
        },
    },
})

export { theme }