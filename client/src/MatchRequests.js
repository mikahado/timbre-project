import React, { useContext } from "react";
import { UserContext } from "./context/user";
import MatchRow from "./MatchRow";

const MatchRequests = () => {
  const { user } = useContext(UserContext);


  return (
    <>
      <h2>Pending</h2>
      <small>If they like you, too -- You'll match!</small>

      <table>
        <tbody>...</tbody>
      </table>
    </>
  );
};

export default MatchRequests;
