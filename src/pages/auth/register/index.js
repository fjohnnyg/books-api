import { useRef, useState, useEffect } from "react";
import axios from "../../../api/axios";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REGISTER_URL = "/auth/register";

const Register = () => {
  const emailRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [password, setPassword] = useState("");

  const [name, setName] = useState("");

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setPassword(password);
  }, [password]);

  useEffect(() => {
    setName(name);
  }, [name]);

  useEffect(() => {
    setErrMsg("");
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = EMAIL_REGEX.test(email);
    const v2 = password;
    const v3 = name;
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }

    const data = {
      email: email,
      password: password,
      name: name,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
    };

    axios
      .post(REGISTER_URL, data, config)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email:</label>
        <input
          type="text"
          id="email"
          ref={emailRef}
          autoComplete="of"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          aria-invalid={validEmail ? "false" : "true"}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />

        <label htmlFor="name">Name</label>

        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />

        {
          <button disabled={!validEmail || !password || !name ? true : false}
          >
            Sign Up
          </button>
        }
      </form>
    </section>
  );
};

export default Register;
