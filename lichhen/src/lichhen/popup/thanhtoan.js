import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import './thanhtoan.scss';

export default class PaymentPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleConfirm = this.handleConfirm.bind(this);
      }
    handleConfirm() {
        this.props.updatestatus(5);
        this.props.onHide();
    }  
    render() {        
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="payment-popup use-bs-styles simple-popup"
            >                
            <Form 
                noValidate>
                    <Modal.Header className="payment-popup-header" closeButton>
                    </Modal.Header>
                    <Modal.Body className="payment-popup-body">
                        <p className="title">Bạn có muốn đổi trạng thái lịch hẹn sang trạng thái 'Đã thanh toán' không?</p>
                    </Modal.Body>
                    <Modal.Footer className="payment-popup-footer">
                        <Button className="btn-close" onClick={this.props.onHide}>Không</Button>
                        <Button className="btn-submit" onClick={this.handleConfirm} >Xác nhận</Button>
                    </Modal.Footer>
            </Form>
            </Modal>
        );
    }
}
