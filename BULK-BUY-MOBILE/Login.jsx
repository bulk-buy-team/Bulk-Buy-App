import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null); // State for notifications
  const [isSuccess, setIsSuccess] = useState(false); // State to style notification

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null); // Clear previous messages

    if (!email || !password) {
      setMessage("Email and Password are required.");
      setIsSuccess(false);
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await fetch("http://localhost:8000/Login.php", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json(); // Assume PHP returns JSON
        if (result.success) {
          setMessage("Login successful! Redirecting...");
          setIsSuccess(true);
          if (result.role === "admin") {
            setTimeout(() => navigate("/admindashboard"), 2000);
          } else {
            setTimeout(() => navigate("/dashboard"), 2000);
          }
        } else {
          setMessage(result.message || "Login failed. Check your credentials.");
          setIsSuccess(false);
        }
      } else {
        setMessage("An error occurred while logging in.");
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Error occurred:", error);
      setMessage("A network error occurred. Please try again.");
      setIsSuccess(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", marginTop: "13pc" }}>
      <h2>Login</h2>

      {/* Notification Message */}
      {message && (
        <div
          style={{
            padding: "10px",
            marginBottom: "15px",
            color: isSuccess ? "green" : "red",
            border: `${isSuccess ? "green" : "red"}`,
            textAlign: "center",
          }}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              border: "2px solid #d0430e",
              borderRadius: "20px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              border: "2px solid #d0430e",
              borderRadius: "20px",
              width: "100%",
              padding: "10px",
              fontSize: "16px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px", textAlign: "right" }}>
          <a
            href="/Forgot"
            onClick={(e) => {
              e.preventDefault();
              navigate("/Forgot");
            }}
            style={{ color: "#d0430e" }}
          >
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "15px",
            backgroundColor: "#d0430e",
            color: "white",
            fontSize: "16px",
            borderRadius: "25px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;