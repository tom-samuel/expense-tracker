import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
          textAlign: "center",
          position: "relative"
        }}
      >
        <h2 style={{ marginBottom: "1.5rem", color: "#00796b" }}>Expense Tracker</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: "1rem", padding: "0.6rem", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <div style={{ position: "relative", marginBottom: "1.5rem" }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: "100%", padding: "0.6rem 2.5rem 0.6rem 0.6rem", borderRadius: "6px", border: "1px solid #ccc" }}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer"
            }}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="#00796b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 1l18 18" /> {/* slash */}
                <path d="M10 4.5C5 4.5 1 10 1 10s4 5.5 9 5.5c1.6 0 3.1-.5 4.3-1.4" />
                <path d="M14.9 14.9C13.1 15.6 11.1 16 10 16c-5 0-9-5.5-9-5.5s1.7-2.3 4.1-3.6" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="#00796b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 10s4-5.5 9-5.5 9 5.5 9 5.5-4 5.5-9 5.5S1 10 1 10z" />
                <circle cx="10" cy="10" r="3" />
              </svg>
            )}
          </span>
        </div>

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
