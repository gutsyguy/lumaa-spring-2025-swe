import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Import the correct context

const Navbar = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("AuthContext is not provided");
  }

  const { isLoggedIn, setIsLoggedIn } = auth;

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <a href="/">
        <h1>Home</h1>
      </a>
      <a href="/Login">
        <h1>{isLoggedIn ? "Logout" : "Login"}</h1>
      </a>
    </div>
  );
};

export default Navbar;
