import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeWrapper from '@/components/ThemeWrapper';

export const metadata: Metadata = {
  title: 'Canoro\'s Tours – Incoming Services en Argentina',
  description:
    'Canoro\'s Tours ofrece servicios especializados de turismo receptivo en Argentina. Paquetes turísticos, hoteles selectos y la experiencia Brasilterapia. Contacta via WhatsApp o email.',
  keywords:
    'turismo, Argentina, incoming services, viajes, paquetes turísticos, Brasilterapia',
  authors: [{ name: 'Canoro\'s Tours' }],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://canorostours.com',
    siteName: 'Canoro\'s Tours',
    title: 'Canoro\'s Tours – Incoming Services',
    description:
      'Servicios especializados de turismo receptivo con experiencias únicas en Argentina.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#333333" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <ThemeWrapper>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
}
