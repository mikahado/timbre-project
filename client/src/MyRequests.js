import React, { useContext } from "react";
import { UserContext } from "./context/user";
import MyRequestsRow from "./MyRequestsRow";

const MyRequests = () => {
  const { user } = useContext(UserContext);

  const requests = user.matches.map((r) => <MyRequestsRow key={r.id} request={r} />)

  return (
    <>
      <h2>Pending</h2>
      <small>If they like you, too -- You'll match!</small>

      <table>
        <tbody>{requests}</tbody>
      </table>
    </>
  );
};

export default MyRequests;
