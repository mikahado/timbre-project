import React, { useState, useContext } from "react"
import { UserContext } from "./context/user"
import UserProfile from "./UserProfile"
import UserMediaCard from "./UserMediaCard"
import { Link } from "react-router-dom"

const UserCard = ({ user }) => {

  const [toggle, setToggle] = useState(false)

  const { handleMatchRequest, handleRemoveUser  } = useContext(UserContext) 

  const handleMatchRequestClick = (id) => {   
    handleMatchRequest(id)
    handleRemoveUser(id)
  }

  const handleMatchRejectClick = (id) => {   
    handleRemoveUser(id)
    console.log(id)
  }


  return (
    <article>
      <header>
        <Link to={`/users/${user.id}`}>
        <p>{user.username}</p>
      </Link>
      </header>
      
      <img src={user.profile?.media_1}></img>
   

      <footer>
        <button className="accept-button" onClick={() => handleMatchRequestClick(user.id)}>✔</button>
        <button className="warning-button" onClick={() => handleMatchRejectClick(user.id)}>X</button>
      </footer>

    </article>
  )
}

export default UserCard
