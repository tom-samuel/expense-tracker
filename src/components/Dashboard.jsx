import React from "react";

function Dashboard({ token }) {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded shadow">
      <h1 className="text-2xl mb-4">Dashboard</h1>
      <p>Welcome! Add transactions to see your expenses and income.</p>
    </div>
  );
}

export default Dashboard;
