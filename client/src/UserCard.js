import React, { useContext } from 'react'
import { UserContext } from './context/user'

const UserProfile = () => {

const { loggedIn} = useContext(UserContext)

    return (
    <>
        <article>
            <header>Username %match</header>
            Photo
            <footer>
                <button>Yawp</button>
                <button>Nah</button>
            </footer>
        </article>
    </>
  )
}

export default UserProfile