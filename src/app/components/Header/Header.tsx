"use client"

import {
  Box,
  Container,
  Stack,
  Typography,
  IconButton
} from "@mui/material"

import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import Link from "next/link"

export default function Header() {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 20,
        zIndex: 1000,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            padding: "12px 24px",

            backgroundColor: "white",
            borderRadius: "999px",

            border: `1px solid ${theme.palette.divider}`,

            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          })}
        >
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "primary.main",
            }}
          >
            Mulheres Negras
          </Typography>

          <Stack
            direction="row"
            spacing={4}
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
            <Link href="/">Início</Link>
            <Link href="/women">Mulheres</Link>
            <Link href="/stories">Histórias</Link>
            <Link href="/about">Sobre</Link>
          </Stack>

          <Stack direction="row" spacing={1}>
            <IconButton color="primary">
              <PersonOutlineIcon />
            </IconButton>

            <IconButton color="primary">
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
