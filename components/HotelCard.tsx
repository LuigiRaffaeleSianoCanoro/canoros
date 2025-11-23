import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'

export default function HotelCard({ hotel }: any) {
  return (
    <Card>
      <CardMedia component="img" height="180" image={hotel.image} alt={hotel.name} />
      <CardContent>
        <Typography variant="h6">{hotel.name}</Typography>
        <Typography variant="body2">{hotel.location}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={hotel.whatsappLink} target="_blank">Contactar</Button>
      </CardActions>
    </Card>
  )
}
