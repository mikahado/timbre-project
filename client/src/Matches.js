import React, { useContext } from "react";
import { UserContext } from "./context/user";
import MatchRow from "./MatchRow";

const UsersGrid = () => {
  const { user, loggedIn } = useContext(UserContext)

  const match = user.matches.map((m) => <MatchRow key={m.id} id={m.id} match={m} />)


  if (loggedIn && match.length > 0) {
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
} else {
  return (
    <>
      <h2>Matches</h2>
      <p>No matches yet</p>
    </>
  )
}
}

export default UsersGrid;
