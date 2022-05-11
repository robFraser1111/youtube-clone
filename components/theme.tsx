import { createTheme } from "@mui/material/styles";

// Theme to override default theme
const Theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#FF0000",
    },
  },
  components: {
    // Name of the component
    MuiCard: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          border: "0",
          boxShadow: "none",
        },
      },
    },
  },
});

export default Theme;
