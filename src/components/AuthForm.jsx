import React, { useState } from "react";

function AuthForm({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [action, setAction] = useState("login");

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, action }),
    });
    const data = await res.json();
    if (data.token) setToken(data.token);
    else alert(data.message);
  };

  return (
    <form
      onSubmit={submit}
      className="w-full max-w-md p-8 bg-white rounded-xl shadow-xl"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">
        {action === "login" ? "Login" : "Register"}
      </h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="w-full py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
      >
        {action === "login" ? "Login" : "Register"}
      </button>
      <p
        className="mt-4 text-sm text-center text-blue-700 cursor-pointer hover:underline"
        onClick={() =>
          setAction(action === "login" ? "register" : "login")
        }
      >
        {action === "login" ? "Create an account" : "Back to login"}
      </p>
    </form>
  );
}

export default AuthForm;
