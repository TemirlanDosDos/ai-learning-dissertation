import { useState, useMemo } from 'react';

export default function TeacherPanel() {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const students = users.filter(u => u.role === 'student');

  const lessons =
    JSON.parse(localStorage.getItem('lessons')) ||
    Array.from({ length: 34 }, (_, i) => ({
      id: i + 1,
      title: `Сабақ ${i + 1}`,
      intro: `Қысқаша сипаттама`,
    }));

  // 📊 СТАТИСТИКА
  const stats = useMemo(() => {
    if (students.length === 0) {
      return { avg: 0, max: 0 };
    }

    const progresses = students.map(
      s => parseInt(localStorage.getItem(`progress_${s.username}`)) || 0
    );

    const avg = Math.round(
      progresses.reduce((a, b) => a + b, 0) / progresses.length
    );

    const max = Math.max(...progresses);

    return { avg, max };
  }, [students]);

  const updateLesson = (id, field, value) => {
    const updated = lessons.map(l =>
      l.id === id ? { ...l, [field]: value } : l
    );
    localStorage.setItem('lessons', JSON.stringify(updated));
  };

  return (
    <div className="teacher-panel">
      <h1>👨‍🏫 Мұғалім панелі</h1>

      {/* 📊 ОБЩАЯ СТАТИСТИКА */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>👨‍🎓 Оқушылар</h3>
          <p>{students.length}</p>
        </div>

        <div className="stat-card">
          <h3>📈 Орташа прогресс</h3>
          <p>{stats.avg}%</p>
        </div>

        <div className="stat-card">
          <h3>🏆 Ең жоғары прогресс</h3>
          <p>{stats.max}%</p>
        </div>
      </div>

      {/* 👨‍🎓 ПРОГРЕСС ОҚУШЫЛАР */}
      <h2>👨‍🎓 Оқушылардың прогресі</h2>

      {students.map(student => {
        const percent =
          parseInt(localStorage.getItem(`progress_${student.username}`)) || 0;

        return (
          <div key={student.username} className="student-card">
            <strong>{student.username}</strong>
            <p>{percent}%</p>
            <div className="progress-bar">
              <div
                class
