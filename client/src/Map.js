// import React, { Suspense, useRef } from 'react'
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"

// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: 20.5937,
//   lng: 78.962
// };

// const Map = () => {
//   const mapRef = useRef(null);

//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: 'AIzaSyAOxatlfWkJLm9Bl43Og_QiexiY_Z1EitI'
//   })

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     mapRef.current = map;
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     mapRef.current = null
//   }, [])

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={13}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     >
//     </GoogleMap>
//   ) : <></>
// }

// export default Map;
