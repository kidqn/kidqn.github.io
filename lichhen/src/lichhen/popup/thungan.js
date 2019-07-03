import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
                className="bill-popup simple-popup use-bs-styles"
            >                
            <Form 
                noValidate>
                    <Modal.Header className="simple-popup-header no-header" closeButton>
                    </Modal.Header>
                    <Modal.Body className="simple-popup-body">
                        <p className="title">Bạn đã hoàn thành việc khám chữa bệnh và muốn chuyển thông tin đến Thu ngân?</p>
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
