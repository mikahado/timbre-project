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
    <main class="container"> 
    <article>
        <table>
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">Match 1</th>
                <td>Chat</td>
                </tr>
                <tr>
                <th scope="row">Match 2</th>
                <td>Chat</td>
                </tr>
            </tbody>
            
        </table>
        </article>
    </main>

    </>
  )
}

export default UsersGrid