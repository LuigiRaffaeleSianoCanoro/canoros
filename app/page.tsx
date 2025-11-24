'use client';

import React from 'react';
import Link from 'next/link';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ContactButtons from '@/components/ContactButtons';

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const services = [
    {
      icon: <TravelExploreIcon sx={{ fontSize: 48 }} />,
      title: 'Paquetes Personalizados',
      description: 'Diseñamos experiencias única según tus preferencias y presupuesto.',
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 48 }} />,
      title: 'Grupos y Eventos',
      description: 'Coordinamos viajes para grupos corporativos y eventos especiales.',
    },
    {
      icon: <LocalActivityIcon sx={{ fontSize: 48 }} />,
      title: 'Brasilterapia',
      description: 'Descubri Brasil!',
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 48 }} />,
      title: '20+ Años',
      description: 'Experiencia confiable en turismo receptivo de calidad.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url("https://images.squarespace-cdn.com/content/v1/5ccb5a1770833d00010ec4fb/1560456481268-9PPUICH0NXVIHQ9VC221/BRAZIL_MG_2701_2.jpg?format=1000w")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'relative',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          mb: 6,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            component="h1"
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              color: '#ffffff',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)',
            }}
          >
            Canoro's Tours
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: '#ffffff',
              mb: 4,
              fontSize: { xs: '1rem', md: '1.25rem' },
              textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)',
            }}
          >
            Incoming Services Especializado en Turismo Receptivo
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#ffffff',
              maxWidth: '700px',
              mx: 'auto',
              mb: 4,
              fontSize: '1.1rem',
              lineHeight: 1.8,
              textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)',
            }}
          >
            Con más de 20 años de experiencia, ofrecemos servicios de turismo receptivo de alta calidad en Argentina. Diseñamos paquetes personalizados, coordinamos grupos y ofrecemos experiencias únicas como Brasilterapia.
          </Typography>
          <ContactButtons size="large" />
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Typography
          component="h2"
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 6,
            color: '#333333',
            textAlign: 'center',
          }}
        >
          Nuestros Servicios
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(233, 30, 99, 0.15)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, pt: 4 }}>
                  <Box
                    sx={{
                      color: '#E91E63',
                      mb: 2,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 1.5,
                      color: '#333333',
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666666',
                      lineHeight: 1.6,
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section - Brasilterapia */}
      <Box
        sx={{
          backgroundColor: '#E91E63',
          color: '#ffffff',
          py: { xs: 6, md: 8 },
          mb: 10,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                component="h2"
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Brasilterapia
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                }}
              >
                Descubre nuestra experiencia exclusiva de bienestar y relajación. Brasilterapia combina técnicas tradicionales con confort moderno.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#ffffff',
                    color: '#E91E63',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: '#f0f0f0',
                    },
                  }}
                  component={Link}
                  href="/brasilterapia"
                >
                  Conocer Más
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: '#ffffff',
                    color: '#ffffff',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderColor: '#ffffff',
                    },
                  }}
                  component="a"
                  href="https://wa.me/5492235892344"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  p: 3,
                  borderRadius: '0.75rem',
                  textAlign: 'center',
                }}
              >
                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                  "Vive una experiencia transformadora de bienestar en el corazón de Argentina"
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Preview Section */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              component="h2"
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: '#333333',
              }}
            >
              Sobre Canoro's Tours
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#666666',
                mb: 2,
                lineHeight: 1.8,
              }}
            >
              Somos una empresa especializada en turismo receptivo con más de dos décadas de experiencia. Nuestro compromiso es ofrecer servicios de calidad superior, atención personalizada y experiencias inolvidables.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#666666',
                mb: 4,
                lineHeight: 1.8,
              }}
            >
              Trabajamos con grupos corporativos, agencias de viajes y viajeros individuales, adaptando cada servicio a necesidades específicas.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: '#333333',
                '&:hover': {
                  backgroundColor: '#1a1a1a',
                },
              }}
              component={Link}
              href="/sobre-nosotros"
            >
              Leer Más
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: '#f5f5f5',
                p: 4,
                borderRadius: '0.75rem',
                borderLeft: '4px solid #E91E63',
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
                Nuestra Misión
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#666666',
                  lineHeight: 1.8,
                }}
              >
                Crear experiencias de turismo receptivo excepcionales que superen las expectativas de nuestros clientes, combinando calidad, profesionalismo y autenticidad en cada detalle.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
