import { Card, CardContent, Typography, CardMedia } from "@mui/material"

type Props = {
  woman?: {
    title?: string
    metadata?: {
      image?: {
        url?: string
      }
    }
  }
}

export default function WomanCard({ woman }: Props) {
  const imageUrl =
    woman?.metadata?.image?.url ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      woman?.title ?? "Woman"
    )}&background=6A1B9A&color=fff`

  return (
    <Card
      sx={{
        borderRadius: 1,
        overflow: "hidden",
        boxShadow: 3,
        width: 250
      }}
    >
      <CardMedia
        component="img"
        image={imageUrl}
        alt={woman?.title}
        sx={{
          height: 220,
          width: "100%",
          objectFit: "cover",
          objectPosition:"center 30%"
        }}
      />

      <CardContent>
        <Typography variant="h6">
          {woman?.title}
        </Typography>
      </CardContent>
    </Card>
  )
}
