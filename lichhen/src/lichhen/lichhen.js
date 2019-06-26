import React, { Component } from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import lichhenImg from './lichhen-sec.svg';
import dadenImg from './daden-sec.svg';
import chuadenImg from './chuaden-sec.svg';
import huyhenImg from './huyhen-sec.svg';
import ngocTrinhImg from './ngoc-trinh.jpg';

export default class LichHen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    
        // this.handleInputChange = this.handleInputChange.bind(this);
      }

    render() {
        return (
         <div className="lichhen">
            <div className="lichhen-header">
                <span>Lịch hẹn</span>
            </div>

            <div className="lichhen-topbar">
                <div className="lichhen-topbar-calendar"></div>
                <div className="right-side">
                    <div className="lichhen-action-bar">
                        <div className="section section-lichhen">
                            <div className="section-icon">
                                <img src={lichhenImg}/>
                            </div>
                            <div className="section-label">
                                <h4 className="text">Lịch hẹn</h4>
                                <span className="number">196</span>
                            </div>
                        </div>
                        <div className="section section-daden">
                            <div className="section-icon">
                                <img src={dadenImg}/>
                            </div>
                            <div className="section-label">
                                <h4 className="text">Đã đến</h4>
                                <span className="number">17</span>
                            </div>
                        </div>
                        <div className="section section-chuaden">
                            <div className="section-icon">
                                <img src={chuadenImg}/>
                            </div>
                            <div className="section-label">
                                <h4 className="text">Chưa đến</h4>
                                <span className="number">20</span>
                            </div>
                        </div>
                        <div className="section section-huyhen">
                            <div className="section-icon">
                                <img src={huyhenImg}/>
                            </div>
                            <div className="section-label">
                                <h4 className="text">Hủy hẹn</h4>
                                <span className="number">20</span>
                            </div>
                        </div>
                    </div>
                    <div className="lichhen-timeline-bar">
                        <div className="day"></div>
                        <div className="night"></div>
                        <ul className="nav timeline-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#time8-9">8:00 - 9:00</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#time9-10">9:00 - 10:00</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#time10-11">10:00 - 11:00</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#time11-12">11:00 - 12:00</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#time12-13">12:00 - 13:00</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="main-content">
                <div className="tab-content">
                    <div className="tab-pane active" id="time8-9">
                        <div className="row">
                            <div className="col-sm-12 col-md-4 tuvan section-content">
                                <h4 className="section-content-title">Tư vấn <span> (2)</span></h4>
                                <div className="list-tickets">
                                    <div className="ticket">
                                        <div className="ticket-header">
                                            <div className="avatar">
                                                <img src={ngocTrinhImg} />
                                            </div>
                                            <div className="profile-info">
                                                <div className="name">Nguyễn Thị Kiều Oanh 
                                                    <span><i className="info"></i></span>
                                                </div>
                                                <div className="stacks">
                                                    <div className="status status-0">Chưa đến</div>
                                                </div>
                                            </div>
                                            <div className="time">8:00</div>
                                        </div>
                                        <div className="ticket-content">
                                            <p>
                                                Theo dõi xoay R45 (bs Dương). Ngày 24/6 KH đi, 3 tháng mới quay lại, khách có thể sẽ liên hệ chi nhánh trước 1…
                                            </p>
                                        </div>
                                        <div className="ticket-footer">
                                            <button className="btn btn-ticket">
                                                Check in
                                            </button>
                                            <button className="btn btn-ticket">
                                                Hủy hẹn
                                            </button>
                                        </div>
                                    </div>
                                    <div className="ticket">
                                        <div className="ticket-header">
                                            <div className="avatar">
                                                <img src={ngocTrinhImg} />
                                            </div>
                                            <div className="profile-info">
                                                <div className="name">Phan Xuân Yến
                                                    <span><i className="info"></i></span>
                                                </div>
                                                <div className="stacks">
                                                    <div className="status status-4">Hủy hẹn</div>
                                                </div>
                                            </div>
                                            <div className="time">8:00</div>
                                        </div>
                                        <div className="ticket-content">
                                            <p>Khách bận việc, dời lại hôm sau.</p>
                                        </div>
                                        <div className="ticket-footer">
                                            <button disabled className="btn btn-ticket">
                                                Khách hủy hẹn
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 dieutri  section-content">
                                <h4 className="section-content-title">Điều trị <span> (2)</span></h4>
                                <div className="list-tickets">
                                    <div className="ticket">
                                        <div className="ticket-header">
                                            <div className="avatar">
                                                <img src={ngocTrinhImg} />
                                            </div>
                                            <div className="profile-info">
                                                <div className="name">Nguyễn Thị Kiều Oanh 
                                                    <span><i className="info"></i></span>
                                                </div>
                                                <div className="stacks">
                                                    <div className="status status-0">Chưa đến</div>
                                                </div>
                                            </div>
                                            <div className="time">8:00</div>
                                        </div>
                                        <div className="ticket-content">
                                            <p>
                                                Theo dõi xoay R45 (bs Dương). Ngày 24/6 KH đi, 3 tháng mới quay lại, khách có thể sẽ liên hệ chi nhánh trước 1…
                                            </p>
                                        </div>
                                        <div className="ticket-footer">
                                            <button className="btn btn-ticket">
                                                Chuyển đến bác sỹ
                                            </button>
                                        </div>
                                    </div>
                                    <div className="ticket">
                                        <div className="ticket-header">
                                            <div className="avatar">
                                                <img src={ngocTrinhImg} />
                                            </div>
                                            <div className="profile-info">
                                                <div className="name">Phan Xuân Yến
                                                    <span><i className="info"></i></span>
                                                </div>
                                                <div className="stacks">
                                                    <div className="status status-4">Hủy hẹn</div>
                                                </div>
                                            </div>
                                            <div className="time">8:00</div>
                                        </div>
                                        <div className="ticket-content">
                                            <p>Khách bận việc, dời lại hôm sau.</p>
                                        </div>
                                        <div className="ticket-footer">
                                            <button className="btn btn-ticket">
                                                Check out
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 taikham  section-content">
                                <h4 className="section-content-title">Tái khám <span> (2)</span></h4>
                                <div className="list-tickets">
                                    <div className="ticket">
                                        <div className="ticket-header">
                                            <div className="avatar">
                                                <img src={ngocTrinhImg} />
                                            </div>
                                            <div className="profile-info">
                                                <div className="name">Nguyễn Thị Kiều Oanh 
                                                    <span><i className="info"></i></span>
                                                </div>
                                                <div className="stacks">
                                                    <div className="status status-2">Chưa đến</div>
                                                </div>
                                            </div>
                                            <div className="time">8:00</div>
                                        </div>
                                        <div className="ticket-content">
                                            <p>
                                                Theo dõi xoay R45 (bs Dương). Ngày 24/6 KH đi, 3 tháng mới quay lại, khách có thể sẽ liên hệ chi nhánh trước 1…
                                            </p>
                                        </div>
                                        <div className="ticket-footer">
                                            <button className="btn btn-ticket">
                                                Chuyển đến thu ngân
                                            </button>
                                        </div>
                                    </div>
                                    <div className="ticket">
                                        <div className="ticket-header">
                                            <div className="avatar">
                                                <img src={ngocTrinhImg} />
                                            </div>
                                            <div className="profile-info">
                                                <div className="name">Phan Xuân Yến
                                                    <span><i className="info"></i></span>
                                                </div>
                                                <div className="stacks">
                                                    <div className="status status-3">Đã checkout</div>
                                                    <div className="status status-1">BS. Hoàng Minh</div>
                                                </div>
                                            </div>
                                            <div className="time">8:00</div>
                                        </div>
                                        <div className="ticket-content">
                                            <p>Khách bận việc, dời lại hôm sau.</p>
                                        </div>
                                        <div className="ticket-footer">
                                            <button disabled className="btn btn-ticket">
                                                Khách đã Checkout
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="time9-10">content 2</div>
                    <div className="tab-pane container fade" id="time10-11">content 3</div>
                    <div className="tab-pane container fade" id="time11-12">content 4</div>
                    <div className="tab-pane container fade" id="time12-13">content 5</div>
                </div>
            </div>
            <div className="filter-content">
                <a id="filter-lichhen"></a>
            </div>
         </div>    
        );
    }
}
