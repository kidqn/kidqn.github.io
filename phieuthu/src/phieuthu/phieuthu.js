import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

export default class PhieuThuPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openPayMethod: true,
            openInsuranceMethod: false,
            totalMoneyPay: 45000000,
            moneyPay: '',
            cashCheck: false,
            cashMethod: null,
            cardCheck: false,
            cardMethod: null,
            cardBank: '',
            transferCheck: false,
            transferMethod: null,
            transferBank: '',
            theKIMCode: '',
            theKIMPIN:'',
            restMoneyPay: '',
            insurance: '',
            insuranceCheck: false,
            insuranceService: '',
            insuranceServicePrice: null,
            insuranceServicePayMoney: null,
            companyCheck: false,
            company: '',
            companyService: '',
            companyServicePrice: null,
            companyServicePayMoney: null,
            keynote: '',
            isConfirm: false,
            validated: false,
            validatedRestMoney: true
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleShowTableResult = this.handleShowTableResult.bind(this);
        this.calcRestMoney = this.calcRestMoney.bind(this);
      }

    handleInputChange(event, type) {
        const target = event.target;
        let value =  target.value;
        if(target.type === 'checkbox') {
            value = target.checked;
        }
        if(target.type === 'number') {
            value = parseInt(target.value)
        }
        if(type && type ==='currency') {
            value = this.toCurrency(value)
        }
        const name = target.name;

        this.setState({
            [name]: value 
        }, () => {

        });
    }

    handleSubmit(event) {
        console.log('Note: ' + this.state.keynote);
        console.log('Cash method: ' + this.state.cashMethod);
        console.log('Card: ' + this.state.cardMethod , this.state.cardBank);
        console.log('Transfer: ' + this.state.transferMethod , this.state.transferBank);
        event.preventDefault();
        console.log('Tao phieu thu here');
    }
    handleConfirm(event) {
        event.preventDefault();
        event.stopPropagation();
        if(!this.state.isConfirm) {
            // if being in step 1
            const form = event.currentTarget;
            console.log('form status', form.checkValidity());
            if (form.checkValidity() === false || !this.state.validateRestMoney) {
                this.setState({ 
                    validated: true,
                });
            } else {
                this.setState({
                    validated: true,
                    isConfirm: !this.state.isConfirm,
                    openPayMethod: true,
                    openInsuranceMethod: false
                });
            }

        } else {
            this.setState({
                isConfirm: !this.state.isConfirm,
                openPayMethod: true,
                openInsuranceMethod: false
            });
        }

    }

    handleShowTableResult(key) {
        if( key === 'openPayMethod') {
            this.setState({
                openPayMethod: !this.state.openPayMethod,
                openInsuranceMethod: this.state.openPayMethod ? this.state.openInsuranceMethod :this.state.openPayMethod
            })
        }
        if( key === 'openInsuranceMethod') {
            this.setState({
                openInsuranceMethod: !this.state.openInsuranceMethod,
                openPayMethod: this.state.openInsuranceMethod ? this.state.openPayMethod :this.state.openInsuranceMethod
            })
        }
    }

    toCurrency(inputNumber) {
        const temp = '' + inputNumber;
        const formatter = temp.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
        return formatter;
    }
    convertCurrencyToNumber(currency) {
        if(!currency) {
            return 0;
        }
        return Number(currency.replace(/[^0-9\.-]+/g,""));
    }
    calcRestMoney() {
        const moneyPay = this.state.moneyPay ? this.convertCurrencyToNumber(this.state.moneyPay) : 0;
        const cashMethod = this.state.cashMethod ? this.convertCurrencyToNumber(this.state.cashMethod) : 0;
        const cardMethod = this.state.cardMethod ? this.convertCurrencyToNumber(this.state.cardMethod) : 0;
        const transferMethod = this.state.transferMethod ? this.convertCurrencyToNumber(this.state.transferMethod) : 0;
        const insuranceServicePrice = this.state.insuranceServicePrice ? this.convertCurrencyToNumber(this.state.insuranceServicePrice) : 0;
        const companyServicePrice = this.state.companyServicePrice ? this.convertCurrencyToNumber(this.state.companyServicePrice) : 0;
        const newRestMoney = moneyPay - (cashMethod + cardMethod + transferMethod + insuranceServicePrice + companyServicePrice);
        const newValidateRestMoney = newRestMoney < 0 ? false : true;

        this.setState({
            restMoneyPay: newValidateRestMoney ? newRestMoney : 0,
            validatedRestMoney: newValidateRestMoney
        });
    }

    render() {
        const { validated } = this.state;
        const isShowMethodTable = !this.state.openPayMethod && (this.state.cashCheck || this.state.cardCheck || this.state.transferCheck);
        const isShowInsuranceTable = !this.state.openInsuranceMethod && (this.state.insuranceCheck || this.state.companyCheck);

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
                validated={validated}
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
                    {!this.state.isConfirm ? (
                    <section id="phieuthu-step1">

                        <section id="section-thanh-toan">
                            <Form.Group>
                                <Form.Label className="phieuthu-label">Khách thanh toán</Form.Label>
                                    <div className="field-input required">
                                        <span>Số tiền</span>
                                        <Form.Control name="moneyPay"
                                            value={this.state.moneyPay}
                                            onChange={(e) => {this.handleInputChange(e, 'currency')} }
                                            onBlur={this.calcRestMoney}
                                            required
                                            placeholder="1,000,000" type="text" />
                                        <Form.Control.Feedback type="invalid">
                                            Điền thông tin được yêu cầu
                                        </Form.Control.Feedback>
                                    </div>
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
                                            <label className="custom-control-label" htmlFor="cashCheck">Tiền mặt</label>
                                        </div>                                        
                                        {this.state.cashCheck && 
                                            <React.Fragment>
                                                <div className="field-input required">
                                                    <span>Số tiền:</span>
                                                    <Form.Control name="cashMethod"
                                                        value={this.state.cashMethod}
                                                        onChange={(e) => {this.handleInputChange(e, 'currency')} }
                                                        onBlur={this.calcRestMoney}
                                                        required
                                                        placeholder="10,000,000" type="text" />
                                                    <Form.Control.Feedback type="invalid">
                                                        Điền thông tin được yêu cầu
                                                    </Form.Control.Feedback>
                                                </div>
                                            </React.Fragment>
                                        }
                                    </Form.Group>
                                    <Form.Group className="group-card">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" 
                                                    className="custom-control-input" id="cardCheck"
                                                    name="cardCheck"
                                                    checked={this.state.cardCheck}
                                                    onChange={this.handleInputChange}/>
                                            <label className="custom-control-label" htmlFor="cardCheck">Thẻ</label>
                                        </div> 
                                        {this.state.cardCheck && 
                                            <React.Fragment>
                                                <div className="field-input">
                                                    <span>Số tiền:</span>
                                                    <div className="field-input required">
                                                        <span>Số tiền</span>
                                                        <Form.Control name="cardMethod"
                                                            value={this.state.cardMethod}
                                                            onChange={(e) => {this.handleInputChange(e, 'currency')} }
                                                            onBlur={this.calcRestMoney}
                                                            required
                                                            placeholder="10,000,000" type="text" />
                                                        <Form.Control.Feedback type="invalid">
                                                            Điền thông tin được yêu cầu
                                                        </Form.Control.Feedback>
                                                    </div>
                                                </div>
                                                <div className="field-input select">
                                                    <span>Ngân hàng:</span>
                                                    <Form.Control as="select"  name="cardBank" 
                                                        defaultValue="Viettel QR Code"
                                                        value={this.state.cardBank} 
                                                        onChange={this.handleInputChange}>
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
                                            <label className="custom-control-label" htmlFor="transferCheck">Chuyển khoản</label>
                                        </div>
                                        {this.state.transferCheck && 
                                            <React.Fragment>
                                                <div className="field-input">
                                                    <span>Số tiền:</span>
                                                    <div className="field-input required">
                                                        <span>Số tiền</span>
                                                        <Form.Control name="transferMethod"
                                                            value={this.state.transferMethod}
                                                            onChange={(e) => {this.handleInputChange(e, 'currency')} }
                                                            onBlur={this.calcRestMoney}
                                                            required
                                                            placeholder="10,000,000" type="text" />
                                                        <Form.Control.Feedback type="invalid">
                                                            Điền thông tin được yêu cầu
                                                        </Form.Control.Feedback>
                                                    </div>
                                                </div>
                                                <div className="field-input select">
                                                    <span>Ngân hàng:</span>
                                                    <Form.Control as="select"  name="transferBank"
                                                        defaultValue="VCB Biên Hòa"
                                                         value={this.state.transferBank} 
                                                         onChange={this.handleInputChange}>
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
                                            {this.state.cashCheck && <div className="result-row">
                                                <div className="result-col label">
                                                    Tiền mặt
                                                </div>
                                                <div className="result-col">
                                                    
                                                </div>
                                                <div className="result-col number">
                                                    <p className="head">{this.toCurrency(this.state.cashMethod)}</p>
                                                </div>
                                            </div>
                                            }
                                            {this.state.cardCheck && <div className="result-row">
                                                <div className="result-col label">
                                                    Thẻ
                                                </div>
                                                <div className="result-col">
                                                    <p className="head">{this.state.cardBank}</p>
                                                </div>
                                                <div className="result-col number">
                                                    <p className="head">{this.toCurrency(this.state.cardMethod)}</p>
                                                </div>
                                            </div>
                                            }
                                            {this.state.transferCheck && <div className="result-row">
                                                <div className="result-col label">
                                                    Chuyển khoản
                                                </div>
                                                <div className="result-col">
                                                    <p className="head">{this.state.transferBank}</p>
                                                </div>
                                                <div className="result-col number">
                                                    <p className="head">{this.toCurrency(this.state.transferMethod)}</p>
                                                </div>
                                            </div>
                                            }
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
                                        {this.state.insuranceCheck && <div className="right-side">
                                            <div className="form-group-row">
                                                <div className="field-input select">
                                                    <span>Công ty:</span>
                                                    <Form.Control as="select" name="insurance" 
                                                        defaultValue="TNHH DV Nam Á"
                                                        value={this.state.insurance} 
                                                        onChange={this.handleInputChange}>
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
                                                    <Form.Control as="select" name="insuranceService" 
                                                        defaultValue="Bàn chải kẽ chỉnh nha"
                                                        value={this.state.insuranceService} 
                                                        onChange={this.handleInputChange}>
                                                        <option value="Bàn chải kẽ chỉnh nha">Bàn chải kẽ chỉnh nha</option>
                                                        <option value="Bàn chải kẽ">Bàn chải kẽ </option>
                                                        <option value="Kem ống">Kem ống</option>
                                                        <option value="Kem chải">Kem chải</option>
                                                        <option value="Bàn chải kẽ chỉnh răng">Bàn chải kẽ chỉnh răng</option>
                                                    </Form.Control>
                                                </div>
                                                <div className="field-input">
                                                    <span>Số tiền</span>
                                                    <div className="field-input required">
                                                        <span>Số tiền</span>
                                                        <Form.Control name="insuranceServicePrice"
                                                            value={this.state.insuranceServicePrice}
                                                            onChange={(e) => {this.handleInputChange(e, 'currency')} }
                                                            onBlur={this.calcRestMoney}
                                                            required
                                                            placeholder="10,000,000" type="text" />
                                                        <Form.Control.Feedback type="invalid">
                                                            Điền thông tin được yêu cầu
                                                        </Form.Control.Feedback>
                                                    </div>                                               
                                                </div>
                                                <i className="ic ic-remove"></i>
                                            </div>
                                            <div className="form-group-row">
                                                <a className="add-new-insurance"><i className="ic-add-new"></i>Thêm mới</a>
                                            </div>
                                        </div>
                                        }
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
                                        {this.state.companyCheck && <div className="right-side">
                                            <div className="form-group-row">
                                                <div className="field-input select">
                                                    <span>Công ty:</span>
                                                    <Form.Control as="select" name="company" 
                                                        defaultValue="TNHH DV Nam Á"
                                                        value={this.state.company} 
                                                        onChange={this.handleInputChange}>
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
                                                    <Form.Control as="select" name="companyService" 
                                                        defaultValue="Bàn chải kẽ chỉnh nha"
                                                        value={this.state.companyService} 
                                                        onChange={this.handleInputChange}>
                                                        <option value="Bàn chải kẽ chỉnh nha">Bàn chải kẽ chỉnh nha</option>
                                                        <option value="Bàn chải kẽ">Bàn chải kẽ </option>
                                                        <option value="Kem ống">Kem ống</option>
                                                        <option value="Kem chải">Kem chải</option>
                                                        <option value="Bàn chải kẽ chỉnh răng">Bàn chải kẽ chỉnh răng</option>
                                                    </Form.Control>
                                                </div>
                                                <div className="field-input">
                                                    <span>Số tiền</span>
                                                    <div className="field-input required">
                                                        <span>Số tiền</span>
                                                        <Form.Control name="companyServicePrice"
                                                            value={this.state.companyServicePrice}
                                                            onChange={(e) => {this.handleInputChange(e, 'currency')} }
                                                            onBlur={this.calcRestMoney}
                                                            required
                                                            placeholder="10,000,000" type="text" />
                                                        <Form.Control.Feedback type="invalid">
                                                            Điền thông tin được yêu cầu
                                                        </Form.Control.Feedback>
                                                    </div>                                               
                                                </div>
                                                <i className="ic ic-remove"></i>
                                            </div>
                                            <div className="form-group-row">
                                                <a className="add-new-insurance"><i className="ic-add-new"></i>Thêm mới</a>
                                            </div>
                                        </div>
                                        }
                                    </Form.Group>
                                    <Form.Group className="thekim" controlId="theKIMCheckbox">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" 
                                                   className="custom-control-input" id="theKIMCheck"
                                                   name="theKIMCheck"
                                                   checked={this.state.theKIMCheck}
                                                   onChange={this.handleInputChange} 
                                            />
                                            <label className="custom-control-label" htmlFor="theKIMCheck">Thẻ KIM</label>
                                        </div>                                        
                                        {this.state.theKIMCheck && 
                                            <React.Fragment>
                                                <div className="field-input required no-label thekim-code">
                                                    <Form.Control 
                                                        name="theKIMCode"
                                                        value={this.state.theKIMCode}
                                                        onChange={this.handleInputChange}
                                                        required
                                                        placeholder="Nhập mã thẻ" type="text" />
                                                </div>
                                                <div className="field-input no-label required thekim-pin">
                                                    <Form.Control 
                                                        name="theKIMPIN"
                                                        value={this.state.theKIMPIN}
                                                        onChange={this.handleInputChange}
                                                        required
                                                        placeholder="Mã PIN" type="text" />
                                                </div>
                                                <div className="field-input thekim-btn">
                                                    <button className="btn btn-azure">KIỂM TRA MÃ PIN</button>
                                                </div>
                                            </React.Fragment>
                                        }
                                    </Form.Group>
                                </section>
                            </Accordion.Collapse>
                            {isShowInsuranceTable && 
                                <React.Fragment>
                                    <div className="table-result">
                                        {this.state.insuranceCheck && <div className="result-row">
                                            <div className="result-col label">
                                                Bảo hiểm
                                            </div>
                                            <div className="result-col">
                                                <p className="head">{this.state.insurance}</p>
                                                <p className="sub">{this.state.insuranceService}</p>
                                            </div>
                                            <div className="result-col number">
                                                <p className="head">{this.toCurrency(this.state.insuranceServicePayMoney)}</p>
                                                <p className="sub">{this.toCurrency(this.state.insuranceServicePrice)}</p>
                                            </div>
                                        </div>}
                                        {this.state.companyCheck && <div className="result-row">
                                            <div className="result-col label">
                                                Công ty
                                            </div>
                                            <div className="result-col">
                                                <p className="head">{this.state.company}</p>
                                                <p className="sub">{this.state.companyService}</p>
                                            </div>
                                            <div className="result-col number">
                                                <p className="head">{this.toCurrency(this.state.companyServicePayMoney)}</p>
                                                <p className="sub">{this.toCurrency(this.state.companyServicePrice)}</p>
                                            </div>
                                        </div>
                                        }
                                    </div>
                                </React.Fragment>
                            }
                        </section>
                        </Accordion>
                        <section id="ghichu">
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Ghi chú</Form.Label>
                                <Form.Control as="textarea" rows="3" 
                                        name="keynote"
                                        value={this.state.keynote}
                                        onChange={this.handleInputChange}/>
                            </Form.Group>
                        </section>
                        <section id="phieuthu-errors">
                            <React.Fragment>
                                {!this.state.validatedRestMoney &&  <Form.Control.Feedback type="invalid">
                                    Số tiền nhập vượt quá số tiền còn lại
                                    </Form.Control.Feedback>
                                }
                            </React.Fragment>
                        </section>
                    </section> 
                    ) :
                    (<section id="phieuthu-step2">
                            <div className="table-result">
                                <div className="result-row">
                                    <div className="result-col label">
                                        <p className="sub">Ghi chú</p>
                                        <p>{this.state.keynote}</p>
                                    </div>
                                    <div className="result-col number">
                                        <p className="sub">Khách thanh toán</p>
                                        <p className="head">
                                            {this.toCurrency(this.state.moneyPay)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="heading-middle-line">Phương thức thanh toán</h3>
                            <div className="table-result">
                                {this.state.cashCheck && <div className="result-row">
                                    <div className="result-col label">
                                        Tiền mặt
                                    </div>
                                    <div className="result-col">
                                        
                                    </div>
                                    <div className="result-col number">
                                        <p className="head">{this.toCurrency(this.state.cashMethod)}</p>
                                    </div>
                                </div>
                                }
                                {this.state.cardCheck && <div className="result-row">
                                    <div className="result-col label">
                                        Thẻ
                                    </div>
                                    <div className="result-col">
                                        <p className="head">{this.state.cardBank}</p>
                                    </div>
                                    <div className="result-col number">
                                        <p className="head">{this.toCurrency(this.state.cardMethod)}</p>
                                    </div>
                                </div>
                                }
                                {this.state.transferCheck && <div className="result-row">
                                    <div className="result-col label">
                                        Chuyển khoản
                                    </div>
                                    <div className="result-col">
                                        <p className="head">{this.state.transferBank}</p>
                                    </div>
                                    <div className="result-col number">
                                        <p className="head">{this.toCurrency(this.state.transferMethod)}</p>
                                    </div>
                                </div>
                                }
                            </div>

                            <h3 className="heading-middle-line">Bảo hiểm và công ty liên kết</h3>
                            <div className="table-result">
                            {this.state.insuranceCheck && <div className="result-row">
                                <div className="result-col label">
                                    Bảo hiểm
                                </div>
                                <div className="result-col">
                                    <p className="head">{this.state.insurance}</p>
                                    <p className="sub">{this.state.insuranceService}</p>
                                </div>
                                <div className="result-col number">
                                    <p className="head">{this.toCurrency(this.state.insuranceServicePrice)}</p>
                                    <p className="sub">{this.toCurrency(this.state.insuranceServicePrice)}</p>
                                </div>
                            </div>}
                            {this.state.companyCheck && <div className="result-row">
                                <div className="result-col label">
                                    Công ty
                                </div>
                                <div className="result-col">
                                    <p className="head">{this.state.company}</p>
                                    <p className="sub">{this.state.companyService}</p>
                                </div>
                                <div className="result-col number">
                                    <p className="head">{this.toCurrency(this.state.companyServicePrice)}</p>
                                    <p className="sub">{this.toCurrency(this.state.companyServicePrice)}</p>
                                </div>
                            </div>
                            }
                        </div>
                        </section>
                    )}
                    </Modal.Body>
                        {this.state.isConfirm ?
                        (
                            <Modal.Footer>
                                <Button className="btn-close" onClick={this.handleConfirm}>Quay lại</Button>
                                <Button className="btn-submit" type="button" onClick={this.onSubmit}>Tạo phiếu thu</Button>
                            </Modal.Footer>                       
                        ) : (
                            <Modal.Footer>
                                <Button className="btn-close" onClick={this.props.onHide}>Thoát</Button>
                                <Button className="btn-submit btn-azure" type="submit" >Xác nhận</Button>
                            </Modal.Footer>
                        )}
            </Form>
            </Modal>

        );
    }
}
