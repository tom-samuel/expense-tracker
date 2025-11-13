import React from "react";

function Dashboard({ token }) {
  // Dummy data for now
  const summary = [
    { title: "Total Income", amount: "$5,000", color: "bg-green-500" },
    { title: "Total Expenses", amount: "$2,200", color: "bg-red-500" },
    { title: "Balance", amount: "$2,800", color: "bg-blue-500" },
  ];

  const recentTransactions = [
    { desc: "Groceries", amount: "-$120", date: "Nov 10" },
    { desc: "Salary", amount: "+$2,500", date: "Nov 1" },
    { desc: "Gym", amount: "-$60", date: "Nov 8" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {summary.map((item, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-xl shadow-lg text-white ${item.color}`}
          >
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-2xl font-bold mt-2">{item.amount}</p>
          </div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2">Description</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentTransactions.map((tx, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="py-2">{tx.desc}</td>
                <td className="py-2">{tx.amount}</td>
                <td className="py-2">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
