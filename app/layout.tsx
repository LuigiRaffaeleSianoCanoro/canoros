import './globals.css'
import React from 'react'
import { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ThemeWrapper from '../components/ThemeWrapper'

export const metadata: Metadata = {
  title: 'Canoros - Agencia de Viajes',
  description: 'Canoros - paquetes y hoteles selectos. Contacto via WhatsApp o Email.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ThemeWrapper>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  )
}
