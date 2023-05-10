import React from "react";
import { Link } from "react-router-dom";

const MatchRow = ({ match, id }) => {
  return (
    <tr>
      <td>
      <Link to={`/chat/${id}`}>
        <img
          src="jimih.png"
          alt={`${match.username}`}
          className="profile-img"
          width="150"
        ></img>
      </Link>
      </td>

      <td>
      <Link to={`/users/${id}`}>
        {match.username}
      </Link>
      </td>

    </tr>

  );
};

export default MatchRow;
