import React, { useState, useContext, useEffect } from "react"
import { UserContext } from "./context/user"
import { useParams } from "react-router-dom"
import { NavLink, useNavigate } from "react-router-dom"
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"
import UserMediaCard from "./UserMediaCard"

const UserProfile = () => {

  const [user_2, setUser_2] = useState({
    preference: [],
    profile: [],
  })
  const [errors, setErrors] = useState([])

  const { user, loggedIn } = useContext(UserContext)
  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
      fetch(`/profiles/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
          if (data.errors) {
            setErrors(data.errors)
          } else {
            setUser_2(data)
          }
        })

  }, [loggedIn])  


// computeDistanceBetween(from, to[, radius])
// Parameters: 
// from:  LatLng|LatLngLiteral
// to:  LatLng|LatLngLiteral
// radius:  number optional
// Return Value:  number
// Returns the distance, in meters, between two LatLngs. You can optionally specify a custom radius. The radius defaults to the radius of the Earth.
  
  return (
    <>
      
      <article>
        <header>
          <h4>{user_2?.username}</h4>
          <p>{user_2.profile?.lat}</p>
          <p>{user_2.profile?.lng}</p>
          <p>{user_2.profile?.bio}</p>          
        </header>

        <UserMediaCard key={id} media={user_2.profile} />

        <footer>
          
        </footer>
      </article>

      <article>
        <ul>
          <li>Instrument: {user_2.preference?.instruments}</li>
          <li>Wants to play with: {user_2.preference?.instruments_wanted}</li>
          <li>Skill level: {user_2.preference?.skill}</li>
          <li>Main Genre: {user_2.preference?.genres}</li>
          <li>Music Goals: {user_2.preference?.goals}</li>
          <li>Pay: {user_2.preference?.money}</li>
          <li>Can host: {user_2.preference?.host}</li>
        </ul>
        <footer>
          <li>...</li>
        </footer>
      </article>


    </>
  );
};

export default UserProfile;
