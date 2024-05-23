// Page.jsx
'use client';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './_components/AppRouter';

const Page = () => {
  return (
    <Router>
      <AppRouter/>
    </Router>
  );
};

export default Page;
