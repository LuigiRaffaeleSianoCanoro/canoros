'use client';

import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ContactButtons from '@/components/ContactButtons';

export default function SobreNosotros() {
  const milestones = [
    {
      year: '2003',
      title: 'Fundación',
      description: 'Se funda Canoro\'s Tours con visión de turismo receptivo de calidad.',
    },
    {
      year: '2010',
      title: 'Expansión Regional',
      description: 'Ampliamos servicios a nuevos destinos en Argentina.',
    },
    {
      year: '2018',
      title: 'Experiencia Brasilterapia',
      description: 'Lanzamos nuestra experiencia exclusiva de bienestar y relajación.',
    },
    {
      year: '2024',
      title: 'Presente',
      description: 'Más de 20 años sirviendo con excelencia y profesionalismo.',
    },
  ];

  const values = [
    {
      title: 'Calidad',
      description: 'Excelencia en cada aspecto de nuestros servicios.',
    },
    {
      title: 'Confianza',
      description: 'Relaciones sólidas basadas en transparencia y responsabilidad.',
    },
    {
      title: 'Experiencia',
      description: 'Más de 20 años conociendo el mercado y satisfaciendo clientes.',
    },
    {
      title: 'Innovación',
      description: 'Adaptación continua a las necesidades del turismo moderno.',
    },
    {
      title: 'Sostenibilidad',
      description: 'Compromiso con prácticas responsables y sustentables.',
    },
    {
      title: 'Atención',
      description: 'Servicio personalizado y dedicado a cada cliente.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: '#333333',
          color: '#ffffff',
          py: { xs: 6, md: 8 },
          mb: 6,
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
            Sobre Canoro's Tours
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: '#e0e0e0',
              fontSize: { xs: '1rem', md: '1.25rem' },
            }}
          >
            Más de 20 años de excelencia en turismo receptivo
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg">
        {/* Historia */}
        <Box sx={{ mb: 10 }}>
          <Typography
            component="h2"
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 4,
              color: '#333333',
            }}
          >
            Nuestra Historia
          </Typography>
          <Grid container spacing={4}>
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
                Canoro's Tours nace en 2003 con la visión de ofrecer servicios de turismo receptivo de máxima calidad. Desde nuestros inicios, nos hemos dedicado a crear experiencias memorables para viajeros de todo el mundo.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#666666',
                  lineHeight: 1.8,
                  fontSize: '1.1rem',
                }}
              >
                Con más de dos décadas de experiencia, hemos consolidado una reputación sólida trabajando con agencias de viajes internacionales, operadores turísticos y viajeros individuales. Nuestro éxito se debe a nuestro compromiso con la calidad y la satisfacción del cliente.
              </Typography>
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
                  ¿Por Qué Elegirnos?
                </Typography>
                <ul style={{ color: '#666666', lineHeight: 1.8 }}>
                  <li>Experiencia verificada de más de 20 años</li>
                  <li>Equipo profesional y dedicado</li>
                  <li>Servicios personalizados según necesidades</li>
                  <li>Precios competitivos sin comprometer calidad</li>
                  <li>Disponibilidad 24/7</li>
                  <li>Múltiples opciones de pago</li>
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Misión, Visión, Valores */}
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
            Misión y Visión
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: '#f5f5f5',
                  border: '2px solid #e0e0e0',
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: '#333333',
                      mb: 2,
                    }}
                  >
                    Misión
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666666',
                      lineHeight: 1.8,
                    }}
                  >
                    Crear experiencias de turismo receptivo excepcionales que superen las expectativas de nuestros clientes, combinando profesionalismo, calidad y autenticidad en cada detalle. Nos comprometemos a ser el socio confiable de agencias y operadores turísticos internacionales.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: 'rgba(233, 30, 99, 0.05)',
                  border: '2px solid #E91E63',
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: '#333333',
                      mb: 2,
                    }}
                  >
                    Visión
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666666',
                      lineHeight: 1.8,
                    }}
                  >
                    Ser la empresa de turismo receptivo líder en Argentina, reconocida por innovación, sostenibilidad y excelencia en la atención. Queremos expandir nuestros servicios manteniendo siempre nuestro compromiso con la calidad y la satisfacción del cliente.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Valores */}
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
            Nuestros Valores
          </Typography>
          <Grid container spacing={3}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
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
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: '#333333',
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666666',
                        lineHeight: 1.6,
                      }}
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Timeline */}
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
            Hitos en Nuestro Camino
          </Typography>
          <Grid container spacing={3} sx={{ maxWidth: 900, mx: 'auto' }}>
            {milestones.map((milestone, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    borderLeft: '4px solid #E91E63',
                    backgroundColor: index % 2 === 0 ? 'rgba(233, 30, 99, 0.05)' : '#f5f5f5',
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#E91E63',
                        mb: 0.5,
                      }}
                    >
                      {milestone.year}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#333333',
                        mb: 1,
                      }}
                    >
                      {milestone.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666666',
                      }}
                    >
                      {milestone.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA */}
        <Box
          sx={{
            backgroundColor: '#f5f5f5',
            p: { xs: 4, md: 6 },
            borderRadius: '0.75rem',
            mb: 10,
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
            ¿Listo para Vivir una Experiencia Canoro's Tours?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#666666',
              mb: 4,
              fontSize: '1.1rem',
            }}
          >
            Contáctanos hoy y descubre cómo podemos hacer tu viaje memorable.
          </Typography>
          <ContactButtons />
        </Box>
      </Container>
    </>
  );
}