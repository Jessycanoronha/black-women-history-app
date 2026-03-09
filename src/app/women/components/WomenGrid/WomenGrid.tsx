"use client"

import { useState } from "react"
import { Box, Grid, Pagination, Stack, Skeleton, useTheme } from "@mui/material"
import WomanCard from "../WomanCard/WomanCard"
import { useWomen } from "@/app/women/hooks/useWomen"
import { Woman } from "@/app/women/types/woman"

type Props = {
  women: Woman[]
}

export default function WomenGrid({ women: initialWomen }: Props) {
  const theme = useTheme()

  const [page, setPage] = useState(1)
  const { data, isLoading, isError } = useWomen(page)

  const womenToRender = data?.data ?? initialWomen

  if (isError) return <Box>Failed to load women</Box>

  return (
    <Box
      sx={{
        background: theme.palette.mode === "light"
          ? "#fff"
          : theme.palette.background.default,
        borderRadius: 3,
        border: theme.palette.mode === "light"
          ? "1px solid #eee": "",
        padding: 4,
      }}
    >
      <Grid container spacing={4}>
        {isLoading
          ? Array.from({ length: 12 }).map((_, i) => (
            <Grid
              key={i}
              size={{ xs: 3 }}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Skeleton variant="rectangular" width={260} height={300} />
            </Grid>
          ))
          : womenToRender?.map((woman) => (
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
