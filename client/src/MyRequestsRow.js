import React from "react";
import { Link } from "react-router-dom";
import MyRequests from "./MyRequests";

const MyRequestsRow = ({ request }) => {

  return (
    <tr>
      <td>
        <img
          src="jimih.png"
          alt={`${request.username}`}
          className="profile-img"
          width="150"
        ></img>
      </td>
      <th scope="row">{request.username}</th>
      <td>
        <Link to={`/users/${request.id}`}>Profile</Link>
      </td>
    </tr>
  );
};

export default MyRequestsRow
