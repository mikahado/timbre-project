import React, { useContext } from "react";
import { UserContext } from "./context/user";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, loggedIn } = useContext(UserContext);

  if (loggedIn) {
    return (
      <>
        
          <nav >
            <ul>
              <li>
              <NavLink to="/my-profile">
                <img
                  src={user?.profile?.media_1}
                  alt="profile_pic"
                  className="profile-img"
                ></img>

                {/* <small>{user?.profile?.name}</small> */}
              </NavLink>
              </li>
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
            </ul>

      
          </nav>
        

        <hr />
      </>
    );
  } else {
    return (
      <>
        <nav>
          <ul>
         
          </ul>

          <NavLink to="/login">Sign in</NavLink>
        </nav>
      </>
    );
  }
};

export default Navbar;
