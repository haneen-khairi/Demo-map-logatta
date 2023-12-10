export default function SidebarInfo({
    mapInfo
}) {
    return (
        <div className="sidebar ">
            {/* <div className="scroll-indicator">
                <img src="https://www.suhail.aihttps://www.suhail.ai/static/media/residential.b04171300181c1014501.svg" alt="scroll indicator" />
            </div> */}
            <div className="handleContainer">
                <svg className="handle" style={{width: '40px', height: '5px'}}>
                    <path d="M5,2.5L35,2.5" style={{stroke: 'black', strokeWidth: '5px', 'strokeLinecap': 'round'}}></path>
                </svg>
            </div>
            <div id="area-view" style={{display: 'block'}}>
                <div className="view">
                    <div className="LandRealStateInfo">
                        <div className="Info-piece">
                            <h3 className="city-title">الحمراء</h3>
                        </div>
                    </div>
                    <div className="total-analyses ">
                        <div className="analyses-card bg-red">
                            <h3 className="card-title GBF color-light">رقم الالقطعة</h3>
                            <div className="chat-and-number ">
                                <div className="card-number number-bold color-light GBF" id="transactionsTotal">{mapInfo?.properties?.piece_num || "اختار قطعة ارض"}</div>
                                <div className="peasant number color-red GBF" id="transactionsTotalIncrement">43% <img src="https://www.suhail.ai/static/media/Path-down.8cfca3000395930c2192.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="analyses-card bg-green">
                            <h3 className="card-title GBF color-light">إجمالي قيمة الصفقات</h3>
                            <div className="chat-and-number ">
                                <div className="card-number number-bold color-light Roboto" id="transactionsVolume">
                                    <span>21,092,000</span>
                                    <span className="year GBL ">ر.س</span>
                                </div>
                                <div className="peasant number color-green Roboto" id="transactionsVolumeIncrement">70% <img src="https://www.suhail.ai/static/media/Path-up.1855f2762d965a564cd5.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hint-label" style={{margin: '0.5em 0px'}}>● المؤشرات لغاية تاريخ <span className=""> يوليو </span>
                        <span className="number"> 2023 </span>
                    </div>
                    <div className="hint-label">● نسبة النمّو بالمقارنة مع نفس الفترة الزمنيه من العام السابق </div>
                    <div className="parcels-list-title">تفاصيل القطع</div>
                    <div className="parcels-list">
                        <div className="parcels-list_item">
                            <div className="item-header ">
                                <div className="gather">
                                    <div className="image-icon" style={{backgroundColor: "rgba(220, 155, 54, 0.2)" }}>
                                        <img className="state-icon" src="https://www.suhail.ai/static/media/residential.b04171300181c1014501.svg" id="parcel-type-icon" alt="أرض سكني" />
                                    </div>
                                    <div className="title">أرض سكني</div>
                                    <div className="parcels-total-section">
                                        <span className="parcels-total">عدد الصفقات</span>
                                        <span className="number">
                                            <span>3</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="parcel-average">
                                    <h4 className="card-title">متوسط سعر المتر</h4>
                                    <div className="number number-bold">
                                        <span>3,383</span>
                                        <span className="CS">ر.س</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-content">
                                <div className="item-info-card last-price">
                                    <h4 className="card-title">آخر سعر تنفيذ للمتر <span className="last-date">(18-Jul-2023)</span>
                                    </h4>
                                    <div className="price">
                                        <span className="number">
                                            <span>5,656.57</span>
                                        </span>
                                        <span className="CS">ر.س</span>
                                    </div>
                                </div>
                                <div className="item-info-card total-parcels">
                                    <h4 className="card-title">إجمالي قيمة الصفقات</h4>
                                    <div className="price">
                                        <span className="number">
                                            <span>15,092,000</span>
                                        </span>
                                        <span className="CS">ر.س</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="parcels-list_item">
                            <div className="item-header ">
                                <div className="gather">
                                    <div className="image-icon" style={{backgroundColor: "rgba(179, 79, 75, 0.2)"}}>
                                        <img className="state-icon" src="https://www.suhail.ai/static/media/commercial-residential.1ed8e49fb55fd3067a44.svg" id="parcel-type-icon" alt="أرض تجاري سكني" />
                                    </div>
                                    <div className="title">أرض تجاري سكني</div>
                                    <div className="parcels-total-section">
                                        <span className="parcels-total">عدد الصفقات</span>
                                        <span className="number">
                                            <span>1</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="parcel-average">
                                    <h4 className="card-title">متوسط سعر المتر</h4>
                                    <div className="number number-bold">
                                        <span>5,565</span>
                                        <span className="CS">ر.س</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-content">
                                <div className="item-info-card last-price">
                                    <h4 className="card-title">آخر سعر تنفيذ للمتر <span className="last-date">(04-Jul-2023)</span>
                                    </h4>
                                    <div className="price">
                                        <span className="number">
                                            <span>6,000.00</span>
                                        </span>
                                        <span className="CS">ر.س</span>
                                    </div>
                                </div>
                                <div className="item-info-card total-parcels">
                                    <h4 className="card-title">إجمالي قيمة الصفقات</h4>
                                    <div className="price">
                                        <span className="number">
                                            <span>6,000,000</span>
                                        </span>
                                        <span className="CS">ر.س</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="parcels-list_item">
                            <div className="item-header ">
                                <div className="gather">
                                    <div className="image-icon" style={{backgroundColor: "rgba(222, 222, 222, 0.2)"}}>
                                        <img className="state-icon" src="https://www.suhail.ai/static/media/default.468b51dd6e9bdc8b22e9.svg" id="parcel-type-icon" alt="أرض تجاري" />
                                    </div>
                                    <div className="title">أرض تجاري</div>
                                    <div className="parcels-total-section">
                                        <span className="parcels-total">عدد الصفقات</span>
                                        <span className="number">
                                            <span>0</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="parcel-average">
                                    <h4 className="card-title">متوسط سعر المتر</h4>
                                    <div className="number number-bold">
                                        <span>5,832</span>
                                        <span className="CS">ر.س</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-content">
                                <div className="item-info-card last-price">
                                    <h4 className="card-title">آخر سعر تنفيذ للمتر <span className="last-date">(04-Apr-2023)</span>
                                    </h4>
                                    <div className="price">
                                        <span className="number">
                                            <span>5,450.53</span>
                                        </span>
                                        <span className="CS">ر.س</span>
                                    </div>
                                </div>
                                <div className="item-info-card total-parcels">
                                    <h4 className="card-title">إجمالي قيمة الصفقات</h4>
                                    <div className="price">
                                        <span className="number">
                                            <span>0</span>
                                        </span>
                                        <span className="CS">ر.س</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="parcels-list_item">
                            <div className="item-header ">
                                <div className="gather">
                                    <div className="image-icon" style={{backgroundColor: "rgba(160, 44, 156, 0.2)" }}>
                                        <img className="state-icon" src="https://www.suhail.ai/static/media/building-house.96ca1f7989b202eccdb2.svg" id="parcel-type-icon" alt="شقق" />
                                    </div>
                                    <div className="title">شقق</div>
                                    <div className="parcels-total-section">
                                        <span className="parcels-total">عدد الصفقات</span>
                                        <span className="number">
                                            <span>0</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="parcel-average">
                                    <h4 className="card-title">متوسط سعر المتر</h4>
                                    <div className="number number-bold">
                                        <span>3,839</span>
                                        <span className="CS">ر.س</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-content">
                                <div className="item-info-card last-price">
                                    <h4 className="card-title">آخر سعر تنفيذ للمتر <span className="last-date">(15-Jun-2023)</span>
                                    </h4>
                                    <div className="price">
                                        <span className="number">
                                            <span>5,258.85</span>
                                        </span>
                                        <span className="CS">ر.س</span>
                                    </div>
                                </div>
                                <div className="item-info-card total-parcels">
                                    <h4 className="card-title">إجمالي قيمة الصفقات</h4>
                                    <div className="price">
                                        <span className="number">
                                            <span>0</span>
                                        </span>
                                        <span className="CS">ر.س</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="parcels-list_item">
                            <div className="item-header ">
                                <div className="gather">
                                    <div className="image-icon" style={{backgroundColor: "rgba(255, 86, 33, 0.2) " }}>
                                        <img className="state-icon" src="https://www.suhail.ai/static/media/noun-villa.4e83c8b2476c631c389e.svg" id="parcel-type-icon" alt="فلل" />
                                    </div>
                                    <div className="title">فلل</div>
                                    <div className="parcels-total-section">
                                        <span className="parcels-total">عدد الصفقات</span>
                                        <span className="number">
                                            <span>0</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="parcel-average">
                                    <h4 className="card-title">متوسط سعر المتر</h4>
                                    <div className="number number-bold">
                                        <span>6,025</span>
                                        <span className="CS">ر.س</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-content">
                                <div className="item-info-card last-price">
                                    <h4 className="card-title">آخر سعر تنفيذ للمتر <span className="last-date">(19-Jun-2023)</span>
                                    </h4>
                                    <div className="price">
                                        <span className="number">
                                            <span>4,430.00</span>
                                        </span>
                                        <span className="CS">ر.س</span>
                                    </div>
                                </div>
                                <div className="item-info-card total-parcels">
                                    <h4 className="card-title">إجمالي قيمة الصفقات</h4>
                                    <div className="price">
                                        <span className="number">
                                            <span>0</span>
                                        </span>
                                        <span className="CS">ر.س</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="parcels-list_item">
                            <div className="item-header ">
                                <div className="gather">
                                    <div className="image-icon" style={{backgroundColor: "rgba(222, 222, 222, 0.2)" }}>
                                        <img className="state-icon" src="https://www.suhail.ai/static/media/default.468b51dd6e9bdc8b22e9.svg" id="parcel-type-icon" alt="مبنى تجاري سكني" />
                                    </div>
                                    <div className="title">مبنى تجاري سكني</div>
                                    <div className="parcels-total-section">
                                        <span className="parcels-total">عدد الصفقات</span>
                                        <span className="number">
                                            <span>0</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="parcel-average">
                                    <h4 className="card-title">متوسط سعر المتر</h4>
                                    <div className="number number-bold">
                                        <span>5,291</span>
                                        <span className="CS">ر.س</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-content">
                                <div className="item-info-card last-price">
                                    <h4 className="card-title">آخر سعر تنفيذ للمتر <span className="last-date">(27-Dec-2022)</span>
                                    </h4>
                                    <div className="price">
                                        <span className="number">
                                            <span>6,683.38</span>
                                        </span>
                                        <span className="CS">ر.س</span>
                                    </div>
                                </div>
                                <div className="item-info-card total-parcels">
                                    <h4 className="card-title">إجمالي قيمة الصفقات</h4>
                                    <div className="price">
                                        <span className="number">
                                            <span>0</span>
                                        </span>
                                        <span className="CS">ر.س</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}