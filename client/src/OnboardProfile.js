import React, { useState, useContext, useEffect } from "react";
import PreferencesForm from "./PreferencesForm";
import Geo from "./Geo";
import { UserContext } from "./context/user";
import { NavLink, useNavigate } from "react-router-dom";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const OnboardProfile = () => {
  const { user, createMyProfile, errors } = useContext(UserContext);

  const [myProfile, setMyProfile] = useState({
    name: "",
    // lat: 0,
    // lng: 0,
    bio: "",
    media_1: "",
    media_2: "",
    media_3: "",
    media_4: "",
  });

  console.log(myProfile);

  const handleCreateMyProfile = (e) => {
    e.preventDefault();
    createMyProfile(myProfile);
  };

  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  // })

  // useEffect(() => {
  //   let map, infoWindow

  //   if (isLoaded) {
  //     map = new window.google.maps.Map(document.getElementById("map"), {
  //       center: { lat: 0, lng: 0 },
  //       zoom: 1,
  //       // disableDefaultUI: true,
  //       mapTypeControl: false,
  //       streetViewControl: false,
  //     })
  //     infoWindow = new window.google.maps.InfoWindow()
  //     // map.setLocked(true)

  //     infoWindow.open(map);
  //       // Configure the click listener.

  //     const locationButton = document.createElement("button")

  //     locationButton.textContent = "Find Me"
  //     locationButton.classList.add("custom-map-control-button")
  //     map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  //     locationButton.addEventListener("click", () => {
  //       // Try HTML5 geolocation.
  //       if (navigator.geolocation) {
  //         navigator.geolocation.getCurrentPosition(
  //           (position) => {
  //             const pos = {
  //               lat: position.coords.latitude,
  //               lng: position.coords.longitude,
  //             }

  //             setMyProfile({...myProfile, lat: pos.lat, lng: pos.lng})

  //             // infoWindow.setPosition(pos);
  //             // infoWindow.open(map)
  //             map.setCenter(pos)
  //             map.setZoom(12)
  //           },
  //           () => {
  //             handleLocationError(true, infoWindow, map.getCenter());
  //           }
  //         );
  //       } else {
  //         // Browser doesn't support Geolocation
  //         handleLocationError(false, infoWindow, map.getCenter());
  //       }

  //     });

  //     function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  //       infoWindow.setPosition(pos);
  //       infoWindow.setContent(
  //         browserHasGeolocation
  //           ? "Error: The Geolocation service failed."
  //           : "Error: Your browser doesn't support geolocation."
  //       );
  //       infoWindow.open(map)
  //     }
  //   }
  // }, [isLoaded])

  if (!user.profile) {
    return (
      <>
        <dialog open>
          <article>
          <header>
              <h2>Create Your Profile</h2>
            </header>

            <form onSubmit={handleCreateMyProfile}>
              <label>Arist Name</label>
              <input
                type="text"
                name="name"
                value={myProfile.name}
                onChange={(e) =>
                  setMyProfile({ ...myProfile, name: e.target.value })
                }
              />

              <label>Link Profile Pic</label>
              <input
                type="text"
                name="media_1"
                value={myProfile.media_1}
                onChange={(e) =>
                  setMyProfile({ ...myProfile, media_1: e.target.value })
                }
              />

              <label>Write a Bio</label>
              <textarea
                className="textarea"
                type="text"
                name="bio"
                value={myProfile.bio}
                onChange={(e) =>
                  setMyProfile({ ...myProfile, bio: e.target.value })
                }
              />
              {/* 
            <label>Location</label> */}

              {/* 
          <div id="map" style={{ height: '400px', width: '100%' }}>
            <Geo setMyProfile={setMyProfile} myProfile={myProfile} />
          </div> */}

              <br />

              {errors.map((error, index) => (
                <small key={index} className="errors">
                  {error}
                </small>
              ))}
              <br />

              <button
                type="submit"
                className="accept-button"
                onSubmit={handleCreateMyProfile}
              >
                Save
              </button>
            </form>
          </article>
        </dialog>
      </>
    );
  } else {
    return (
      <h2>
        Not authorized. 
      </h2>
    )
  }
}
export default OnboardProfile;
