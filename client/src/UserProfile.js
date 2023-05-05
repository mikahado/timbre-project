import React, { useContext } from "react";
import { UserContext } from "./context/user";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { allProfiles, loggedIn } = useContext(UserContext);
  const { id } = useParams();

  const user = allProfiles?.find((u) => u.id === parseInt(id));

  return (
    <>
      <br />
      {/* <NavLink to="/my-profile/preferences">
        <p className="secondary-button" >Preferences</p>
      </NavLink> */}

      <article>
        <header>
          <h2>{user?.username}</h2>
          <p>{user.profile?.location}</p>
          <small>edit</small>
        </header>
        <ul>
          <li>{user.profile?.media_1}</li>
          <li>{user.profile?.media_2}</li>
          <li>{user.profile?.media_3}</li>
          <li>{user.profile?.media_4}</li>
        </ul>
        <footer>
          <li>{user.profile?.bio}</li>
        </footer>
      </article>
    </>
  );
};

export default UserProfile;
