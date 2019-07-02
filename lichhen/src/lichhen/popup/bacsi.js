import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './bacsi.scss';

import ngocTrinhImg from '../ngoc-trinh.jpg';

const seats = {
    0: ['DC761', 'DC762','DC763','DC764','DC765','DC766','DC767','DC768'],
    1: ['DC871','DC872','DC873','DC874','DC875','DC876','DC877','DC878']
}
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
]
export default class DoctorPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seats: seats,
            doctors: doctors,
            searchDoctor: '',
            chosenDoctor: null,
            chosenSeat: null
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.chooseDortor = this.chooseDortor.bind(this);
        this.chooseSeat = this.chooseSeat.bind(this);

      }
    handleConfirm() {
        this.props.updatestatus(3);
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
    chooseDortor(doctor){
        this.setState({
            chosenDoctor: doctor 
        });
    }
    chooseSeat(seat){
        this.setState({
            chosenSeat: seat 
        });
    }
    render() {        
        const {seats, doctors, chosenDoctor, chosenSeat} = this.state;
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="doctor-popup"
            >                
            <Form 
                noValidate>
                    <Modal.Header className="doctor-popup-header" closeButton>
                        <Modal.Title>
                            <h2 className="doctor-popup-title">Chuyển đến bác sỹ</h2>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="doctor-popup-body">
                        <div className="doctors-section section">
                            <label className="section-label">Bác sỹ</label>
                            <Form.Control className="search-field" name="searchDoctor"
                                        value={this.state.searchDoctor}
                                        onChange={this.handleInputChange}
                                        placeholder="Tên bác sỹ" type="text" />
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
                        </div>
                        <div className="seats-section section">
                            <label className="section-label">Ghế trống</label>
                            <div className="seats-list">
                                <h5 className="floor-number">Tầng 1</h5>
                                <div className="floor-row">
                                    {seats[0].map((value, index) => {
                                        return <div className={"seat " + (value ===  chosenSeat ? 'active' : '')} 
                                            onClick={() => this.chooseSeat(value)}
                                            key={index}>
                                            {value}
                                        </div>
                                    })}
                                </div>
                                <h5 className="floor-number">Tầng 2</h5>
                                <div className="floor-row">
                                {seats[1].map((value, index) => {
                                    return <div className={"seat " + (value ===  chosenSeat ? 'active' : '')} 
                                        onClick={() => this.chooseSeat(value)}
                                        key={index}>
                                        {value}
                                    </div>
                                })}
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="doctor-popup-footer">
                        <Button className="btn-close" onClick={this.props.onHide}>Không</Button>
                        <Button className="btn-submit" onClick={this.handleConfirm} >Xác nhận</Button>
                    </Modal.Footer>
            </Form>
            </Modal>
        );
    }
}
