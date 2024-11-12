'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1ed760', // Orange - (index) brand color
      highlight: '#3be477',
      press: '#1abc54',
    },
    secondary: {
      main: '#333333', // Dark grey
      light: '#4F4F4F', // Lighter shade for contrast
      dark: '#1A1A1A', // Darker shade
      contrastText: '#FFFFFF', // White text on secondary color
    },
    background: {
      default: '#121212', // Light grey background
      highlight: '#1f1f1f', // Paper background for cards, etc.
      elevatedPress: '#191919',
    },
    white: {
      main: "#fff",
    },
    text: {
      primary: '#333333', // Dark grey for text
      secondary: '#757575', // Medium grey for secondary text
    },
    iconGrey: {
      primary: "#B3B3B3FF"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "28px",
          padding: "8px 20px",
          fontFamily: "SpotifyMixUI",
          fontWeight: "bold",
          backgroundColor: "white"
        }
      }
    }
  },
  typography: {
    fontFamily: "'SpotifyMixUI', 'Helvetica', 'Arial', sans-serif",
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
