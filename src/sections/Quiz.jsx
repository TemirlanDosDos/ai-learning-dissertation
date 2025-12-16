import { useState } from "react";

export default function Quiz({ quiz, onPassed }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const correctCount = quiz.filter(
    (q, i) => answers[i] === q.correctIndex
  ).length;

  const passed = submitted && correctCount === quiz.length;

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

      {submitted && !passed && (
        <p style={{ color: "red", marginTop: 10 }}>
          ❌ Барлық сұрақтарға дұрыс жауап беріңіз
        </p>
      )}

      {passed && (
        <>
          <p style={{ color: "green", marginTop: 10 }}>
            ✅ Барлық жауаптар дұрыс!
          </p>

          <button
            className="button"
            style={{ marginTop: 10 }}
            onClick={onPassed}
          >
            Сабақты аяқтау
          </button>
        </>
      )}
    </div>
  );
}
