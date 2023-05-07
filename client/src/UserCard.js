import React, { useState, useContext } from "react"
import { UserContext } from "./context/user"
import UserProfile from "./UserProfile"
import UserMediaCard from "./UserMediaCard"
import { Link } from "react-router-dom"

const UserCard = ({ user }) => {

  const [toggle, setToggle] = useState(false)

  const { handleMatchRequest  } = useContext(UserContext) 

  const handleMatchRequestClick = (id) => {   
    handleMatchRequest(id)
  }

  const handleProfileClick = () => { 
    setToggle(!toggle)
  }

  return (
    <article>
      <header>
        <Link to={`/users/${user.id}`}>
        <h2>{user.username}</h2>
      </Link>
      {/* <button className="secondary-button" onClick={handleProfileClick}>profile</button> */}
      </header>
      
      {/* {toggle ? <UserProfile key={user.id} id={user.id} /> : null} */}
   

      <footer>
        <button className="accept-button" onClick={() => handleMatchRequestClick(user.id)}>✔</button>
        <button className="warning-button">X</button>
      </footer>

    </article>
  );
};

export default UserCard;
