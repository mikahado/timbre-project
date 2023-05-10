import React, { useContext } from "react";
import { UserContext } from "./context/user";
import MatchRow from "./MatchRow";

const UsersGrid = () => {
  const { user } = useContext(UserContext);

  const match = user.matches.map((m) => <MatchRow key={m.id} id={m.id} match={m} />)

  return (
    <>
      <h2>Matches</h2>

      <table>
        <tbody>
          {match}
        </tbody>
      </table>
    </>
  );
};

export default UsersGrid;
