import { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

export default function App() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')));
  const [showRegister, setShowRegister] = useState(false);

  const logout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
  };

  if (!currentUser) {
    return showRegister ? (
      <Register onRegister={() => setShowRegister(false)} />
    ) : (
      <div>
        <Login onLogin={setCurrentUser} />
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          Аккаунт жоқ па?{' '}
          <button onClick={() => setShowRegister(true)} className="register-button">
            Тіркелу
          </button>
        </p>
      </div>
    );
  }

  return <Dashboard currentUser={currentUser} onLogout={logout} />;
}