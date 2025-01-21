import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{
      backgroundColor: '#C5BAFF',
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      height: '30px',
      display: 'flex',
      alignItems: 'center',
    }}>
      <Box sx={{
        width: '100%',
        textAlign: 'center',
        color: '#333333'
      }}>
        <Typography>
          &copy; Limor Dahari. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
