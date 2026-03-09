"use client"

import {
  Box,
  Container,
  Stack,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"
import MenuIcon from "@mui/icons-material/Menu"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import Link from "next/link"
import { useMemo, useState } from "react"
import { useThemeContext } from "@/theme/ThemeContext"

export default function Header() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { darkMode, toggleDarkMode } = useThemeContext()


  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Women", href: "/women" },
    { label: "Stories", href: "/stories" },
    { label: "About", href: "/about" },
  ]
  const imageUrl = useMemo(() => {
    return "/images/african-woman.png";
  }, []);
  return (
    <Box sx={{ position: "sticky", top: 20, zIndex: 1000 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 24px",
            borderRadius: "999px",
            border: isMobile ? "none" : `1px solid ${theme.palette.divider}`,
            backgroundColor: isMobile ? "transparent" : theme.palette.appBar,
            boxShadow: isMobile ? "none" : "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <img src={imageUrl} alt="" height={50} />
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: "primary.main", pl: 3 }}
          >
            Black Women
          </Typography>


          <Box sx={{ flex: 1 }} />


          {isMobile ? (
            <>
              <Box sx={{ marginLeft: 2 }}>
                <IconButton color="primary">
                  <ShoppingCartOutlinedIcon />
                </IconButton>
              </Box>
              <IconButton color="primary" onClick={toggleDarkMode}>
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <IconButton
                color="primary"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <Box sx={{ width: 250, p: 2 }}>
                  <List>
                    {menuItems.map((item) => (
                      <ListItemButton
                        key={item.href}
                        component={Link}
                        href={item.href}
                        onClick={() => setDrawerOpen(false)}
                      >
                        <ListItemText primary={item.label} />
                      </ListItemButton>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{
                "& a": {
                  textDecoration: "none",
                  color: "text.secondary",
                  fontWeight: 500,
                  transition: ".2s",
                },
                "& a:hover": {
                  color: "primary.main",
                },
              }}
            >
              {menuItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
              <Box sx={{ marginLeft: 2 }}>
                <IconButton color="primary">
                  <ShoppingCartOutlinedIcon />
                </IconButton>
              </Box>
              <IconButton color="primary">
                <PersonOutlineIcon />
              </IconButton>
              <IconButton color="primary" onClick={toggleDarkMode}>
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Stack>
          )}
        </Box>
      </Container>
    </Box>
  )
}
