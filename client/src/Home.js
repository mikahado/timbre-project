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
          Welcome back!
        </h3>
      </div>
    );
  } else {
    return (
      <div>
        <br/><br/>
        <main class="container">
          {/* <article className="card2"> */}
            <img src={require("../src/img/timbrelogo.png")} alt="timbre_logo" className="logo1" />
            <h4>
              Match w musicians near you.
            </h4>
          {/* </article> */}
<br/><br/>
          <NavLink to="/signup">
            <button className="warning-button">Join Timbre</button>
          </NavLink>
          <br />
        </main>
      </div>
    );
  }
};

export default Home;
