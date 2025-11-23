'use client';

import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import HotelIcon from '@mui/icons-material/Hotel';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CompassCalibrationIcon from '@mui/icons-material/CompassCalibration';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DownloadIcon from '@mui/icons-material/Download';
import ContactButtons from '@/components/ContactButtons';

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 'transfer',
    title: 'Traslados y Transporte',
    icon: <LocalTaxiIcon sx={{ fontSize: 48 }} />,
    description: 'Servicio de transfer confiable desde/hacia aeropuertos y hoteles con vehículos cómodos y conductores profesionales.',
    features: [
      'Vehículos modernos y bien mantenidos',
      'Conductores bilingües disponibles',
      'Traslados desde aeropuerto',
      'Servicio 24/7',
      'Tarifas fijas sin sorpresas',
    ],
  },
  {
    id: 'accommodation',
    title: 'Hospedaje Selectivo',
    icon: <HotelIcon sx={{ fontSize: 48 }} />,
    description: 'Acceso a una red de hoteles 3, 4 y 5 estrellas seleccionados en las mejores ubicaciones de Argentina.',
    features: [
      'Hoteles verificados y de confianza',
      'Mejores tarifas negociadas',
      'Variedad de categorías',
      'Asistencia antes y durante la estadía',
      'Confirmación inmediata',
    ],
  },
  {
    id: 'tours',
    title: 'Excursiones y Tours',
    icon: <CompassCalibrationIcon sx={{ fontSize: 48 }} />,
    description: 'Tours guiados a los principales destinos turísticos con guías profesionales en español e inglés.',
    features: [
      'Itinerarios personalizables',
      'Guías certificados y experimentados',
      'Pequeños grupos o privados',
      'Seguro de viaje incluido',
      'Flexibilidad en horarios',
    ],
  },
  {
    id: 'dining',
    title: 'Experiencia Gastronómica',
    icon: <RestaurantIcon sx={{ fontSize: 48 }} />,
    description: 'Reservas en restaurantes destacados, degustaciones de vinos y experiencias culinarias locales.',
    features: [
      'Restaurantes premium seleccionados',
      'Reservas garantizadas',
      'Experiencias de vino y degustación',
      'Cenas temáticas especiales',
      'Acomodación de preferencias dietéticas',
    ],
  },
  {
    id: 'groups',
    title: 'Coordinación de Grupos',
    icon: <GroupsIcon sx={{ fontSize: 48 }} />,
    description: 'Planificación y coordinación integral de viajes para grupos corporativos, familias y eventos.',
    features: [
      'Planificación personalizada',
      'Coordinador dedicado',
      'Descuentos por volumen',
      'Itinerarios flexibles',
      'Asistencia completa en destino',
    ],
  },
  {
    id: 'brasilterapia',
    title: 'Brasilterapia',
    icon: <AirplaneTicketIcon sx={{ fontSize: 48 }} />,
    description: 'Nuestra experiencia exclusiva de bienestar que combina spa, relajación y experiencias transformadoras.',
    features: [
      'Tratamientos holísticos',
      'Espacios diseñados para el bienestar',
      'Instructores especializados',
      'Paquetes de varios días',
      'Resultados comprobados',
    ],
  },
];

