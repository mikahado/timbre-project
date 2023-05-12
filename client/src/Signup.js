import React, { useState, useContext } from "react"
import { CometChat } from '@cometchat-pro/chat'
import { UserContext } from "./context/user"
import { useNavigate } from "react-router-dom"

const Signup = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [errorsList, setErrorsList] = useState("")

  const navigate = useNavigate()

  const { signup } = useContext(UserContext)
  
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (!user.errors) {
          signup(user);
          navigate("/onboarding");

          const authKey = process.env.REACT_APP_COMETCHAT_KEY
          const uid = user.id.toString()
          const name = user.username.toString()

          var cc_user = new CometChat.User(uid)
          cc_user.setName(name)

          CometChat.createUser(cc_user, authKey).then(
            cc_user => {
                  console.log("user created", cc_user);
              },error => {
                  console.log("error", error);
              }
      )

        } else {
          setUsername("");
          const errorLis = user.errors.map((e) => <li>{e}</li>);
          setErrorsList(errorLis);
          }
        })
    }
  

  return (
    <>
      <dialog open>
        <article className="auth">
          <header className="card">
            <a href="/" aria-label="Close" class="close">
              {" "}
            </a>
          </header>

          <h1>
            <em>JOIN TIMBRE</em>
          </h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="username"
              value={username}
              placeholder={"username"}
              onChange={(e) => setUsername(e.target.value)}
            />{" "}
            <br />
            <br />
            <input
              type="email"
              id="email"
              value={email}
              placeholder={"email"}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <br />
            <br />
            <input
              type="password"
              id="password"
              value={password}
              placeholder={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <br />
            <br />
            <input
              type="password"
              id="password_confirmation"
              value={passwordConfirmation}
              placeholder={"confirm password"}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />{" "}
            <br />
            <br />
            <button className="button1" type="submit">
              Submit
            </button>
          </form>
          <ul>{errorsList}</ul>
        </article>
      </dialog>
    </>
  );
};

export default Signup;
