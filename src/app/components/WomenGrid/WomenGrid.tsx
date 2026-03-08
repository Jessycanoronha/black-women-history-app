"use client"

import { Box, Grid, Pagination, Stack } from "@mui/material"
import WomanCard from "../WomanCard/WomanCard"
import { useWomen } from "@/features/women/hooks/useWomen"

export default function WomenGrid() {
  const { data, isLoading } = useWomen()

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
        {data?.map((woman) => (
          <Grid
            size={{ xs: 3 }}
            key={woman.id}
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
        <Pagination count={10} color="primary" />
      </Stack>
    </Box>
  )
}
