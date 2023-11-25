import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ users, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const userData = users.find(user => user[1] === username);

    if (userData) {
      if (userData[2] === password) {
        onLogin(userData);
        navigate('/home')
      } else {
        setError('Incorrect password');
      }
    } else {
      setError('User not found');
    }
  };

  return (
    <div className='login-container'>
      <h1>Login</h1>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
