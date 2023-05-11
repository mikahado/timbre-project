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
  
  return (
    <>
    <br/>
      <h1> {user_2?.username?.toUpperCase()}</h1>
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
          <h3>{user_2?.username?.toUpperCase()}'S PREFERENCES</h3>
          <p><strong>Instrument</strong> <br/> {user_2.preference?.instruments}</p>
          <p><strong>Wants to play with</strong><br/>{user_2.preference?.instruments_wanted}</p>
          <p><strong>Skill level</strong> <br/>{user_2.preference?.skill}</p>
          <p><strong>Main Genre</strong> <br/>{user_2.preference?.genres}</p>
          <p><strong>Music Goals</strong> <br/>to {user_2.preference?.goals}</p>
          <p><strong>Pay:</strong> <br/>{user_2.preference?.money}</p>
          <p><strong>Can host</strong> <br/>{user_2.preference?.host}</p>



        {/* <ul class="no-bullets">
          <li>Instrument: {user_2.preference?.instruments}</li>
          <li>Wants to play with: {user_2.preference?.instruments_wanted}</li>
          <li>Skill level: {user_2.preference?.skill}</li>
          <li>Main Genre: {user_2.preference?.genres}</li>
          <li>Music Goals: {user_2.preference?.goals}</li>
          <li>Pay: {user_2.preference?.money}</li>
          <li>Can host: {user_2.preference?.host}</li>
        </ul> */}
        <footer>
          <li>*</li>
        </footer>
      </article>


    </>
  );
};

export default UserProfile;
