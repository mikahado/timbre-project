import React, { useState, useContext, useEffect } from "react"
import { UserContext } from "./context/user"
import { useParams } from "react-router-dom"
import UserMediaCard from "./UserMediaCard"

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

  }, [id])  
  
  return (
    <>

      <br />
      <article>
        <header>
          <h2>{user?.username}</h2>
          <p>{user.profile?.location}</p>
        </header>

        <UserMediaCard key={id} media={user.profile} />

        <footer>
          <li>{user.profile?.bio}</li>
        </footer>
      </article>

      <article>
        <header>
          <h2>{user?.username}'s Preferences</h2>
        </header>

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
