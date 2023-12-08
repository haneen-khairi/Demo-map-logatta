import React, { useState } from 'react'
// import MapComponent from '../../components/MapComponent'
import SidebarInfo from '../../ui/shared/Sidebar'
import GoogleMapsComponent from '../../components/GoogleMapsComponent'
import MapComponent from '../../components/MapComponent'

export default function Home() {
  const [selectedDataFromMap, setSelectedDataFromMap] = useState()
  function onCallBackTheMapGetData(data){
    console.log("=== e ===", data)
    setSelectedDataFromMap(data)
  }
  return (
    <div className="map-box">
      <div className="grid lg:grid-cols-3">
        <div className="col-span-2">
          {/* <form onSubmit={handleSubmit(filterPieces)}>
          </form> */}
          <MapComponent onCallBackTheMap={(e) => onCallBackTheMapGetData(e)} />
          {/* <GoogleMapsComponent onCallBackTheMap={(e) => onCallBackTheMapGetData(e)} /> */}
        </div>
        <div className="col-span-1">
          <SidebarInfo mapInfo={selectedDataFromMap} />
        </div>
      </div>
    </div>
  )
}
