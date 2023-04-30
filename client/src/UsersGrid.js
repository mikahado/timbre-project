import React, { useContext} from 'react'
import { UserContext } from "./context/user"
import UserCard from './UserCard'

const UsersGrid = () => {

  const { allProfiles } = useContext(UserContext)

  console.log(allProfiles)

    // const allArists = allProfiles.map(u => 
    //   <div> 
    //   <UserCard key={u.id} user={u} />
    //   </div>
    // )

  return (
    <>
    <h2>Browse Musicians</h2>
    <main class="container"> 
      <article>
        <div class="grid">
            <div><UserCard/></div>
            <div><UserCard/></div>
            <div><UserCard/></div>
            <div><UserCard/></div>
          </div>
        </article> 
    </main>

    </>
  )
}

export default UsersGrid