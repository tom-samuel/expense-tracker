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
      background: "linear-gradient(135deg, #81c784, #4db6ac)"
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#ffffff",
          padding: "2.5rem",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          width: "320px",
          textAlign: "center"
        }}
      >
        <h2 style={{ marginBottom: "1.5rem", color: "#00796b" }}>Expense Tracker</h2>
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
          padding: "0.6rem",
          backgroundColor: "#00796b",
          color: "#fff",
          fontWeight: "bold",
          borderRadius: "6px"
        }}>Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
