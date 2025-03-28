import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login1() {
    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [setError] = useState();
    const Navigate = useNavigate();
      const validateUser = () => {
        if (user === "john@gmail.com" && password === "1234") {
          console.log("Valid User");
          setError('');
          Navigate('/Home1');
        }
        else {
          console.log("Invalid User")
          setError('Invalid username or password');
        }
      };
  return (
    <div>
        <p>
            <input
          type="text"
          onChange={(e) => setUser(e.target.value)}
          placeholder="Username"
        ></input>
      </p>
      <p>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        ></input>
      </p>
      <button onClick={validateUser}>Login</button>
    </div>
  )
}
