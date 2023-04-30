import React, { useContext} from 'react'
import { UserContext } from "./context/user"
import UserCard from './UserCard'

const UsersGrid = () => {

  const { allProfiles } = useContext(UserContext)

  console.log(allProfiles)

    const allUsers = allProfiles.map(u => 
    
      <UserCard key={u.id} user={u} />
    
    )

  return (
    <>
    <h2>Browse Musicians</h2>
    <main class="container"> 
      <article>
        <div class="grid">
          <div>
          {allUsers}
          </div>
            {/* <div><UserCard/></div>
            <div><UserCard/></div>
            <div><UserCard/></div>
            <div><UserCard/></div> */}
          </div>
        </article> 
    </main>

    </>
  )
}

export default UsersGrid