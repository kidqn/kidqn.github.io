import React, { Component } from 'react';
import 'react-dates/initialize';
import moment from 'moment';
import viLocale from 'moment/locale/vi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactTooltip from 'react-tooltip';
import './lichhen.scss';

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import lichhenImg from './lichhen-sec.svg';
import dadenImg from './daden-sec.svg';
import chuadenImg from './chuaden-sec.svg';
import huyhenImg from './huyhen-sec.svg';
import ngocTrinhImg from './ngoc-trinh.jpg';
import noDateImg from './no_date.svg'
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form'

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
            filterAllCheck: false,
            filterNotArriveCheck: false,
            filterCancelDateCheck: false,
            calendarDates: null,
            doctorName: null
        };

        this.onToggleDayLightMode = this.onToggleDayLightMode.bind(this);
        this.onToggleFilterBox = this.onToggleFilterBox.bind(this);
        this.clearFilter = this.clearFilter.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.backToday = this.backToday.bind(this);
        this.goPrevDate = this.goPrevDate.bind(this);
        this.goNextDate = this.goNextDate.bind(this);
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
    clearFilter(type) {
        if(type === 'options') {
            this.setState({
                filterAllCheck: false,
                filterNotArriveCheck: false,
                filterCancelDateCheck: false,
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
    render() {
        moment.locale('vi', viLocale);
        const showResultFilterBox = !this.state.showFilterBox && (this.state.filterAllCheck || this.state.filterCancelDateCheck || this.state.filterNotArriveCheck);
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
         <div className="lichhen">
            <div className="lichhen-header">
                <span>Lịch hẹn</span>
            </div>

            <div className="lichhen-topbar">
                <div className="lichhen-topbar-calendar">
                <FontAwesomeIcon onClick={this.goPrevDate} className="nav-calendar prev" icon={faChevronLeft} />
                <FontAwesomeIcon onClick={this.goNextDate} className="nav-calendar next" icon={faChevronRight} />
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
                                                        <div className="status status-2">098****123</div>
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
                                                        <div className="status status-2">098****123</div>
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
                                                        <div className="status status-2">098****123</div>
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
                                                        <div className="status status-2">098****123</div>
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
                                                        <div className="status status-2">098****123</div>
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
                                                        <div className="status status-2">098****123</div>
                                                    </span>
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
                                                        <div className="status status-2">098****123</div>
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
                                                        <div className="status status-2">098****123</div>
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
                                                        <div className="status status-2">098****123</div>
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
                                        className="custom-control-input" id="filterAllCheck"
                                        name="filterAllCheck"
                                        checked={this.state.filterAllCheck}
                                        onChange={this.handleInputChange} 
                                />
                                <label className="custom-control-label" htmlFor="filterAllCheck">Tất cả (6)</label>
                            </div>  
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
                    <div className="result">
                        <span className="field">Trạng thái: </span>
                        {this.state.filterAllCheck && <span>Tất cả (6)</span>}
                        {this.state.filterCancelDateCheck && <span>Hủy hẹn (1)</span>}
                        {this.state.filterNotArriveCheck && <span>Chưa đến (1)</span>}
                        <FontAwesomeIcon className="clear-filter" onClick={() => this.clearFilter('options')}  icon={faTimes} />
                    </div>
                    {this.state.calendarDates && <div className="result">
                        <span className="field">Lịch hẹn: </span>
                        {this.state.calendarDates}
                        <FontAwesomeIcon className="clear-filter" onClick={() => this.clearFilter('calendar-dates')} icon={faTimes} />
                    </div> }
                    {this.state.doctorName && <div className="result">
                        <span className="field">Bác sĩ: </span>
                        {this.state.doctorName}
                        <FontAwesomeIcon className="clear-filter" onClick={() => this.clearFilter('doctor-name')} icon={faTimes} />
                    </div> }
                </div>}
            </div>
         </div>    
        );
    }
}