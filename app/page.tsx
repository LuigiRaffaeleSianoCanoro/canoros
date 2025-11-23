import Image from 'next/image'
import { Container, Box, Typography, Grid } from '@mui/material'
import ContactButtons from '../components/ContactButtons'

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 6 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography component="h1" variant="h3" gutterBottom>
              Canoros Agencia de Viajes
            </Typography>
            <Typography variant="body1" paragraph>
              Especialistas en experiencias y hospedajes seleccionados. Consultanos por WhatsApp.
            </Typography>
            <ContactButtons />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', width: '100%', height: 320 }}>
              <Image src="/images/hero.svg" alt="hero" fill style={{ objectFit: 'cover', borderRadius: 12 }} />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" gutterBottom>Hoteles destacados</Typography>
        <Grid container spacing={3}>
          {/* Example: import and use HotelCard component */}
        </Grid>
      </Box>
    </Container>
  )
}
