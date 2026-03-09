import { Woman } from "@/app/women/types/woman"
import { Card, CardContent, Typography, Box, Skeleton, Link, Button } from "@mui/material"
import { useState } from "react"
import getWomanImage from "../../utils/getWomanImage"

type Props = {
  woman?: Woman
}

export default function WomanCard({ woman }: Props) {
  const [loaded, setLoaded] = useState(false)

  const imageUrl =
    getWomanImage(woman!)
  return (
    <Card
      sx={{
        width: 260,
        borderRadius: 1,
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingTop: "80.25%",
          overflow: "hidden",
        }}
      >
        {!loaded && (
          <Skeleton
            variant="rectangular"
            animation="wave"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        )}

        <img
          src={imageUrl}
          alt={woman?.title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 20%",

            opacity: loaded ? 1 : 0,
            filter: loaded ? "blur(0px)" : "blur(12px)",
            transform: loaded ? "scale(1)" : "scale(1.05)",

            transition:
              "opacity 0.5s ease, filter 0.4s ease, transform 0.6s ease",
          }}
        />
      </Box>

      <CardContent sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}>
        <Typography variant="h6" fontWeight={600}>
          {woman?.title}
        </Typography>
        <Box sx={{ mt: "auto", display: "flex", alignContent: "flex-end", justifyContent: "center" }}>

          <Link href={`/women/${woman?.order}`} style={{ textDecoration: "none" }}>

            <Button variant="outlined" size="small" aria-label={`Ver detalhes de ${woman?.title}`} fullWidth>
              See Details
            </Button>
          </Link>
        </Box>
      </CardContent>
    </Card>
  )
}
