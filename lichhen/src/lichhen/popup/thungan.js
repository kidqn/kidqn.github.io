import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import './thungan.scss';

export default class BillPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleConfirm = this.handleConfirm.bind(this);
      }
    handleConfirm() {
        this.props.updatestatus(4);
        this.props.onHide();
    }  
    render() {        
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="bill-popup use-bs-styles"
            >                
            <Form 
                noValidate>
                    <Modal.Header className="bill-popup-header" closeButton>
                    </Modal.Header>
                    <Modal.Body className="bill-popup-body">
                        <p className="title">Bạn đã hoàn thành việc khám chữa bệnh và muốn chuyển thông tin đến Thu ngân?</p>
                    </Modal.Body>
                    <Modal.Footer className="bill-popup-footer">
                        <Button className="btn-close" onClick={this.props.onHide}>Không</Button>
                        <Button className="btn-submit" onClick={this.handleConfirm} >Xác nhận</Button>
                    </Modal.Footer>
            </Form>
            </Modal>
        );
    }
}
