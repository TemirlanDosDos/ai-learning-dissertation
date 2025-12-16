import Quiz from "./Quiz";
import { completeLesson } from "../services/progressService";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function LessonStudy({
                                      lesson,
                                      currentUser,
                                      onFinishLesson,
                                      onGoHome,
                                    }) {
  if (!lesson) return null;

  const finishLesson = async () => {
    await completeLesson(currentUser, lesson.id);

    // 🔄 обновляем currentUser из Firestore
    const snap = await getDoc(doc(db, "users", currentUser.uid));
    if (snap.exists()) {
      currentUser.completedLessons = snap.data().completedLessons;
      currentUser.progress = snap.data().progress;
    }

    onFinishLesson();
  };

  return (
    <div>
      <h1>{lesson.title}</h1>

      <div
        style={{ whiteSpace: "pre-line" }}
        dangerouslySetInnerHTML={{ __html: lesson.content }}
      />

      <hr style={{ margin: "30px 0" }} />

      <Quiz quiz={lesson.quiz} onPassed={finishLesson} />

      <button
        className="button"
        style={{ marginTop: 20 }}
        onClick={onGoHome}
      >
        Басты бетке қайту
      </button>
    </div>
  );
}
