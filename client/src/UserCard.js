import React from "react";
import { Link } from "react-router-dom";

const UserProfile = ({ user }) => {
  return (
    <article>
      <Link to={`/users/${user.id}`}>
        {user.name}
        <header>{user.username}</header>
        Photo
      </Link>
      <footer>
        <button className="accept-button">Yawp!</button>
        <br />
        <button className="warning-button">Nah</button>
      </footer>
    </article>
  );
};

export default UserProfile;
