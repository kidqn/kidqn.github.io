import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import 'react-dates/initialize';
import moment from 'moment';
import viLocale from 'moment/locale/vi';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
//component
import AddUserPopup from './add-user';
import CancelConfirmPopup from './cancel-confirm';
import './tao-lich-hen.scss';

import ngocTrinhImg from '../../ngoc-trinh.jpg';

// fake data 
const dateTypes = [ {id: 1, type: 'Tư vấn'}, {id: 2, type: 'Tái khám'}, {id: 3, type: 'Điều trị'}];
const doctors = [
    {
        avartar: ngocTrinhImg,
        name: 'Phạm Thùy Dương',
        roomId:'DC761'
    },
    {        
        avartar: ngocTrinhImg,
        name: 'Lê Nguyễn Thanh Tâm',
        roomId:'DC762'
    },
    {
        avartar: ngocTrinhImg,
        name: 'Trần Thục Trang',
        roomId:'DC763'
    },    
    {
        avartar: ngocTrinhImg,
        name: 'Đỗ Thị Thu Hương',
        roomId:'DC764'
    },    
    {
        avartar: ngocTrinhImg,
        name: 'Hồ Xuân Lệnh',
        roomId:'DC765'
    }
];
export default class CreateDatePopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment(),
            filterSearch: '',
            dateTypes: dateTypes,
            chosenDateType: {},
            userData: props.resolve,
            addUserPopupShow: false,
            cancelConfirmPopupShow: false,
            resolveData: null,
            chosenDoctor: null,
            timePicker: 8,
            doctors: doctors,
            keynote: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.openPopup = this.openPopup.bind(this);
        this.chooseDortor = this.chooseDortor.bind(this);
        this.addUser = this.addUser.bind(this);
    }

    componentDidUpdate(oldProps) {
        // By duplicating the data, you have to then
        // keep the local copy in sync with the
        // updated props...
        if(oldProps.resolve !== this.props.resolve) {
            // This triggers an unnecessary re-render
            this.setState({
                userData: this.props.resolve
            });
        }
    }

    handleConfirm() {
        this.props.onHide();
    }  

    handleInputChange(event, type) {
        const target = event.target;
        let value =  target.value;
        if(target.type === 'checkbox') {
            value = target.checked;
        }
        const name = target.name;

        this.setState({
            [name]: value 
        });
    }

    chooseDateTypes(type){
        this.setState({
            chosenDateType: type 
        });
    }
    chooseDortor(doctor){
        this.setState({
            chosenDoctor: doctor 
        });
    }
    addUser(user) {
        console.log(user) 
        this.setState({
            userData: user
        });
    }
    // handle popups
    openPopup(name, data) {
        if(name === 'addUserPopupShow') {
            this.setState({
                addUserPopupShow: true,
                resolveData: data
            });
        } else {
            this.setState({
                [name]: true,
                resolveData: data
            });
        }
    };
    closePopup(name) {
        this.setState({
            [name]: false 
        });
    }

    render() {   
        const {dateTypes, chosenDateType, chosenDoctor} = this.state;
     
        return (
            <div className="use-bs-styles">
                <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className={"create-date-popup use-bs-styles " + (this.state.addUserPopupShow || this.state.cancelConfirmPopupShow ? 'pending': '')}
                >                
                <Form 
                noValidate>
                    <Modal.Header className="create-date-popup-header" closeButton>
                        <Modal.Title>
                            <h2 className="create-date-popup-title">Tạo lịch hẹn</h2>
                        </Modal.Title>
                        <div className="status-update">
                            Cập nhật lần cuối lúc <span>15:43 — 25/09/2019</span> bởi <span>Admin</span>
                        </div>
                    </Modal.Header>
                    <Modal.Body className="create-date-popup-body">
                        {this.state.userData ? (<div className="user-info">
                            <div className="avatar"><img src={ngocTrinhImg} alt=""/></div>
                            <div className="info">
                                <div className="name">{this.state.userData.fullname}</div>
                                <div className="contact">
                                    <div className="status status-phone">{this.state.userData.phoneNumber}</div>
                                    <div className="address">{this.state.userData.ward}, {this.state.userData.district}, {this.state.userData.city}</div>
                                </div>
                            </div>
                        </div> ) : (<React.Fragment>
                            <Form.Control className="search-field" name="filterSearch"
                                value={this.state.filterSearch}
                                onChange={this.handleInputChange}
                                placeholder="Tên, mã khách hàng hoặc số điện thoại" type="text" />
                            <a href="#" className="add-new" 
                                onClick={() => this.openPopup('addUserPopupShow')}>
                                <i className="ic-add-new"></i>Thêm khách mới
                            </a>
                        </React.Fragment>) }
                        <section className="date-types">
                            <label className="label-section">Lịch hẹn:</label>
                            {dateTypes.map((value, index) => {
                                return <div className={"type " + (value.id ===  chosenDateType.id ? 'active' : '')} 
                                    onClick={() => this.chooseDateTypes(value)}
                                    key={index}>
                                    {value.type}
                                </div>
                            })}
                        </section>
                        
                        <section className="company-date form-group-row">
                            <div className="field-input select">
                                <span>Chi nhánh:</span>
                                <Form.Control as="select" name="company" 
                                    defaultValue="TNHH DV Nam Á"
                                    value={this.state.company} 
                                    onChange={this.handleInputChange}>
                                    <option value="TNHH DV Nam Á">TNHH DV Nam Á</option>
                                    <option value="TNHH DV Đông Á">TNHH DV Đông Á</option>
                                    <option value="TNHH DV Bắc Á">TNHH DV Bắc Á</option>
                                    <option value="TNHH DV Tây Á">TNHH DV Tây Á</option>
                                    <option value="TNHH DV Á">TNHH DV Á</option>
                                </Form.Control>
                            </div>
                            <div className="field-input datepicker">
                                <span>Ngày:</span>
                                <SingleDatePicker
                                    date={this.state.date}
                                    onDateChange={date => this.setState({ date })} 
                                    focused={this.state.focused} 
                                    onFocusChange={({ focused }) => this.setState({ focused })}
                                    numberOfMonths={1}
                                    displayFormat="DD/MM/YYYY"
                                    noBorder />
                            </div>
                        </section>

                        <section className="section-time-picker">
                            <label className="label-section">Thời gian:</label>
                            <div className="time-picker">
                                <input type="range" className="time-slider" id="time-slider" tooltip="sadas"
                                    min="8" max="20" step="1" 
                                    value={this.state.timePicker}
                                    onChange={event => this.setState({ timePicker: event.target.value })} />
                                <span className="hr-8">8</span>
                                <span className="hr-11">11</span>
                                <span className="hr-14">14</span>
                                <span className="hr-17" >17</span>
                                <span className="hr-20">20</span>
                            </div>
                        </section>

                        <section className="section-doctors">
                            <label className="label-section">Bác sỹ</label>
                            <div className="doctors-list">
                                {doctors.map((value, index) => {
                                    return <div className={"doctor " + (value.name ===  chosenDoctor ? 'active' : '')}
                                        key={index} 
                                        onClick={() => this.chooseDortor(value.name)}>
                                        <div className="avatar"><img src={ngocTrinhImg} alt={value.name} /></div>
                                        {value.name}
                                    </div>
                                })}
                            </div>
                        </section>
                        <section className="section-note">
                            <Form.Group>
                                <Form.Label>Ghi chú</Form.Label>
                                <Form.Control as="textarea" rows="3" 
                                        name="keynote"
                                        value={this.state.keynote}
                                        onChange={this.handleInputChange}/>
                            </Form.Group>
                        </section>
                    </Modal.Body>
                    <Modal.Footer className="create-date-popup-footer">
                        <Button className="btn-close" onClick={() => this.openPopup('cancelConfirmPopupShow')}>Thoát</Button>
                        <Button className="btn-submit" onClick={this.handleConfirm} >Tạo lịch hẹn</Button>
                    </Modal.Footer>
            </Form>
                </Modal>
                {this.state.addUserPopupShow && <AddUserPopup  
                    resolve={this.state.resolveData}
                    openPopup={this.openPopup}
                    onSubmit={this.addUser}
                    show={this.state.addUserPopupShow}
                    onHide={() => this.closePopup('addUserPopupShow')}/>
                }
                {this.state.cancelConfirmPopupShow && <CancelConfirmPopup  
                    onSubmit={this.props.onHide}
                    show={this.state.cancelConfirmPopupShow}
                    onHide={() => this.closePopup('cancelConfirmPopupShow')}/>
                }
            </div>
        );
    }
}
