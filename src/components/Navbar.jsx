import React from "react";

function Navbar({ onLogout }) {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      backgroundColor: "#00796b",
      color: "#fff",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ margin: 0 }}>Expense Tracker</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <span>Welcome, User</span>
        <button
          onClick={onLogout}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#004d40",
            color: "#fff",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
