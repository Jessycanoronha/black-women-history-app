import { createTheme } from "@mui/material/styles"
import { PaletteColorOptions } from "@mui/material"

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette['primary']
  }
  interface PaletteOptions {
    tertiary?: PaletteColorOptions
  }
}
export const theme = createTheme({
  palette: {
    mode: "light",
    tertiary: {
      main: "#FF6F61",
    },
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
    h1: { fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.5px" },
    h2: { fontWeight: 600, lineHeight: 1.3 },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
    body2: { fontSize: "0.875rem", lineHeight: 1.5 },
    button: { textTransform: "none", fontWeight: 600 },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "10px 20px",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.03)",
          }
        }

      },
    },
  },
})
