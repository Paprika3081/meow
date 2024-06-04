// Page.jsx
'use client';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom'; // Изменили BrowserRouter на MemoryRouter
import AppRouter from './_components/AppRouter';

const Page = () => {
  return (
    <Router>
      <AppRouter/>
    </Router>
  );
};

export default Page;
