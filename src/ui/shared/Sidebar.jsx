import Box from '@mui/material/Box';
import {useState} from "react"
import Tab from '@mui/material/Tab';
import {TabContext , TabList , TabPanel} from '@mui/lab';
import worldIcon from "../../assets/images/icon.svg"
// import TabList from '@mui/lab';
// import TabPanel from '@mui/lab';
export default function SidebarInfo({
    mapInfo
}) {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <div className="sidebar ">
            {/* <div className="scroll-indicator">
                <img src="https://www.suhail.aihttps://www.suhail.ai/static/media/residential.b04171300181c1014501.svg" alt="scroll indicator" />
            </div> */}



        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} className='s' aria-label="lab API tabs example">
                 {/* معلومات القطعة */}
                    <Tab label="Widget information" style={{width: '50%'}} value="1" />
                    {/* الفرص العقارية في المنطقة */}
                    <Tab label="Real estate opportunities" style={{width: '50%'}} value="2" />
                </TabList>
                </Box>
                <TabPanel value="1">
                    <div className="handleContainer">
                        <svg className="handle" style={{width: '40px', height: '5px'}}>
                            <path d="M5,2.5L35,2.5" style={{stroke: 'black', strokeWidth: '5px', 'strokeLinecap': 'round'}}></path>
                        </svg>
                    </div>
                    <div id="area-view" style={{display: 'block'}}>
                        <div className="view">
                            <div className="LandRealStateInfo">
                                <div className="Info-piece">
                                {/* اسم القطعه / المنطقة */}
                                    <h3 className="city-title">الحمراء</h3>
                                </div>
                            </div> 
                       
                            <div className="parcels-list">
                                <div className="parcels-list_item">
                                    <div className="item-header ">
                                        <div className="gather">
                                        <div className="image-icon" style={{backgroundColor: "#eef0ff"}}>
                                          <img src={worldIcon} alt="icon" />
                                            </div>
                                         {/* اسم القطعه */}
                                            <h3 className="card-title GBF color-light">Piece Number </h3>
                                            <div className="parcels-total-section"> 
                                                  {/* رقم القطعه / المنطقة */}
                                                <span className="parcels-total">  12312312  </span>
                                                
                                            </div>
                                        </div>
                                        <div className="parcel-average">
                                            <h4 className="card-title"> Hod </h4>
                                            <div className="number number-bold">
                                                {/* رقم الحوض */}
                                                <span>12 </span>
                                                {/* اسم الحوض اذا وجد */}
                                                <span className="CS">Hod </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <div className="item-info-card last-price">
                                            <h4 className="card-title"> <span className="last-date"> Village Name</span>
                                            </h4>
                                            <div className="price">
                                                <span className="number">
                                                {/* اسم القرية */}
                                                    <span> name</span>
                                                </span> 
                                            </div>
                                        </div>
                                        <div className="item-info-card total-parcels">
                                            <h4 className="card-title"> City Name </h4>
                                            <div className="price">
                                                <span className="number">
                                                {/* اسم المدينة */}
                                                    <span>name</span>
                                                </span> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <div className="item-info-card last-price">
                                            <h4 className="card-title"> <span className="last-date"> Directorate </span>
                                            </h4>
                                            <div className="price">
                                                <span className="number">
                                                {/* Directorate العنوان */}
                                                    <span> name</span>
                                                </span> 
                                            </div>
                                        </div>
                                        <div className="item-info-card total-parcels">
                                            <h4 className="card-title"> Neighborhood Name </h4>
                                            <div className="price">
                                                <span className="number">
                                                {/* اسم الحي */}
                                                    <span>name</span>
                                                </span> 
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="item-content">
                                       
                                        <div className="item-info-card last-price"> 
                                            <h4 className="card-title"> <span className="last-date"> Area </span>
                                            </h4>
                                            <div className="price">
                                                <span className="number">
                                                {/* المساحه */}
                                                    <span> 23203.23 m</span>
                                                </span> 
                                            </div>
                                        </div>  
                                        <div className="item-info-card total-parcels">
                                            <h4 className="card-title"> Neighborhood Name </h4>
                                            <div className="price">
                                                <span className="number">
                                                {/* اسم الحي */}
                                                    <span>name</span>
                                                </span> 
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="item-content">
                                       
                                        <div className="item-info-card text-center"> 
                                            <h4 className="card-title"> <span className="last-date"> Advertising Average Numbers </span>
                                            </h4>
                                            <div className="price">
                                                <span className="number">
                                                {/* عدد الاعلانات المحيطه */}
                                                    <span> number</span>
                                                </span> 
                                            </div>
                                        </div>  
                                        </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value="2">
            
                    <div id="area-view" style={{display: 'block'}}>
                        <div className="view">
                            <div className="LandRealStateInfo">
                                <div className="Info-piece">
                                    <h3 className="city-title text-center">Advertisement Lands </h3>
                                    <br/>
                                </div>
                            </div>
                            <div className="total-analyses ">
                                <div className="analyses-card bg-red">
                                    <h3 className="card-title GBF color-light">Advertising Average</h3>
                                    {/* عدد الاعلانات */}
                                    <div className="chat-and-number">
                                        number
                                    </div> 
                                </div>
                                <div className="analyses-card bg-green">
                               
                                    <h3 className="card-title GBF color-light">Average price per meter</h3>
                                    <div className="chat-and-number ">
                                        <div className="card-number number-bold color-light Roboto" id="transactionsVolume">
                                         {/* متوسط سعر المتر */}
                                            <span>number</span> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="parcels-list-title text-center">  Check Nearby Lands </div>
                            <div className="parcels-list">
                                <div className="parcels-list_item">
                                    <div className="item-header ">
                                        <div className="gather">
                                        <div className="image-icon" style={{backgroundColor: "#eef0ff"}}>
                                          <img src={worldIcon} alt="icon" />
                                            </div>
                                            <div className="title">Advertising Name  </div>
                                            <div className="parcels-total-section">
                                            {/* اسم الاعلان */}
                                                <span className="parcels-total"> Name </span> 
                                            </div>
                                        </div>
                                        <div className="parcel-average">
                                            <h4 className="card-title"> </h4>
                                            <div className="number number-bold">
                                            {/* لينك الاعلان */}
                                            <a
                                                href="https://www.example.com"
                                                target="_blank"
                                                rel="noopener noreferrer" >
                                               Link
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <div className="item-info-card last-price">
                                            <h4 className="card-title"> Commercial or residential 
                                            </h4>
                                            <div className="price">
                                                <span className="number">
                                                {/* نوع الاعلان سكني او تجاري */}
                                                    <span>Commercial </span>
                                                </span> 
                                            </div>
                                        </div>
                                        <div className="item-info-card total-parcels">
                                            <h4 className="card-title">Price</h4>
                                            <div className="price">
                                                <span className="number">
                                                {/* سعر القطعة */}
                                                    <span>15,092,000</span>
                                                </span>
                                                {/* <span className="CS">ر.س</span> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <div className="item-info-card last-price">
                                            <h4 className="card-title"> Area
                                            </h4>
                                            <div className="price">
                                                <span className="number">
                                                {/*    اسم المنطقه في الاعلان   */}
                                                    <span>name </span>
                                                </span> 
                                            </div>
                                        </div>
                                        <div className="item-info-card total-parcels">
                                            <h4 className="card-title">Any other Data</h4>
                                            <div className="price">
                                                <span className="number">
                                                {/*    بيانات اخرى */}
                                                    <span>data</span>
                                                </span>
                                                {/* <span className="CS">ر.س</span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </TabContext>
        </Box>




        </div>)
}