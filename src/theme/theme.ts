import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  palette: {
    primary: {
      main: "#6A1B9A",
      light: "#9C4DCC",
      dark: "#38006B",
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#AB47BC",
    },

    background: {
      default: "#F5F3F7",
      paper: "#ffffff",
    },

    text: {
      primary: "#1C1C1C",
      secondary: "#6B6B6B",
    },
  },
typography: {
  fontFamily: "Inter, system-ui, sans-serif",

  h1: {
    fontWeight: 700,
    letterSpacing: "-0.5px",
  },

  h2: {
    fontWeight: 600,
  },

  h6: {
    fontWeight: 600,
  },

  body1: {
    fontSize: "0.95rem",
  },

  button: {
    textTransform: "none",
    fontWeight: 500,
  },
},

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
  },
})
