import React, { Component } from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import lichhenImg from '../lichhen-sec.svg';

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
                        <div className="section-lichhen">
                            <img src={lichhenImg}/>
                            <div className="section-label">
                                <span className="text">Lịch hẹn</span>
                                <span className="number">196</span>
                            </div>
                        </div>
                        <div className="section-daden">
                            <img src={lichhenImg}/>
                            <div className="section-label">
                                <span className="text">Lịch hẹn</span>
                                <span className="number">196</span>
                            </div>
                        </div>
                        <div className="section-chuaden">
                            <img src={lichhenImg}/>
                            <div className="section-label">
                                <span className="text">Lịch hẹn</span>
                                <span className="number">196</span>
                            </div>
                        </div>
                        <div className="section-huyhen">
                            <img src={lichhenImg}/>
                            <div className="section-label">
                                <span className="text">Lịch hẹn</span>
                                <span className="number">196</span>
                            </div>
                        </div>
                    </div>
                    <div className="lichhen-timeline-bar">
                        <span className="day"></span>
                        <span className="night"></span>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#8-9">8:00 - 9:00</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#9-10">9:00 - 10:00</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#10-11">10:00 - 11:00</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#11-12">11:00 - 12:00</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#12-13">12:00 - 13:00</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="main-content">
                <div className="tab-content">
                    <div className="tab-pane container active" id="8-9">
                        <div className="row">
                            <div className="col-sm-12 col-md-4 tuvan">
                                <div className="ticket">
                                    <div className="ticket-header">
                                        <div className="avatar"></div>
                                        <div className="profile-info">
                                         <div className="name"></div>
                                         <div className="status"></div>
                                         <div className="time">8:00</div>
                                        </div>
                                    </div>
                                    <div className="ticket-content">
                                        Theo dõi xoay R45 (bs Dương). Ngày 24/6 KH đi, 3 tháng mới quay lại, khách có thể sẽ liên hệ chi nhánh trước 1…
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
                            </div>
                            <div className="col-sm-12 col-md-4 dieutri">
                            </div>
                            <div className="col-sm-12 col-md-4 taikham">
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="9-10">content 2</div>
                    <div className="tab-pane container fade" id="10-11">content 3</div>
                    <div className="tab-pane container fade" id="11-12">content 4</div>
                    <div className="tab-pane container fade" id="12-13">content 5</div>
                </div>
            </div>
            <div className="filter-content">

            </div>
         </div>    
        );
    }
}
