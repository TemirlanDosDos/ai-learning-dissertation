import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import lessonsData from "../data/lessons/lessonsData.js";

const TEACHER_EMAIL = "teacher@university.kz";
const TOTAL_LESSONS = 34;

export default function TeacherPanel() {
  const [students, setStudents] = useState([]);
  const [openStudentId, setOpenStudentId] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      const snap = await getDocs(collection(db, "users"));
      const data = snap.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(u => u.role === "student");

      setStudents(data);
    };

    fetchStudents();
  }, []);

  return (
    <div className="teacher-panel">
      <h1>👨‍🏫 Мұғалім панелі</h1>

      <h2>👨‍🎓 Студенттер</h2>

      <div className="students-list">
        {students.map(student => {
          const completed = student.completedLessons || [];
          const percent = student.progress || 0;
          const isOpen = openStudentId === student.id;

          return (
            <div key={student.id} className="student-card">
              <div
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setOpenStudentId(isOpen ? null : student.id)
                }
              >
                <strong>{student.fullName}</strong>
                <p>{student.email}</p>
                <p>Прогресс: {percent}%</p>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${percent}%` }}
                  />
                </div>

                <small>
                  Аяқталған сабақтар:{" "}
                  {completed.length} / {TOTAL_LESSONS}
                </small>
              </div>

              {/* 📚 Детальный прогресс */}
              {isOpen && (
                <div style={{ marginTop: 15 }}>
                  <h4>📚 Сабақтар</h4>

                  {lessonsData.map(lesson => {
                    const done = completed.includes(lesson.id);

                    return (
                      <div
                        key={lesson.id}
                        style={{
                          padding: "6px 10px",
                          marginBottom: 6,
                          borderRadius: 6,
                          background: done
                            ? "#e8f5e9"
                            : "#f5f5f5",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          fontSize: 14
                        }}
                      >
                        <span>
                          {lesson.id}. {lesson.title}
                        </span>
                        <span>
                          {done ? "✅" : "❌"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
