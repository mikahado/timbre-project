import React, { useState, useContext } from "react";
import { UserContext } from "./context/user";
import { useNavigate } from "react-router-dom";
import { CometChat } from '@cometchat-pro/chat'
import "./App.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { login } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (!user.error) {
          login(user);
          navigate("/");

          const authKey = process.env.REACT_APP_COMETCHAT_KEY
          const uid = user.id.toString()
      
          CometChat.login(uid, authKey).then(
            user => {
              console.log("Login Successful:", { user })
            },
            error => {
              console.log("Login failed with exception:", { error })   
            }
          )




        } else {
          setPassword("");
          const errorLi = <li>{user.error}</li>;
          setError(errorLi);
        }
      });
  };

  return (
    <div>
      <dialog open>
        <article className="auth">
          <header className="card">
            <a href="/" aria-label="Close" class="close"></a>
          </header>

          <h1>
            <em>SIGN IN</em>
          </h1>

          <form onSubmit={handleSubmit}>
            <br />
            <input
              type="text"
              placeholder="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button className="button1" type="submit">
              Submit
            </button>
          </form>

          <ul>{error}</ul>
        </article>
      </dialog>
    </div>
  );
};

export default Login;
