'use client';

import { Container, Typography, Box, Button } from '@mui/material'

export default function Brasilterapia() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" sx={{ mt: 4 }}>Brasilterapia - Catálogo</Typography>
      <Box sx={{ mt: 3 }}>
        <iframe
          src="/catalogs/brasilterapia.pdf"
          title="Brasilterapia Catalog"
          width="100%"
          height={800}
          aria-label="Catalogo Brasilterapia"
        />
        <Button sx={{ mt: 2 }} variant="contained" href="/catalogs/brasilterapia.pdf" target="_blank" rel="noreferrer">
          Descargar PDF
        </Button>
      </Box>
    </Container>
  )
}
