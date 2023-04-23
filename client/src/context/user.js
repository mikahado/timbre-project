import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import '@picocss/pico/css/pico.min.css'

const UserContext = React.createContext()

const UserProvider = ( {children } ) => {

    const [user, setUser] = useState([]) 
    const [loggedIn, setLoggedIn] = useState(false) 
    const [errors, setErrors] = useState([])
  
    useEffect(() => {
        fetch('/me')
        .then(resp => resp.json())
        .then(data => {
            if (data.errors) {
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
                setUser(data)
            }
        }) 
    }, [loggedIn])

    const login = (user) => {
        setUser(user)
        setLoggedIn(true) 
    }

    const logout = () => {
        setUser([])
        setLoggedIn(false) 
    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true) 
    }

  return (

    <UserContext.Provider value={{ 
        signup
      }}>
        {children}
    </UserContext.Provider>

  )
}

export { UserContext, UserProvider }