import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "@picocss/pico/css/pico.min.css"

const UserContext = React.createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    preference: [],
    profile: [],
    matches: []
  })

  const [allUsers, setAllUsers] = useState([])
  console.log(allUsers)
  // const [matchRequests, setMatchRequests] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [errors, setErrors] = useState([])

   const navigate = useNavigate()

  useEffect(() => {
    fetch("/me")
      .then((resp) => resp.json())
      .then((data) => {
        if (data.errors) {
          setLoggedIn(false);
        } else {
          setLoggedIn(true);
          setUser(data);
        }
      });
    getAllUsers();
  }, [loggedIn]);

  const getAllUsers = () => {
    fetch("/users")
      .then((resp) => resp.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors)
        } else {
          setAllUsers(data)
        }
      })
  }

  const createMyProfile = (profile) => {

    fetch(`/profiles/${user.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.errors) {
          console.log(data.errors)
        } else {
          setUser(data)
        }
      })
  }

  const updateMyProfile = (updatedData) => {

    fetch(`/profiles/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.errors) {
          console.log(data.errors)
        } else {
          setUser(data)
        }
      })
  }


  const handleMatchRequest = (receiver_id) => { 
    
    const request = {
      requester_id: user.id,
      receiver_id: receiver_id
    }

    fetch("/match_requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors)
          console.log(data.errors)
        } else {
          alert(`Request Sent!`)
        }
      })
  }

  const createMyPreferences = (preferences) => { 
    fetch(`/preferences/${user.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preferences),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors)
        } else {
          setUser({...user, preference: data})
          alert("Preferences updated!")
          navigate("/my-profile")
        }
      })
  }

  const updateMyPreferences = (preferences) => { 
    fetch(`/preferences/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preferences),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors)
        } else {
          setUser({...user, preference: data})
          alert("Preferences updated!")
          navigate("/my-profile")
        }
      })
  }

  const handleRemoveUser = (id) => {
    const updatedUsers = allUsers.filter(p => p.id !== id)
    setAllUsers(u => updatedUsers)
  }


  const logoutUser = () => {
    fetch("/logout", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      logout()
      navigate("/")
    })
  }
    
  const login = (user) => {
    setUser(user);
    setLoggedIn(true);
  };

  const logout = () => {
    setUser([]);
    setLoggedIn(false);
  };

  const signup = (user) => {
    setUser(user);
    setLoggedIn(true);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        createMyPreferences,
        updateMyProfile,
        allUsers,
        createMyProfile,
        logout,
        signup,
        login,
        loggedIn,
        handleMatchRequest,
        handleRemoveUser,
        updateMyPreferences,
        logoutUser
        // updateLocation,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
