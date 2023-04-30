import React, { useContext } from 'react'
import PreferencesForm from './PreferencesForm'
import { UserContext } from './context/user'

const UserProfile = () => {

const { loggedIn} = useContext(UserContext)

    return (
    <>
    <br/>

        <article>
            <header>Username</header>
            Photo
            <footer>
                <button className="primary-button">Edit</button>
            </footer>
        </article>


        <article>
            <PreferencesForm />
        </article>


    </>
    
  )
}

export default UserProfile