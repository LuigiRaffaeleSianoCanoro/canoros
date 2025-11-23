'use client';

import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  IconButton,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to WhatsApp with form data
    const text = `Hola, soy ${formData.name}. Email: ${formData.email}. Teléfono: ${formData.phone}. Mensaje: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5492235892344?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: '#333333',
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
            Contacto
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: '#e0e0e0',
              fontSize: { xs: '1rem', md: '1.25rem' },
            }}
          >
            Estamos aquí para ayudarte
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ mb: 10 }}>
          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Typography
              component="h2"
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 4,
                color: '#333333',
              }}
            >
              Información de Contacto
            </Typography>

            {/* WhatsApp */}
            <Card
              sx={{
                mb: 3,
                backgroundColor: '#f5f5f5',
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Box
                    sx={{
                      backgroundColor: '#E91E63',
                      color: '#ffffff',
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <WhatsAppIcon />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#333333',
                        mb: 1,
                      }}
                    >
                      WhatsApp
                    </Typography>
                    <Typography
                      component="a"
                      href="https://wa.me/5492235892344"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#E91E63',
                        fontWeight: 600,
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      +54 223 589 2344
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666666',
                        mt: 0.5,
                      }}
                    >
                      Respuestas rápidas 24/7
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {/* Teléfono */}
            <Card
              sx={{
                mb: 3,
                backgroundColor: '#f5f5f5',
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Box
                    sx={{
                      backgroundColor: '#333333',
                      color: '#ffffff',
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <PhoneIcon />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#333333',
                        mb: 1,
                      }}
                    >
                      Teléfono
                    </Typography>
                    <Typography
                      component="a"
                      href="tel:+542234516305"
                      sx={{
                        color: '#E91E63',
                        fontWeight: 600,
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      +54 223 451 6305
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666666',
                        mt: 0.5,
                      }}
                    >
                      Atención de lunes a viernes
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {/* Email */}
            <Card
              sx={{
                mb: 3,
                backgroundColor: '#f5f5f5',
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Box
                    sx={{
                      backgroundColor: '#333333',
                      color: '#ffffff',
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <EmailIcon />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#333333',
                        mb: 1,
                      }}
                    >
                      Email
                    </Typography>
                    <Typography
                      component="a"
                      href="mailto:canorostours@gmail.com"
                      sx={{
                        color: '#E91E63',
                        fontWeight: 600,
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      canorostours@gmail.com
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666666',
                        mt: 0.5,
                      }}
                    >
                      Respuesta en 24 horas
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {/* Location */}
            <Card
              sx={{
                backgroundColor: '#f5f5f5',
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Box
                    sx={{
                      backgroundColor: '#E91E63',
                      color: '#ffffff',
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <LocationOnIcon />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#333333',
                        mb: 1,
                      }}
                    >
                      Ubicación
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666666',
                      }}
                    >
                      Mar del Plata
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666666',
                      }}
                    >
                      Buenos Aires, Argentina
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Box sx={{ mt: 6 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: '#333333',
                  mb: 3,
                }}
              >
                Síguenos en Redes Sociales
              </Typography>
              <Stack direction="row" spacing={2}>
                <IconButton
                  component="a"
                  href="https://www.facebook.com/CanorosTours"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: '#f5f5f5',
                    color: '#333333',
                    '&:hover': {
                      backgroundColor: '#E91E63',
                      color: '#ffffff',
                    },
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
                    backgroundColor: '#f5f5f5',
                    color: '#333333',
                    '&:hover': {
                      backgroundColor: '#E91E63',
                      color: '#ffffff',
                    },
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
                    backgroundColor: '#f5f5f5',
                    color: '#333333',
                    '&:hover': {
                      backgroundColor: '#E91E63',
                      color: '#ffffff',
                    },
                  }}
                >
                  <WhatsAppIcon />
                </IconButton>
              </Stack>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Card>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  component="h2"
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: '#333333',
                  }}
                >
                  Envíanos un Mensaje
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666666',
                    mb: 4,
                  }}
                >
                  Completa el formulario y nos pondremos en contacto lo antes posible.
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                  <TextField
                    fullWidth
                    label="Nombre"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: '#E91E63',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#E91E63',
                        },
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: '#E91E63',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#E91E63',
                        },
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Teléfono"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: '#E91E63',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#E91E63',
                        },
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Mensaje"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={5}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: '#E91E63',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#E91E63',
                        },
                      },
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: '#E91E63',
                      mt: 2,
                      '&:hover': {
                        backgroundColor: '#c2185b',
                      },
                    }}
                    startIcon={<WhatsAppIcon />}
                  >
                    Enviar por WhatsApp
                  </Button>
                </Box>

                <Typography
                  variant="caption"
                  sx={{
                    color: '#999999',
                    display: 'block',
                    mt: 3,
                    textAlign: 'center',
                  }}
                >
                  Tu información será enviada a través de WhatsApp y no será compartida con terceros.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Additional Info */}
        <Box
          sx={{
            backgroundColor: '#f5f5f5',
            p: { xs: 4, md: 6 },
            borderRadius: '0.75rem',
            mb: 8,
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: '#333333',
                  mb: 2,
                }}
              >
                Horarios de Atención
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#666666',
                  lineHeight: 1.8,
                }}
              >
                <strong>Lunes a Viernes:</strong> 9:00 - 18:00
                <br />
                <strong>Sábados:</strong> 10:00 - 14:00
                <br />
                <strong>Domingos:</strong> Consultar
                <br />
                <strong>WhatsApp 24/7</strong>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: '#333333',
                  mb: 2,
                }}
              >
                Tiempo de Respuesta
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#666666',
                  lineHeight: 1.8,
                }}
              >
                <strong>WhatsApp:</strong> Inmediato
                <br />
                <strong>Email:</strong> Hasta 24 horas
                <br />
                <strong>Teléfono:</strong> Durante horario
                <br />
                <strong>Formulario:</strong> Hasta 24 horas
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: '#333333',
                  mb: 2,
                }}
              >
                Canales Preferidos
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#666666',
                  lineHeight: 1.8,
                }}
              >
                <strong>Consultas Rápidas:</strong> WhatsApp
                <br />
                <strong>Reservas:</strong> WhatsApp o Email
                <br />
                <strong>Información:</strong> Todos los canales
                <br />
                <strong>Emergencias:</strong> WhatsApp directo
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}