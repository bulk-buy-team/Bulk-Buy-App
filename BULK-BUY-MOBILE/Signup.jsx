import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [message, setMessage] = useState(null); // State for notifications
  const [isSuccess, setIsSuccess] = useState(false); // State to style message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null); // Clear any previous messages

    if (!agree) {
      setMessage("You must agree to the terms and conditions!");
      setIsSuccess(false);
      return;
    }

    const [firstName, lastName] = name.trim().split(" ");
    if (!firstName || !lastName) {
      setMessage("Please provide your full name (first and last name).");
      setIsSuccess(false);
      return;
    }

    if (password.length < 8) {
      setMessage("Password must be at least 8 characters long.");
      setIsSuccess(false);
      return;
    }

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName || "");
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await fetch("http://localhost:8000/Signup.php", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage("Signup successful! Redirecting to login...");
        setIsSuccess(true);
        setTimeout(() => navigate("/Login"), 2000); // Redirect after 2 seconds
      } else {
        const errorText = await response.text();
        setMessage(`Signup failed: ${errorText}`);
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Error occurred:", error);
      setMessage("An error occurred. Please try again.");
      setIsSuccess(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", marginTop: "10pc" }}>
      <h2>Create Account</h2>
      <p style={{ marginBottom: "10px" }}>Fill your information below</p>

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
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Full Name"
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
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email Address"
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
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              border: "2px solid #d0430e",
              borderRadius: "20px",
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <span style={{ marginLeft: "8px" }}>Agree with Terms & Conditions</span>
          </label>
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "15px",
            backgroundColor: "#d0430e",
            color: "white",
            fontSize: "16px",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
          }}
          disabled={!agree}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;