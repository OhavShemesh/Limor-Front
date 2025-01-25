import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import Router from './Router/Router';
import Header from './Display/Layout/Header/Header';
import Footer from './Display/Layout/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Display/Layout/Layout';

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
