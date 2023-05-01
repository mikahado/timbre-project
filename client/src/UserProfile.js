import React, { useContext } from "react";
import { UserContext } from "./context/user";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { allProfiles, loggedIn } = useContext(UserContext);
  const { id } = useParams();

  const user = allProfiles.find((u) => u.id === parseInt(id));

  return (
    <>
      <article>
        <header>{user?.username}</header>
        Photo
        <footer></footer>
      </article>
    </>
  );
};

export default UserProfile;
