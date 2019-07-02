import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import 'react-dates/initialize';
import moment from 'moment';
import viLocale from 'moment/locale/vi';
import ReactTooltip from 'react-tooltip';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
//component
import AddUserPopup from './add-user';
import './tao-lich-hen.scss';


export default class CreateDatePopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment(),
            filterSearch: '',
            addUserPopupShow: false,
            resolveData: null
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.openPopup = this.openPopup.bind(this);
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
    }

    render() {        
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="create-date-popup use-bs-styles"
            >                
            <Form 
                noValidate>
                    <Modal.Header className="create-date-popup-header" closeButton>
                        <Modal.Title>
                            <h2 className="create-date-popup-title">Tạo lịch hẹn</h2>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="create-date-popup-body">
                        <Form.Control className="search-field" name="filterSearch"
                            value={this.state.filterSearch}
                            onChange={this.handleInputChange}
                            placeholder="Tên, mã khách hàng hoặc số điện thoại" type="text" />
                        <a href="#" className="add-new" 
                            onClick={() => this.openPopup('addUserPopupShow')}>
                            <i className="ic-add-new"></i>Thêm khách mới
                        </a>
                        <div className="date-types">
                            <label>Lịch hẹn</label>
                            <div className="type">Tư vấn</div>
                            <div className="type">Tái khám</div>
                            <div className="type">Điều trị</div>
                        </div>
                        <div className="form-group-row">
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
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="create-date-popup-footer">
                        <Button className="btn-close" onClick={this.props.onHide}>Không</Button>
                        <Button className="btn-submit" onClick={this.handleConfirm} >Tạo lịch hẹn</Button>
                    </Modal.Footer>
            </Form>
            {this.state.addUserPopupShow && <AddUserPopup  
                resolve={this.state.resolveData}
                openPopup={this.openPopup}
                show={this.state.addUserPopupShow}
                onHide={() => this.closePopup('addUserPopupShow')}/>
            }
            </Modal>

        );
    }
}
