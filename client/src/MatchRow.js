import React from "react";
import { Link } from "react-router-dom";

const MatchRow = ({  match, id }) => {

  console.log(match)

  return (
    <tr>
      <td>
      <Link to={`/chat/${id}`}>
        <img
          src={`${match.profile_pic}`}
          alt={`${match.username}`}
          className="profile-img-2"
          width="150"
        ></img>
      </Link>
      </td>

      <td>
      <Link to={`/users/${match.id}`}>
        <h2>{match.username}</h2>
      </Link>
      </td>

    </tr>

  );
};

export default MatchRow;
