import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#4a5156",
    },
    secondary: {
      main: "#777777",
      light: "#bababa",
    },
  },
  typography: {
    fontFamily: ["Alegreya SC", "Montserrat, serif"],
    h6: {
      fontSize: "1.2rem",
    },
  },
});

export default theme;
