import React, { useState, useContext, useEffect } from "react"
import PreferencesForm from "./PreferencesForm"
import Geo from "./Geo"
import { UserContext } from "./context/user"
import { NavLink, useNavigate } from "react-router-dom"

const UserProfile = () => {
  const { user, loggedIn, logoutUser, updateMyProfile } = useContext(UserContext)
  const [ toggleGeo, setToggleGeo ] = useState(false)
  const [ toggleEditBio, setToggleEditBio ] = useState(false)
  const [ toggleEditMedia1, setToggleEditMedia1 ] = useState(false)
  const [ toggleEditMedia2, setToggleEditMedia2 ] = useState(false)
  const [ toggleEditMedia3, setToggleEditMedia3 ] = useState(false)
  const [ toggleEditMedia4, setToggleEditMedia4 ] = useState(false)

  const [myProfile, setMyProfile] = useState({
    lat: "",
    lng: "",
    bio: "",
    media_1: "",
    media_2: "",
    media_3: "",
    media_4: "",
  })

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
      })
    }
  }, [user])

  const handleUpdateMyProfile = (e) => {
    e.preventDefault()
    updateMyProfile(myProfile)
    setToggleEditBio(!toggleEditBio)
  }

  return (
    <>
      <br/>
   
      <article>
        <header>
          <h1>{user?.username}</h1>

          {toggleEditBio ? 
            <form>
              <textarea
                className="textarea"
                type="text"
                name="bio"
                value={myProfile.bio}
                onChange={(e) => setMyProfile({ ...myProfile, bio: e.target.value })}
              />
              <href type="submit" onClick={handleUpdateMyProfile}>save</href>
            </form>
           : 
           <li>{user.profile?.bio}</li>}

          <br/>

          <href onClick={c => setToggleEditBio(!toggleEditBio)}><small>{toggleEditBio ? null : "edit bio"}</small></href>

        </header>
        <ul>
          <li>Media 1: {user.profile?.media_1}<small> edit</small></li>

          <li>Media 2: {user.profile?.media_2}<small> edit</small></li>

          <li>Media 3: {user.profile?.media_3}<small> edit</small></li>

          <li>Media 4: {user.profile?.media_4}<small> edit</small></li>
          
        </ul>
        <footer>
        <NavLink to={`/preferences/${user.id}`}>
              <button className="secondary-button">Preferences</button>
        </NavLink>
        {/* <NavLink to={`/geo`}>
            <button className="secondary-button">Location</button>
        </NavLink> */}
        <button className="secondary-button" onClick={c => setToggleGeo(!toggleGeo)}>Location</button>
        {toggleGeo ? <Geo key={user.id} coordinates={user.profile?.location} /> : null}
          
        </footer>
      </article>

      <li>
        <button class="outline" onClick={logoutUser}>
          Logout
        </button>
      </li>

    </>
  );
};

export default UserProfile;
