import { useState } from "react";
import { getSession, logout } from "./utils/storage";
import Login from "./components/Login";
import AdminLogin from "./components/AdminLogin";
import ReviewForm from "./components/ReviewForm";
import WallOfLove from "./components/WallOfLove";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  const [session, setSession] = useState(getSession());
  const [refresh, setRefresh] = useState(0);

  if (!session) {
    return (
      <>
        <Login onLogin={setSession} />
        <AdminLogin onLogin={setSession} />
      </>
    );
  }

  if (session.role === "admin") {
    return <AdminDashboard onLogout={() => setSession(null)} />;
  }

  return (
    <>
      <ReviewForm user={session} onUpdate={() => setRefresh((r) => r + 1)} />
      <WallOfLove refresh={refresh} />
      <button onClick={() => { logout(); setSession(null); }}>Logout</button>
    </>
  );
}

export default App;
