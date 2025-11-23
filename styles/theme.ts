'use client';

import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: { main: '#0D47A1' },
    secondary: { main: '#FF7043' },
    error: { main: red.A400 }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      }
    }
  }
})

export default theme
