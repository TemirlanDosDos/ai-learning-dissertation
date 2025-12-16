export default function LessonStudy({ lesson, lessons, onNext, onGoHome, onCompleteAll }) {
  const user = JSON.parse(localStorage.getItem('currentUser'));

  const finishLesson = () => {
    const key = `completed_${user.username}`;
    const completed = JSON.parse(localStorage.getItem(key)) || [];

    if (!completed.includes(lesson.id)) {
      completed.push(lesson.id);
      localStorage.setItem(key, JSON.stringify(completed));
    }

    const percent = Math.round((completed.length / 34) * 100);
    localStorage.setItem(`progress_${user.username}`, percent);

    const nextLesson = lessons.find(l => l.id === lesson.id + 1);

    if (nextLesson) {
      onNext(nextLesson);
    } else {
      onCompleteAll();
    }
  };

  return (
    <div>
      <h1>{lesson.title}</h1>
      <p>{lesson.content}</p>

      <button className="button" onClick={finishLesson}>
        Келесі сабақ
      </button>

      <button className="button" onClick={onGoHome}>
        Басты бетке қайту
      </button>
    </div>
  );
}
