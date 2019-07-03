import React from 'react';
// components
import CancelDatePopup from './popup/huyhen';
import CheckinPopup from './popup/checkin';
import DoctorPopup from './popup/bacsi';
import CreateDatePopup from './popup/tao-lich-hen';

import 'react-dates/initialize';
import moment from 'moment';
import viLocale from 'moment/locale/vi';
import ReactTooltip from 'react-tooltip';
import './common.scss';
import './lichhen.scss';

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import lichhenImg from './lichhen-sec.svg';
import dadenImg from './daden-sec.svg';
import chuadenImg from './chuaden-sec.svg';
import huyhenImg from './huyhen-sec.svg';
import ngocTrinhImg from './ngoc-trinh.jpg';
import noDateImg from './no_date.svg'
import Form from 'react-bootstrap/Form'
// constant
const DAY_MODE = true;
const NIGHT_MODE = false;

export default class LichHen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment(),
            focused: false,
            dayLightMode: DAY_MODE,
            showFilterBox: false,
            filterNotArriveCheck: false,
            filterCancelDateCheck: false,
            calendarDates: null,
            doctorName: null,
            statusDate: 0, 
            // 0: checkin & hủy hẹn, 1: Khách hủy hẹn, 2: chuyển đến bác sỹ, 3: chuyển đến thu ngân,4 checkout, 5 da checkout
            cancelDatePopupShow: false,
            checkinPopupShow: false,
            doctorPopupShow: false,
            createDatePopupShow: false,
            resolveData: null,
            opacity:0.9

        };

        this.onToggleDayLightMode = this.onToggleDayLightMode.bind(this);
        this.onToggleFilterBox = this.onToggleFilterBox.bind(this);
        this.clearFilter = this.clearFilter.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.backToday = this.backToday.bind(this);
        this.goPrevDate = this.goPrevDate.bind(this);
        this.goNextDate = this.goNextDate.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this.openPopup = this.openPopup.bind(this);
        this.updateStatusDate = this.updateStatusDate.bind(this);
      }

    // toogle day light mode 
    onToggleDayLightMode() {
        this.setState({dayLightMode: !this.state.dayLightMode});
    }
    // show hide filter box
    onToggleFilterBox() {
        this.setState({showFilterBox: !this.state.showFilterBox});
    } 

    // handle filter box
    handleInputChange(event, type) {
        const target = event.target;
        let value =  target.value;
        if(target.type === 'checkbox') {
            value = target.checked;
        }
        if(target.type === 'number') {
            value = parseInt(target.value)
        }

        const name = target.name;

        this.setState({
            [name]: value 
        });
    }
    // clear filter
    clearFilter(type, stateName) {
        if(type === 'options') {
            this.setState({
                [stateName]: false,
            });
        }
        if(type === 'calendar-dates') {
            this.setState({
                calendarDates: ''
            });
        }
        if(type === 'doctor-name') {
            this.setState({
                doctorName: ''
            });
        }
    }
    backToday() {
        this.setState({
            date: moment(new Date())
        })
    }
    goNextDate() {
        this.setState({
            date: moment(this.state.date).add(1,'days')
        })
    }
    goPrevDate() {
        this.setState({
            date: moment(this.state.date).add(-1,'days')
        })
    }
    // handle popups
    openPopup(name, data) {
        this.setState({
            [name]: true,
            resolveData: data
        });
    };
    closePopup(name) {
        this.setState({
            [name]: false 
        });
    };
    updateStatusDate(numberStatus) {
        if(numberStatus && numberStatus !== null) {
            this.setState({
                statusDate: numberStatus
            });
        }
    }

    render() {
        moment.locale('vi', viLocale);
        const showResultFilterBox = !this.state.showFilterBox && (this.state.filterCancelDateCheck || this.state.filterNotArriveCheck);
        const isToday = this.state.date.isSame(new Date(), 'day');
        const weekDaySelected = this.state.date ? moment(this.state.date).format('dddd') : '';

        // show hom nay, week day
        let dayselect = moment(this.state.date);
        let today = moment(new Date, 'day');
        console.log(today.isAfter(dayselect, 'day'),today.isBefore(dayselect, 'day'), today.diff(dayselect, 'day'));
        let todayText = ''; 
        if(isToday) {
            todayText = 'Hôm nay';
        } else if (today.isAfter(dayselect, 'day') && today.diff(dayselect, 'day') <= 1) {
            todayText = 'Hôm qua'
        } else if (today.isBefore(dayselect, 'day') && today.diff(dayselect, 'day') > -1) {
            todayText = 'Ngày mai'
        }

        return (
         <div className="lichhen use-bs-styles">
            <div className="lichhen-header">
                <span>Lịch hẹn</span>
                <button className="btn" id="tao-lich-hen" onClick={() => this.openPopup('createDatePopupShow')}>Tạo lịch hẹn</button>
            </div>

            <div className="lichhen-topbar">
                <div className="lichhen-topbar-calendar">
                <div onClick={this.goPrevDate} className="nav-calendar prev"></div>
                <div onClick={this.goNextDate} className="nav-calendar next"></div>
                <div className="date-wrapper">
                    <p className="date-picker-displayname">
                        {todayText && <span>{todayText} ,</span>} {weekDaySelected}
                    </p>
                    <SingleDatePicker
                        date={this.state.date}
                        onDateChange={date => this.setState({ date })} 
                        focused={this.state.focused} 
                        onFocusChange={({ focused }) => this.setState({ focused })}
                        id="lichhen-date-picker"
                        numberOfMonths={1}
                        displayFormat="DD/MM/YYYY"
                        noBorder />
                    {!isToday && <div className="back-today" onClick={this.backToday}>Quay lại hôm nay</div>}
                </div>
                </div>
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
                        <div data-tip data-for='day-tt' className={"day " + (this.state.dayLightMode ? 'active' : '')}
                            onClick={this.onToggleDayLightMode}>
                            <ReactTooltip id='day-tt' className='custom-tooltip' place="bottom">
                                <span>Sáng</span>
                            </ReactTooltip>
                        </div>

                        <div  data-tip data-for='night-tt' className="night" className={"night " + (this.state.dayLightMode ? '' : 'active')} 
                            onClick={this.onToggleDayLightMode}>
                            <ReactTooltip id='night-tt' className='custom-tooltip' place="bottom">
                                <span>Tối</span>
                            </ReactTooltip>
                        </div>
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
                        <div className="row lichhen-row">
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
                                                    <span className="phone">
                                                        <i className="info"></i>
                                                        <div className="status status-phone">098****123</div>
                                                    </span>
                                                </div>
                                                <div className="stacks">
                                                    {this.state.statusDate === 0 && <div className="status status-0">Chưa đến</div> }
                                                    {this.state.statusDate === 1 && <div className="status status-1">Hủy hẹn</div> }
                                                    {this.state.statusDate === 2 && <div className="status ">Đã Checkin</div> }
                                                    {this.state.statusDate === 3 && <div className="status">Đã chuyển đến bác sĩ</div> }
                                                    {this.state.statusDate === 4 && <div className="status ">Đã thanh toán</div> }
                                                    {this.state.statusDate === 5 && <div className="status status-5">Đã Checkout</div> }
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
                                            {this.state.statusDate === 0 && <React.Fragment>
                                                <button className="btn btn-ticket" onClick={() => this.openPopup('checkinPopupShow')}>
                                                    Check in
                                                </button>
                                                <button className="btn btn-ticket" 
                                                    onClick={() => this.openPopup('cancelDatePopupShow', 
                                                    {
                                                        name: 'Nguyễn Thị Kiều Oanh',
                                                        avatar: ngocTrinhImg,
                                                        dateType: 'Tư vấn',
                                                        dateTime: '8:00 - 9:00'
                                                    })}>
                                                    Hủy hẹn
                                                </button>
                                            </React.Fragment>}
                                            {this.state.statusDate === 1 && <React.Fragment>
                                                <button disabled className="btn btn-ticket">
                                                    Khách hủy hẹn
                                                </button>
                                            </React.Fragment>}
                                            {this.state.statusDate === 2 && <React.Fragment>
                                                <button className="btn btn-ticket"
                                                    onClick={() => this.openPopup('doctorPopupShow')}>
                                                    Chuyển đến bác sỹ
                                                </button>
                                            </React.Fragment>}
                                            {this.state.statusDate === 3 && <React.Fragment>
                                                <button className="btn btn-ticket"  
                                                    onClick={() => this.updateStatusDate(4)}>
                                                    Chuyển đến thu ngân
                                                </button>
                                            </React.Fragment>}
                                            {this.state.statusDate === 4 && <React.Fragment>
                                                <button className="btn btn-ticket"  
                                                    onClick={() => this.updateStatusDate(5)}>
                                                    Check out
                                                </button>
                                            </React.Fragment>}
                                            {this.state.statusDate === 5 && <React.Fragment>
                                                <button disabled className="btn btn-ticket">
                                                    Khách đã Checkout
                                                </button>
                                            </React.Fragment>}
                                        </div>
                                    </div>
                                    <div className="ticket">
                                        <div className="ticket-header">
                                            <div className="avatar">
                                                <img src={ngocTrinhImg} />
                                            </div>
                                            <div className="profile-info">
                                                <div className="name">Phan Xuân Yến
                                                    <span className="phone">
                                                        <i className="info"></i>
                                                        <div className="status status-phone">098****123</div>
                                                    </span>
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
                                                    <span className="phone">
                                                        <i className="info"></i>
                                                        <div className="status status-phone">098****123</div>
                                                    </span>
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
                                                    <span className="phone">
                                                        <i className="info"></i>
                                                        <div className="status status-phone">098****123</div>
                                                    </span>
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
                                                    <span className="phone">
                                                        <i className="info"></i>
                                                        <div className="status status-phone">098****123</div>
                                                    </span>
                                                </div>
                                                <div className="stacks">
                                                    <div className="status">Chưa đến</div>
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
                                                    <span className="phone">
                                                        <i className="info"></i>
                                                        <div className="status status-phone">098****123</div>
                                                    </span>
                                                </div>
                                                <div className="stacks">
                                                    <div className="status status-5">Đã checkout</div>
                                                    <div className="status status-bs">BS. Hoàng Minh</div>
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
                    <div className="tab-pane fade" id="time9-10">
                        <div className="row lichhen-row">
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
                                                    <span className="phone">
                                                        <i className="info"></i>
                                                        <div className="status status-phone">098****123</div>
                                                    </span>

                                                    <span data-tip='Admin' 
                                                            data-for='time-update-id-001'>
                                                        <i className="time-update"></i>
                                                    </span>
                                                </div>
                                                <ReactTooltip id='time-update-id-001' className='custom-tooltip' place="top" 
                                                        getContent={(dataTip) => `Cập nhập lúc 8:40 bởi ${dataTip}`} />
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
                                                    <span className="phone">
                                                        <i className="info"></i>
                                                        <div className="status status-phone">098****123</div>
                                                    </span>
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
                                                    <span className="phone">
                                                        <i className="info"></i>
                                                        <div className="status status-phone">098****123</div>
                                                    </span>
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
                                <div className="no-date">
                                    <img src={noDateImg} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="time10-11">content 3</div>
                    <div className="tab-pane fade" id="time11-12">content 4</div>
                    <div className="tab-pane fade" id="time12-13">content 5</div>
                </div>
            </div>
            <div className="filter-content">
                {! this.state.showFilterBox && <a id="filter-lichhen-btn" onClick={this.onToggleFilterBox}></a>}
                {this.state.showFilterBox && 
                <div className="filter-box">
                    <div className="inner">
                        <div className="filter-options">
                            <div className=" custom-checkbox">
                                <input type="checkbox" 
                                        className="custom-control-input" id="filterNotArriveCheck"
                                        name="filterNotArriveCheck"
                                        checked={this.state.filterNotArriveCheck}
                                        onChange={this.handleInputChange} 
                                />
                                <label className="custom-control-label" htmlFor="filterNotArriveCheck">Chưa đến (1)</label>
                            </div>  
                            <div className=" custom-checkbox">
                                <input type="checkbox" 
                                        className="custom-control-input" id="filterCancelDateCheck"
                                        name="filterCancelDateCheck"
                                        checked={this.state.filterCancelDateCheck}
                                        onChange={this.handleInputChange} 
                                />
                                <label className="custom-control-label" htmlFor="filterCancelDateCheck">Hủy hẹn (1)</label>
                            </div>  
                        </div>
                        <div className="filter-dates">
                            <span>Lịch hẹn: </span>
                            <Form.Control as="select"  name="calendarDates" 
                                defaultValue="5"
                                value={this.state.calendarDates} 
                                onChange={this.handleInputChange}>
                                <option value="0">8:00 - 9:00</option>
                                <option value="1">9:00 - 10:00</option>
                                <option value="2">10:00 - 11:00</option>
                                <option value="3">11:00 -12:00</option>
                                <option value="4">12:00 - 13:00</option>
                                <option value="5">Tất cả</option>
                            </Form.Control>
                        </div>
                        <div className="filter-doctors">
                            <span>Bác sĩ: </span>
                            <Form.Control as="select"  name="doctorName" 
                                defaultValue="2"
                                value={this.state.doctorName} 
                                onChange={this.handleInputChange}>
                                <option value="0">Bác sĩ Cường</option>
                                <option value="1">Bác sĩ Dương</option>
                                <option value="2">Tất cả</option>
                            </Form.Control>
                        </div>
                        <a id="clear-filter-btn" onClick={this.onToggleFilterBox}></a>
                    </div>
                </div> 
                }

                {showResultFilterBox && <div className="result-filter-box">
                    {this.state.filterCancelDateCheck &&<div className="result">
                        <span className="field">Trạng thái: </span>
                        <span>Hủy hẹn (1)</span>
                        <div className="clear-filter" onClick={() => this.clearFilter('options','filterCancelDateCheck')} ></div>
                    </div>}
                    {this.state.calendarDates && <div className="result">
                        <span className="field">Trạng thái: </span>
                        <span>Chưa đến (1)</span>
                        <div className="clear-filter" onClick={() => this.clearFilter('options','calendarDates')}> </div>
                    </div>}
                    {this.state.calendarDates && <div className="result">
                        <span className="field">Lịch hẹn: </span>
                        {this.state.calendarDates}
                        <div className="clear-filter" onClick={() => this.clearFilter('calendar-dates')}></div>
                    </div> }
                    {this.state.doctorName && <div className="result">
                        <span className="field">Bác sĩ: </span>
                        {this.state.doctorName}
                        <div className="clear-filter" onClick={() => this.clearFilter('doctor-name')} ></div>
                    </div> }
                </div>}
            </div>
            {this.state.cancelDatePopupShow && <CancelDatePopup  
                resolve={this.state.resolveData}
                updatestatus={this.updateStatusDate}
                show={this.state.cancelDatePopupShow}
                onHide={() => this.closePopup('cancelDatePopupShow')}/>
            }
            {this.state.checkinPopupShow && <CheckinPopup  
                updatestatus={this.updateStatusDate}
                show={this.state.checkinPopupShow}
                onHide={() => this.closePopup('checkinPopupShow')}/>
            }
            {this.state.doctorPopupShow && <DoctorPopup  
                resolve={this.state.resolveData}
                updatestatus={this.updateStatusDate}
                show={this.state.doctorPopupShow}
                onHide={() => this.closePopup('doctorPopupShow')}/>
            }
            {this.state.createDatePopupShow && <CreateDatePopup  
                resolve={this.state.resolveData}
                show={this.state.createDatePopupShow}
                onHide={() => this.closePopup('createDatePopupShow')}/>
            }
         </div>    
        );
    }
}
