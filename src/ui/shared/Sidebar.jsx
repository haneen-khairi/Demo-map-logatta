import Box from "@mui/material/Box";
import { useState } from "react";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import worldIcon from "../../assets/images/icon.webp";
import Alert from '@mui/material/Alert';

// import TabList from '@mui/lab';
// import TabPanel from '@mui/lab';
import { Bar } from "react-chartjs-2";
import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
// import InputLabel from '@mui/material/InputLabel';
// import option from '@mui/material/option';
// import select from '@mui/material/select';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import AdvertiseCard from "../../components/AdvertiseCard";
import { useForm } from "react-hook-form";
export default function SidebarInfo({ mapInfo, extraInfo, ads }) {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: {errors, isValid}
  } = useForm({

  })
  const [calculatedNumber, setCalculatedNumber] = useState(0)
  const [value, setValue] = useState("1");
  const { properties } = mapInfo;
    // console.log("=== ads ===", ads)
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const option = {
    plugins: {
      title: {
        display: true,
        text: "Chart.js Bar Chart - Stacked",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = [
    "1km",
    "2km",
    "3km",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Schools 1",
        data: [extraInfo.schools_within_1km, extraInfo.schools_within_2km , extraInfo.schools_within_3km],
        backgroundColor: "rgb(43, 92, 210)",
      }
    ],
  };
  console.log("extraInfo", extraInfo);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
//   function onSubmit(data){
//     console.log("=== data ===", data)
//     const averagePricePerMeter = parseFloat(extraInfo.average_price_per_meter);
//     // console.log("=== averagePricePerMeter ===", averagePricePerMeter)

//     let calculationObject = {
//       // area_size: newAveragePricePerMeter * parseFloat(data.area_size),
//       bathroom_num: averagePricePerMeter * parseFloat(data.bathroom_num),
//       room_num: averagePricePerMeter * parseFloat(data.room_num),
//       street_sides: averagePricePerMeter * parseFloat(data.street_sides),
//       floor_num: averagePricePerMeter * parseFloat(data.floor_num) ,
//       interface_option: averagePricePerMeter * parseFloat(data.interface_option) ,
//       construction: averagePricePerMeter * parseFloat(data.construction)
      
//     }
//     // const newAveragePricePerMeter = (calculationObject ) + averagePricePerMeter;
//     // console.log("price per meter" , extraInfo.average_price_per_meter)
//     console.log("calcs" , calculationObject)
//     // Convert average_price_per_meter to a float (if it's not already)

// // Create a new object to store the calculated values
// // const newData = {};

// // // Iterate through the keys in the data object
// // for (const key in data) {
// //   if (Object.hasOwnProperty.call(data, key)) {
// //     // Convert the current value to a float (if it's not already)
// //     const value = parseFloat(data[key]);
    
// //     // Multiply the value by averagePricePerMeter and store it in the new object
// //     if (!isNaN(value)) {
// //       newData[key] = value * averagePricePerMeter;
// //     }
// //   }
// // }
// // console.log("=== new data with multiply ===", newData)
// const sum = Object.values(calculationObject).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log("=== sumsumsumsum ===", sum)
// const total = sum * data.area_size
// console.log("=== total ===", total.toFixed(2) || "null" , "=== sum ===" ,sum)
// setCalculatedNumber(total.toFixed(2) || "null")
//   }
function onSubmit(data) {
  // Parse averagePricePerMeter to a floating-point number
  const averagePricePerMeter = parseFloat(extraInfo.average_price_per_meter);

  // Sum the values of the specified options
  const sumOptions = [
      'room_num', 
      'floor_num',
      'interface_option',
      'construction'
  ].reduce((accumulator, option) => {
      const optionValue =  parseFloat(data[option]);
      return accumulator + optionValue;
  }, 0);

  // Multiply the sum of options by averagePricePerMeter
  const newAvgPrice = sumOptions * averagePricePerMeter;

  // Sum newAvgPrice with averagePricePerMeter
  const newAvgPricePerMeter = newAvgPrice + averagePricePerMeter;

  // Multiply newAvgPricePerMeter with the area value
  const preTotal = (newAvgPricePerMeter * data.area_size);
  const total = preTotal - (preTotal  * 0.3);

  // Log the calculated values
  console.log("Sum of options:", sumOptions);
  console.log("New Avg Price:", newAvgPrice);
  console.log("New Avg Price Per Meter:", newAvgPricePerMeter);
  console.log("Total:", total.toFixed(2) || "null");

  // Set the calculated total to some function (setCalculatedNumber)
  setCalculatedNumber(total.toFixed(2) || "null");
}

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    // return (
    //   <div>
    //     <Button onClick={handleOpen}>Open modal</Button>
        
    //   </div>
    // );
  
  
  return (
    <div className="sidebar">
      {/* <div className="scroll-indicator">
                <img src="https://www.suhail.aihttps://www.suhail.ai/static/media/residential.b04171300181c1014501.svg" alt="scroll indicator" />
            </div> */}

      <Box sx={{ width: "100%", typography: "body1"}}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              className="s"
              aria-label="lab API tabs example"
            >
              {/* معلومات القطعة */}
              <Tab
                label="Widget information"
                style={{ width: "50%" }}
                value="1"
              />
              {/* الفرص العقارية في المنطقة */}
              <Tab
                label="Real estate opportunities"
                style={{ width: "50%" }}
                value="2"
              />
            </TabList>
          </Box>
          <TabPanel value="1" style={{ padding: "10px 0" }}>
            {/* <div className="handleContainer">
              <svg className="handle" style={{ width: "40px", height: "5px" }}>
                <path
                  d="M5,2.5L35,2.5"
                  style={{
                    stroke: "black",
                    strokeWidth: "5px",
                    strokeLinecap: "round",
                  }}
                ></path>
              </svg>
            </div> */}
            <div id="area-view" style={{ display: "block" }}>
              <div className="view">
                {/* <div className="LandRealStateInfo">
                  <div className="Info-piece">
                    اسم القطعه / المنطقة
                    <h3 className="city-title">الحمراء</h3>
                    <br/>
                  </div>
                </div> */}

                <div className="parcels-list">
                  <div className="parcels-list_item" style={{  padding:"20px" }}>
                    <div className="item-header ">
                      <div className="gather">
                        <div
                          className="image-icon"
                          style={{ backgroundColor: "#eef0ff" }}
                        >
                          <img src={worldIcon} alt="icon" />
                          <br/>
                        </div>
                        {/* اسم القطعه */}
                        <h3 className="card-title GBF color-light">
                          Piece Number{" "}
                        </h3>
                        <div className="parcels-total-section">
                          {/* رقم القطعه / المنطقة */}
                          <span className="parcels-total">
                            {" "}
                            {properties.piece_num}{" "}
                          </span>
                        </div>
                      </div>
                      <div className="parcel-average">
                        <h4 className="card-title"> Hod </h4>
                        <div className="number number-bold">
                          {/* رقم الحوض */}
                          <span>{properties["hode"]} </span>
                          {/* اسم الحوض اذا وجد */}
                          {properties["Hode Name"] !== "" ||
                          properties["Hode Name"] !== undefined ? (
                            <span className="CS">
                              {properties["Hode Name"]}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="item-content">
                      <div className="item-info-card last-price">
                        <h4 className="card-title">
                          {" "}
                          <span className="last-date"> Village Name</span>
                        </h4>
                        <div className="price">
                          <span className="number">
                            {/* اسم القرية */}
                            <span> {properties.Village}</span>
                          </span>
                        </div>
                      </div>
                      <div className="item-info-card total-parcels">
                        <h4 className="card-title"> City Name </h4>
                        <div className="price">
                          <span className="number">
                            {/* اسم المدينة */}
                            <span>{properties.Governorate}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="item-content">
                      <div className="item-info-card last-price">
                        <h4 className="card-title">
                          {" "}
                          <span className="last-date"> Directorate </span>
                        </h4>
                        <div className="price">
                          <span className="number">
                            {/* Directorate العنوان */}
                            <span>{properties.Directorate}</span>
                          </span>
                        </div>
                      </div>
                      <div className="item-info-card total-parcels">
                        <h4 className="card-title"> Neighborhood Name </h4>
                        <div className="price">
                          <span className="number">
                            {/* اسم الحي */}
                            <span>{properties.Neighborhood}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="item-content">
                      <div className="item-info-card last-price">
                        <h4 className="card-title">
                          {" "}
                          <span className="last-date"> Area </span>
                        </h4>
                        <div className="price">
                          <span className="number">
                            {/* المساحه */}
                            <span> {properties.Area} m</span>
                          </span>
                        </div>
                      </div>
                      <div className="item-info-card total-parcels">
                        <h4 className="card-title"> Neighborhood Name </h4>
                        <div className="price">
                          <span className="number">
                            {/* اسم الحي */}
                            <span>{properties.Neighborhood}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="item-content">
                      <div className="item-info-card last-price">
                        <h4 className="card-title">
                          {" "}
                          <span className="last-date flex gap-1 justify-start">
                          Average Supermarket <svg fill="yellow" xmlns="http://www.w3.org/2000/svg" height="16" width="19.25" viewBox="0 0 616 512"><path d="M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4 4.5 .6 9.1 .9 13.7 .9 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18.1 20.1 44.3 33.1 73.8 33.1 4.7 0 9.2-.3 13.7-.9 62.8-8.4 92.6-82.8 59-136.4zM529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8-6 0-12.1-.4-18-1.2-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6-6.1 .8-12.1 1.2-18.2 1.2z"/></svg> 
                          </span>                        
                          </h4>
                        <div className="price">
                          <span className="number">
                            {/* المساحه */}
                            <span> {"12"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="item-info-card total-parcels">
                      <span className="card-title last-date flex gap-1 justify-center">
                            Average Hospitals <svg fill="#46923c" xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M544 96H416V32c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32v368c0 8.8 7.2 16 16 16h544c8.8 0 16-7.2 16-16V128c0-17.7-14.3-32-32-32zM160 436c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-128c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm160 128c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-128c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm16-170c0 3.3-2.7 6-6 6h-26v26c0 3.3-2.7 6-6 6h-20c-3.3 0-6-2.7-6-6v-26h-26c-3.3 0-6-2.7-6-6v-20c0-3.3 2.7-6 6-6h26V86c0-3.3 2.7-6 6-6h20c3.3 0 6 2.7 6 6v26h26c3.3 0 6 2.7 6 6v20zm144 298c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-128c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"/></svg>
                          </span>                        <div className="price">
                          <span className="number">
                            {/* اسم الحي */}
                            <span>{"2"}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="item-content">
                      <div className="item-info-card last-price">
                        <h4 className="card-title flex gap-1">
                          Medical services <svg fill="#23408e" xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><path d="M232 224h56v56a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-56h56a8 8 0 0 0 8-8v-48a8 8 0 0 0 -8-8h-56v-56a8 8 0 0 0 -8-8h-48a8 8 0 0 0 -8 8v56h-56a8 8 0 0 0 -8 8v48a8 8 0 0 0 8 8zM576 48a48.1 48.1 0 0 0 -48-48H112a48.1 48.1 0 0 0 -48 48v336h512zm-64 272H128V64h384zm112 96H381.5c-.7 19.8-14.7 32-32.7 32H288c-18.7 0-33-17.5-32.8-32H16a16 16 0 0 0 -16 16v16a64.2 64.2 0 0 0 64 64h512a64.2 64.2 0 0 0 64-64v-16a16 16 0 0 0 -16-16z"/></svg>                    
                          </h4>
                        <div className="price">
                          <span className="number">
                            {/* المساحه */}
                            <span> {"5"}</span>
                          </span>
                        </div>
                      </div>
                      <div className="item-info-card total-parcels">
                      <h4 className="card-title  last-date flex gap-1 justify-center">
                      Advertising Average Numbers <svg fill="#5cab7d" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M157.5 272h37L176 218.8 157.5 272zM352 256c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.8 24-24-10.8-24-24-24zM464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM250.6 352h-16.9c-6.8 0-12.9-4.3-15.1-10.8L211.2 320h-70.3l-7.4 21.3A16 16 0 0 1 118.4 352h-16.9c-11 0-18.7-10.9-15.1-21.3L140 176.1A24 24 0 0 1 162.7 160h26.7A24 24 0 0 1 212 176.1l53.7 154.6c3.6 10.4-4.1 21.3-15.1 21.3zM424 336c0 8.8-7.2 16-16 16h-16c-4.9 0-9-2.3-12-5.7-8.6 3.7-18.1 5.7-28 5.7-39.7 0-72-32.3-72-72s32.3-72 72-72c8.5 0 16.5 1.7 24 4.4V176c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v160z"/></svg>
                          </h4>                        
                          <div className="price">
                          <span className="number">
                            {/* اسم الحي */}
                            <span>{extraInfo.ads_count}</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="item-content " style={{  padding:"20px" }}>
                      <div className="item-info-card total-parcels">
                        <h4 className="card-title">
                          <span className="last-date flex gap-1 justify-center">
                            School Numbers <svg fill="#f3f3b5" xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><path d="M0 224v272c0 8.8 7.2 16 16 16h80V192H32c-17.7 0-32 14.3-32 32zm360-48h-24v-40c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm137.8-64l-160-106.7a32 32 0 0 0 -35.5 0l-160 106.7A32 32 0 0 0 128 138.7V512h128V368c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v144h128V138.7c0-10.7-5.4-20.7-14.3-26.6zM320 256c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80zm288-64h-64v320h80c8.8 0 16-7.2 16-16V224c0-17.7-14.3-32-32-32z"/></svg>
                          </span>
                        </h4>
                        <div className="price">
                        {extraInfo.schools_within_1km}
                            {/* <Bar option={option} data={data} /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="2" style={{ padding: "10px 0" }}>
            <div id="area-view" style={{ display: "block" }}>
              <div className="view">
              <Button onClick={handleOpen} color="primary">Price hunter</Button>
                <div className="LandRealStateInfo">
                  <div className="Info-piece">
                    <h3 className="city-title text-center">
                      Advertisement Lands{" "} 
                    </h3>
                    <br />
                  </div>
                </div>
                <div className="total-analyses ">
                  <div className="analyses-card bg-red">
                    <h3 className="card-title GBF color-light">
                      Advertising Average
                    </h3>
                    {/* عدد الاعلانات */}
                    <div className="chat-and-number">{extraInfo.ads_count}</div>
                  </div>
                  <div className="analyses-card bg-green">
                    <h3 className="card-title GBF color-light">
                      Average price per meter
                    </h3>
                    <div className="chat-and-number ">
                      <div
                        className="card-number number-bold color-light Roboto"
                        id="transactionsVolume"
                      >
                        {/* متوسط سعر المتر */}
                        <span>
                          {extraInfo.average_price_per_meter?.toFixed(4) || ""}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                  
                <div className="parcels-list-title text-center">
                  {" "}
                  Check Nearby Lands{" "}
                </div>
                <div className="parcels-list">
                  {ads.map((ad, index) => <AdvertiseCard key={index} ad={ad} /> )}
                </div>
              </div>
            </div>
          </TabPanel>
        </TabContext>
      </Box>
      <Modal
      style={{direction: 'ltr'}}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Price hunter
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <form onSubmit={handleSubmit(onSubmit)} className="form">





        <label htmlFor="type">Type</label>
        <select
        name="type"
          id="type"
          // id="demo-simple-select"
          label="type"
          {...register("type", {required: true})}
          onChange={(e) => console.log("== e ===", e)}
        >
          <option value={"Apartment"} selected>Apartment</option>
        </select>
  

              {/* <TextField id="room_num" type="number" name="room_num" {...register("room_num", {required: true})} label="Room number" variant="standard" /> */}
          <label htmlFor="room_num">Room Num.</label>
              <select
          id="room_num"
          // id="demo-simple-select"
          name="room_num"
          label="Room number"
          {...register("room_num", {required: true})}
          onChange={(e) => console.log("== room_num ===", e)}
        >
          <option value={0.03} selected>2</option>
          <option value={-0.02}>3</option>
          <option value={0.6}>4</option>
          <option value={0.02}>5</option> 
        </select>
              <TextField id="bathroom_num" type="number" name="bathroom_num" {...register("bathroom_num", {required: true})} label="Bathroom number" variant="standard" />
              <TextField id="area_size" type="number" name="area_size" {...register("area_size", {required: true})} label="Area size" variant="standard" />
              <TextField id="street_sides" type="number" name="street_sides" {...register("street_sides", {required: true})} label="Street side" variant="standard" />
              <label htmlFor="floor_num">Floor num</label>
        <select
          id="floor_num"
          // id="demo-simple-select"
          label="Floor number"
          name="floor_num"
          {...register("floor_num", {required: true})}
          onChange={(e) => console.log("== floor_num ===", e)}
        >
          

          <option value={0.17}>Ground floor apartment</option>
          <option value={0.09}>Last apartment with roof</option>
          <option value={0.04}>First floor apartment</option>
          <option value={0.01}>Third floor apartment</option>
          <option value={-0.02}>Settlement apartment</option>
          <option value={-0.04}>Second floor apartment</option>
          <option value={-0.08}>Fourth apartment</option>
          <option value={-0.11}>Semi-ground floor apartment</option>
        </select>
              <label htmlFor="interface_option">Interface option</label>
        <select
          id="interface_option"
          // id="demo-simple-select"
          name="interface_option"
          label="Interface option"
          {...register("interface_option", {required: true})}
          onChange={(e) => console.log("== floor_num ===", e)}
        >
          


          <option value={0.08} selected>Eastern</option>
          <option value={0.05}>Southeast</option>
          <option value={0.05}>Southwestern</option>
          <option value={-0.01}>North-west</option>
          <option value={-0.02}>Northeast</option>
          <option value={-0.03}>North</option>
          <option value={-0.03}>Western</option>
          <option value={-0.1}>Southern</option>
        </select>
              <label htmlFor="construction">Construction age dropdown</label>
        <select
          id="construction"
          // id="demo-simple-select"
          name="construction"
          label="Construction age dropdown"
          {...register("construction", {required: true})}
          onChange={(e) => console.log("== floor_num ===", e)}
        >
          <option value={0.15} selected>0-11 months</option>
          <option value={0.13}>1-5 years</option>
          <option value={0.2}>6-9 years</option>
          <option value={-0.04}>Under construction</option>
          <option value={-0.1}>10-19 years old</option>
          <option value={-0.27}>More than 20 years</option>
        </select>
        <Button type="submit">Calculate</Button>
              </form>
            </Typography>
        <Alert variant="filled" severity="success">
  New price meter: {calculatedNumber}
</Alert>
          </Box>
        </Modal>
    </div>
  );
}
