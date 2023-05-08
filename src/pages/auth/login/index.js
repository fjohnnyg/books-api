import React from "react";
import { useState, useEffect } from "react";
import axios from "../../../api/axios";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LOGIN_URL = "/auth/login";

export default function Login() {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setPassword(password);
  }, [password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
    };

    axios
      .post(LOGIN_URL, data, config)
    //   .then((response) => console.log(response.data))
      .then((response) => {
        const token = response.data.data.token;
        console.log(token);
        sessionStorage.setItem('token', token);
        console.log('Token saved successfully');
      })
      .catch((error) => console.log(error));
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email:</label>
        <input
          type="text"
          id="email"
          autoComplete="of"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          aria-invalid={validEmail ? "false" : "true"}
        />
        <br/>

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />

        {
          <button disabled={!validEmail || !password ? true : false}>
            login
          </button>
        }
      </form>
    </section>
  );
}
