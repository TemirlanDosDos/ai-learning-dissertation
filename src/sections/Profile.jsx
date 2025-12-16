import { useEffect, useState } from 'react';

export default function Profile() {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (user?.role === 'student') {
      const saved =
        parseInt(localStorage.getItem(`progress_${user.username}`)) || 0;
      setPercent(saved);
    }
  }, []);

  if (!user) {
    return <p>Пайдаланушы табылмады</p>;
  }

  return (
    <div className="profile-box">
      <h2>👤 Профиль</h2>

      <p>
        Аты: <strong>{user.username}</strong>
      </p>

      <p>
        Рөлі: <strong>{user.role === 'teacher' ? 'Мұғалім' : 'Оқушы'}</strong>
      </p>

      {/* Прогресс ТОЛЬКО для ученика */}
      {user.role === 'student' && (
        <>
          <p>
            Оқу барысы: <strong>{percent}%</strong>
          </p>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${percent}%` }}
            />
          </div>
        </>
      )}
    </div>
  );
}
