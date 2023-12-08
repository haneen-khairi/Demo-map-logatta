import Layout from '@/UI/Shared/Layout'
import MapComponent from '@/components/MapComponent'
import SidebarInfo from '@/components/SidebarInfo'
import { useForm } from 'react-hook-form'
import dynamic from 'next/dynamic';



export default function Home() {
  // const {
  //   handleSubmit,
  //   control,
  //   formState: { 
  //     errors,
  //     isValid
  //   },
  //   reset
  // } = useForm({
  //   "mode": "onChange"
  // })
  // function filterPieces(data: any){
  //   console.log("=== filterPieces ===", data)
  // }
  function onCallBackTheMapData(data: any){
    console.log("=== data ===")
  }
  return <Layout>
    <div className="map-box">
      <div className="grid lg:grid-cols-3">
        <div className="col-span-2">
          {/* <form onSubmit={handleSubmit(filterPieces)}>
          </form> */}
          <MapComponent onCallBackTheMap={(e: any) => onCallBackTheMapData(e)}  />
        </div>
        <div className="col-span-1">
          <SidebarInfo />
        </div>
      </div>
    </div>
  </Layout>
}
