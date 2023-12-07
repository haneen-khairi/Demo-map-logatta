// components/Map.js
import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

export default function MapComponent(){
  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN === undefined ? 
    "" : process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ;
    const map = new mapboxgl.Map({
      container: 'map-container', // The ID of the container div
      style: 'mapbox://styles/mapbox/streets-v11', // You can change the map style
      center: [-74.006, 40.7128], // [longitude, latitude] of the map center
      zoom: 10, // Initial zoom level
    });

    // Add any additional map layers, markers, or other features here

    return () => {
      // Cleanup when the component unmounts
      map.remove();
    };
  }, []);

  return <div id="map-container" style={{ width: '100%', height: '400px' }} />;
};

