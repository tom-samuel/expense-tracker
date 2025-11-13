import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) onLogin(true);
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#e0f7fa"
    }}>
      <form 
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          width: "300px",
          textAlign: "center"
        }}
      >
        <h2 style={{ marginBottom: "1rem", color: "#00796b" }}>Expense Tracker</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: "1rem" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: "100%", marginBottom: "1.5rem" }}
        />
        <button type="submit" style={{
          width: "100%",
          padding: "0.5rem",
          backgroundColor: "#00796b",
          color: "#fff",
          borderRadius: "5px",
        }}>Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
