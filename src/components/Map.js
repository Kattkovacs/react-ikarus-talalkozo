import React, { useRef, useEffect, useState } from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from "mapbox-gl";
import "../Map.css";

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2F0dGtvdmFjcyIsImEiOiJjbDBtOHd0ZDkxMnBsM2t1b3lnbWZxMmFsIn0.Q5bLd9DAqSrbUwugZppQ1w";

const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(17.432028632655084);
  const [lat, setLat] = useState(46.8828112139076);
  const [zoom, setZoom] = useState(13.4);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    // // Add navigation control (the +/- zoom buttons)
    // map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    const marker1 = new mapboxgl.Marker({ color: "#005c99" })
      .setLngLat([17.442933, 46.883774])
      .addTo(map);

    const marker2 = new mapboxgl.Marker({ color: "#094064" })
      .setLngLat([17.440507154350293, 46.87779910987866])
      .addTo(map);

    const marker3 = new mapboxgl.Marker({ color: "#259ba3" })
      .setLngLat([17.436028632655084, 46.8828112139076])
      .addTo(map);

    const marker4 = new mapboxgl.Marker({ color: "#266b4e" })
      .setLngLat([17.429812998180616, 46.87752132162177])
      .addTo(map);

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="sidebarStyle">
        <div>Ikarus Találkozó/Meeting Tapolca rendezvény / Event</div>
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
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
};

export default Map;
