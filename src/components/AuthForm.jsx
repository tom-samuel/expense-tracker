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
      className="max-w-md mx-auto p-4 bg-white rounded shadow"
    >
      <h2 className="text-xl mb-4">{action === "login" ? "Login" : "Register"}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        {action === "login" ? "Login" : "Register"}
      </button>
      <p
        className="mt-2 text-sm cursor-pointer text-blue-700"
        onClick={() =>
          setAction(action === "login" ? "register" : "login")
        }
      >
        {action === "login" ? "Create account" : "Back to login"}
      </p>
    </form>
  );
}

export default AuthForm;
