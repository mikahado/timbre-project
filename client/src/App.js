import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import UsersGrid from './UsersGrid'
import UserProfile from './UserProfile' 
import MyProfile from './MyProfile'
import { UserProvider } from "./context/user"

function App(props) {

  return (
    <div className="App">
      <article data-theme="dark">

      <UserProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}  />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<UsersGrid />} />
          <Route path="/users/:id" element={<UserProfile />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </UserProvider>

      </article>
    </div>
  );
}

export default App;
