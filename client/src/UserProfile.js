import React, { useContext } from 'react'
import { UserContext } from './context/user'

const UserProfile = () => {

const { loggedIn} = useContext(UserContext)

    return (
    <>
        <article>
            <header>Username</header>
            Photo
            <footer>
            </footer>
        </article>
    </>
  )
}

export default UserProfile