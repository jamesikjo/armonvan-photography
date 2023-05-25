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
