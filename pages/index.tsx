import Layout from '@/UI/Shared/Layout'
import GoogleMap from '@/components/GoogleMapComponent'
import SidebarInfo from '@/components/SidebarInfo'


export default function Home() {
  return <Layout>
    <div className="grid lg:grid-cols-3">
      <div className="col-span-2">
        <GoogleMap center={{ 
    lat: 51.499075,
    lng: -0.124742,
  }}   />
      </div>
      <div className="col-span-1">
        <SidebarInfo />
      </div>
    </div>
  </Layout>
}
