import React, { ChangeEvent, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useContext(AuthContext);
  const navigate = useNavigate(); // Hook for navigation

  if (!auth) {
    throw new Error("AuthContext is not provided");
  }

  const { setIsLoggedIn } = auth;

  // Form validation function
  const validateForm = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    if (email.length <= 5 || password.length < 7) {
      alert(
        "Email must be longer than 5 characters, and password must be at least 7 characters."
      );
      return false;
    }
    return true;
  };

  const handleRegister = () => {
    if (validateForm({ email, password })) {
      setIsLoggedIn(true); // Set login state to true
      navigate("/"); // Redirect to home page
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "0 10vw" }}>
      <h1>Register</h1>
      <label>Email</label>
      <input
        type="text"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      <button onClick={handleRegister}>Register</button>
      <h2 onClick={() => navigate("/Login")}>
        Already have an account? Log in
      </h2>
    </div>
  );
};

export default Register;
