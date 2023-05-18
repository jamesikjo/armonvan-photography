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
    warning: {
      main: "#f7a047",
    },
  },
  typography: {
    fontFamily: `"Montserrat", "serif"`,
    h6: {
      fontSize: "1.2rem",
    },
    body1: {
      lineHeight: "1.65rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
});

export default theme;
