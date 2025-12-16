import { useEffect, useState } from 'react';

export default function LessonDetail({ lesson, onBack }) {
  const [quizResult, setQuizResult] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const key = `completedLessons_${currentUser.username}`;
    const completed = JSON.parse(localStorage.getItem(key)) || [];

    if (!completed.includes(lesson.id)) {
      completed.push(lesson.id);
      localStorage.setItem(key, JSON.stringify(completed));
      localStorage.setItem(`progress_${currentUser.username}`, completed.length);
    }
  }, [lesson.id]);

  const checkQuiz = (answer, correct) => {
    setQuizResult(answer === correct ? "Дұрыс ✅" : "Қате ❌");
  };

  return (
    <div>
      <h1>{lesson.title}</h1>
      <p>{lesson.fullContent}</p>

      {lesson.quiz && lesson.quiz.length > 0 && (
        <div>
          <h3>Тест</h3>
          {lesson.quiz.map((q, idx) => (
            <div key={idx} style={{ marginBottom: '10px' }}>
              <p>{q.question}</p>
              <input
                type="text"
                placeholder="Жауап"
                onBlur={(e) => checkQuiz(e.target.value, q.answer)}
              />
            </div>
          ))}
          {quizResult && <p>{quizResult}</p>}
        </div>
      )}

      <button className="button" onClick={onBack}>← Артқа</button>
    </div>
  );
}