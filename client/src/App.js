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
import Matches from './Matches'
import PreferencesForm from './PreferencesForm'
import ChatMain from './ChatMain'
import OnboardProfile from './OnboardProfile'
import OnboardPref from './OnboardPref'
import OnboardGeo from './OnboardGeo'
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

          <Route path ="/onboard/geo" element={<OnboardGeo />} />
          <Route path ="/onboard/profile" element={<OnboardProfile />} />
          <Route path ="/onboard/preference" element={<OnboardPref />} />

          <Route path="/users" element={<UsersGrid />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/users/:id" element={<UserProfile />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/preferences/:id" element={<PreferencesForm />} />
          {/* <Route path="/geo" element={<Geo />} /> */}
          <Route path="/chat/:id" element={<ChatMain />} />
        </Routes>
      </UserProvider>

      </article>
    </div>
  );
}

export default App;
