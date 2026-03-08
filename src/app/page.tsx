import { Container, Typography } from "@mui/material"
import WomenGrid from "./components/WomenGrid/WomenGrid"

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ mt: 6, mb: 4 }}
      >
        Black Women in History
      </Typography>

      <WomenGrid />
    </Container>
  )
}
