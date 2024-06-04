import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import LoginForm from './LoginForm';

const AppRouter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const authStatus = localStorage.getItem('isAuthenticated') === 'true';
      console.log('Auth Status from localStorage:', authStatus); // Лог состояния аутентификации
      setIsAuthenticated(authStatus);
    } catch (error) {
      console.error('Error accessing localStorage:', error); // Лог ошибок доступа к localStorage
    }
  }, []);

  const handleLogin = ({ enteredLogin, enteredPassword }) => {
    try {
      const storedLogin = process.env.NEXT_PUBLIC_MY_USER;
      const storedPassword = process.env.NEXT_PUBLIC_MY_PASSWORD;

      console.log('Entered Login:', enteredLogin); // Лог введенного логина
      console.log('Entered Password:', enteredPassword); // Лог введенного пароля
      console.log('Stored Login:', storedLogin); // Лог логина из переменной окружения
      console.log('Stored Password:', storedPassword); // Лог пароля из переменной окружения

      if (enteredLogin === storedLogin && enteredPassword === storedPassword) {
        localStorage.setItem('isAuthenticated', 'true');
        setIsAuthenticated(true);
        console.log('Login successful, navigating to /dashboard');
        navigate('/dashboard');
      } else {
        console.log('Invalid credentials');
        alert('Invalid credentials');
        localStorage.removeItem('isAuthenticated');
      }
    } catch (error) {
      console.error('Error during login:', error); // Лог ошибок при логине
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
