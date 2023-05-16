import React, { useState, useContext } from "react";
import { UserContext } from "./context/user";
import UserProfilePreview from "./UserProfilePreview";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  const [toggle, setToggle] = useState(false);

  const { handleMatchRequest, handleRemoveUser } = useContext(UserContext);

  const handleMatchRequestClick = (id) => {
    handleMatchRequest(id);
    handleRemoveUser(id);
  };

  const handleMatchRejectClick = (id) => {
    handleRemoveUser(id);
  };

  const handleProfilePreviewClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <article className="card-browse">
        <header>
          <button
            className="secondary-button"
            onClick={handleProfilePreviewClick}
          >
            {user?.profile?.name}
          </button>
        </header>

        <img src={user.profile_pic} />

        <footer>
          <button
            className="accept-button"
            onClick={() => handleMatchRequestClick(user.id)}
          >
            ✔
          </button>
          <button
            className="warning-button"
            onClick={() => handleMatchRejectClick(user.id)}
          >
            X
          </button>
        </footer>

        {toggle ? (
          <dialog open>
            <article>
              <button
                className="primary-button"
                onClick={handleProfilePreviewClick}
              >
                {" "}
                Back{" "}
              </button>

              <UserProfilePreview user_2={user} id={user.id} />

              <button
                className="primary-button"
                onClick={handleProfilePreviewClick}
              >
                {" "}
                Close{" "}
              </button>
            </article>
          </dialog>
        ) : null}
      </article>
    </>
  );
};

export default UserCard;
