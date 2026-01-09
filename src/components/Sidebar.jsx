import { useState } from 'react';

export default function Sidebar({ active, setActive, onLogout }) {
  const [open, setOpen] = useState(true);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");

    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  };




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

          {active !== undefined && (
            <>
              {/*
      Кнопка ТОЛЬКО для учителя
    */}
              {window.currentUserRole === "teacher" && (
                <button
                  className={`menu-btn ${active === 'teacher' ? 'active' : ''}`}
                  onClick={() => setActive('teacher')}
                >
                  👨‍🏫 Мұғалім панелі
                </button>
              )}
            </>
          )}


          <button
            className={`menu-btn ${active === 'ai' ? 'active' : ''}`}
            onClick={() => setActive('ai')}
          >
            🤖 Жасанды интеллект
          </button>

          <hr />

          <div className="sidebar-settings">
            <span className="theme-label">☀️/🌙</span>

            <div
              className="theme-toggle"
              onClick={toggleTheme}
              title="Сменить тему"
            >
              <div className="thumb" />
            </div>
          </div>




          <button className="menu-btn logout" onClick={onLogout}>
            🚪 Шығу
          </button>
        </>
      )}
    </div>
  );
}
