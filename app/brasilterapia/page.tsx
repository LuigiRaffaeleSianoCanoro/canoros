'use client';

import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
} from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DownloadIcon from '@mui/icons-material/Download';
import ContactButtons from '@/components/ContactButtons';

interface Package {
  name: string;
  duration: string;
  price: string;
  description: string;
  includes: string[];
}

const packages: Package[] = [
  {
    name: 'Brasilterapia Básica',
    duration: '2 días',
    price: 'Consultar',
    description:
      'Una introducción a los tratamientos y técnicas de relajación que ofrece Brasilterapia.',
    includes: [
      'Masaje terapéutico de 60 minutos',
      'Aromaterapia',
      'Meditación guiada',
      'Hospedaje 1 noche en villa selecta',
      'Desayuno y cena incluidos',
    ],
  },
  {
    name: 'Brasilterapia Completa',
    duration: '4 días',
    price: 'Consultar',
    description:
      'Experiencia integral de bienestar con tratamientos avanzados y actividades de relajación.',
    includes: [
      'Masajes terapéuticos diarios',
      'Tratamientos faciales y corporales',
      'Yoga y meditación',
      'Terapias complementarias',
      'Hospedaje 3 noches',
      'Todas las comidas incluidas',
      'Acceso a piscina climatizada',
    ],
  },
  {
    name: 'Brasilterapia Premium',
    duration: '7 días',
    price: 'Consultar',
    description:
      'La experiencia más completa de Brasilterapia con atención personalizada y tratamientos exclusivos.',
    includes: [
      'Evaluación personalizada de salud y bienestar',
      'Masajes terapéuticos diarios',
      'Tratamientos spa premium',
      'Yoga, meditación y mindfulness avanzado',
      'Terapias holísticas personalizadas',
      'Hospedaje 6 noches en suite premium',
      'Todas las comidas (menú organizado)',
      'Acceso ilimitado a todas las instalaciones',
      'Sesión privada con terapeuta',
    ],
  },
];

const benefits = [
  'Reducción del estrés y ansiedad',
  'Mejora de la circulación sanguínea',
  'Alivio de dolores musculares',
  'Mejor calidad de sueño',
  'Rejuvenecimiento de la piel',
  'Equilibrio emocional y mental',
  'Fortalecimiento del sistema inmunológico',
  'Conexión con la naturaleza',
];

const faqs = [
  {
    question: '¿Cuál es la mejor época para visitar Brasilterapia?',
    answer:
      'Brasilterapia está disponible durante todo el año. Sin embargo, la primavera (septiembre-noviembre) y otoño (marzo-mayo) ofrecen temperaturas ideales. La disponibilidad depende de las reservaciones, por lo que recomendamos consultar con anticipación.',
  },
  {
    question: '¿Se puede realizar un paquete personalizado?',
    answer:
      'Absolutamente. Todos nuestros paquetes pueden personalizarse según tus necesidades, preferencias y presupuesto. Podemos combinar tratamientos, ajustar duraciones y adaptar actividades. Contáctanos para discutir tu experiencia ideal.',
  },
  {
    question: '¿Hay alguna contraindicación para los tratamientos?',
    answer:
      'La mayoría de los tratamientos son seguros, pero recomendamos consultar con tu médico si tienes condiciones médicas específicas. Durante la evaluación inicial, informaremos sobre cualquier consideración especial para tu caso.',
  },
  {
    question: '¿Se incluye transporte desde el aeropuerto?',
    answer:
      'Sí, el transporte desde/hacia el aeropuerto está incluido en todos nuestros paquetes. También coordinamos traslados a puntos de interés si los solicitas.',
  },
  {
    question: '¿Puedo traer a mi familia o amigos?',
    answer:
      'Por supuesto. Brasilterapia es una experiencia que se puede compartir. Tenemos opciones para grupos y pueden adaptar itinerarios si algunos miembros desean actividades diferentes.',
  },
  {
    question: '¿Cuál es la política de cancelación?',
    answer:
      'Contáctanos directamente para conocer nuestras políticas de cancelación y flexibilidad. Ofrecemos opciones según la anticipación de tu reserva.',
  },
];

