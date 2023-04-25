import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
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
        </Routes>
      </UserProvider>

      </article>
    </div>
  );
}

export default App;
