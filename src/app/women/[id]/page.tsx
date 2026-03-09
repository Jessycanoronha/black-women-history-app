"use client"

import { useParams } from "next/navigation"
import { Container, Typography, CircularProgress, Box, Grid, useTheme } from "@mui/material"
import { useWomanDetail } from "../hooks/useWomanDetail"
import { decode } from "html-entities"
import { LoremIpsum } from "lorem-ipsum"

export default function WomanDetailPage() {
  const params = useParams()
  const theme = useTheme()


  const idParam = Array.isArray(params.id) ? params.id[0] : params.id;

  const { data: woman, isLoading, isError } = useWomanDetail(idParam!)

  if (isLoading) return <CircularProgress />
  if (isError || !woman) return <Typography>Woman not found</Typography>
  const description = decode(woman.description);

  const lorem = new LoremIpsum({
    sentencesPerParagraph: { max: 1, min: 1 },
    wordsPerSentence: { max: 4, min: 2 },
  })

  const infoItems = [
    { label: "Name", value: woman?.title },
    { label: "Birth Date", value: woman?.metadata?.birthdate },
    { label: "Death Date", value: woman?.metadata?.deathdate },
    { label: "Ocupation", value: lorem.generateWords(2) },
    { label: "City", value: lorem.generateWords(1) },
    { label: "State", value: lorem.generateWords(1) },
    { label: "Country", value: lorem.generateWords(1) },
    { label: "Religion", value: lorem.generateWords(2) },
    { label: "Contribution", value: lorem.generateWords(2) },
    { label: "Region", value: lorem.generateWords(2) },
  ]

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Box
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: theme.shadows[3],
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Box
          sx={(theme) => ({
            display: "flex",
            justifyContent: "center",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#f5f5f5"
                : theme.palette.background.default,
            p: 3,
            borderRadius: 2,
          })}
        >
          <Box
            component="img"
            src={woman?.metadata?.image?.url || "/images/not-found.png"}
            alt={woman?.title}
            sx={(theme) => ({
              width:  theme.palette.mode === "light" ? "100%" : 300,
              height: 300,
              borderRadius: theme.palette.mode === "light" ? "" : 30,
              objectFit: "cover",
              backgroundColor:
                theme.palette.mode === "light" ? theme.palette.background.paper : "#fff",
            })}
          />
        </Box>

        <Box sx={{ p: 4 }}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {woman?.title}
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
            {infoItems.map((item, index) => (
              <Grid size={{ xs: 3 }} key={index}>
                <Box
                  sx={{
                    backgroundColor:
                      theme.palette.mode === "light" ? "#f5f5f5" : theme.palette.background.default, borderRadius: 2,
                    p: 2,
                    height: 80,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    boxShadow: theme.palette.mode === "light" ? "0 2px 8px rgba(0,0,0,0.05)" : "0 2px 8px rgba(255,255,255,0.05)",
                  }}
                >
                  <Typography variant="subtitle2" color="text.secondary">
                    {item.label}
                  </Typography>
                  <Typography variant="body2" fontWeight={600}>
                    {item.value || "-"}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
            {description}
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}
