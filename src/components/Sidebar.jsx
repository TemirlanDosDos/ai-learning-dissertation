import { useState } from 'react';

export default function Sidebar({ active, setActive, onLogout }) {
  const [open, setOpen] = useState(true);

  return (
    <div className={`sidebar ${open ? 'open' : 'closed'}`}>
      <button className="toggle-btn" onClick={() => setOpen(!open)}>
        {open ? '◀' : '▶'}
      </button>

      {open && (
        <>
          <h2>📘 Мәзір</h2>

          <button
            className={`menu-btn ${active === 'profile' ? 'active' : ''}`}
            onClick={() => setActive('profile')}
          >
            👤 Профиль
          </button>

          <button
            className={`menu-btn ${active === 'lessons' ? 'active' : ''}`}
            onClick={() => setActive('lessons')}
          >
            📚 Сабақтар
          </button>

          <button
            className={`menu-btn ${active === 'ai' ? 'active' : ''}`}
            onClick={() => setActive('ai')}
          >
            🤖 Жасанды интеллект
          </button>

          <hr />

          <button className="menu-btn logout" onClick={onLogout}>
            🚪 Шығу
          </button>
        </>
      )}
    </div>
  );
}
