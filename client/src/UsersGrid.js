import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "./context/user";
import UserCard from "./UserCard";

const UsersGrid = () => {
  const [randomUser, setRandomUser] = useState([]);

  const { loggedIn, allUsers } = useContext(UserContext);

  useEffect(() => {
    if (allUsers.length > 0) {
      const randomIndex = Math.floor(Math.random() * allUsers.length);
      setRandomUser(allUsers[randomIndex]);
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
