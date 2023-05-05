import React, { useState, useContext } from "react";
import PreferencesForm from "./PreferencesForm";
import { UserContext } from "./context/user";
import { NavLink, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { user, loggedIn } = useContext(UserContext);

  const [myProfile, setMyProfile] = useState({
    location: user.profile?.location,
    bio: user.profile?.bio,
    media_1: user.profile?.media_1,
    media_2: user.profile?.media_1,
    media_3: user.profile?.media_1,
    media_4: user.profile?.media_1,
  });

  return (
    <>
      <br/>
      <NavLink to="/my-profile/preferences">
        <p className="secondary-button" >Preferences</p>
      </NavLink>

      <article>
        <header>
          <h1>{user?.username}</h1>
          <p>Location: {user.profile?.location}</p>
          <small>edit</small>
        </header>
        <ul>
          <li>Media 1: {user.profile?.media_1}</li>
          <li>Media 2: {user.profile?.media_2}</li>
          <li>Media 3: {user.profile?.media_3}</li>
          <li>Media 4: {user.profile?.media_4}</li>
        </ul>
        <footer>
          
          <li>Bio: {user.profile?.bio}</li>
        </footer>
      </article>


    </>
  );
};

export default UserProfile;
