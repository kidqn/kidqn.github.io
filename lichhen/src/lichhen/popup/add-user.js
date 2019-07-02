import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './add-user.scss';


export default class AddUserPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterSearch: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);

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

    render() {        
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="add-user-popup"
            >                
            <Form 
                noValidate>
                    <Modal.Header className="add-user-popup-header" closeButton>
                        <Modal.Title>
                            <h2 className="add-user-popup-title">... / Khách hàng mới</h2>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="add-user-popup-body">
                        <Form.Control className="search-field" name="filterSearch"
                            value={this.state.filterSearch}
                            onChange={this.handleInputChange}
                            placeholder="Tên, mã khách hàng hoặc số điện thoại" type="text" />
                        <a className="add-new"><i className="ic-add-new"></i>Thêm khách mới</a>
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
