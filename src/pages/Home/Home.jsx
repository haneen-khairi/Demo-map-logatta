import React, { useState } from 'react'
// import MapComponent from '../../components/MapComponent'
import SidebarInfo from '../../ui/shared/Sidebar'
import MapComponent from '../../components/MapComponent'
import axios from "axios"
import { API_KEY } from '../../constants/HttpRequests'
export default function Home() {
  const [selectedDataFromMap, setSelectedDataFromMap] = useState()
  const [pageDetails, setPageDetails] = useState()
  const [ads, setAds] = useState([])
  function onCallBackTheMapGetData(data){
    console.log("=== e ===", data)
    console.log("===> cordinates",data.geometry.coordinates[0][0][0] , data.geometry.coordinates[0][0][1])
    setSelectedDataFromMap(data)
    getPageDetails(data.geometry.coordinates[0][0][1] , data.geometry.coordinates[0][0][0])
    getFilteredPageDetails(data.geometry.coordinates[0][0][1] , data.geometry.coordinates[0][0][0])
  }
  async function getPageDetails(lat, long){
    try {
      const {data} = await axios.post(`${API_KEY}pages-nearby/`, {
        long,
        lat
      })
      setPageDetails(data)
      console.log("=== success getting getPageDetails ===", data)
    } catch (error) {
      console.log("=== eror getting getPageDetails ===", error)

    }
  }
  async function getFilteredPageDetails(lat, long){
    try {
      const {data} = await axios.post(`${API_KEY}filtered-pages/`, {
        long,
        lat
      })
      setAds(data.data)
      console.log("=== success getting getFilteredPageDetails ===", data)
    } catch (error) {
      console.log("=== eror getting getPageDetails ===", error)

    }
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
          {selectedDataFromMap?.properties !== undefined && pageDetails !== undefined ? <SidebarInfo mapInfo={selectedDataFromMap} extraInfo={pageDetails}  ads={ads} /> : "No data unless you choose piece"}
        </div>
      </div>
    </div>
  )
}
