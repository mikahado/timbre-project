import React, { useState, useContext } from "react"
import { UserContext } from "./context/user"
import UserProfile from "./UserProfile"
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
        <h3>{user.username}</h3>
      <button className="secondary-button" onClick={handleProfileClick}>profile</button>
      </header>
      
      {toggle ? <UserProfile key={user.id} id={user.id} /> : null}
      {/* <Link to={`/users/${user.id}`}>
        <header>{user.username}</header>
      </Link> */}

      <footer>
        <button className="accept-button" onClick={() => handleMatchRequestClick(user.id)}>✔</button>
        <br />
        <button className="warning-button">X</button>
      </footer>

    </article>
  );
};

export default UserCard;
