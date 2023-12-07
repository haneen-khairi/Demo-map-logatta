import Layout from '@/UI/Shared/Layout'
import MapComponent from '@/components/MapComponent'
import SidebarInfo from '@/components/SidebarInfo'


export default function Home() {
  return <Layout>
    <div className='map-box'>
      <div className="grid lg:grid-cols-3">
        <div className="col-span-2">
          <MapComponent />
        </div>
        <div className="col-span-1">
          <SidebarInfo />
        </div>
      </div>
    </div>

  </Layout>
}
