import React from 'react'
import { UserProvider } from "./context/user"
import UserCard from './UserCard'

const UsersGrid = () => {

    // const allUsers = users.map(u => 
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