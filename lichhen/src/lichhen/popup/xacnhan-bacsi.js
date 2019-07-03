import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './xacnhan-bacsi.scss';

export default class ConfirmDoctorAndSeatPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleConfirm = this.handleConfirm.bind(this);
      }
    handleConfirm() {
        this.props.updatestatus(3);
        this.props.onHide();
    }  
    render() {   
        const {resolve} = this.props;
     
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="confirm-doctor-seat-popup simple-popup use-bs-styles"
            >                
            <Form 
                noValidate>
                    <Modal.Header className="simple-popup-header no-header" closeButton>
                    </Modal.Header>
                    <Modal.Body className="simple-popup-body">
                        <p className="title">Hệ thống sẽ chuyển khách hàng đến bác sĩ {resolve.chosenDoctor} và {resolve.chosenSeat}. Bạn có muốn chuyển không?</p>
                    </Modal.Body>
                    <Modal.Footer className="simple-popup-footer">
                        <Button className="btn-close" onClick={this.props.onHide}>Không</Button>
                        <Button className="btn-submit" onClick={this.handleConfirm} >Xác nhận</Button>
                    </Modal.Footer>
            </Form>
            </Modal>
        );
    }
}
