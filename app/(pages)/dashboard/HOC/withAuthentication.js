import React, { useEffect, useState } from "react";
require('dotenv').config(); // Подключение dotenv для доступа к переменным среды

const withAuthentication = (WrappedComponent) => {
  const WithAuthentication = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const login = process.env.REACT_APP_LOGIN; // Получение логина из переменной среды
    const password = process.env.REACT_APP_PASSWORD; // Получение пароля из переменной среды
    const [attempts, setAttempts] = useState(3); // Устанавливаем количество попыток аутентификации

    useEffect(() => {
      // Проверяем, была ли уже выполнена аутентификация
      const storedIsAuthenticated = localStorage.getItem("isAuthenticated");
      if (storedIsAuthenticated) {
        setIsAuthenticated(true);
      }

      // Проверяем, если закончились попытки аутентификации, перенаправляем на главную страницу
      if (attempts === 0) {
        alert("Исчерпано количество попыток. Доступ запрещен.");
        window.location.href = '/'; // Измените путь на нужный вам
      }
    }, [attempts]);

    const authenticate = () => {
      const enteredLogin = prompt("Введите логин:");
      const enteredPassword = prompt("Введите пароль:");

      if (enteredLogin === login && enteredPassword === password) {
        // Если логин и пароль верные, устанавливаем флаг аутентификации
        localStorage.setItem("isAuthenticated", true);
        setIsAuthenticated(true);
      } else {
        // Если логин или пароль неверные
        alert("Неверный логин или пароль.");

        // Уменьшаем количество попыток
        setAttempts(prevAttempts => {
          const newAttempts = prevAttempts - 1;
          if (newAttempts === 0) {
            // Если закончились попытки аутентификации, перенаправляем на главную страницу
            alert("Исчерпано количество попыток. Доступ запрещен.");
            window.location.href = '/'; // Измените путь на нужный вам
          }
          return newAttempts;
        });
      }
    };

    if (!isAuthenticated) {
      authenticate();
      return null; // Ничего не отображаем до выполнения аутентификации
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthentication;
};

export default withAuthentication;
