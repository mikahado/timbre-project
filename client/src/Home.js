import React, { useContext } from "react";
import { UserContext } from "./context/user";
import { NavLink, useNavigate } from "react-router-dom";
// import shindyLogo from './imgs/shindyLogo.png'

const Home = () => {
  const { user, login, loggedIn } = useContext(UserContext)
  const navigate = useNavigate();

  if (loggedIn) {
    return (
      <div>
        <h3>
          <br />
          <h1>
            {/* <strong> Home </strong> */}
          </h1>
          <br />
        </h3>
      </div>
    );
  } else {
    return (
      <div>
        <main class="container">
          <article className="card2">
            <h2>Timbre</h2>
            <h4>
              <p>Match w musicians with you.</p>
            </h4>
          </article>

          <NavLink to="/signup">
            <button className="primary-button">Join Timbre</button>
          </NavLink>
          <br />
        </main>
      </div>
    );
  }
};

export default Home;
