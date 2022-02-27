import { createTheme } from "@mui/material/styles";

let theme = createTheme({
    palette: {
        primary: {
            main: "#3F51B5",
        },
        icon : {
            main: "#fff"
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
        body2: {
            fontSize: 10
        },
    },
})

export { theme }