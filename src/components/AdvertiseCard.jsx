import React from 'react'
import worldIcon from "../assets/images/icon.svg";

export default function AdvertiseCard({
    ad
}) {
    const {
        title,
        neighborhood,
        ad_url,
        price,
        price_per_meter,
        surface_area,
        sub_category
    } = ad
  return <div className="parcels-list_item">
  <div className="item-header ">
    <div className="gather">
      <div
        className="image-icon"
        style={{ backgroundColor: "#eef0ff" }}
      >
        <img src={worldIcon} alt="icon" />
      </div>
      <div className="title">Advertising Name </div>
      <div className="parcels-total-section">
        {/* اسم الاعلان */}
        <span className="parcels-total"> {title} </span>
      </div>
    </div>
    <div className="parcel-average">
      <h4 className="card-title"> </h4>
      <div className="number number-bold">
        {/* لينك الاعلان */}
        <a
          href={ad_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
      </div>
    </div>
  </div>
  <div className="item-content">
    <div className="item-info-card last-price">
      <h4 className="card-title">
        {" "}
        Commercial or residential
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
          <span>{price}</span>
        </span>
        {/* <span className="CS">ر.س</span> */}
      </div>
    </div>
  </div>
  <div className="item-content">
    <div className="item-info-card last-price">
      <h4 className="card-title"> Area</h4>
      <div className="price">
        <span className="number">
          {/*    اسم المنطقه في الاعلان   */}
          <span>{neighborhood} </span>
        </span>
      </div>
    </div>
    <div className="item-info-card total-parcels">
      <h4 className="card-title">Price per meter</h4>
      <div className="price">
        <span className="number">
          {/*    بيانات اخرى */}
          <span>{price_per_meter.toFixed(4)}</span>
        </span>
        {/* <span className="CS">ر.س</span> */}
      </div>
    </div>
  </div>
  <div className="item-content">
    <div className="item-info-card last-price">
      <h4 className="card-title"> Category</h4>
      <div className="price">
        <span className="number">
          {/*    اسم المنطقه في الاعلان   */}
          <span>{sub_category} </span>
        </span>
      </div>
    </div>
    <div className="item-info-card total-parcels">
      <h4 className="card-title">Surface area</h4>
      <div className="price">
        <span className="number">
          {/*    بيانات اخرى */}
          <span>{surface_area}</span>
        </span>
        {/* <span className="CS">ر.س</span> */}
      </div>
    </div>
  </div>
</div>
}
