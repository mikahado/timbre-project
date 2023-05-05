import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "./context/user";
import UserCard from "./UserCard";

const UsersGrid = () => {
  const [fourRand, setFourRand] = useState([])
  const { allProfiles } = useContext(UserContext)

  useEffect (() => {
    fourRandom()
   }, [])

  const fourRandom = () => {
    const fourRand = allProfiles.sort(() => Math.random() - Math.random()).slice(0, 4)
    setFourRand(fourRand)
  }

  const choiceCards = fourRand.map((u) => <UserCard key={u.id} user={u} />);

  return (
    <>
      <h2>Browse Musicians</h2>
      <main class="container">{choiceCards}</main>
      <button onClick={fourRandom}>Next Four</button>
    </>
  );
};

export default UsersGrid;
