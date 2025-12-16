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
  const [openLessonId, setOpenLessonId] = useState(null);
  const [allCompleted, setAllCompleted] = useState(false);

  if (allCompleted) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>🎉 Барлық сабақтар аяқталды!</h1>
        <p>Сіз 34 сабақтың барлығын аяқтадыңыз.</p>
      </div>
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
        const isOpen = openLessonId === lesson.id;

        return (
          <div
            key={lesson.id}
            className={`lesson-card ${isCompleted ? 'completed' : ''}`}
          >
            <button
              className={`accordion ${isOpen ? 'active' : ''}`}
              onClick={() =>
                setOpenLessonId(isOpen ? null : lesson.id)
              }
            >
              {lesson.title} {isCompleted && '✅'}
            </button>

            <div className={`panel ${isOpen ? 'open' : ''}`}>
              <p>{lesson.intro}</p>

              <button
                className="button"
                onClick={() => {
                  setCurrentLesson(lesson);
                  setMode('study');
                }}
              >
                Сабақты ашу
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
