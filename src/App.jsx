import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return loggedIn ? <Dashboard onLogout={handleLogout} /> : <LoginForm onLogin={setLoggedIn} />;
}

export default App;
