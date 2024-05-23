import React from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import LoginForm from './LoginForm';

const AppRouter = () => {
  // Проверка аутентификации
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const navigate = useNavigate();

  const handleLogin = ({ enteredLogin, enteredPassword }) => {
    // Получение данных из переменных окружения
    const storedLogin = process.env.NEXT_PUBLIC_MY_USER;
    const storedPassword = process.env.NEXT_PUBLIC_MY_PASSWORD;

    if (enteredLogin === storedLogin && enteredPassword === storedPassword) {
      localStorage.setItem('isAuthenticated', 'true');
      // Перенаправление после успешного входа
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
      <Route
        path="/dashboard"
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route path="/" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default AppRouter;
