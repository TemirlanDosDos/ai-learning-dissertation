import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";

const TOTAL_LESSONS = 34;

export function calculateProgress(completedLessons = []) {
  return Math.round(
    (completedLessons.length / TOTAL_LESSONS) * 100
  );
}

export function getLessonStatus(
  lessonId,
  completedLessons = [],
  role = "student"
) {
  // 👨‍🏫 Учителю всё открыто
  if (role === "teacher") return "available";

  // ✅ Если урок пройден
  if (completedLessons.includes(lessonId)) {
    return "completed";
  }

  // ✅ ВСЕ остальные уроки доступны
  return "available";
}



export async function completeLesson(user, lessonId) {
  if (!user.completedLessons?.includes(lessonId)) {
    const newCompletedLessons = [
      ...(user.completedLessons || []),
      lessonId,
    ];

    const newProgress = calculateProgress(
      newCompletedLessons
    );

    const ref = doc(db, "users", user.uid);

    await updateDoc(ref, {
      completedLessons: arrayUnion(lessonId),
      progress: newProgress,
    });
  }
}
