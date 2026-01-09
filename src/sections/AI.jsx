import { useState } from "react";
import aiLessons from "../data/aiLessons";

export default function AI() {
  const [currentLesson, setCurrentLesson] = useState(null);

  if (currentLesson) {
    return (
      <div className="lesson-view">
        <h1>{currentLesson.title}</h1>

        <div
          className="lesson-content"
          dangerouslySetInnerHTML={{ __html: currentLesson.content }}
        />

        <button
          className="lesson-button"
          onClick={() => setCurrentLesson(null)}
          style={{ marginTop: 24 }}
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
          <strong>Text → Text</strong> — мәтін енгізіп, мәтін түрінде жауап алу.
          Сұрақтарға жауап беру, мәтін жазу, түсіндіру және қорытынды жасау
          (Chat GPT).
        </li>

        <li>
          <strong>Text → Image</strong> — мәтіндік сипаттама (prompt) арқылы сурет
          генерациялау. Пайдаланушы жазған мәтінге сәйкес визуалды контент жасау
          (Gemini).
        </li>

        <li>
          <strong>Text → Speech</strong> — мәтінді дыбысқа айналдыру.
          Жазылған мәтін негізінде табиғи дыбысталатын сөйлеу генерациялау
          (ElevenLabs).
        </li>

        <li>
          <strong>Audio → Text</strong> — аудио немесе сөйлеуді мәтінге айналдыру.
          Сұхбаттарды, дәрістерді немесе дауысты жазбаларды автоматты түрде
          мәтінге көшіру (Chat GPT).
        </li>

        <li>
          <strong>Image → Image</strong> — суретті өңдеу немесе өзгерту.
          Суретті жақсарту, стиль қолдану, фонды ауыстыру немесе жаңа нұсқа жасау. (Gemini)
        </li>

        <li>
          <strong>Image → Text</strong> — суреттегі ақпаратты мәтінге айналдыру.
          Көріністі тану, жазуларды оқу және мазмұнын сипаттау. (Chat GPT)
        </li>

        <li>
          <strong>Text → Code</strong> — мәтін арқылы бағдарламалық код жазу.
          Алгоритмдер, функциялар және қосымшалар генерациялау
          (Gemini).
        </li>

        <li>
          <strong>Text → Image & Video</strong> — мәтін негізінде сурет немесе видео
          контент жасау. Сценарий, идея немесе сипаттама арқылы визуалды медиа
          генерациялау. (Grok)
        </li>

        <li>
          <strong>Промпт (Prompt)</strong> — жасанды интеллектке жазылатын сұрақ,
          тапсырма немесе нұсқаулық. Промпт неғұрлым нақты және түсінікті болса,
          нәтиже соғұрлым сапалы және дәл болады.
        </li>
      </ul>



      <hr style={{ margin: "20px 0" }} />

      {aiLessons.map((lesson) => (
        <div
          key={lesson.id}
          className="lesson-card"
          style={{ marginBottom: 12 }}
        >
          <h3>{lesson.title}</h3>

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
