import React from 'react';
import { Box, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import ROUTES from '../../../Router/RoutesModel';

export default function Header({ navigate }) {
  return (
    <Box sx={{
      backgroundColor: '#C5BAFF',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <Box sx={{
        width: '100%',
        margin: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to={ROUTES.HOME} style={{
          color: '#333333',
          textDecoration: 'none',
          fontSize: '1.2rem',
          fontWeight: 'bold'
        }}>
          לימור דהרי
        </Link>
        <Box sx={{
          display: 'flex',
          gap: '1.5rem',
          flexDirection: 'row-reverse'
        }}>
          <Link to={ROUTES.HOME} style={{
            color: '#333333',
            textDecoration: 'none',
            padding: '0.5rem',
            fontSize: '1.1rem',
            '&:hover': {
              color: '#a799ff'
            }
          }}>
            בית
          </Link>
          <Link to={ROUTES.HOME} style={{
            color: '#333333',
            textDecoration: 'none',
            padding: '0.5rem',
            fontSize: '1.1rem',
            '&:hover': {
              color: '#a799ff'
            }
          }}>
            קצת עליי
          </Link>
          <Link to={ROUTES.CONTACT_ME} style={{
            color: '#333333',
            textDecoration: 'none',
            padding: '0.5rem',
            fontSize: '1.1rem',
            '&:hover': {
              color: '#a799ff'
            }
          }}>
            צור קשר
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
