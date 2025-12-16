import { useState } from 'react';
import LessonIntro from './LessonIntro';
import LessonStudy from './LessonStudy';

export default function Lessons() {
  const lessons =
    JSON.parse(localStorage.getItem('lessons')) ||
    Array.from({ length: 34 }, (_, i) => ({
      id: i + 1,
      title: `Сабақ ${i + 1}`,
      intro: `Бұл ${i + 1}-сабақтың қысқаша сипаттамасы.`,
      content: `Бұл ${i + 1}-сабақтың толық оқу материалы.`,
    }));

  const user = JSON.parse(localStorage.getItem('currentUser'));
  const completed =
    JSON.parse(localStorage.getItem(`completed_${user.username}`)) || [];

  const [currentLesson, setCurrentLesson] = useState(null);
  const [mode, setMode] = useState('list'); // list | intro | study
  const [allCompleted, setAllCompleted] = useState(false);

  if (allCompleted) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>🎉 Барлық сабақтар аяқталды!</h1>
        <p>Сіз барлық 34 сабақты аяқтадыңыз.</p>
        <button
          className="button"
          onClick={() => {
            setAllCompleted(false);
            setMode('list');
          }}
        >
          Сабақтар тізіміне оралу
        </button>
      </div>
    );
  }

  if (mode === 'intro') {
    return (
      <LessonIntro
        lesson={currentLesson}
        onBack={() => setMode('list')}
        onMore={() => setMode('study')}
      />
    );
  }

  if (mode === 'study') {
    return (
      <LessonStudy
        lesson={currentLesson}
        lessons={lessons}
        onNext={(nextLesson) => {
          setCurrentLesson(nextLesson);
          setMode('intro');
        }}
        onGoHome={() => setMode('list')}
        onCompleteAll={() => setAllCompleted(true)}
      />
    );
  }

  return (
    <div>
      <h2>📚 Сабақтар</h2>

      {lessons.map(lesson => {
        const isCompleted = completed.includes(lesson.id);

        return (
          <div
            key={lesson.id}
            className="lesson-card"
            style={{
              borderLeft: isCompleted
                ? '6px solid #4caf50'
                : '6px solid transparent',
              background: isCompleted ? '#f1f8f4' : '#fff',
            }}
          >
            <h3>
              {lesson.title} {isCompleted && '✅'}
            </h3>

            <p>{lesson.intro}</p>

            <button
              className="button"
              onClick={() => {
                setCurrentLesson(lesson);
                setMode('intro');
              }}
            >
              Ашық
            </button>
          </div>
        );
      })}
    </div>
  );
}
