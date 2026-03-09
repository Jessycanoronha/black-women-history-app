"use client"

import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material"
import { useThemeContext, ThemeProvider } from "./ThemeContext"
import { lightTheme, darkTheme } from "./theme"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <InnerProviders>{children}</InnerProviders>
    </ThemeProvider>
  )
}

function InnerProviders({ children }: { children: React.ReactNode }) {
  const { darkMode } = useThemeContext()

  return (
    <MuiThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
