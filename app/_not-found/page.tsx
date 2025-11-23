'use client';

import React from 'react';
import Link from 'next/link';
import {
  Container,
  Box,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 200px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 4,
          }}
        >
          <ErrorOutlineIcon
            sx={{
              fontSize: 120,
              color: '#E91E63',
            }}
          />
        </Box>

        <Typography
          component="h1"
          variant="h2"
          sx={{
            fontWeight: 800,
            mb: 2,
            color: '#333333',
            fontSize: { xs: '2.5rem', md: '3.5rem' },
          }}
        >
          404
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: '#333333',
          }}
        >
          Página no encontrada
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: '#666666',
            mb: 4,
            fontSize: '1.1rem',
            lineHeight: 1.8,
          }}
        >
          Lo sentimos, la página que estás buscando no existe o ha sido movida. Pero no te preocupes, aquí te ofrecemos algunos enlaces útiles para volver al camino correcto.
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ justifyContent: 'center' }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#333333',
              '&:hover': {
                backgroundColor: '#1a1a1a',
              },
            }}
            component={Link}
            href="/"
          >
            Ir al Inicio
          </Button>

          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: '#E91E63',
              color: '#E91E63',
              '&:hover': {
                borderColor: '#c2185b',
                color: '#c2185b',
              },
            }}
            component={Link}
            href="/contacto"
          >
            Contactar Soporte
          </Button>
        </Stack>

        <Box
          sx={{
            mt: 8,
            pt: 4,
            borderTop: '1px solid #e0e0e0',
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: '#999999',
              mb: 3,
            }}
          >
            Páginas sugeridas:
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            sx={{ justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Typography
                sx={{
                  color: '#E91E63',
                  fontWeight: 600,
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Inicio
              </Typography>
            </Link>

            <Link href="/sobre-nosotros" style={{ textDecoration: 'none' }}>
              <Typography
                sx={{
                  color: '#E91E63',
                  fontWeight: 600,
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Sobre Nosotros
              </Typography>
            </Link>

            <Link href="/servicios" style={{ textDecoration: 'none' }}>
              <Typography
                sx={{
                  color: '#E91E63',
                  fontWeight: 600,
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Servicios
              </Typography>
            </Link>

            <Link href="/brasilterapia" style={{ textDecoration: 'none' }}>
              <Typography
                sx={{
                  color: '#E91E63',
                  fontWeight: 600,
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Brasilterapia
              </Typography>
            </Link>

            <Link href="/contacto" style={{ textDecoration: 'none' }}>
              <Typography
                sx={{
                  color: '#E91E63',
                  fontWeight: 600,
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Contacto
              </Typography>
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

