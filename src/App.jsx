import { useState } from "react";
import Login from "./components/Login";
import AdminLogin from "./components/AdminLogin";
import ReviewForm from "./components/ReviewForm";
import WallOfLove from "./components/WallOfLove";
import AdminDashboard from "./components/AdminDashboard";
import { getSession, logout } from "./utils/storage";

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
    <div>
      <ReviewForm user={session} onUpdate={() => setRefresh((p) => p + 1)} />
      <WallOfLove refresh={refresh} />
      <button onClick={() => { logout(); setSession(null); }}>
        Logout
      </button>
    </div>
  );
}

export default App;
