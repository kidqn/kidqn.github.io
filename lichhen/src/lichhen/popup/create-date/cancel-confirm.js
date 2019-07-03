import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './cancel-confirm.scss';

export default class CancelConfirmPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleConfirm = this.handleConfirm.bind(this);
      }
    handleConfirm() {
        this.props.onSubmit();
        this.props.onHide();
    }  
    render() {        
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="cancel-confirm-popup simple-popup use-bs-styles"
            >                
            <Form 
                noValidate>
                    <Modal.Header className="simple-popup-header no-header" closeButton>
                    </Modal.Header>
                    <Modal.Body className="simple-popup-body">
                        <p className="title">Bạn có muốn hủy Lịch Hẹn đang tạo không?</p>
                    </Modal.Body>
                    <Modal.Footer className="simple-popup-footer">
                        <Button className="btn-close" onClick={this.props.onHide}>Không</Button>
                        <Button className="btn-cancel-confirm" onClick={this.handleConfirm} >Hủy</Button>
                    </Modal.Footer>
            </Form>
            </Modal>
        );
    }
}
