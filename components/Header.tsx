'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Brasilterapia', href: '/brasilterapia' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: '#ffffff',
          color: '#333333',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0, sm: 2 } }}>
            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  color: '#333333',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Box
                  component="img"
                  src="/images/logo.png"
                  alt="Canoro's Tours Logo"
                  sx={{
                    height: 50,
                    width: 'auto',
                    borderRadius: '0.25rem',
                  }}
                />
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>Canoro's Tours</Box>
              </Box>
            </Link>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
                  <Button
                    sx={{
                      color: '#333333',
                      fontWeight: 500,
                      '&:hover': {
                        color: '#E91E63',
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' }, color: '#333333' }}
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="top"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            marginTop: '64px',
          },
        }}
      >
        <List sx={{ width: '100%' }}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    color: '#333333',
                    '&:hover': {
                      backgroundColor: '#f0f0f0',
                      color: '#E91E63',
                    },
                  }}
                  onClick={toggleMobileMenu}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
}
