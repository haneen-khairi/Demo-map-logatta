import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import jordonGeo from "../assets/jsons/logatta-new-map.json";

export default function MapComponent({
  onCallBackTheMap = (e) => {
    return e
  }
}) {
    const mapRef = useRef(null);
    const [selectedPoylgon, setSelectedPolygon] = useState(null);
    const geojsonLayerRef = useRef(null);
console.log("first", jordonGeo.features[0].geometry.coordinates[0][0][0])
// Convert JSON data to GeoJSON
function onSelectPolygon(feature){
  onCallBackTheMap(feature)
  setSelectedPolygon(feature.properties.piece_num)
}
    useEffect(() => {
        if (mapRef.current && !mapRef.current._leaflet_id) {
            // const myMap = L.map(mapRef.current).setView([20.59, 58.55], 7)
            const myMap = L.map(mapRef.current).setView([jordonGeo.features[0].geometry.coordinates[0][0][1],jordonGeo.features[0].geometry.coordinates[0][0][0]], 15)

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '© OpenStreetMap contributors'
            }).addTo(myMap);

            function getColor(d) {
                return d > 1000 ? '#800026' :
                    d > 500  ? '#BD0026' :
                    d > 200  ? '#E31A1C' :
                    d > 100  ? '#FC4E2A' :
                    d > 50   ? '#FD8D3C' :
                    d > 20   ? '#FEB24C' :
                    d > 10   ? '#FED976' :
                                '#FFEDA0';
            }

            const style = (feature) => ({
                fillColor: getColor(feature),
                weight: 2,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 0.7
            });

            const highlightFeature = (e) => {
                var layer = e.target;

                layer.setStyle({
                  fillColor: "#ff0000",
                    weight: 5,
                    color: '#666',
                    dashArray: '',
                    fillOpacity: 0.7
                });

                if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                    layer.bringToFront();
                }

                // You can also update information in some info box
                // info.update(layer.feature.properties);
            };

            // const resetHighlight = (e) => {
            //     geojson.resetStyle(e.target);
            //     
            // };

            // const onEachFeature = (feature, layer) => {
            //     layer.on({
            //         mouseover: highlightFeature,
            //         mouseout: resetHighlight,
            //         click: () => onSelectPolygon(feature), // Replace with your logic
            //     });
            // };


      // Create a GeoJSON layer and add it to the map
      geojsonLayerRef.current = L.geoJson(jordonGeo, {
        style: (feature) => ({
          weight: 2,
          opacity: 1,
          color: 'black',
          dashArray: '3',
          fillOpacity: feature.selected ? 0.7 : 0.5, // Change fill opacity based on selected state
        }),
        onEachFeature: (feature, layer) => {
          layer.on({
            click: () => {
              // Toggle the selected state when clicked
              feature.selected = !feature.selected;
              if (feature.selected) {
                // Feature is selected, change its style
                geojsonLayerRef.current.setStyle((f) => ({
                  fillOpacity: f === feature ? 0.7 : 0.5, // Highlight the selected feature
                }));
              } else {
                // Feature is deselected, reset its style
                geojsonLayerRef.current.setStyle((f) => ({
                  fillOpacity: f.selected ? 0.7 : 0.5, // Reset the style of all features
                }));
              }
              onCallBackTheMap(feature)
            },
          });
        },
      }).addTo(myMap);
    }
    }, []);


    return (
        <div>
            <div ref={mapRef} style={{ height: '80vh', width: '100%' }} />
        </div>
    );
}
