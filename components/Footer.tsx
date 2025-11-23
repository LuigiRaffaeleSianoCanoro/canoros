import { Box, Container, Typography, Link } from '@mui/material'

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 4, mt: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="body2">© {new Date().getFullYear()} Canoros Agencia de Viajes</Typography>
        <Typography variant="body2">Email: <Link href="mailto:info@canoros.com.br">info@canoros.com.br</Link></Typography>
      </Container>
    </Box>
  )
}
