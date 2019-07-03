import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import './huyhen.scss';

export default class CancelDatePopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleConfirm = this.handleConfirm.bind(this);
      }
    handleConfirm() {
        this.props.updatestatus(1);
        this.props.onHide();
        this.props.openPopup('createDatePopupShow', this.props.resolve);
    }  
    render() {
        const {resolve} = this.props;
        console.log('resolve', resolve)

        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="cancel-date-popup simple-popup use-bs-styles"
            >                
            <Form 
                noValidate>
                    <Modal.Header className="simple-popup-header no-header" closeButton>
                    </Modal.Header>
                    <Modal.Body className="simple-popup-body">
                        <p className="title">Bạn có chắc chắn muốn hủy lịch hẹn của khách hàng:</p>
                        <div className="avatar">
                            <img  src={resolve.avatar} alt="" />
                        </div>
                        <h4 className="fullname">{resolve.fullname}</h4>
                        <div className="date">
                            <span className="date-type">{resolve.dateType}</span>
                            <span className="date-time">{resolve.dateTime}</span>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="simple-popup-footer">
                        <Button className="btn-close" onClick={this.props.onHide}>Không</Button>
                        <Button className="btn-cancel-confirm" onClick={this.handleConfirm} >Hủy lịch hẹn</Button>
                    </Modal.Footer>
            </Form>
            </Modal>
        );
    }
}
