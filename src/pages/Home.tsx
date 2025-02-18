import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("AuthContext is not provided");
  }

  const { isLoggedIn } = auth;

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome to Home Page</h1>
          <p>{isLoggedIn ? "You are logged in!" : "You are not logged in."}</p>
        </div>
      ) : (
        <div>
          <h1>Please login before continuing</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
