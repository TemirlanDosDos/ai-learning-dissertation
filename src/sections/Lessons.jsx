import { useState } from "react";
import LessonStudy from "./LessonStudy";
import lessonsData from "../data/lessonsData";
import { getLessonStatus } from "../services/progressService";

export default function Lessons({ currentUser }) {
  const lessons = lessonsData;

  const [currentLessonIndex, setCurrentLessonIndex] = useState(null);
  const [openLessonId, setOpenLessonId] = useState(null);

  const currentLesson =
    currentLessonIndex !== null
      ? lessons[currentLessonIndex]
      : null;

  if (currentLessonIndex !== null && !currentLesson) {
    setCurrentLessonIndex(null);
    return null;
  }

  if (currentLesson) {
    return (
      <LessonStudy
        lesson={currentLesson}
        currentUser={currentUser}
        onFinishLesson={() => {
          const nextIndex = currentLessonIndex + 1;

          if (nextIndex < lessons.length) {
            setCurrentLessonIndex(nextIndex);
          } else {
            alert("🎉 Барлық сабақтар аяқталды!");
            setCurrentLessonIndex(null);
          }
        }}
        onGoHome={() => setCurrentLessonIndex(null)}
      />
    );
  }

  return (
    <div>
      <h2>📚 Сабақтар</h2>

      {lessons.map((lesson, index) => {
        const status = getLessonStatus(
          lesson.id,
          currentUser.completedLessons || []
        );

        const isOpen = openLessonId === lesson.id;

        return (
          <div
            key={lesson.id}
            className={`lesson-card ${status}`}
          >
            <button
              className={`accordion ${isOpen ? "active" : ""}`}
              onClick={() =>
                setOpenLessonId(isOpen ? null : lesson.id)
              }
            >
              {lesson.title}
              {status === "completed" && " ✅"}
              {status === "locked" && " 🔒"}
            </button>

            <div className={`panel ${isOpen ? "open" : ""}`}>
              <p>{lesson.intro}</p>

              <button
                className="button"
                disabled={status === "locked"}
                onClick={() => setCurrentLessonIndex(index)}
              >
                {status === "completed"
                  ? "Қайта ашу"
                  : status === "available"
                    ? "Сабақты бастау"
                    : "Құлыптаулы"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
