"use client"

import { useParams } from "next/navigation"
import { Container, Typography, CircularProgress } from "@mui/material"
import { useWomanDetail } from "../hooks/useWomanDetail"
import { decode } from "html-entities"

export default function WomanDetailPage() {
  const params = useParams()

  const idParam = Array.isArray(params.id) ? params.id[0] : params.id;

  const { data: woman, isLoading, isError } = useWomanDetail(idParam!)

  if (isLoading) return <CircularProgress />
  if (isError || !woman) return <Typography>Woman not found</Typography>
  const description = decode(woman.description);

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h3" fontWeight={700} gutterBottom>
        {woman?.title}
      </Typography>

      <img
        src={woman?.metadata?.image?.url || "public/images/not-found.png"}
        alt={woman?.title}
        style={{ width: "100%", borderRadius: 8, marginBottom: 24 }}
      />

      <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
        {description}
      </Typography>
    </Container>
  )
}
