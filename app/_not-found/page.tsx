'use client';

import { Button, Typography, Box } from "@mui/material";

export default function NotFound() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      textAlign="center"
      px={4}
    >
      <Typography variant="h3" fontWeight="bold" mb={2}>
        Página no encontrada
      </Typography>

      <Typography variant="body1" color="text.secondary" mb={4}>
        Lo sentimos, la página que estás buscando no existe.
      </Typography>

      <Button variant="contained" href="/">
        Volver al inicio
      </Button>
    </Box>
  );
}

