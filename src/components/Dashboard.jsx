import React from "react";

function Dashboard() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Segoe UI" }}>
      <h1 style={{ textAlign: "center", color: "#00796b" }}>Dashboard</h1>
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "2rem"
      }}>
        <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", width: "150px" }}>
          <h3>Total Expenses</h3>
          <p>$1,250</p>
        </div>
        <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", width: "150px" }}>
          <h3>Categories</h3>
          <p>5</p>
        </div>
        <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", width: "150px" }}>
          <h3>Transactions</h3>
          <p>20</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
