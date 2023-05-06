import React, { useContext } from "react"
import { UserContext } from "./context/user"
import { Link } from "react-router-dom"

const UserProfile = ({ user }) => {

  const { handleMatchRequest  } = useContext(UserContext) 

  const handleMatchRequestClick = (id) => {   
    handleMatchRequest(id)
  }

  
  return (
    <article>
      <Link to={`/users/${user.id}`}>
        {user.name}
        <header>{user.username}</header>
        
      </Link>
      <footer>
        <button className="accept-button" onClick={() => handleMatchRequestClick(user.id)}>Yawp!</button>
        <br />
        <button className="warning-button">Nah</button>
      </footer>
    </article>
  );
};

export default UserProfile;
