// src/pages/Register.jsx
import { useState } from 'react';

export default function Register({ onRegister }) {
  const [aty, setAty] = useState('');
  const [qupiyaSoz, setQupiyaSoz] = useState('');
  const [rol, setRol] = useState('student');

  const tirkelu = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username: aty, password: qupiyaSoz, role: rol });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Тіркелу сәтті өтті!');
    onRegister();
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Тіркелу</h1>
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
        <select
          className="input"
          value={rol}
          onChange={(e) => setRol(e.target.value)}
        >
          <option value="student">Оқушы</option>
          <option value="teacher">Мұғалім</option>
        </select>
        <button onClick={tirkelu} className="button">Тіркелу</button>
      </div>
    </div>
  );
}