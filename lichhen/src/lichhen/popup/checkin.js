import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import './checkin.scss';

export default class CheckinPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleConfirm = this.handleConfirm.bind(this);
      }
    handleConfirm() {
        this.props.updatestatus(2);
        this.props.onHide();
    }  
    render() {        
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="checkin-popup simple-popup use-bs-styles"
            >                
            <Form 
                noValidate>
                    <Modal.Header className="simple-popup-header no-header" closeButton>
                    </Modal.Header>
                    <Modal.Body className="simple-popup-body">
                        <p className="title">Bạn không thể hoàn tác sau khi nhấn nút "Check In".<br/>
                            Bạn có muốn tiếp tục không?</p>
                    </Modal.Body>
                    <Modal.Footer className="simple-popup-footer">
                        <Button className="btn-close" onClick={this.props.onHide}>Không</Button>
                        <Button className="btn-submit" onClick={this.handleConfirm} >Check In</Button>
                    </Modal.Footer>
            </Form>
            </Modal>
        );
    }
}
