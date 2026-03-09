import { Container, Typography } from "@mui/material"
import { WomenResponse, getWomen } from "./women/services/womenApi"
import WomenGrid from "./women/components/WomenGrid/WomenGrid"

export default async function Home() {
  const { data: women }: WomenResponse = await getWomen(1)

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ mt: 6, mb: 4 }}
      >
        Black Women in History
      </Typography>

      <WomenGrid women={women} />
    </Container>
  )
}
