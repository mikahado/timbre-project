import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@picocss/pico/css/pico.min.css";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    preference: [],
    profile: [],
  })
  const [allProfiles, setAllProfiles] = useState([])
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
          setUser(data)
          navigate("/my-profile")
        }
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
        preferencesUpdate
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
