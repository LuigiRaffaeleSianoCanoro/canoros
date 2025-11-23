'use client';

import React from 'react';
import { Box, Button, Stack } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

interface ContactButtonsProps {
  variant?: 'horizontal' | 'vertical';
  size?: 'small' | 'medium' | 'large';
}

export default function ContactButtons({ variant = 'horizontal', size = 'medium' }: ContactButtonsProps) {
  const whatsappUrl = 'https://wa.me/5492235892344?text=' + encodeURIComponent(
    'Hola, me gustaría conocer más sobre los servicios de Canoro\'s Tours.'
  );

  return (
    <Stack
      direction={variant === 'vertical' ? 'column' : 'row'}
      spacing={2}
      sx={{ mt: 3 }}
    >
      <Button
        variant="contained"
        color="secondary"
        size={size}
        startIcon={<WhatsAppIcon />}
        component="a"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          backgroundColor: '#E91E63',
          '&:hover': {
            backgroundColor: '#c2185b',
          },
        }}
      >
        WhatsApp
      </Button>

      <Button
        variant="outlined"
        color="primary"
        size={size}
        startIcon={<PhoneIcon />}
        component="a"
        href="tel:+542234516305"
      >
        Llamar
      </Button>

      <Button
        variant="outlined"
        color="primary"
        size={size}
        startIcon={<EmailIcon />}
        component="a"
        href="mailto:canorostours@gmail.com"
      >
        Email
      </Button>
    </Stack>
  );
}
