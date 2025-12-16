// src/pages/Login.jsx
import { useState } from 'react';

export default function Login({ onLogin }) {
  const [aty, setAty] = useState('');
  const [qupiyaSoz, setQupiyaSoz] = useState('');

  const kiru = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === aty && u.password === qupiyaSoz);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      onLogin(user);
    } else {
      alert('Қате логин немесе құпия сөз!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Кіру</h1>
        <input
          className="input"
          placeholder="Атыңыз"
          value={aty}
          onChange={(e) => setAty(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Құпия сөз"
          value={qupiyaSoz}
          onChange={(e) => setQupiyaSoz(e.target.value)}
        />
        <button onClick={kiru} className="button">Кіру</button>
      </div>
    </div>
  );
}