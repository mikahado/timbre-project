import React, { useState, useEffect, useContext } from 'react'
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"
import { UserContext } from "./context/user"

const Geo = () => {

  const { user, updateLocation, updateMyProfile, setToggleGeo, toggleGeo } = useContext(UserContext)
  const [position, setPosition] = useState({ lat: 0, lng: 0 })
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  })

  useEffect(() => {
    let map, infoWindow

    if (isLoaded) {
      map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: user.profile.lat, lng: user.profile.lng },
        zoom: 13,
        disableDefaultUI: true,
      });
      infoWindow = new window.google.maps.InfoWindow()

      const locationButton = document.createElement("button")

      locationButton.textContent = "Find Me"
      locationButton.classList.add("custom-map-control-button")
      map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(locationButton);
      locationButton.addEventListener("click", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              }

              setPosition(pos)

              // infoWindow.setPosition(pos);
              // infoWindow.setContent("Location found.");
              infoWindow.open(map);
              map.setCenter(pos);
            },
            () => {
              handleLocationError(true, infoWindow, map.getCenter());
            }
          );
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      });

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(
          browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
        );
        infoWindow.open(map);
      }
    }
  }, [isLoaded]);

  const handleUpdateLocation = () => {
      updateMyProfile(position)
   }

  return (
    <>
    
      <article>     
      <p className="primary-button" onClick={handleUpdateLocation}> Save Location </p> 
        <div>
         {/* <p>Location</p> */}
          <br />
          <div id="map" style={{ height: '400px', width: '100%' }}>
          </div>
          <br/>
          
          <small>Only you can see your location. </small>
        </div>
        
      </article>

    </>
  );
};

export default Geo;
