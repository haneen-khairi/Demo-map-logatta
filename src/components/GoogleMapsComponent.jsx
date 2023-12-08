import React, { useState } from 'react';
import { GoogleMap, Polygon, useLoadScript } from '@react-google-maps/api';

export default function GoogleMapsComponent({
    onCallBackTheMap = (e) => {
        return e
    }
}) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAE-OzpZjuJkIeVxRJ2J9gGmrCgtYdftbk"
    });
    
  const [selectedPoylgon, setSelectedPolygon] = useState(null);
  const [hoveredPolygon, setHoveredPolygon] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredPolygon(index);
  };

  const handleMouseOut = () => {
    setHoveredPolygon(null);
  };

  // GeoJSON data
  const geoJSONData = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: { piece_num: 10 },
            geometry: {
              type: 'Polygon',
              coordinates: [
                
                  {lat:32.037129, lng:35.875418},
                  {lat:32.037079, lng:35.875231},
                  {lat:32.037024, lng:35.875029},
                  {lat:32.037291, lng:35.874901},
                  {lat:32.037338, lng:35.875172},
                  {lat:32.037342, lng:35.875201},
                  {lat:32.037129, lng:35.875418},
                
              ],
            },
          },
          {
            "type": "Feature",
            "properties": { "piece_num": 15 },
            "geometry": {
              "type": "Polygon",
              "coordinates": [
                {lat: 32.035963, lng: 35.872937},
                {lat: 32.035699, lng: 35.872492},
                {lat: 32.03574, lng: 35.87229},
                {lat: 32.036155, lng: 35.872657},
                {lat: 32.036303, lng: 35.872857},
                {lat: 32.036428, lng: 35.873095},
                {lat: 32.036424, lng: 35.873109},
                {lat: 32.036316, lng: 35.873532},
                {lat: 32.036113, lng: 35.873188},
                {lat: 32.035963, lng: 35.872937}
              ]
            }
          },
          {
            "type": "Feature",
            "properties": { "piece_num": 28 },
            "geometry": {
              "type": "Polygon",
              "coordinates":[ 
                {lat: 32.031213, lng: 35.856825},
                {lat: 32.031191, lng: 35.855702},
                {lat: 32.032002, lng: 35.854492},
                {lat: 32.032626, lng: 35.854723},
                {lat: 32.032692, lng: 35.854779},
                {lat: 32.032689, lng: 35.854856},
                {lat: 32.032603, lng: 35.855718},
                {lat: 32.03259, lng: 35.85586},
                {lat: 32.032544, lng: 35.856402},
                {lat: 32.032525, lng: 35.856888},
                {lat: 32.032501, lng: 35.857507},
                {lat: 32.03248, lng: 35.858081},
                {lat: 32.032456, lng: 35.858736},
                {lat: 32.032451, lng: 35.858864},
                {lat: 32.032436, lng: 35.859272},
                {lat: 32.03192, lng: 35.859144},
                {lat: 32.03164, lng: 35.859089},
                {lat: 32.031495, lng: 35.85867},
                {lat: 32.031447, lng: 35.858533},
                {lat: 32.031233, lng: 35.857917},
                {lat: 32.031217, lng: 35.857066},
                {lat: 32.031213, lng: 35.856825}
              ]
            }
          },
          {
            "type": "Feature",
            "properties": { "piece_num": 30 },
            "geometry": {
              "type": "Polygon",
              "coordinates":[ 
                {lat: 32.031691, lng: 35.854129},
                {lat: 32.031558, lng: 35.854036},
                {lat: 32.031578, lng: 35.853887},
                {lat: 32.031624, lng: 35.853549},
                {lat: 32.031634, lng: 35.853475},
                {lat: 32.031932, lng: 35.853622},
                {lat: 32.032351, lng: 35.853828},
                {lat: 32.032383, lng: 35.853844},
                {lat: 32.032424, lng: 35.854036},
                {lat: 32.032295, lng: 35.854244},
                {lat: 32.032132, lng: 35.85432},
                {lat: 32.032001, lng: 35.854429},
                {lat: 32.031932, lng: 35.854391},
                {lat: 32.031773, lng: 35.854303},
                {lat: 32.03174, lng: 35.85424},
                {lat: 32.031709, lng: 35.854142},
                {lat: 32.031691, lng: 35.854129}
              ]
            }
          }
      // Add more features as needed
    ],
  };

  const mapStyles = {
    height: '500px',
    width: '100%',
  };

  const center = {
    lng: 35.875418,
    lat: 32.037129,
  };

  function onSelectPolygon(feature){
    onCallBackTheMap(feature)
    setSelectedPolygon(feature.properties.piece_num)
  }
  if(!isLoaded) return <p>Loaded</p>;
  return (
    <div>
            <GoogleMap
            mapTypeId='satellite'
                id="map"
                mapContainerStyle={mapStyles}
                zoom={10}
                center={center}
            >
                {geoJSONData.features.map((feature) => (
                <Polygon
                    key={feature.properties.piece_num}
                    paths={feature.geometry.coordinates}
                    options={{
                        fillColor: selectedPoylgon === feature.properties.piece_num || hoveredPolygon === feature.properties.piece_num ? "#ff0000" : "#09c",
                        fillOpacity: 0.35,
                        strokeColor: '#0000FF',
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                      }}
                      onMouseOver={() => handleMouseOver(feature.properties.piece_num)}
                      onMouseOut={handleMouseOut}
                    onClick={() => onSelectPolygon(feature)}
                />
                ))}
            </GoogleMap>


      {/* {selectedFeature && (
        <div>
          <h2>Selected Feature</h2>
          <pre>{JSON.stringify(selectedFeature, null, 2)}</pre>
        </div>
      )} */}
    </div>
  );
};

