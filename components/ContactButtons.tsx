import { Box, Button } from '@mui/material'

export default function ContactButtons() {
  const phone = '+55XXXXXXXXX'
  const whatsappLink = `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent('Hola, estoy interesado en...')}`
  return (
    <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
      <Button variant="contained" href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp</Button>
      <Button variant="outlined" href="mailto:info@canoros.com.br">Email</Button>
    </Box>
  )
}
