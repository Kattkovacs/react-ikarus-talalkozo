import React from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import "../Map.css";

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }
  const center = { lat: 46.8828112139076, lng: 17.436028632655084 };

  const event = { lat: 46.883774, lng: 17.442933 };
  const parking = { lat: 46.87779910987866, lng: 17.440507154350293 };
  const busStation = { lat: 46.8828112139076, lng: 17.436028632655084 };
  const trainStation = { lat: 46.87752132162177, lng: 17.429812998180616 };

  return (
    <div className="googleMap">
      <div className="sidebarStyle">
        <div>Rendezvény / Event</div>
      </div>
      <div className="sidebarStyle2">
        <div>Szgk. parkoló / Car park</div>
      </div>
      <div className="sidebarStyle3">
        <div>Autóbuszállomás / Bus station</div>
      </div>
      <div className="sidebarStyle4">
        <div>Vasútállomás / Train station</div>
      </div>
      <GoogleMap
        center={center}
        zoom={14}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        <Marker
          position={event}
          icon={{
            // eslint-disable-next-line no-undef
            path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
            strokeColor: "#005c99",
            scale: 4,
          }}
        ></Marker>
        <Marker
          position={parking}
          icon={{
            // eslint-disable-next-line no-undef
            path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
            strokeColor: "#094064",
            scale: 4,
          }}
        />
        <Marker
          position={busStation}
          icon={{
            // eslint-disable-next-line no-undef
            path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
            strokeColor: "#259ba3",
            scale: 4,
          }}
        />
        <Marker
          position={trainStation}
          icon={{
            // eslint-disable-next-line no-undef
            path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
            strokeColor: "#266b4e",
            scale: 4,
          }}
        />
      </GoogleMap>
    </div>
  );
};

export default Map;