export default function Brasilterapia() {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #E91E63 0%, #c2185b 100%)',
          color: '#ffffff',
          py: { xs: 8, md: 12 },
          mb: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <SpaIcon sx={{ fontSize: 64 }} />
          </Box>
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
              mb: 3,
              fontSize: { xs: '1rem', md: '1.25rem' },
            }}
          >
            Tu Experiencia de Bienestar Transformadora
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: '700px',
              mx: 'auto',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.9)',
            }}
          >
            Brasilterapia es nuestra experiencia exclusiva que combina técnicas de relajación, tratamientos holísticos y el poder sanador de la naturaleza. Diseñada para rejuvenecer tu cuerpo, mente y espíritu.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* What is Brasilterapia */}
        <Box sx={{ mb: 10 }}>
          <Typography
            component="h2"
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 4,
              color: '#333333',
              textAlign: 'center',
            }}
          >
            ¿Qué es Brasilterapia?
          </Typography>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                sx={{
                  color: '#666666',
                  lineHeight: 1.8,
                  mb: 2,
                  fontSize: '1.1rem',
                }}
              >
                Brasilterapia es una experiencia integrada de bienestar que combina los mejores tratamientos de spa, técnicas de relajación orientales, meditación consciente y la conexión con la naturaleza. Creamos un ambiente seguro y acogedor donde puedas desconectarte del estrés cotidiano.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#666666',
                  lineHeight: 1.8,
                  fontSize: '1.1rem',
                }}
              >
                Cada sesión es personalizada para satisfacer tus necesidades específicas. Nuestros terapeutas certificados trabajan contigo para diseñar un itinerario que aborde tus preocupaciones de bienestar, ya sea relajación profunda, alivio del dolor o equilibrio emocional.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: 'rgba(233, 30, 99, 0.08)',
                  p: 4,
                  borderRadius: '0.75rem',
                  border: '2px solid #E91E63',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: '#E91E63',
                    mb: 3,
                  }}
                >
                  Nuestro Enfoque
                </Typography>
                <List>
                  <ListItem disablePadding sx={{ mb: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <CheckCircleIcon
                        sx={{
                          fontSize: '1.5rem',
                          color: '#E91E63',
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Holístico"
                      secondary="Tratamos el cuerpo, mente y espíritu"
                      secondaryTypographyProps={{
                        sx: { color: '#666666' },
                      }}
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontWeight: 700,
                          color: '#333333',
                        },
                      }}
                    />
                  </ListItem>
                  <ListItem disablePadding sx={{ mb: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <CheckCircleIcon
                        sx={{
                          fontSize: '1.5rem',
                          color: '#E91E63',
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Personalizado"
                      secondary="Cada experiencia es única para ti"
                      secondaryTypographyProps={{
                        sx: { color: '#666666' },
                      }}
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontWeight: 700,
                          color: '#333333',
                        },
                      }}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <CheckCircleIcon
                        sx={{
                          fontSize: '1.5rem',
                          color: '#E91E63',
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Profesional"
                      secondary="Terapeutas certificados y experimentados"
                      secondaryTypographyProps={{
                        sx: { color: '#666666' },
                      }}
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontWeight: 700,
                          color: '#333333',
                        },
                      }}
                    />
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Benefits */}
        <Box sx={{ mb: 10 }}>
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
            Beneficios de Brasilterapia
          </Typography>
          <Grid container spacing={3}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    backgroundColor: '#f5f5f5',
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box
                      sx={{
                        color: '#E91E63',
                        mb: 2,
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <CheckCircleIcon sx={{ fontSize: 40 }} />
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#333333',
                        fontWeight: 600,
                        lineHeight: 1.5,
                      }}
                    >
                      {benefit}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Packages */}
        <Box sx={{ mb: 10 }}>
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
            Nuestros Paquetes
          </Typography>
          <Grid container spacing={4}>
            {packages.map((pkg, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    border: index === 1 ? '3px solid #E91E63' : '1px solid #e0e0e0',
                    position: 'relative',
                  }}
                >
                  {index === 1 && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translateX(-50%) translateY(-50%)',
                        backgroundColor: '#E91E63',
                        color: '#ffffff',
                        px: 2,
                        py: 0.5,
                        borderRadius: '20px',
                        fontSize: '0.875rem',
                        fontWeight: 700,
                      }}
                    >
                      MÁS POPULAR
                    </Box>
                  )}
                  <CardContent sx={{ flexGrow: 1, pt: index === 1 ? 4 : 2 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#333333',
                        mb: 1,
                      }}
                    >
                      {pkg.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#E91E63',
                        fontWeight: 700,
                        mb: 1,
                      }}
                    >
                      {pkg.duration}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666666',
                        mb: 2,
                      }}
                    >
                      {pkg.description}
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
                      Incluye:
                    </Typography>

                    <List sx={{ pt: 0 }}>
                      {pkg.includes.map((item, idx) => (
                        <ListItem
                          key={idx}
                          disablePadding
                          sx={{
                            py: 0.4,
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: 24 }}>
                            <CheckCircleIcon
                              sx={{
                                fontSize: '1rem',
                                color: '#E91E63',
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={item}
                            primaryTypographyProps={{
                              variant: 'body2',
                              sx: { color: '#666666' },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>

                    <Box sx={{ mt: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: '#E91E63',
                        }}
                      >
                        {pkg.price}
                      </Typography>
                    </Box>
                  </CardContent>

                  <Box sx={{ p: 2, pt: 0 }}>
                    <Button
                      fullWidth
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
                      Reservar Ahora
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* FAQs */}
        <Box sx={{ mb: 10 }}>
          <Typography
            component="h2"
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 4,
              color: '#333333',
              textAlign: 'center',
            }}
          >
            Preguntas Frecuentes
          </Typography>
          <Box sx={{ maxWidth: 900, mx: 'auto' }}>
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                sx={{
                  mb: 1,
                  '& .MuiAccordionSummary-root': {
                    backgroundColor: '#f5f5f5',
                    '&:hover': {
                      backgroundColor: '#efefef',
                    },
                  },
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      color: '#333333',
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666666',
                      lineHeight: 1.8,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>

        {/* Download PDFs */}
        <Grid container spacing={4} sx={{ mb: 10 }}>
          {/* Condiciones Generales */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: '#f5f5f5',
                p: { xs: 4, md: 6 },
                borderRadius: '0.75rem',
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Typography
                  component="h2"
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: '#333333',
                  }}
                >
                  Condiciones Generales
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666666',
                    mb: 4,
                  }}
                >
                  Términos, políticas de reserva y cancelación de nuestros servicios.
                </Typography>
              </Box>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<DownloadIcon />}
                  sx={{
                    backgroundColor: '#E91E63',
                    '&:hover': {
                      backgroundColor: '#c2185b',
                    },
                  }}
                  component="a"
                  href="/catalogos/condicionesgeneralcanoros.pdf"
                  download
                >
                  Descargar
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    borderColor: '#E91E63',
                    color: '#E91E63',
                    '&:hover': {
                      borderColor: '#c2185b',
                      color: '#c2185b',
                    },
                  }}
                  component="a"
                  href="/catalogos/condicionesgeneralcanoros.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver
                </Button>
              </Stack>
            </Box>
          </Grid>

          {/* Catálogo */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: 'rgba(233, 30, 99, 0.05)',
                p: { xs: 4, md: 6 },
                borderRadius: '0.75rem',
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '2px solid #E91E63',
              }}
            >
              <Box>
                <Typography
                  component="h2"
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: '#333333',
                  }}
                >
                  Catálogo Completo
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666666',
                    mb: 4,
                  }}
                >
                  Todos nuestros servicios, paquetes y experiencias disponibles.
                </Typography>
              </Box>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  size="small"
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
                  Descargar
                </Button>
                <Button
                  variant="outlined"
                  size="small"
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
                  Ver
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        {/* Final CTA */}
        <Box
          sx={{
            backgroundColor: '#E91E63',
            color: '#ffffff',
            p: { xs: 4, md: 6 },
            borderRadius: '0.75rem',
            textAlign: 'center',
            mb: 8,
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
            ¿Listo Para Transformar Tu Bienestar?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              fontSize: '1.1rem',
            }}
          >
            Contáctanos hoy y comienza tu viaje hacia el bienestar integral.
          </Typography>
          <ContactButtons />
        </Box>
      </Container>
    </>
  );
}
