"use client"

import { useState } from "react"
import { Box, Grid, Pagination, Stack } from "@mui/material"
import WomanCard from "../WomanCard/WomanCard"
import { useWomen } from "@/features/women/hooks/useWomen"

export default function WomenGrid() {
  const [page, setPage] = useState(1)

  const { data, isLoading } = useWomen(page)

  if (isLoading) return <p>Loading...</p>

  return (
    <Box
      sx={{
        background: "#fff",
        borderRadius: 3,
        border: "1px solid #eee",
        padding: 4,
      }}
    >
      <Grid container spacing={4}>
        {data?.data.map((woman) => (
          <Grid
            key={woman.id}
            size={{ xs: 3 }}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <WomanCard woman={woman} />
          </Grid>
        ))}
      </Grid>

      <Stack alignItems="center" sx={{ mt: 5 }}>
        <Pagination
          page={page}
          count={data?.totalPages ?? 1}
          color="primary"
          onChange={(_, value) => setPage(value)}
        />
      </Stack>
    </Box>
  )
}
