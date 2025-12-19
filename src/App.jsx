import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [userData, setUserData] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setUserData(null);
        return;
      }

      const snap = await getDoc(doc(db, "users", user.uid));

      if (!snap.exists()) {
        // 🔒 если документ удалён
        setUserData(null);

        return;
      }

      const data = snap.data();

      // ✅ ЗАЩИТА ОТ УДАЛЁННЫХ ПОЛЕЙ
      setUserData({
        uid: user.uid,
        fullName: data.fullName || "",
        email: data.email || user.email,
        role: data.role || "student",
        completedLessons: data.completedLessons || [],
        progress: data.progress || 0,
      });

      window.currentUserRole = data.role;

    });

    return () => unsub();
  }, []);

  const logout = async () => {
    await signOut(auth);
  };

  if (!userData) {
    return showRegister ? (
      <Register onRegister={() => setShowRegister(false)} />
    ) : (
      <div>
        <Login onLogin={() => {}} />
        <p style={{ textAlign: "center", marginTop: 20 }}>
          Аккаунт жоқ па?{" "}
          <button
            className="register-button"
            onClick={() => setShowRegister(true)}
          >
            Тіркелу
          </button>
        </p>
      </div>
    );
  }

  return <Dashboard currentUser={userData} onLogout={logout} />;
}
