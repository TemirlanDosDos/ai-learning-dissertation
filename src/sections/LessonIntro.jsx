export default function LessonIntro({ lesson, onBack, onMore }) {
  return (
    <div>
      <h1>{lesson.title}</h1>
      <p>{lesson.intro}</p>

      <button className="button" onClick={onMore}>
        Толығырақ
      </button>

      <button className="button" onClick={onBack}>
        ← Артқа
      </button>
    </div>
  );
}
