// src/sections/EditLessonModal.jsx
import { useState } from 'react';

export default function EditLessonModal({ lesson, onSave, onClose }) {
  const [title, setTitle] = useState(lesson.title);
  const [content, setContent] = useState(lesson.content);
  const [fullContent, setFullContent] = useState(lesson.fullContent);
  const [quiz, setQuiz] = useState(lesson.quiz || []);

  const addQuizQuestion = () => {
    const question = prompt("Сұрақ енгізіңіз:");
    const answer = prompt("Дұрыс жауап:");
    if (question && answer) {
      setQuiz([...quiz, { question, answer }]);
    }
  };

  const handleSave = () => {
    onSave({ ...lesson, title, content, fullContent, quiz });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Сабақты редакциялау</h2>
        <input
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Сабақ атауы"
        />
        <textarea
          className="input"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Қысқаша сипаттама"
        />
        <textarea
          className="input"
          value={fullContent}
          onChange={(e) => setFullContent(e.target.value)}
          placeholder="Толық материалдар"
        />

        <h3>Тест сұрақтары</h3>
        <ul>
          {quiz.map((q, idx) => (
            <li key={idx}>{q.question} — <em>{q.answer}</em></li>
          ))}
        </ul>
        <button className="button" onClick={addQuizQuestion}>Жаңа сұрақ қосу</button>

        <div style={{ marginTop: '10px' }}>
          <button className="button" onClick={handleSave}>Сақтау</button>
          <button className="button" style={{ marginLeft: '10px' }} onClick={onClose}>Жабу</button>
        </div>
      </div>
    </div>
  );
}