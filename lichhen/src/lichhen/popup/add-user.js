import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {SingleDatePicker } from 'react-dates';
import moment from 'moment';

import './add-user.scss';


export default class AddUserPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            gender: true, // true male, false: female
            phoneNumber:null,
            date: moment(),
            city: null,
            district: null,
            ward: null,
            keynote: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);

      }
    handleConfirm() {
        this.props.onHide();
        const newUser = {
            fullname: this.state.fullname,
            gender: this.state.gender ? 'M' : 'F',
            phoneNumber:this.state.phoneNumber,
            date: this.state.date,
            city: this.state.city,
            district: this.state.district,
            ward: this.state.ward,
            keynote: this.state.keynote,
        }
        this.props.onSubmit(newUser);
    }  
    
    handleInputChange(event, type) {
        const target = event.target;
        let value =  target.value;
        let name = target.name;
        if(target.type === 'checkbox') {
            value = target.checked;
        }
        if(type === 'gender') {
            value = !this.state.gender;
            name = 'gender';
        }

        this.setState({
            [name]: value 
        });
    }

    render() {        
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="add-user-popup use-bs-styles"
            >                
            <Form 
                noValidate>
                    <Modal.Header className="add-user-popup-header" closeButton>
                        <Modal.Title>
                            <h2 className="add-user-popup-title">... / Khách hàng mới</h2>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="add-user-popup-body">
                        <div className="row form-group-row">
                            <div className="col-sm-6 field-input">
                                    <span>Họ tên: </span>
                                    <Form.Control name="fullname"
                                        value={this.state.fullname}
                                        onChange={this.handleInputChange} 
                                        placeholder="" type="text" />
                            </div>
                            <div className="col-sm-6 field-input gender">
                                <span>Giới tính:</span>
                                <div className={"option " + (this.state.gender ? 'active': '')} onClick={(e) => this.handleInputChange(e,'gender')}>Name</div>
                                <div className={"option " + (!this.state.gender ? 'active': '')} onClick={(e) => this.handleInputChange(e,'gender')}>Nữ</div>
                            </div>
                        </div>

                        <div className="row form-group-row">
                            <div className="col-sm-6 field-input">
                                    <span>Số ĐT:</span>
                                    <Form.Control name="phoneNumber"
                                        value={this.state.phoneNumber}
                                        onChange={this.handleInputChange} 
                                        maxlength="11"
                                        placeholder="0123456789" type="number" />
                            </div>
                            <div className="col-sm-6 field-input datepicker">
                                <span>Ngày sinh:</span>
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
                        <div className="row form-group-row">
                            <div className="col-sm-6 field-input select">
                                <span>Thành phố:</span>
                                <Form.Control as="select" name="city" 
                                    defaultValue="Hồ Chí Minh"
                                    value={this.state.city} 
                                    onChange={this.handleInputChange}>
                                    <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                                    <option value="Đồng Nai">Đồng Nai</option>
                                    <option value="Cần Thơ">Cần Thơ</option>
                                    <option value="Tiền Giang">Tiền Giang</option>
                                    <option value="Rome">Rome</option>
                                </Form.Control>
                            </div>
                            <div className="col-sm-6 field-input district select">
                                <span>Quận huyện:</span>
                                <Form.Control as="select" name="district" 
                                    defaultValue="null"
                                    value={this.state.district} 
                                    onChange={this.handleInputChange}>
                                    <option value="null">Chọn quận/huyện</option>
                                    <option value="Quận 1">Quận 1</option>
                                    <option value="Quận 2">Quận 2</option>
                                    <option value="Bình Thạnh">Bình Thạnh</option>
                                    <option value="Phú Nhuận">Phú Nhuận</option>
                                </Form.Control>
                            </div>
                        </div>
                        <div className="row form-group-row">
                            <div className="col-sm-6 field-input select">
                                <span>Phường/Xã:</span>
                                <Form.Control as="select" name="ward" 
                                    defaultValue="null"
                                    value={this.state.ward} 
                                    onChange={this.handleInputChange}>
                                    <option value="null">Chọn phường/xã</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </Form.Control>
                            </div>
                        </div>
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
                    <Modal.Footer className="add-user-popup-footer">
                        <Button className="btn-close" onClick={this.props.onHide}>Không</Button>
                        <Button className="btn-submit" onClick={this.handleConfirm} >Xác nhận</Button>
                    </Modal.Footer>
            </Form>
            </Modal>
        );
    }
}
