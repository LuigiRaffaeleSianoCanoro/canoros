import React from 'react'
import { AppBar, Toolbar, Typography, Container, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export default function Header() {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Canoros
          </Typography>
          <IconButton aria-label="menu" color="inherit">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
