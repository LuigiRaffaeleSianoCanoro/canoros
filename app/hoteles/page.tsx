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
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

interface Hotel {
  name: string;
  city: string;
  address: string;
  neighborhood?: string;
  phone?: string;
  website?: string;
  notes?: string;
}

const hotels: Hotel[] = [
  {
    name: 'Apa Pau Brasil Hotel',
    city: 'Buzios',
    address: 'Estrada velha de Buzios, 123',
    neighborhood: 'Praia das Caravelas',
    phone: '55 - 22 - 26230782',
    website: 'http://www.buzioschannel.com.br/apapaubrasil/',
  },
  {
    name: 'Auberge de La Langouste Pousada',
    city: 'Buzios',
    address: 'Alto do Hamaitá, 3',
    neighborhood: 'Praia da Armação',
    website: 'http://www.aubergedelalangouste.com.br/',
  },
  {
    name: 'Aqua Ville Resort',
    city: 'Fortaleza',
    address: 'Av. Litorânea, 1000',
    neighborhood: 'Porto das Dunas',
    phone: '55 - 85 - 33618023',
    website: 'www.aquaville.com.br',
  },
  {
    name: 'Astoria Copacabana',
    city: 'Rio de Janeiro',
    address: 'República do Peru, 345',
    neighborhood: 'Copacabana',
    phone: '55 - 21 - 2545-9090',
    website: 'http://www.redeatlantico.com.br/pt-br/astoria-copacabana/astoria-copacabana.asp',
  },
  {
    name: 'Atlantico Copacabana',
    city: 'Rio de Janeiro',
    address: 'Rua Siqueira Campos, 90',
    neighborhood: 'Copacabana',
    phone: '55 - 41 - 2548-0011',
  },
  {
    name: 'Augustus Copacabana',
    city: 'Rio de Janeiro',
    address: 'Bolívar, 119',
    neighborhood: 'Copacabana',
    phone: '55 - 41 - 25471800',
    website: 'http://www.augustoshotel.com.br/',
  },
  {
    name: 'A Casa das Portas Velhas',
    city: 'Salvador de Bahia',
    address: 'Largo da Palma, 6',
    neighborhood: 'Santana',
    phone: '55 - 71 - 33248400',
    website: 'www.casadasportasvelhas.com',
    notes: 'Diarias reducidas para Noviembre y Diciembre. Consulte!',
  },
  {
    name: 'Bahia Mar',
    city: 'Salvador de Bahia',
    address: 'João Mendes Costa da Silva, 125',
    phone: '55 - 71 - 33722400',
    website: 'www.bahiamar.com',
  },
];

export default function Hoteles() {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDetails = (hotel: Hotel) => {
    setSelectedHotel(hotel);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedHotel(null);
  };

  // Group hotels by city
  const hotelsByCity = hotels.reduce((acc, hotel) => {
    if (!acc[hotel.city]) {
      acc[hotel.city] = [];
    }
    acc[hotel.city].push(hotel);
    return acc;
  }, {} as Record<string, Hotel[]>);

  const cities = Object.keys(hotelsByCity).sort();

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
            Hoteles en Destaque
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: { xs: '1rem', md: '1.25rem' },
            }}
          >
            Selección de hoteles premium en los principales destinos de Brasil
          </Typography>
        </Container>
      </Box>

      {/* Hotels by City */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        {cities.map((city) => (
          <Box key={city} sx={{ mb: 10 }}>
            <Typography
              component="h2"
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 4,
                color: '#333333',
                borderBottom: '3px solid #E91E63',
                pb: 2,
              }}
            >
              {city}
            </Typography>

            <Grid container spacing={4}>
              {hotelsByCity[city].map((hotel, index) => (
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
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          mb: 2,
                          color: '#333333',
                        }}
                      >
                        {hotel.name}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: '#666666',
                          mb: 1,
                        }}
                      >
                        <strong>Dirección:</strong> {hotel.address}
                      </Typography>

                      {hotel.neighborhood && (
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#666666',
                            mb: 1,
                          }}
                        >
                          <strong>Barrio:</strong> {hotel.neighborhood}
                        </Typography>
                      )}

                      {hotel.phone && (
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#666666',
                            mb: 1,
                          }}
                        >
                          <strong>Teléfono:</strong> {hotel.phone}
                        </Typography>
                      )}

                      {hotel.website && (
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#E91E63',
                            mb: 2,
                            textDecoration: 'none',
                          }}
                          component="a"
                          href={hotel.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visitar sitio web
                        </Typography>
                      )}

                      {hotel.notes && (
                        <Typography
                          variant="caption"
                          sx={{
                            color: '#E91E63',
                            display: 'block',
                            fontStyle: 'italic',
                          }}
                        >
                          {hotel.notes}
                        </Typography>
                      )}
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
                        onClick={() => handleOpenDetails(hotel)}
                      >
                        Ver detalles
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>

      {/* Dialog for hotel details */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 700, color: '#E91E63' }}>
          {selectedHotel?.name}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <Typography variant="body2" sx={{ mb: 2 }}>
              <strong>Ciudad:</strong> {selectedHotel?.city}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              <strong>Dirección:</strong> {selectedHotel?.address}
            </Typography>
            {selectedHotel?.neighborhood && (
              <Typography variant="body2" sx={{ mb: 2 }}>
                <strong>Barrio:</strong> {selectedHotel?.neighborhood}
              </Typography>
            )}
            {selectedHotel?.phone && (
              <Typography variant="body2" sx={{ mb: 2 }}>
                <strong>Teléfono:</strong> {selectedHotel?.phone}
              </Typography>
            )}
            {selectedHotel?.website && (
              <Typography variant="body2" sx={{ mb: 2 }}>
                <strong>Sitio Web:</strong>{' '}
                <a href={selectedHotel.website} target="_blank" rel="noopener noreferrer">
                  {selectedHotel.website}
                </a>
              </Typography>
            )}
            {selectedHotel?.notes && (
              <Typography variant="caption" sx={{ display: 'block', color: '#E91E63', mt: 2 }}>
                <strong>Nota:</strong> {selectedHotel.notes}
              </Typography>
            )}
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
