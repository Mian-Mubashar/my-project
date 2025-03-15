import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Sign_up = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    console.log(name, email, password);

    let result = await fetch("http://localhost:8000/register/", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    // ==== Local Storage ===
    localStorage.setItem("user", JSON.stringify(result));
    // ========================
    navigate("/");
  };

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Sign Up</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          type="submit"
          onClick={submit}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Sign_up;
