import { useState } from "react";
import { saveSession } from "../utils/storage";

function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();

    const session = {
      role: "user",
      name,
      email
    };

    saveSession(session);
    onLogin(session);
  };

  return (
    <div className="login">
      <h2>User Login</h2>

      <form onSubmit={submit}>
        <input
          placeholder="Your name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
