'use client';

import React from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  IconButton,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        color: '#333333',
        py: 6,
        mt: 10,
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* About */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              Canoro's Tours
            </Typography>
            <Typography variant="body2" sx={{ color: '#666666', lineHeight: 1.8 }}>
              Incoming Services especializado en turismo receptivo con más de 20 años de experiencia.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              Enlaces Rápidos
            </Typography>
            <Stack spacing={1}>
              <Link href="/" style={{ textDecoration: 'none' }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666666',
                    cursor: 'pointer',
                    '&:hover': { color: '#E91E63' },
                  }}
                >
                  Inicio
                </Typography>
              </Link>
              <Link href="/sobre-nosotros" style={{ textDecoration: 'none' }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666666',
                    cursor: 'pointer',
                    '&:hover': { color: '#E91E63' },
                  }}
                >
                  Sobre Nosotros
                </Typography>
              </Link>
              <Link href="/servicios" style={{ textDecoration: 'none' }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666666',
                    cursor: 'pointer',
                    '&:hover': { color: '#E91E63' },
                  }}
                >
                  Servicios
                </Typography>
              </Link>
              <Link href="/brasilterapia" style={{ textDecoration: 'none' }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666666',
                    cursor: 'pointer',
                    '&:hover': { color: '#E91E63' },
                  }}
                >
                  Brasilterapia
                </Typography>
              </Link>
            </Stack>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              Contacto
            </Typography>
            <Stack spacing={1.5}>
              <Link
                href="https://wa.me/5492235892344"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666666',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    '&:hover': { color: '#E91E63' },
                  }}
                >
                  <WhatsAppIcon sx={{ fontSize: '1.25rem' }} />
                  WhatsApp
                </Typography>
              </Link>
              <a href="tel:+542234516305" style={{ textDecoration: 'none' }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666666',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    '&:hover': { color: '#E91E63' },
                  }}
                >
                  <PhoneIcon sx={{ fontSize: '1.25rem' }} />
                  +54 223 451 6305
                </Typography>
              </a>
              <a href="mailto:canorostours@gmail.com" style={{ textDecoration: 'none' }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666666',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    '&:hover': { color: '#E91E63' },
                  }}
                >
                  <EmailIcon sx={{ fontSize: '1.25rem' }} />
                  canorostours@gmail.com
                </Typography>
              </a>
            </Stack>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              Redes Sociales
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                component="a"
                href="https://www.facebook.com/CanorosTours"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#333333',
                  '&:hover': { color: '#E91E63', backgroundColor: '#f0f0f0' },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://x.com/canorostours"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#333333',
                  '&:hover': { color: '#E91E63', backgroundColor: '#f0f0f0' },
                }}
              >
                <XIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://wa.me/5492235892344"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#333333',
                  '&:hover': { color: '#E91E63', backgroundColor: '#f0f0f0' },
                }}
              >
                <WhatsAppIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            borderTop: '1px solid #e0e0e0',
            pt: 4,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: '#666666' }}>
            © {currentYear} Canoro's Tours – Incoming Services. Todos los derechos reservados.
          </Typography>
          <Typography variant="caption" sx={{ color: '#999999', display: 'block', mt: 1 }}>
            Hecho con ❤️ en Argentina
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
