import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) onLogin(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "0.6rem",
    marginBottom: "1rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    boxSizing: "border-box"
  };

  const buttonStyle = {
    padding: "0.6rem 2rem",
    backgroundColor: "#00796b",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer"
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
          background: "#fff",
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
          style={inputStyle}
        />

        <div style={{ position: "relative", marginBottom: "1.5rem" }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ ...inputStyle, paddingRight: "4rem" }}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#00796b",
              fontWeight: "bold",
              userSelect: "none"
            }}
          >
            {showPassword ? "HIDE" : "SHOW"}
          </span>
        </div>

        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
