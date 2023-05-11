import React from "react";
import { Link } from "react-router-dom";

const MatchRow = ({  match, id }) => {

  return (
    <tr>
      <td>
      <Link to={`/chat/${id}`}>
        <img
          // src={`${match.profile.media_1}`}
          alt={`${match.username}`}
          className="profile-img"
          width="150"
        ></img>
      </Link>
      </td>

      <td>
      <Link to={`/users/${match.id}`}>
        {match.username}
      </Link>
      </td>

    </tr>

  );
};

export default MatchRow;
