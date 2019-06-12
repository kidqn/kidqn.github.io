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
            openPayMethod: true,
            openInsuranceMethod: false,
            totalMoneyPay: 45000000,
            moneyPay: 0,
            cashCheck: false,
            cashMethod: 0,
            cardCheck: false,
            cardMethod: 0,
            cardBank: '',
            transferCheck: false,
            transferMethod: 0,
            transferBank: '',
            restMoneyPay: 45000000,
            insurance: '',
            insuranceCheck: false,
            insuranceService: '',
            insuranceServicePrice: 0,
            insuranceServiceExtra: '',
            insuranceServiceExtraPrice: 0,
            companyCheck: false,
            note: '',
            isConfirm: false
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleShowTableResult = this.handleShowTableResult.bind(this);
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
        console.log('Note: ' + this.state.note);
        console.log('Cash method: ' + this.state.cashMethod);
        console.log('Card: ' + this.state.cardMethod , this.state.cardBank);
        console.log('Transfer: ' + this.state.transferMethod , this.state.transferBank);
        event.preventDefault();
        this.setState({isConfirm: !this.state.isConfirm});
    }
    handleSubmit(event) {
        console.log('push to server');
        event.preventDefault();
    }
    handleShowTableResult(key) {
        if( key === 'openPayMethod') {
            this.setState({
                openPayMethod: !this.state.openPayMethod,
                openInsuranceMethod: this.state.openPayMethod ? false : true
            })
        }
        if( key === 'openInsuranceMethod') {
            this.setState({
                openPayMethod: this.state.openInsuranceMethod ? false : true,
                openInsuranceMethod: !this.state.openInsuranceMethod
            })
        }
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
        const isShowMethodTable = !this.state.openPayMethod && (this.state.cashCheck || this.state.cardCheck || this.state.transferCheck);
        const isShowInsuranceTable = this.state.openInsuranceMethod && (this.state.insuranceCheck || this.state.companyCheck);

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
                onSubmit={this.handleSubmit}>
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
                                        <Form.Control
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
                            <Accordion.Toggle as={Card.Header} eventKey="0" onClick={() => this.handleShowTableResult('openPayMethod')}>
                                <h3 className="heading-middle-line">Phương thức thanh toán</h3>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <div className="section-phuongthuc-wrapper">
                                    <Form.Group controlId="cashCheckbox">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" 
                                                   className="custom-control-input" id="cashCheck"
                                                   name="cashCheck"
                                                   checked={this.state.cashCheck}
                                                   onChange={this.handleInputChange} 
                                            />
                                            <label className="custom-control-label" htmlFor="cashCheck">Tiền mặt:</label>
                                        </div>                                        
                                        <div className="field-input">
                                            <span>Số tiền:</span>
                                            {isEditing ? (
                                                <div className="field-input">
                                                    <span>Số tiền</span>
                                                    <Form.Control name="cashMethod" 
                                                        value={this.state.cashMethod}
                                                        onChange={this.handleInputChange}
                                                        onBlur={this.toggleEditing}
                                                        placeholder="10,000,000" type="number" />
                                                </div>
                                            ) : (
                                                <div className="field-input">
                                                    <span>Số tiền</span>
                                                    <Form.Control 
                                                        value={this.toCurrency(this.state.cashMethod)}
                                                        onFocus={this.toggleEditing}
                                                        placeholder="10,000,000" type="text" />
                                                </div>
                                            )}
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="group-card">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" 
                                                    className="custom-control-input" id="cardCheck"
                                                    name="cardCheck"
                                                    checked={this.state.cardCheck}
                                                    onChange={this.handleInputChange}/>
                                            <label className="custom-control-label" htmlFor="cardCheck">Thẻ:</label>
                                        </div> 
                                        {this.state.cardCheck && 
                                            <React.Fragment>
                                                <div className="field-input">
                                                    <span>Số tiền:</span>
                                                    {isEditing ? (
                                                        <div className="field-input">
                                                            <span>Số tiền</span>
                                                            <Form.Control name="cardMethod" 
                                                                value={this.state.cardMethod}
                                                                onChange={this.handleInputChange}
                                                                onBlur={this.toggleEditing}
                                                                placeholder="10,000,000" type="number" />
                                                        </div>
                                                    ) : (
                                                        <div className="field-input">
                                                            <span>Số tiền</span>
                                                            <Form.Control 
                                                                value={this.toCurrency(this.state.cardMethod)}
                                                                onFocus={this.toggleEditing}
                                                                placeholder="10,000,000" type="text" />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="field-input select">
                                                    <span>Ngân hàng:</span>
                                                    <Form.Control as="select"  name="cardBank" value={this.state.cardBank} onChange={this.handleInputChange}>
                                                        <option value="Viettel QR Code">Viettel QR Code</option>
                                                        <option value="VNPT QR Code">VNPT QR Code</option>
                                                        <option value="FPT QR Code">FPT QR Code</option>
                                                        <option value="Viettel QR Code">Viettel QR Code</option>
                                                        <option value="Viettel QR Code">Viettel QR Code</option>
                                                    </Form.Control>
                                                </div> 
                                            </React.Fragment>
                                        }
                                    </Form.Group>
                                    <Form.Group className="group-transfer">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" 
                                                className="custom-control-input" id="transferCheck"
                                                name="transferCheck"
                                                checked={this.state.transferCheck}
                                                onChange={this.handleInputChange}/>
                                            <label className="custom-control-label" htmlFor="transferCheck">Chuyển khoản:</label>
                                        </div>
                                        {this.state.transferCheck && 
                                            <React.Fragment>
                                                <div className="field-input">
                                                    <span>Số tiền:</span>
                                                    {isEditing ? (
                                                        <div className="field-input">
                                                            <span>Số tiền</span>
                                                            <Form.Control name="transferMethod" 
                                                                value={this.state.transferMethod}
                                                                onChange={this.handleInputChange}
                                                                onBlur={this.toggleEditing}
                                                                placeholder="10,000,000" type="number" />
                                                        </div>
                                                    ) : (
                                                        <div className="field-input">
                                                            <span>Số tiền</span>
                                                            <Form.Control 
                                                                value={this.toCurrency(this.state.transferMethod)}
                                                                onFocus={this.toggleEditing}
                                                                placeholder="10,000,000" type="text" />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="field-input select">
                                                    <span>Ngân hàng:</span>
                                                    <Form.Control as="select"  name="transferBank" value={this.state.transferBank} onChange={this.handleInputChange}>
                                                        <option value="VCB Biên Hòa">VCB Biên Hòa</option>
                                                        <option value="BIDV HCM">BIDV HCM</option>
                                                        <option value="Vietin Bank">Vietin Bank</option>
                                                        <option value="ACB">ACB</option>
                                                        <option value="Viettel QR Code">Viettel QR Code</option>
                                                    </Form.Control>
                                                </div>
                                            </React.Fragment>
                                        }
                                    </Form.Group>
                                </div>
                            </Accordion.Collapse>
                                {isShowMethodTable && 
                                    <React.Fragment>
                                        <div className="table-result">
                                            <div className="result-row">
                                                <div className="result-col label">
                                                    Tiền mặt
                                                </div>
                                                <div className="result-col">
                                                    
                                                </div>
                                                <div className="result-col number">
                                                    <p className="head">{this.state.cashMethod}</p>
                                                </div>
                                            </div>
                                            <div className="result-row">
                                                <div className="result-col label">
                                                    Thẻ
                                                </div>
                                                <div className="result-col">
                                                    <p className="head">{this.state.cardBank}</p>
                                                </div>
                                                <div className="result-col number">
                                                    <p className="head">{this.state.cardMethod}</p>
                                                </div>
                                            </div>
                                            <div className="result-row">
                                                <div className="result-col label">
                                                    Chuyển khoản
                                                </div>
                                                <div className="result-col">
                                                    <p className="head">{this.state.transferBank}</p>
                                                </div>
                                                <div className="result-col number">
                                                    <p className="head">{this.state.transferMethod}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                }
                        </section>

                        <section id="section-insurance">
                            <Accordion.Toggle as={Card.Header} eventKey="1" onClick={() => this.handleShowTableResult('openInsuranceMethod')}>
                                <h3 className="heading-middle-line">Bảo hiểm và công ty liên kết</h3>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <section className="section-insurance-wrapper">
                                    <Form.Group className="insurance">
                                        <div className="custom-control custom-checkbox">
                                            <input  type="checkbox"
                                                   className="custom-control-input" id="insuranceCheck"
                                                   name="insuranceCheck"
                                                   checked={this.state.insuranceCheck}
                                                   onChange={this.handleInputChange} 
                                            />
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
                                                    <Form.Control as="select" name="insuranceService" value={this.state.insuranceService} onChange={this.handleInputChange}>
                                                        <option value="Bàn chải kẽ chỉnh nha">Bàn chải kẽ chỉnh nha</option>
                                                        <option value="Bàn chải kẽ">Bàn chải kẽ </option>
                                                        <option value="Kem ống">Kem ống</option>
                                                        <option value="Kem chải">Kem chải</option>
                                                        <option value="Bàn chải kẽ chỉnh răng">Bàn chải kẽ chỉnh răng</option>
                                                    </Form.Control>
                                                </div>
                                                <div className="field-input">
                                                    <span>Số tiền</span>
                                                    {isEditing ? (
                                                        <div className="field-input">
                                                            <span>Số tiền</span>
                                                            <Form.Control name="insuranceServicePrice" 
                                                                value={this.state.insuranceServicePrice}
                                                                onChange={this.handleInputChange}
                                                                onBlur={this.toggleEditing}
                                                                placeholder="10,000,000" type="number" />
                                                        </div>
                                                    ) : (
                                                        <div className="field-input">
                                                            <span>Số tiền</span>
                                                            <Form.Control 
                                                                value={this.toCurrency(this.state.insuranceServicePrice)}
                                                                onFocus={this.toggleEditing}
                                                                placeholder="10,000,000" type="text" />
                                                        </div>
                                                    )}                                                
                                                </div>
                                            </div>
                                            <div className="form-group-row">
                                                <div className="field-input select">
                                                    <span>Dịch vụ:</span>
                                                    <Form.Control as="select" name="insuranceServiceExtra" value={this.state.insuranceServiceExtra} onChange={this.handleInputChange}>
                                                        <option value="Nhổ răng gây tê - R34">Nhổ răng gây tê - R34</option>
                                                        <option value="Bàn chải kẽ">Bàn chải kẽ </option>
                                                        <option value="Cạo vôi răng">Cạo vôi răng</option>
                                                        <option value="Tẩy trắng răng">Tẩy trắng răng</option>
                                                        <option value="Bàn chải kẽ chỉnh răng">Bàn chải kẽ chỉnh răng</option>
                                                    </Form.Control>
                                                </div>
                                                <div className="field-input">
                                                    <span>Số tiền</span>
                                                    {isEditing ? (
                                                        <div className="field-input">
                                                            <span>Số tiền</span>
                                                            <Form.Control name="insuranceServiceExtraPrice" 
                                                                value={this.state.insuranceServiceExtraPrice}
                                                                onChange={this.handleInputChange}
                                                                onBlur={this.toggleEditing}
                                                                placeholder="10,000,000" type="number" />
                                                        </div>
                                                    ) : (
                                                        <div className="field-input">
                                                            <span>Số tiền</span>
                                                            <Form.Control 
                                                                value={this.toCurrency(this.state.insuranceServiceExtraPrice)}
                                                                onFocus={this.toggleEditing}
                                                                placeholder="10,000,000" type="text" />
                                                        </div>
                                                    )}   
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
                                            <input  type="checkbox"
                                                   className="custom-control-input" id="companyCheck"
                                                   name="companyCheck"
                                                   checked={this.state.companyCheck}
                                                   onChange={this.handleInputChange} 
                                            />
                                            <label className="custom-control-label" htmlFor="companyCheck">Công ty</label>
                                        </div> 
                                    </Form.Group>
                                </section>
                            </Accordion.Collapse>
                            {isShowInsuranceTable && 
                                <React.Fragment>
                                    <div className="table-result">
                                        <div className="result-row">
                                            <div className="result-col label">
                                                Bảo hiểm
                                            </div>
                                            <div className="result-col">
                                                <p className="head">{this.state.insurance}</p>
                                                <p className="sub">{this.state.insuranceService}</p>
                                                <p className="sub">{this.state.insuranceServiceExtra}</p>
                                            </div>
                                            <div className="result-col number">
                                                <p className="head">2,000,000</p>
                                                <p className="sub">{this.state.insuranceServicePrice}</p>
                                                <p className="sub">{this.state.insuranceServiceExtraPrice}</p>
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
                                </React.Fragment>
                            }
                        </section>
                        </Accordion>
                        <section id="ghichu">
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Ghi chú</Form.Label>
                            <Form.Control as="textarea" rows="3" 
                                    name="note"
                                    value={this.state.note}
                                    onChange={this.handleInputChange}/>
                        </Form.Group>
                        </section>
                    </section> 
                    ) :
                    (<section id="phieuthu-step2">
                            <div className="table-result">
                                <div className="result-row">
                                    <div className="result-col label">
                                        <p className="sub">Ghi chú</p>
                                        <p>{this.state.node}</p>
                                    </div>
                                    <div className="result-col number">
                                        <p className="sub">Khách thanh toán</p>
                                        <p className="head">
                                            {this.toCurrency(this.state.totalMoneyPay)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <h3 className="heading-middle-line">Phương thức thanh toán</h3>
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
                            <h3 className="heading-middle-line">Bảo hiểm và công ty liên kết</h3>
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
                                <Button className="btn-submit" type="button" onClick={this.handleConfirm}>Xác nhận</Button>
                            </Modal.Footer>
                        )}
            </Form>
            </Modal>

        );
    }
}
