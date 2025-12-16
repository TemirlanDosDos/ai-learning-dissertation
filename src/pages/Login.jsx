import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      onLogin(result.user);
    } catch (error) {
      alert("Қате email немесе құпия сөз");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Кіру</h1>

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

        <button className="button" onClick={login}>
          Кіру
        </button>
      </div>
    </div>
  );
}
