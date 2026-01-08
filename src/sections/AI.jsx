import { useState } from "react";
import aiLessons from "../data/lessons";

export default function AI() {
  const [currentLesson, setCurrentLesson] = useState(null);

  if (currentLesson) {
    return (
      <div>
        <h1>{currentLesson.title}</h1>

        <div
          style={{ marginTop: 20 }}
          dangerouslySetInnerHTML={{ __html: currentLesson.content }}
        />

        <button
          className="lesson-button"
          onClick={() => setCurrentLesson(null)}
        >
          ← Артқа
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>🤖 Жасанды интеллект</h1>

      <p>
        Бұл бөлімде жасанды интеллекттің негізгі бағыттары бойынша сабақтар
        ұсынылған. Сабақ барысында төмендегі терминдер жиі қолданылады:
      </p>

      <ul>
        <li>
          <strong>Text → Text</strong> — мәтін енгізіп, мәтін түрінде жауап алу
          (мысалы, ChatGPT).
        </li>
        <li>
          <strong>Text → Image</strong> — мәтіндік сипаттама арқылы сурет
          генерациялау.
        </li>
        <li>
          <strong>Text → Speech</strong> — мәтінді дыбысқа айналдыру.
        </li>
        <li>
          <strong>Audio → Text</strong> — аудионы мәтінге айналдыру.
        </li>
        <li>
          <strong>Image → Image</strong> — суретті өңдеу немесе өзгерту.
        </li>
        <li>
          <strong>Image → Text</strong> — суреттегі ақпаратты мәтінге айналдыру.
        </li>
        <li>
          <strong>Text → Video</strong> — мәтін арқылы видео жасау.
        </li>
        <li>
          <strong>Промпт (Prompt)</strong> — жасанды интеллектке жазылатын
          сұрақ, тапсырма немесе нұсқаулық. Промпт неғұрлым нақты болса,
          нәтиже соғұрлым сапалы болады.
        </li>
      </ul>


      <hr style={{ margin: "20px 0" }} />

      {aiLessons.map((lesson) => (
        <div
          key={lesson.id}
          className="lesson-card"
          style={{ marginBottom: 12 }}
        >
          <h3>{lesson.id}. {lesson.title}</h3>

          <button
            className="lesson-button"
            onClick={() => setCurrentLesson(lesson)}
          >
            Сабақты ашу
          </button>
        </div>
      ))}
    </div>
  );
}
