'use client';

import React, { useState } from 'react';
import { Container, Box, Typography, Button, Stack, useMediaQuery, useTheme } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';

export default function Brasilterapia() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Header */}
      <Box
        sx={{
          backgroundColor: '#E91E63',
          color: '#ffffff',
          py: { xs: 4, md: 6 },
          mb: 4,
        }}
      >
        <Container maxWidth="lg">
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Button
                startIcon={<ArrowBackIcon />}
                sx={{
                  color: '#ffffff',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Volver
              </Button>
            </Link>
          </Stack>
          <Typography
            component="h1"
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
            }}
          >
            Brasilterapia
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255, 255, 255, 0.95)',
              fontSize: { xs: '1rem', md: '1.25rem' },
              mb: 3,
            }}
          >
            Catálogo de Destinos Turísticos en Brasil
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '700px',
            }}
          >
            Descubre los destinos más hermosos de Brasil a través de nuestro catálogo exclusivo Brasilterapia. La mejor terapia es viajar a lugares tan lindos que te transforman el alma.
          </Typography>
        </Container>
      </Box>

      {/* PDF Viewer */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        {/* Download Button */}
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            sx={{
              backgroundColor: '#E91E63',
              '&:hover': {
                backgroundColor: '#c2185b',
              },
            }}
            component="a"
            href="/catalogos/catalogo.pdf"
            download
          >
            Descargar Catálogo PDF
          </Button>
        </Box>

        {/* PDF Embed */}
        <Box
          sx={{
            width: '100%',
            backgroundColor: '#f5f5f5',
            borderRadius: '0.75rem',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e0e0e0',
          }}
        >
          {loading && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '600px',
                color: '#666666',
              }}
            >
              <Typography>Cargando catálogo...</Typography>
            </Box>
          )}
          <iframe
            src="/catalogos/catalogo.pdf"
            style={{
              width: '100%',
              height: isMobile ? '600px' : '900px',
              border: 'none',
              borderRadius: '0.75rem',
            }}
            onLoad={() => setLoading(false)}
            title="Catalogo Brasilterapia"
          />
        </Box>

        {/* Info Box */}
        <Box
          sx={{
            backgroundColor: 'rgba(233, 30, 99, 0.05)',
            border: '2px solid #E91E63',
            p: { xs: 3, md: 4 },
            borderRadius: '0.75rem',
            mt: 6,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: '#333333',
              mb: 2,
            }}
          >
            ¿Interesado en Viajar a Brasil?
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#666666',
              mb: 3,
            }}
          >
            Contáctanos para armar tu viaje perfecto a cualquiera de estos destinos paradisíacos de Brasil.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#E91E63',
                '&:hover': {
                  backgroundColor: '#c2185b',
                },
              }}
              component="a"
              href="https://wa.me/5492235892344?text=Hola%2C%20estoy%20interesado%20en%20los%20destinos%20de%20Brasilterapia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar por WhatsApp
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: '#E91E63',
                color: '#E91E63',
                '&:hover': {
                  borderColor: '#c2185b',
                  color: '#c2185b',
                },
              }}
              component="a"
              href="mailto:canorostours@gmail.com?subject=Consulta%20Brasilterapia"
            >
              Enviar Email
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
