import React from "react";
import { Link } from "react-router-dom";

const MatchRow = ({ match, id }) => {
  return (
    <tr>
      <td>
        <img
          src="jimih.png"
          alt={`${match.username}`}
          className="profile-img"
          width="150"
        ></img>
      </td>
      <th scope="row">{match.username}</th>
      <td>
        <Link to={`/users/${id}`}>Profile</Link>

      </td>
      <td>        
        <Link to={`/chat/${id}`}>Chat</Link>
      </td>
    </tr>
  );
};

export default MatchRow;
