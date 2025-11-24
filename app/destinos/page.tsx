'use client';

import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

interface Destination {
  title: string;
  theme: string;
  route: string;
  duration: string;
  description: string;
  fullDescription: string;
}

const destinations: Destination[] = [
  {
    title: 'Ilha Grande',
    theme: 'Luna de Miel',
    route: 'Packs Ilha Grande',
    duration: '3 días 2 noches',
    description: 'Un momento único, un juramento. Un escenario inolvidable.',
    fullDescription: `Roteiro: Packs Ilha Grande
Luna de Miel
Un momento único, un juramento. Un escenario inolvidable.

Duración: 3 días 2 noches

Pack incluye:
• 02 noches en la pousada elegida con desayuno
• Traslado Rio/Angra dos Reis/Rio regular con transporte con aire acondicionado
• Traslado Píer/Abrãao/Pier en barco regular (ferry-boat)
• Recepción y traslado con guía en español y transporte de equipajes
• Tour de reconocimiento + taxi boat regular Lopes Mendes`,
  },
  {
    title: 'Rutas de Ouro Preto',
    theme: 'Brasil de las Artes',
    route: 'Congonhas - São João del Rei - Tiradentes',
    duration: '4 días 3 noches',
    description: 'Un viaje por la historia, la cultura y el arte de Brasil.',
    fullDescription: `Rutas de Ouro Preto
Roteiro: Congonhas - São João del Rei - Tiradentes
Brasil de las Artes

Duración: 4 días 3 noches

Día 1 - BH/Congonhas / São João del Rei / Tiradentes
Día inteiro de paseo. Almuerzo en Restaurante Café com Prosa (Buffet comida típica)
Pernoche en la Pousada Villa Allegra

Congonhas:
El conjunto artístico y arquitectónico del Santuario do Bom Jesus de Matosinhos fue declarado Patrimonio Cultural de la Humanidad por la UNESCO. El conjunto es formado por 64 figuras hechas en madera de cedro representando la Pasión de Cristo y doce profetas hechos en piedra jabón, colocados en el atrio de la iglesia.

São João del Rei:
• Igreja São Francisco de Assis: construcción en estilo barroco con influencias del rococó
• La Catedral Basílica Nossa Senhora do Pilar
• La Igreja do Carmo y la del Rosário
• Posibilidad de viaje en tren "Maria Fumaça" hacia Tiradentes (viernes, sábados y domingos)

Tiradentes:
• Igreja Matriz Santo Antônio: iniciada en 1710, completamente dorada
• Casa del Padre Toledo: importante ejemplar de arquitectura civil colonial
• Artesanía y platería local

Día 2 - Tiradentes / Ouro Preto
Excursión de día entero con almuerzo incluido
Pernoche en la Pousada Clássica

Día 3 - Ouro Preto/Mariana
Diariamente, excepto lunes y fechas especiales
Día intiero de paseo. Almuerzo en Restaurante Deguste (Buffet comida típica)

Mariana:
• Primera capital de Minas Gerais, fundada en 1696
• Catedral da Sé: famoso órgano alemán del siglo XVIII
• Museu Arquidiocesano: importante colección de arte sacro barroco
• Praça Minas Gerais: conjunto arquitectónico barroco
• La mina de Oro

Ouro Preto:
• Iglesia São Francisco de Assis: obra prima proyectada por Aleijadinho
• Iglesia Matriz Nossa Senhora Do Pilar: interior dorado
• Museu de Mineralogia: la más completa colección de piedras preciosas de Brasil
• Casa dos Contos: magnífico ejemplar del siglo XVIII
• Museu do Oratório

Día 4 - Ouro Preto/Aeropuerto BHZ
Traslado para el aeropuerto de Belo Horizonte - 145 km

Tarifas 2011:
• Base 1 pax: U$ 1.725
• Base 2 paxs doble: U$ 989 / single: U$ 1.106
• Base 3/4 paxs doble: U$ 745 / single: U$ 862
• Base 5/8 paxs doble: U$ 628 / single: U$ 745`,
  },
];

export default function Destinos() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDetails = (destination: Destination) => {
    setSelectedDestination(destination);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedDestination(null);
  };

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
            Destinos en Destaque
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: { xs: '1rem', md: '1.25rem' },
            }}
          >
            Experiencias exclusivas en los principales destinos de Brasil
          </Typography>
        </Container>
      </Box>

      {/* Destinations Grid */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Grid container spacing={6}>
          {destinations.map((destination, index) => (
            <Grid item xs={12} md={6} key={index}>
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
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="overline"
                      sx={{
                        color: '#E91E63',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {destination.theme}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: '#333333',
                        mb: 1,
                      }}
                    >
                      {destination.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666666',
                      mb: 2,
                    }}
                  >
                    <strong>Roteiro:</strong> {destination.route}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666666',
                      mb: 2,
                    }}
                  >
                    <strong>Duración:</strong> {destination.duration}
                  </Typography>

                  <Divider sx={{ my: 2, backgroundColor: '#e0e0e0' }} />

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666666',
                      lineHeight: 1.8,
                      fontStyle: 'italic',
                    }}
                  >
                    {destination.description}
                  </Typography>
                </CardContent>

                <Box sx={{ p: 2, pt: 0 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<InfoIcon />}
                    fullWidth
                    sx={{
                      borderColor: '#E91E63',
                      color: '#E91E63',
                      '&:hover': {
                        backgroundColor: 'rgba(233, 30, 99, 0.05)',
                        borderColor: '#c2185b',
                        color: '#c2185b',
                      },
                    }}
                    onClick={() => handleOpenDetails(destination)}
                  >
                    Ver detalles
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Dialog for destination details */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle sx={{ fontWeight: 700, color: '#E91E63' }}>
          {selectedDestination?.title}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2, whiteSpace: 'pre-wrap', fontSize: '0.95rem', lineHeight: 1.8 }}>
            {selectedDestination?.fullDescription}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} sx={{ color: '#E91E63' }}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
