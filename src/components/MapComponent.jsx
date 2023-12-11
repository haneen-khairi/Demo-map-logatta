import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import jordonGeo from "../assets/jsons/logatta-new-map.json";
import parcels from "../assets/jsons/processed_data_collection.json";

export default function MapComponent({
  onCallBackTheMap = (e) => {
    return e
  }
}) {
  jordonGeo.features = jordonGeo.features.map((feature) => {
    const matchingData = parcels.data.find((data) => data.parcel_key === feature.properties.parcel_key);
    if (matchingData) {
      feature.properties.average_price_per_meter = matchingData.average_price_per_meter;
    }
    return feature;
  });
  console.log("jordonGeo", jordonGeo)
  const color = useRef("")
    const mapRef = useRef(null);
    const geojsonLayerRef = useRef(null);
// Convert JSON data to GeoJSON
function getColor(averagePricePerMeter) {
  console.log("=== getColor ===", averagePricePerMeter)
  if(averagePricePerMeter && averagePricePerMeter !== undefined){
    return averagePricePerMeter > 750 ? '#ff0000' :
    averagePricePerMeter > 350 ? '#FFEDA0' : '#46923C';
    // return averagePricePerMeter > 750 ? '#ff0000' :
    //        averagePricePerMeter > 350 ? '#FFEDA0' : '#46923C';
  }
}


    useEffect(() => {
        if (mapRef.current && !mapRef.current._leaflet_id) {
            // const myMap = L.map(mapRef.current).setView([20.59, 58.55], 7)
            const myMap = L.map(mapRef.current).setView([jordonGeo.features[0].geometry.coordinates[0][0][1],jordonGeo.features[0].geometry.coordinates[0][0][0]], 15)

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '© OpenStreetMap contributors'
            }).addTo(myMap);



            const style = (feature) => ({
                // fillColor: getColor(feature),
                weight: 2,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: feature.selected ? 0.7 : 0.5, // Change fill opacity based on selected state,

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
          fillColor: getColor(feature.properties.average_price_per_meter),
          weight: 2,
          opacity: 1,
          color: 'black',
          dashArray: '3',
          fillOpacity:  0.5, // Change fill opacity based on selected state,
        }),
        onEachFeature: (feature, layer) => {
          layer.on({
            click: () => {
              // Toggle the selected state when clicked
              feature.selected = !feature.selected;
              if (feature.selected) {
                // Feature is selected, change its style
                geojsonLayerRef.current.setStyle((f) => ({
                  fillOpacity: f === feature ? 0.9 : 0.2, // Highlight the selected feature
                }));
              } else {
                // Feature is deselected, reset its style
                geojsonLayerRef.current.setStyle((f) => ({
                  fillOpacity: f.selected ? 1 : 0.2, // Reset the style of all features
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
            {`color ${color.current}`}
        </div>
    );
}
