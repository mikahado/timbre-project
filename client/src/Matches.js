import React, {useContext} from 'react'
import { UserContext } from "./context/user"
import MatchRow from "./MatchRow"

const UsersGrid = () => {

    const { user } = useContext(UserContext)

    const match = user.matches.map(m => 
      <div> 
        <MatchRow key={m.id} match={m} />
      </div>
    )

  return (
    <>
    <main class="container"> 
    <h2>Matches</h2>
    <article>
        <table>

            <tbody>
                {match}
            </tbody>
            
        </table>
        </article>
    </main>

    </>
  )
}

export default UsersGrid