import { useState } from "react";

export default function Quiz({ quiz, onPassed }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const correctCount = quiz.filter(
    (q, i) => answers[i] === q.correctIndex
  ).length;

  return (
    <div>
      <h3>🧪 Тест</h3>

      {quiz.map((q, i) => (
        <div key={i} style={{ marginBottom: 15 }}>
          <p>
            {i + 1}. {q.question}
          </p>

          {q.options.map((opt, idx) => (
            <label key={idx} style={{ display: "block" }}>
              <input
                type="radio"
                name={`q-${i}`}
                onChange={() =>
                  setAnswers(prev => ({ ...prev, [i]: idx }))
                }
              />
              {opt}
            </label>
          ))}
        </div>
      ))}

      {!submitted && (
        <button
          className="button"
          onClick={() => setSubmitted(true)}
        >
          Тексеру
        </button>
      )}

      {submitted && (
        <p style={{ marginTop: 10 }}>
          Дұрыс жауаптар: {correctCount} / {quiz.length}
        </p>
      )}

      {/* ✅ КНОПКА ВСЕГДА ДОСТУПНА */}
      <button
        className="button"
        style={{ marginTop: 15 }}
        onClick={onPassed}
      >
        Сабақты аяқтау
      </button>
    </div>
  );
}
