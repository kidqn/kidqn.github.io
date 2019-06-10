import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

export default class PhieuThuPopup extends React.Component {
    render() {
        return (
        <Form>
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="phieuthu"
            >                
                    <Modal.Header className="phieuthu-header" closeButton>
                        <Modal.Title>
                            <h2 className="phieuthu-title">Phiếu Thu</h2>
                        </Modal.Title>
                        <div className="right-side">
                            <div className="chi-nhanh">
                                <p>Chi nhánh</p>
                                <h4>31NDC.001</h4>
                            </div>
                            <div className="thanh-toan">
                                <p>Cần thanh toán</p>
                                <h4>45,000,000</h4>
                            </div>
                        </div>
                    </Modal.Header>

                    <Modal.Body className="phieuthu-body">
                        <section id="section-thanh-toan">
                            <Form.Group>
                                <Form.Label className="phieuthu-label">Khách thanh toán</Form.Label>
                                <div className="field-input">
                                    <span>Số tiền</span>
                                    <Form.Control placeholder="First name" type="text" />
                                </div>
                                <div className="field-input rest-money">
                                    <span>Còn lại</span>
                                    <Form.Control placeholder="First name" type="text" disabled/>
                                </div>
                            </Form.Group>
                        </section>

                        <Accordion className="phieuthu-info" defaultActiveKey="0">
                        <section id="section-phuongthuc">
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <h3 className="heading-middle-line">Phương thức thanh toán</h3>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <div className="section-phuongthuc-wrapper">
                                    <Form.Group controlId="cashCheckbox">
                                        <Form.Check type="checkbox" label="Tiền mặt" />
                                        <div className="field-input">
                                            <span>Số tiền</span>
                                            <Form.Control placeholder="10,000,000" type="text" />
                                        </div>
                                    </Form.Group>
                                    <Form.Group controlId="cardCheckbox">
                                        <Form.Check type="checkbox" label="Thẻ" />
                                        <div className="field-input">
                                            <span>Số tiền</span>
                                            <Form.Control placeholder="10,000,000" type="text" />
                                        </div>
                                        <div className="field-input">
                                        <Form.Control as="select">
                                            <option>Viettel QR Code</option>
                                            <option>Viettel QR Code</option>
                                            <option>Viettel QR Code</option>
                                            <option>Viettel QR Code</option>
                                            <option>Viettel QR Code</option>
                                        </Form.Control>
                                        </div>
                                    </Form.Group>
                                    <Form.Group controlId="transferCheckbox">
                                        <Form.Check type="checkbox" label="Chuyển khoản" />
                                        <div className="field-input">
                                            <span>Số tiền</span>
                                            <Form.Control placeholder="10,000,000" type="text" />
                                        </div>
                                    </Form.Group>
                                </div>
                            </Accordion.Collapse>
                        </section>
                        <section id="section-baohiem">
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                <h3 className="heading-middle-line">Bảo hiểm và công ty liên kết</h3>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                            <p>Hello! I'm another body</p>
                            </Accordion.Collapse>
                        </section>
                        </Accordion>

                        <section id="ghichu">
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Ghi chú</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                        </section>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
            </Modal>
        </Form>

        );
    }
}
