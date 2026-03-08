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
        width: 260,
        overflow: "hidden",
        borderRadius: 1,
        transition: "all .3s ease",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
        },
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
        <Typography variant="h6" fontWeight={600}>
          {woman?.title}
        </Typography>
      </CardContent>
    </Card>
  )
}