export default function Servicios() {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: '#E91E63',
          color: '#ffffff',
          py: { xs: 6, md: 8 },
          mb: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
            }}
          >
            Nuestros Servicios
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: { xs: '1rem', md: '1.25rem' },
            }}
          >
            Soluciones completas de turismo receptivo
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Introducción */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography
            variant="body1"
            sx={{
              color: '#666666',
              maxWidth: '800px',
              mx: 'auto',
              fontSize: '1.1rem',
              lineHeight: 1.8,
            }}
          >
            Ofrecemos una gama completa de servicios de turismo receptivo diseñados para satisfacer todas tus necesidades de viaje. Desde traslados confortables hasta experiencias exclusivas, nos aseguramos de que cada momento sea memorable.
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={4} sx={{ mb: 10 }}>
          {services.map((service) => (
            <Grid item xs={12} md={6} key={service.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(233, 30, 99, 0.15)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        color: '#E91E63',
                        mr: 2,
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#333333',
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666666',
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    {service.description}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 700,
                      color: '#333333',
                      mb: 1.5,
                    }}
                  >
                    Características:
                  </Typography>

                  <List sx={{ pt: 0 }}>
                    {service.features.map((feature, idx) => (
                      <ListItem
                        key={idx}
                        disablePadding
                        sx={{
                          py: 0.5,
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircleIcon
                            sx={{
                              fontSize: '1.25rem',
                              color: '#E91E63',
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          primaryTypographyProps={{
                            variant: 'body2',
                            sx: { color: '#666666' },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>

                <CardActions sx={{ pt: 0 }}>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{
                      backgroundColor: '#E91E63',
                      '&:hover': {
                        backgroundColor: '#c2185b',
                      },
                    }}
                    component="a"
                    href="https://wa.me/5492235892344"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consultar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Why Choose Us */}
        <Box
          sx={{
            backgroundColor: '#f5f5f5',
            p: { xs: 4, md: 6 },
            borderRadius: '0.75rem',
            mb: 10,
          }}
        >
          <Typography
            component="h2"
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 4,
              color: '#333333',
            }}
          >
            ¿Por Qué Elegirnos?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <CheckCircleIcon
                  sx={{
                    color: '#E91E63',
                    fontSize: '1.5rem',
                    flexShrink: 0,
                    mt: 0.5,
                  }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: '#333333',
                      mb: 0.5,
                    }}
                  >
                    Experiencia Comprobada
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666666',
                    }}
                  >
                    Más de 20 años satisfaciendo clientes en turismo receptivo.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <CheckCircleIcon
                  sx={{
                    color: '#E91E63',
                    fontSize: '1.5rem',
                    flexShrink: 0,
                    mt: 0.5,
                  }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: '#333333',
                      mb: 0.5,
                    }}
                  >
                    Atención Personalizada
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666666',
                    }}
                  >
                    Cada cliente recibe un servicio adaptado a sus necesidades específicas.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <CheckCircleIcon
                  sx={{
                    color: '#E91E63',
                    fontSize: '1.5rem',
                    flexShrink: 0,
                    mt: 0.5,
                  }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: '#333333',
                      mb: 0.5,
                    }}
                  >
                    Precios Competitivos
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666666',
                    }}
                  >
                    Mejores tarifas negociadas sin comprometer la calidad.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <CheckCircleIcon
                  sx={{
                    color: '#E91E63',
                    fontSize: '1.5rem',
                    flexShrink: 0,
                    mt: 0.5,
                  }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: '#333333',
                      mb: 0.5,
                    }}
                  >
                    Disponibilidad 24/7
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666666',
                    }}
                  >
                    Siempre disponibles para resolver cualquier inconveniente o consulta.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            backgroundColor: '#E91E63',
            color: '#ffffff',
            p: { xs: 4, md: 6 },
            borderRadius: '0.75rem',
            textAlign: 'center',
            mb: 10,
          }}
        >
          <Typography
            component="h2"
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
            }}
          >
            ¿Listo para Tu Próxima Aventura?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              fontSize: '1.1rem',
            }}
          >
            Contáctanos hoy y descubre cómo podemos hacer tu viaje inolvidable.
          </Typography>
          <ContactButtons />
        </Box>

        {/* Catalogo Section */}
        <Box
          sx={{
            backgroundColor: '#f5f5f5',
            p: { xs: 4, md: 6 },
            borderRadius: '0.75rem',
            mb: 8,
            textAlign: 'center',
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 3,
              color: '#333333',
            }}
          >
            Descubre Nuestro Catálogo Completo
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#666666',
              mb: 4,
              fontSize: '1.1rem',
            }}
          >
            Consulta nuestro catálogo detallado con todos nuestros servicios, paquetes y opciones disponibles.
          </Typography>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            sx={{
              backgroundColor: '#E91E63',
              '&:hover': {
                backgroundColor: '#c2185b',
              },
              mr: 2,
            }}
            component="a"
            href="/catalogos/catalogo.pdf"
            download
          >
            Descargar PDF
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
            href="/catalogos/catalogo.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver en línea
          </Button>
        </Box>
      </Container>
    </>
  );
}