import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@picocss/pico/css/pico.min.css";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    preference: [],
    profile: [],
    matches: [],
    sent_matches: [],
  })

  console.log("universal user", user)

  const [allProfiles, setAllProfiles] = useState([])
  const [matchRequests, setMatchRequests] = useState([])
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
    getAllProfiles();
  }, [loggedIn]);

  const getAllProfiles = () => {
    fetch("/profiles")
      .then((resp) => resp.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setAllProfiles(data);
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
          setUser(prevState => ({
            ...prevState,
            sent_matches: [...prevState.sent_matches, data]
          }))
          console.log("data", data)
          // navigate("/my-profile")
        }
      })
  }

  // console.log("user", user)

  const preferencesUpdate = (matchPreferences) => { 
    fetch(`/preferences/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(matchPreferences),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors)
        } else {
          setUser(prevState => ({
            ...prevState,
            preference: [...prevState.preference, data]
          }))
          navigate("/my-profile")
        }
      })
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
        allProfiles,
        logout,
        signup,
        login,
        loggedIn,
        handleMatchRequest,
        preferencesUpdate,
        logoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
