import React, { useState, useContext, useEffect } from "react";
import Geo from "./Geo";
import { UserContext } from "./context/user";
import { NavLink, useNavigate } from "react-router-dom";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const OnboardProfile = () => {
  const { user, createMyProfile, errors } = useContext(UserContext);

  const [myProfile, setMyProfile] = useState({
    name: "",
    bio: "",
    media_1: "",
    media_2: "",
    media_3: "",
    media_4: "",
  });

  const handleCreateMyProfile = (e) => {
    e.preventDefault();
    createMyProfile(myProfile);
  };

  if (!user.profile) {
    return (
      <>
        <dialog open>
          <article>
          <header>
              <h2>Create Your Profile</h2>
            </header>

            <form onSubmit={handleCreateMyProfile}>
              <label>Arist Name</label>
              <input
                type="text"
                name="name"
                value={myProfile.name}
                onChange={(e) =>
                  setMyProfile({ ...myProfile, name: e.target.value })
                }
              />

              <label>Link Profile Pic</label>
              <input
                type="text"
                name="media_1"
                value={myProfile.media_1}
                onChange={(e) =>
                  setMyProfile({ ...myProfile, media_1: e.target.value })
                }
              />

              <label>Write a Bio</label>
              <textarea
                className="textarea"
                type="text"
                name="bio"
                value={myProfile.bio}
                onChange={(e) =>
                  setMyProfile({ ...myProfile, bio: e.target.value })
                }
              />

              <br />

              {errors.map((error, index) => (
                <small key={index} className="errors">
                  {error}
                </small>
              ))}
              <br />

              <button
                type="submit"
                className="accept-button"
                onSubmit={handleCreateMyProfile}
              >
                Save
              </button>
            </form>
          </article>
        </dialog>
      </>
    );
  } else {
    return (
      <h2>
        Not authorized. 
      </h2>
    )
  }
}
export default OnboardProfile;