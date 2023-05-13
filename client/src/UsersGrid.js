import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "./context/user";
import UserCard from "./UserCard";

const UsersGrid = () => {
  const [randomUser, setRandomUser] = useState([])

  const { allUsers } = useContext(UserContext)

  useEffect(() => {
    if (allUsers.length > 0) {
      const randomIndex = Math.floor(Math.random() * allUsers.length);
      setRandomUser(allUsers[randomIndex]);
    } 
  }, [allUsers])


  return (
    <>
      <h2>Browse Musicians</h2>
      <main className="container">
        <article>
          
        <div >
        <UserCard key={randomUser.id} user={randomUser} />
        </div>
        </article>
      </main>
    </>
  );
};


export default UsersGrid;
