import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "./context/user";
import UserCard from "./UserCard";

const UsersGrid = () => {
  const [randomUser, setRandomUser] = useState([]);

  const { loggedIn, user, allUsers } = useContext(UserContext);

  const match = user?.matches?.map((m) => m.id) || [];
  const availableUsers = allUsers.filter((u) => u.id !== user.id).filter((u) => !match.includes(u.id)) 

  useEffect(() => {
    if (allUsers.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableUsers.length);
      setRandomUser(availableUsers[randomIndex]);
    } else {
      setRandomUser([]);
    }
  }, [allUsers]);


  if (loggedIn) {
  return (
    <>
    <br/>
   <img src={require("../src/img/timbrelogo.png")} alt="timbre_logo" className="logo2" />
      <article >
      
       
          <UserCard key={randomUser.id} user={randomUser} />
       
      </article>

     

    </>
  );
} else {
  <h2>Not authorized</h2>
}
}


export default UsersGrid;
