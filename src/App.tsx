import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;