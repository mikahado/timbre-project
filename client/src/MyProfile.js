import React, { useState, useContext } from "react";
import PreferencesForm from "./PreferencesForm";
import { UserContext } from "./context/user";

const UserProfile = () => {
  const { user, loggedIn } = useContext(UserContext);

  const [profile, setProfile] = useState({
    username: "",
    location: "",
    bio: "",
    media1: "",
    media2: "",
    media3: "",
    media4: "",
    link: "",
  });

  return (
    <>
      <br />

      <article>
        <header>{user.username}</header>
        Photo
        <footer>
          <label for="location">
            Location
            <input
              type="text"
              id="location"
              name="location"
              placeholder="my location"
              required
            />
          </label>
          <button className="primary-button">Edit</button>
        </footer>
      </article>

      <article>
        <PreferencesForm />
      </article>
    </>
  );
};

export default UserProfile;
