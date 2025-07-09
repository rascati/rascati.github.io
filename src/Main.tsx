import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import DefaultSEO from './components/DefaultSEO';
import HomePage from './pages/HomePage';
import WorkLayout from './pages/WorkLayout';
import FedEx from './pages/FedEx';
import Letterforms from './pages/Letterforms';
import PlanetQueen from './pages/PlanetQueen';
import JMate from './pages/Jmate';
import TEDx from './pages/TEDx';
import Gorgiality from './pages/Gorgiality';
import NotFoundPage from './pages/404';
import './components/Layout.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <DefaultSEO />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/work' element={<WorkLayout />}>
            <Route index element={<Navigate to='/' replace />} />
            <Route path='fedex' element={<FedEx />} />
            <Route path='letterforms' element={<Letterforms />} />
            <Route path='planet-queen' element={<PlanetQueen />} />
            <Route path='jmate' element={<JMate />} />
            <Route path='tedx' element={<TEDx />} />
            <Route path='gorgiality' element={<Gorgiality />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>

    </HelmetProvider>
  </StrictMode>
);
