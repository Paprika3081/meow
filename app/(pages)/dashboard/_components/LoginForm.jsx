// LoginForm.jsx
import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [enteredLogin, setEnteredLogin] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!enteredLogin || !enteredPassword) {
      setError('Please enter a login and password');
      return;
    }
    
    // Получение данных из переменных окружения
    const storedLogin = process.env.NEXT_PUBLIC_MY_USER;
    const storedPassword = process.env.NEXT_PUBLIC_MY_PASSWORD;

    // Проверка введенных данных с данными из переменных окружения
    if (enteredLogin === storedLogin && enteredPassword === storedPassword) {
      // Очистка локального хранилища перед входом
      localStorage.removeItem('isAuthenticated');
      onLogin({ enteredLogin, enteredPassword });
    } else {
      setError('Invalid credentials');
      // Очистка локального хранилища при неправильном вводе пароля
      localStorage.removeItem('isAuthenticated');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Login:
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              type="text" 
              value={enteredLogin} 
              onChange={(e) => setEnteredLogin(e.target.value)} 
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password:
            </label>
            <div className="relative">
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type={showPassword ? "text" : "password"} 
                value={enteredPassword} 
                onChange={(e) => setEnteredPassword(e.target.value)} 
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 py-2"
                onClick={toggleShowPassword}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
              type="submit"
            >
              Login
            </button>
          </div>
          {error && <p className="text-red-500 text-xs italic mt-4">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
