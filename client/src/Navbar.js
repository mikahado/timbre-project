import React, { useContext } from "react"
import { UserContext } from "./context/user"
import { NavLink, useNavigate } from "react-router-dom"

const Navbar = () => {
  const { user, logout, loggedIn } = useContext(UserContext)
  const navigate = useNavigate()

  if (loggedIn) {
    return (
      <>
        <main class="containers">
          <nav class="container-fluid">
            <ul>
              <NavLink to="/my-profile">
                  <h3>
                    <img src={user?.profile?.media_1} alt="profile_pic" className="profile-img"></img>
                    <p>{user.username}</p>
                  </h3>

              </NavLink>
            </ul>

            <ul>
              <li>
                <NavLink to="/users">
                  <button className="button2">Browse</button>
                </NavLink>
              </li>

              <li>
                <NavLink to="/matches">
                  <button className="button2">Matches</button>
                </NavLink>
              </li>

              {/* <li>
                <NavLink to="/match_requests">
                  <button className="button2">You Like</button>
                </NavLink>
              </li> */}

              {/* <li>
                <button class="outline" onClick={logoutUser}>
                  Logout
                </button>
              </li> */}
              <br />
              <br />
            </ul>
          </nav>
        </main>

        <hr />
      </>
    );
  } else {
    return (
      <>
        <nav>
          <ul>
            <li>Timbre</li>
          </ul>

          <NavLink to="/login">Sign in</NavLink>
        </nav>
      </>
    );
  }
};

export default Navbar;
