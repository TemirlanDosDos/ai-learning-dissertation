export default function Profile({ currentUser }) {
  if (!currentUser) {
    return <p>Пайдаланушы табылмады</p>;
  }

  const isTeacher = currentUser.role === "teacher";

  return (
    <div className="profile-box">
      <h2>👤 Профиль</h2>

      <p>
        Атыңыз: <strong>{currentUser.fullName}</strong>
      </p>

      <p>
        Рөлі: <strong>{isTeacher ? "Мұғалім" : "Қолданушы"}</strong>
      </p>

      {/* 🔥 Прогресс ТОЛЬКО для ученика и ТОЛЬКО из Firestore */}
      {!isTeacher && (
        <>
          <p>
            Оқу барысы: <strong>{currentUser.progress}%</strong>
          </p>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${currentUser.progress}%` }}
            />
          </div>
        </>
      )}
    </div>
  );
}
