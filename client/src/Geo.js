import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const Geo = ({coordinates}) => {

  // const [coordinates, setCoordinates] = useState({ lat: 90, lng: 135 });

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAOxatlfWkJLm9Bl43Og_QiexiY_Z1EitI',
  });

  useEffect(() => {
    let map, infoWindow;

    if (isLoaded) {
      map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 13,
      });
      infoWindow = new window.google.maps.InfoWindow();

      const locationButton = document.createElement("button");

      locationButton.textContent = "Find Current Location";
      locationButton.classList.add("custom-map-control-button");
      map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(locationButton);
      locationButton.addEventListener("click", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };

              infoWindow.setPosition(pos);
              infoWindow.setContent("Location found.");
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

  return (
    <div>
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
    </div>
  );
};

export default Geo;
