import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

// Theme to override default theme
const Theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#FF0000",
    },
    info: {
      main: grey[500],
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
    MuiInputBase: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // borderBottom: `1px solid ${grey[500]}`
        },
      },
    }
  },
});

export default Theme;
