import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "./context/user";
import UserCard from "./UserCard";

const UsersGrid = () => {
  const [twoRand, setTwoRand] = useState([])
  
  const { allUsers } = useContext(UserContext)

  // useEffect (() => {
  //   randomProfile()
  //  }, [allUsers])

  // const randomProfile = () => {
  //   const twoRand = allUsers?.sort(() => Math.random() - Math.random()).slice(0, 1)
  //   setTwoRand(twoRand)
  // }

  const choiceCards = twoRand.map((u) => <UserCard key={u.id} user={u} />)

  return (
    <>
      <h2>Browse Musicians</h2>
      <main className="container">
        <div class="grid" >
          {choiceCards}
        </div>
      </main>
    </>
  );
};

export default UsersGrid;
