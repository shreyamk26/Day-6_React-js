"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Sample hardcoded credentials (replace with API call)
    const validEmail = "test@example.com";
    const validPassword = "password123";

    if (email === "" || password === "") {
      setError("Please fill in both email and password.");
    } else if (email === validEmail && password === validPassword) {
      setError("");
      alert("Login Successful!");
      router.push("/dashboard"); // Redirects to dashboard
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-blue-500 items-center justify-center">
      {/* Login Card */}
      <div className="flex flex-col items-center bg-white w-[400px] h-[600px] rounded-lg shadow-lg p-6">
        {/* Logo */}
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
          className="w-32 mb-4"
          alt="Logo"
        />

        {/* Error Message */}
        {error && <p className="text-red-600 mb-3">{error}</p>}

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col w-full items-center">
          {/* Email Input */}
          <input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="email"
            className="w-full px-4 py-2 border border-gray-400 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="Enter your email"
          />

          {/* Password Input */}
          <input
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            type="password"
            className="w-full px-4 py-2 border border-gray-400 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="Enter your password"
          />

          {/* Login Button */}
          <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded-full hover:bg-blue-800 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}