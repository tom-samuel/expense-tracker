import React from "react";
import AuthForm from "./components/AuthForm";
import Dashboard from "./components/Dashboard";

function App() {
  const [token, setToken] = React.useState(null);

  return (
    <div className="min-h-screen p-4">
      {!token ? <AuthForm setToken={setToken} /> : <Dashboard token={token} />}
    </div>
  );
}

export default App;
