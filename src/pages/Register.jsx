import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function Register({ onRegister }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    if (!fullName.trim()) {
      alert("Аты-жөніңізді енгізіңіз");
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = result.user;

      // 🔥 создаём пользователя в Firestore
      await setDoc(doc(db, "users", user.uid), {
        fullName: fullName.trim(),
        email: user.email,
        role: "student",
        progress: 0,
        completedLessons: [],
      });

      alert("Тіркелу сәтті өтті!");
      onRegister();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Тіркелу</h1>

        <input
          className="input"
          placeholder="Аты-жөніңіз"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
        />

        <input
          className="input"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="Құпия сөз"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button className="button" onClick={register}>
          Тіркелу
        </button>
      </div>
    </div>
  );
}
