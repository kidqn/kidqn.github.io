import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

export default class PhieuThuPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            openPayMethod: false,
            openInsuranceMethod: false,
            totalMoneyPay: 45000000,
            moneyPay: 0,
            restMoneyPay: 45000000,
            insurance: '',
            note: '',
            isConfirm: false
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleOpenMethods = this.handleOpenMethods.bind(this);
        this.toggleEditing = this.toggleEditing.bind(this);

      }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        }, () => {
            const newRestMoney = this.state.totalMoneyPay - this.state.moneyPay;
            this.setState({restMoneyPay: newRestMoney});
        });
    }
    handleConfirm(event) {
        console.log('An essay was submitted: ' + this.state.insurance);
        console.log('An essay was submitted: ' + this.state.note);
        event.preventDefault();
        this.setState({isConfirm: !this.state.isConfirm});
    }

    handleOpenMethods(key) {
        this.setState({
            [key]: !this.state[key]
        })
    }

    toCurrency(number) {
        const formatter = new Intl.NumberFormat('en-US', 
            { maximumSignificantDigits: 3 });
    
        return formatter.format(number);
    }

    toggleEditing() {
        this.setState({ isEditing: !this.state.isEditing });
    }

    render() {
        const isEditing = this.state.isEditing;

        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="phieuthu"
            >                
            <Form 
                noValidate
                onSubmit={this.handleConfirm}>
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
                                <h4>{this.toCurrency(this.state.totalMoneyPay)}</h4>
                            </div>
                        </div>
                    </Modal.Header>
                    <Modal.Body className="phieuthu-body">
                    {!this.state.isConfirm ? (<section id="phieuthu-step1">

                        <section id="section-thanh-toan">
                            <Form.Group>
                                <Form.Label className="phieuthu-label">Khách thanh toán</Form.Label>
                                {isEditing ? (
                                    <div className="field-input">
                                        <span>Số tiền</span>
                                        <Form.Control name="moneyPay" 
                                            value={this.state.moneyPay}
                                            onChange={this.handleInputChange}
                                            onBlur={this.toggleEditing}
                                            placeholder="1,000,000" type="number" />
                                    </div>
                                ) : (
                                    <div className="field-input">
                                        <span>Số tiền</span>
                                        <Form.Control name="moneyPay" 
                                            value={this.toCurrency(this.state.moneyPay)}
                                            onFocus={this.toggleEditing}
                                            placeholder="1,000,000" type="text" />
                                    </div>
                                )}

                                <div className="field-input rest-money">
                                    <span>Còn lại</span>
                                    <Form.Control 
                                        value={this.toCurrency(this.state.restMoneyPay)}
                                        placeholder="1,000,000" type="text" disabled/>
                                </div>
                            </Form.Group>
                        </section>

                        <Accordion className="phieuthu-info" defaultActiveKey="0">
                        <section id="section-phuongthuc">
                            <Accordion.Toggle as={Card.Header} eventKey="0" onClick={() => this.handleOpenMethods('openPayMethod')}>
                                <h3 className="heading-middle-line">Phương thức thanh toán</h3>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <div className="section-phuongthuc-wrapper">
                                    <Form.Group controlId="cashCheckbox">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="cashCheck" name="example1" />
                                            <label className="custom-control-label" htmlFor="cashCheck">Tiền mặt:</label>
                                        </div>                                        
                                        <div className="field-input">
                                            <span>Số tiền:</span>
                                            <Form.Control placeholder="10,000,000" type="text" />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="group-cash">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="cardCheck" name="example1" />
                                            <label className="custom-control-label" htmlFor="cardCheck">Thẻ:</label>
                                        </div> 
                                        <div className="field-input">
                                            <span>Số tiền:</span>
                                            <Form.Control placeholder="10,000,000" type="text" />
                                        </div>
                                        <div className="field-input select">
                                            <span>Ngân hàng:</span>
                                            <Form.Control as="select">
                                                <option>Viettel QR Code</option>
                                                <option>VNPT QR Code</option>
                                                <option>FPT QR Code</option>
                                                <option>Viettel QR Code</option>
                                                <option>Viettel QR Code</option>
                                            </Form.Control>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="group-transfer">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="transferCheck" name="example1" />
                                            <label className="custom-control-label" htmlFor="transferCheck">Chuyển khoản:</label>
                                        </div>
                                        <div className="field-input">
                                            <span>Số tiền:</span>
                                            <Form.Control placeholder="10,000,000" type="text" />
                                        </div>
                                        <div className="field-input select">
                                            <span>Ngân hàng:</span>
                                            <Form.Control as="select">
                                                <option>VCB Biên Hòa</option>
                                                <option>BIDV HCM</option>
                                                <option>Vietin Bank</option>
                                                <option>ACB</option>
                                                <option>Viettel QR Code</option>
                                            </Form.Control>
                                        </div>
                                    </Form.Group>
                                </div>
                            </Accordion.Collapse>
                                {this.state.openPayMethod && <div className="table-result">
                                    <div className="result-row">
                                        <div className="result-col label">
                                            Tiền mặt
                                        </div>
                                        <div className="result-col">
                                            
                                        </div>
                                        <div className="result-col number">
                                            <p className="head">10,000,000</p>
                                        </div>
                                    </div>
                                    <div className="result-row">
                                        <div className="result-col label">
                                            Thẻ
                                        </div>
                                        <div className="result-col">
                                            <p className="head">Viettel QR Code</p>
                                        </div>
                                        <div className="result-col number">
                                            <p className="head">10,000,000</p>
                                        </div>
                                    </div>
                                    <div className="result-row">
                                        <div className="result-col label">
                                            Chuyển khoản
                                        </div>
                                        <div className="result-col">
                                            <p className="head">VCB Biên Hòa</p>
                                        </div>
                                        <div className="result-col number">
                                            <p className="head">10,000,000</p>
                                        </div>
                                    </div>
                                </div> }
                        </section>
                        <section id="section-insurance">
                            <Accordion.Toggle as={Card.Header} eventKey="1" onClick={() => this.handleOpenMethods('openInsuranceMethod')}>
                                <h3 className="heading-middle-line">Bảo hiểm và công ty liên kết</h3>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <section className="section-insurance-wrapper">
                                    <Form.Group className="insurance">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="insuranceCheck" name="company" />
                                            <label className="custom-control-label" htmlFor="insuranceCheck">Bảo hiểm</label>
                                        </div> 
                                        <div className="right-side">
                                            <div className="form-group-row">
                                                <div className="field-input select">
                                                    <span>Công ty:</span>
                                                    <Form.Control as="select" name="insurance" value={this.state.insurance} onChange={this.handleInputChange}>
                                                        <option value="TNHH DV Nam Á">TNHH DV Nam Á</option>
                                                        <option value="TNHH DV Đông Á">TNHH DV Đông Á</option>
                                                        <option value="TNHH DV Bắc Á">TNHH DV Bắc Á</option>
                                                        <option value="TNHH DV Tây Á">TNHH DV Tây Á</option>
                                                        <option value="TNHH DV Á">TNHH DV Á</option>
                                                    </Form.Control>
                                                </div>
                                            </div>
                                            <div className="form-group-row">
                                                <div className="field-input select">
                                                    <span>Dịch vụ:</span>
                                                    <Form.Control as="select">
                                                        <option>Bàn chải kẽ chỉnh nha</option>
                                                        <option>Bàn chải kẽ </option>
                                                        <option>Kem ống</option>
                                                        <option>Kem chải</option>
                                                        <option>Bàn chải kẽ chỉnh răng</option>
                                                    </Form.Control>
                                                </div>
                                                <div className="field-input">
                                                    <span>Số tiền</span>
                                                    <Form.Control placeholder="10,000,000" type="text" />
                                                </div>
                                            </div>
                                            <div className="form-group-row">
                                                <div className="field-input select">
                                                    <span>Dịch vụ:</span>
                                                    <Form.Control as="select">
                                                        <option>Nhổ răng gây tê - R34</option>
                                                        <option>Bàn chải kẽ </option>
                                                        <option>Cạo vôi răng</option>
                                                        <option>Tẩy trắng răng</option>
                                                        <option>Bàn chải kẽ chỉnh răng</option>
                                                    </Form.Control>
                                                </div>
                                                <div className="field-input">
                                                    <span>Số tiền</span>
                                                    <Form.Control placeholder="10,000,000" type="text" />
                                                </div>
                                                <i className="ic ic-remove"></i>
                                            </div>
                                            <div className="form-group-row">
                                                <a className="add-new-insurance"><i className="ic-add-new"></i>Thêm mới</a>
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="company">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="companyCheck" name="company" />
                                            <label className="custom-control-label" htmlFor="companyCheck">Công ty</label>
                                        </div> 
                                    </Form.Group>
                                </section>
                            </Accordion.Collapse>
                            {this.state.openInsuranceMethod && <div className="table-result">
                                <div className="result-row">
                                    <div className="result-col label">
                                        Bảo hiểm
                                    </div>
                                    <div className="result-col">
                                        <p className="head">TNHH DV Nam Á</p>
                                        <p className="sub">Bàn chải kẽ chỉnh nha</p>
                                        <p className="sub">Nhổ răng gây tê - R34</p>
                                    </div>
                                    <div className="result-col number">
                                        10,000,000
                                        <p className="sub">1,000,000</p>
                                        <p className="sub">1,000,000</p>
                                    </div>
                                </div>
                                <div className="result-row">
                                    <div className="result-col label">
                                        Công ty
                                    </div>
                                    <div className="result-col">
                                        <p className="head">CTY TNHH Thương mại và dịch vụLe Gourmet Pass</p>
                                        <p className="sub">Nhổ răng gây tê - R35</p>
                                    </div>
                                    <div className="result-col number">
                                        <p className="head">10,000,000</p>
                                        <p className="sub">1,000,000</p>
                                    </div>
                                </div>
                            </div> }
                        </section>
                        </Accordion>
                        <section id="ghichu">
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Ghi chú</Form.Label>
                            <Form.Control value={this.state.note} as="textarea" rows="3" />
                        </Form.Group>
                        </section>
                    </section> 
                    ) :
                    (<section id="phieuthu-step2">
                            <div className="table-result">
                                <div className="result-row">
                                    <div className="result-col label">
                                        Tiền mặt
                                    </div>
                                    <div className="result-col">
                                        
                                    </div>
                                    <div className="result-col number">
                                        <p className="head">10,000,000</p>
                                    </div>
                                </div>
                                <div className="result-row">
                                    <div className="result-col label">
                                        Thẻ
                                    </div>
                                    <div className="result-col">
                                        <p className="head">Viettel QR Code</p>
                                    </div>
                                    <div className="result-col number">
                                        <p className="head">10,000,000</p>
                                    </div>
                                </div>
                                <div className="result-row">
                                    <div className="result-col label">
                                        Chuyển khoản
                                    </div>
                                    <div className="result-col">
                                        <p className="head">VCB Biên Hòa</p>
                                    </div>
                                    <div className="result-col number">
                                        <p className="head">10,000,000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="table-result">
                                <div className="result-row">
                                    <div className="result-col label">
                                        Bảo hiểm
                                    </div>
                                    <div className="result-col">
                                        <p className="head">TNHH DV Nam Á</p>
                                        <p className="sub">Bàn chải kẽ chỉnh nha</p>
                                        <p className="sub">Nhổ răng gây tê - R34</p>
                                    </div>
                                    <div className="result-col number">
                                        10,000,000
                                        <p className="sub">1,000,000</p>
                                        <p className="sub">1,000,000</p>
                                    </div>
                                </div>
                                <div className="result-row">
                                    <div className="result-col label">
                                        Công ty
                                    </div>
                                    <div className="result-col">
                                        <p className="head">CTY TNHH Thương mại và dịch vụLe Gourmet Pass</p>
                                        <p className="sub">Nhổ răng gây tê - R35</p>
                                    </div>
                                    <div className="result-col number">
                                        <p className="head">10,000,000</p>
                                        <p className="sub">1,000,000</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                    </Modal.Body>
                        {this.state.isConfirm ?
                        (
                            <Modal.Footer>
                                <Button className="btn-close" onClick={this.handleConfirm}>Quay lại</Button>
                                <Button className="btn-submit" type="submit">Tạo phiếu thu</Button>
                            </Modal.Footer>                       
                        ) : (
                            <Modal.Footer>
                                <Button className="btn-close" onClick={this.props.onHide}>Thoát</Button>
                                <Button className="btn-submit" type="submit">Xác nhận</Button>
                            </Modal.Footer>
                        )}
            </Form>
            </Modal>

        );
    }
}
