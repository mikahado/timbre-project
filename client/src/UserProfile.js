import React, { useState, useContext, useEffect } from "react"
import { UserContext } from "./context/user"
import { useParams } from "react-router-dom"
import UserMediaCard from "./UserMediaCard"
import Geo from "./Geo"

const UserProfile = () => {
  const [user, setUser] = useState({
    preference: [],
    profile: [],
  })
  const [errors, setErrors] = useState([])

  const { loggedIn } = useContext(UserContext)

  const { id } = useParams()

  useEffect(() => {
      fetch(`/profiles/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
          if (data.errors) {
            setErrors(data.errors)
          } else {
            setUser(data)
          }
        })

  }, [loggedIn])  
  
  return (
    <>
      <article>
        <header>
          <h4>{user?.username}</h4>
          <p>{user.profile?.location}</p>
          
        </header>

        <UserMediaCard key={id} media={user.profile} />

        <footer>
          <li>{user.profile?.bio}</li>
        </footer>
      </article>

      <article>
        <ul>
          <li>Instrument: {user.preference?.instruments}</li>
          <li>Wants to play with: {user.preference?.instruments_wanted}</li>
          <li>Skill level: {user.preference?.skill}</li>
          <li>Main Genre: {user.preference?.genres}</li>
          <li>Music Goals: {user.preference?.goals}</li>
          <li>Pay: {user.preference?.money}</li>
          <li>Can host: {user.preference?.host}</li>
        </ul>
        <footer>
          <li>...</li>
        </footer>
      </article>


    </>
  );
};

export default UserProfile;
