import React, { useState, useContext, useEffect } from "react"
import { UserContext } from "./context/user"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

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
  

  if (loggedIn) {
  return (
    <>
    <br/>
      <h1> {user_2?.name?.toUpperCase()}</h1>
      <p>{user_2?.profile?.bio}</p>
      
      <section className="card-list">
      <article className="card-article">
        <header className="card-header">
        <img src={user_2.profile?.media_1} alt="media"></img>
        </header>
      
      </article>

      <article className="card-article">
        <header class="card-header">
          <img src={user_2.profile?.media_2} alt="media"></img>
        </header>
        
      </article>

      <article className="card-article">
        <header class="card-header">
          <img src={user_2.profile?.media_3} alt="media"></img>
        </header>
        
      </article>

      <article className="card-article">
        <header class="card-header">
          <img src={user_2.profile?.media_4} alt="media"></img>
          
        </header>
        
      </article>

      </section>
      
      <article>
          <h3>{user_2?.profile?.name?.toUpperCase()}'S PREFERENCES</h3>
          <p><strong>Instrument</strong> <br/> {user_2.preference?.instruments}</p>
          <p><strong>Wants to play with</strong><br/>{user_2.preference?.instruments_wanted}</p>
          <p><strong>Skill level</strong> <br/>{user_2.preference?.skill}</p>
          <p><strong>Main Genre</strong> <br/>{user_2.preference?.genres}</p>
          <p><strong>Music Goals</strong> <br/>to {user_2.preference?.goals}</p>
          <p><strong>Pay:</strong> <br/>{user_2.preference?.money}</p>
          <p><strong>Can host</strong> <br/>{user_2.preference?.host}</p>

        <footer>
          <li>*</li>
        </footer>
      </article>

    </>
  );
} else {
  return (
    <h2>Sign in to view this page.</h2>
  )
}
}

export default UserProfile;
