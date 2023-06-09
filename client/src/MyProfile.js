import React, { useState, useContext, useEffect } from "react";
import Geo from "./Geo";
import { UserContext } from "./context/user";
import { NavLink, useNavigate } from "react-router-dom";
import UserMediaCard from "./UserMediaCard";
import OnboardProfile from "./OnboardProfile"
import UserMediaCard2 from "./UserMediaCard2";
import Home from "./Home";

const UserProfile = () => {
  const { user, loggedIn, logoutUser, updateMyProfile } =
    useContext(UserContext);
  const [toggleGeo, setToggleGeo] = useState(false);
  const [toggleEditBio, setToggleEditBio] = useState(false);

  const [myProfile, setMyProfile] = useState({
    lat: "",
    lng: "",
    bio: "",
    media_1: "",
    media_2: "",
    media_3: "",
    media_4: "",
  });

  useEffect(() => {
    if (user.profile) {
      setMyProfile({
        lat: user.profile.lat,
        lng: user.profile.lng,
        bio: user.profile.bio,
        media_1: user.profile.media_1,
        media_2: user.profile.media_2,
        media_3: user.profile.media_3,
        media_4: user.profile.media_4,
      });
    }
  }, [user]);

  const handleUpdateMyProfile = (e) => {
    e.preventDefault();
    updateMyProfile(myProfile);
    setToggleEditBio(!toggleEditBio);
  };

  const handleDeleteProfileClick = () => {
    fetch(`/profiles/${user.profile.id}`, {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok) {
        logoutUser();
      }
    });
  }

  const handleDeleteAccount = () => {
    fetch(`/users/${user.id}`, {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok) {
        logoutUser();
      }
    });
  }

  if (loggedIn && user.profile) {
    return (
      <>
        <h3>{user?.profile?.name}</h3> <br />
        {toggleEditBio ? (
          <form>
            <textarea
              className="textarea"
              type="text"
              name="bio"
              value={myProfile.bio}
              onChange={(e) =>
                setMyProfile({ ...myProfile, bio: e.target.value })
              }
            />
            <href type="submit" onClick={handleUpdateMyProfile}>
              save
            </href>
          </form>
        ) : (
          <li>{user.profile?.bio}</li>
        )}
        <br />
        <href onClick={(c) => setToggleEditBio(!toggleEditBio)}>
          <small>{toggleEditBio ? null : "edit bio"}</small>
        </href>
        <UserMediaCard key={user.id} media={user.profile} />
        <h3>Settings</h3>
        <NavLink to={`/preferences/${user.id}`}>
          <button className="secondary-button">Preferences</button>
        </NavLink>
        {toggleGeo ? (
          <Geo
            key={user.id}
            coordinates={user.profile?.location}
            setToggleGeo={setToggleGeo}
            toggleGeo={toggleGeo}
          />
        ) : null}
        <button
          className="secondary-button"
          onClick={(c) => setToggleGeo(!toggleGeo)}
        >
          Location
        </button>
        <br />
        <hr />
        <button class="secondary outline" onClick={handleDeleteProfileClick}>
            Erase Profile
          </button>
        <br />
        <li>
          <button class="outline" onClick={logoutUser}>
            Logout
          </button>
        </li>

        <br />
        <img
          src={require("../src/img/timbrelogo.png")}
          alt="timbre_logo"
          className="logo2"
        />
        <br/><br/>
                {/* <li>
          <button class="secondary outline" onClick={handleDeleteAccount}>
            Delete Account
          </button>
        </li> */}
      </>
    );
  } else {
    return <OnboardProfile />;
  }
};

export default UserProfile;
