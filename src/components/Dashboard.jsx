import React from "react";
import Navbar from "./Navbar";

function Dashboard({ onLogout }) {
  const cardStyle = {
    padding: "1.5rem",
    borderRadius: "10px",
    width: "200px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    background: "#ffffff",
    transition: "transform 0.2s",
    textAlign: "center"
  };

  return (
    <div>
      <Navbar onLogout={onLogout} />
      <div style={{ padding: "2rem" }}>
        <h1 style={{ textAlign: "center", color: "#00796b", marginBottom: "2rem" }}>Dashboard</h1>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap"
        }}>
          {["Total Expenses", "Categories", "Transactions"].map((title, index) => (
            <div
              key={index}
              style={cardStyle}
              onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
            >
              <h3 style={{ marginBottom: "1rem", color: "#00796b" }}>{title}</h3>
              <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                {title === "Total Expenses" ? "$1,250" : title === "Categories" ? 5 : 20}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
