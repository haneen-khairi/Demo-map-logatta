import Box from "@mui/material/Box";
import { useState } from "react";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import worldIcon from "../../assets/images/icon.svg";
// import TabList from '@mui/lab';
// import TabPanel from '@mui/lab';
import { Bar } from "react-chartjs-2";
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
export default function SidebarInfo({ mapInfo, extraInfo, ads }) {
  const [value, setValue] = useState("1");
  const { properties } = mapInfo;
    console.log("=== ads ===", ads)
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
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

  return (
    <div className="sidebar ">
      {/* <div className="scroll-indicator">
                <img src="https://www.suhail.aihttps://www.suhail.ai/static/media/residential.b04171300181c1014501.svg" alt="scroll indicator" />
            </div> */}

      <Box sx={{ width: "100%", typography: "body1" }}>
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
            <div className="handleContainer">
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
            </div>
            <div id="area-view" style={{ display: "block" }}>
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
                        <div
                          className="image-icon"
                          style={{ backgroundColor: "#eef0ff" }}
                        >
                          <img src={worldIcon} alt="icon" />
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
                      <div className="item-info-card text-center">
                        <h4 className="card-title">
                          {" "}
                          <span className="last-date">
                            {" "}
                            Advertising Average Numbers{" "}
                          </span>
                        </h4>
                        <div className="price">
                          <span className="number">
                            {/* عدد الاعلانات المحيطه */}
                            <span> {extraInfo.ads_count}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="item-content">
                      <div className="item-info-card text-center">
                        <h4 className="card-title">
                          {" "}
                          <span className="last-date">
                            {" "}
                            School Numbers{" "}
                          </span>
                        </h4>
                        <div className="price">
                            <Bar options={options} data={data} />;
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
                          {extraInfo.average_price_per_meter.toFixed(4)}
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
    </div>
  );
}
