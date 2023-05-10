import React from "react";
import { Link } from "react-router-dom";

const MatchRow = ({ match, id }) => {
  return (
    <tr>
      <td>
        
      <Link to={`/users/${id}`}>
        <img
          src="jimih.png"
          alt={`${match.username}`}
          className="profile-img"
          width="150"
        ></img>
        </Link>
      </td>

      <td>
      <Link to={`/users/${id}`}>{match.username}
      </Link>
      </td>

      <td>        
        <Link to={`/chat/${id}`}>Chat</Link>
      </td>
    </tr>

  );
};

export default MatchRow;
