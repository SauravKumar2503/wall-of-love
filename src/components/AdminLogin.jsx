import { useState } from "react";
import { saveSession } from "../utils/storage";

function AdminLogin({ onLogin }) {
  const [password, setPassword] = useState("");

  const login = () => {
    if (password === "admin123") {
      const session = { role: "admin" };
      saveSession(session);
      onLogin(session);
    } else {
      alert("Wrong password");
    }
  };

  return (
    <div className="login">
      <h2>Admin Login</h2>
      <input
        type="password"
        placeholder="Admin password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default AdminLogin;
