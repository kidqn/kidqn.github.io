(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(10),s=t.n(l),r=(t(59),t(21)),i=t(22),o=t(24),h=t(23),m=t(25),u=t(53),d=t(11),p=t(13),E=t.n(p),v=t(12),C=t.n(v),N=t(2),y=t.n(N),k=(t(60),t(16)),b=t.n(k),g=t(30),f=t.n(g),M=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(h.a)(a).call(this,e))).state={openPayMethod:!0,openInsuranceMethod:!1,totalMoneyPay:45e6,moneyPay:"",cashCheck:!1,cashMethod:null,cardCheck:!1,cardMethod:null,cardBank:"",transferCheck:!1,transferMethod:null,transferBank:"",theKIMCode:"",theKIMPIN:"",restMoneyPay:"",insurance:"",insuranceCheck:!1,insuranceService:"",insuranceServicePrice:null,insuranceServicePayMoney:null,companyCheck:!1,company:"",companyService:"",companyServicePrice:null,companyServicePayMoney:null,keynote:"",isConfirm:!1,validated:!1},t.handleInputChange=t.handleInputChange.bind(Object(d.a)(t)),t.handleConfirm=t.handleConfirm.bind(Object(d.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(d.a)(t)),t.handleShowTableResult=t.handleShowTableResult.bind(Object(d.a)(t)),t.calcRestMoney=t.calcRestMoney.bind(Object(d.a)(t)),t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"handleInputChange",value:function(e,a){var t=e.target,n=t.value;"checkbox"===t.type&&(n=t.checked),"number"===t.type&&(n=parseInt(t.value)),a&&"currency"===a&&(n=this.toCurrency(n));var c=t.name;this.setState(Object(u.a)({},c,n),function(){})}},{key:"handleSubmit",value:function(e){console.log("Note: "+this.state.keynote),console.log("Cash method: "+this.state.cashMethod),console.log("Card: "+this.state.cardMethod,this.state.cardBank),console.log("Transfer: "+this.state.transferMethod,this.state.transferBank),e.preventDefault(),console.log("Tao phieu thu here")}},{key:"handleConfirm",value:function(e){if(e.preventDefault(),e.stopPropagation(),this.state.isConfirm)this.setState({isConfirm:!this.state.isConfirm,openPayMethod:!0,openInsuranceMethod:!1});else{var a=e.currentTarget;console.log("form status",a.checkValidity()),!1===a.checkValidity()?this.setState({validated:!0}):this.setState({validated:!0,isConfirm:!this.state.isConfirm,openPayMethod:!0,openInsuranceMethod:!1})}}},{key:"handleShowTableResult",value:function(e){"openPayMethod"===e&&this.setState({openPayMethod:!this.state.openPayMethod,openInsuranceMethod:this.state.openPayMethod?this.state.openInsuranceMethod:this.state.openPayMethod}),"openInsuranceMethod"===e&&this.setState({openInsuranceMethod:!this.state.openInsuranceMethod,openPayMethod:this.state.openInsuranceMethod?this.state.openPayMethod:this.state.openInsuranceMethod})}},{key:"toCurrency",value:function(e){return(""+e).replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"convertCurrencyToNumber",value:function(e){return e?Number(e.replace(/[^0-9\.-]+/g,"")):0}},{key:"calcRestMoney",value:function(){var e=(this.state.moneyPay?this.convertCurrencyToNumber(this.state.moneyPay):0)-((this.state.cashMethod?this.convertCurrencyToNumber(this.state.cashMethod):0)+(this.state.cardMethod?this.convertCurrencyToNumber(this.state.cardMethod):0)+(this.state.transferMethod?this.convertCurrencyToNumber(this.state.transferMethod):0)+(this.state.insuranceServicePrice?this.convertCurrencyToNumber(this.state.insuranceServicePrice):0)+(this.state.companyServicePrice?this.convertCurrencyToNumber(this.state.companyServicePrice):0));this.setState({restMoneyPay:e})}},{key:"render",value:function(){var e=this,a=this.state.validated,t=!this.state.openPayMethod&&(this.state.cashCheck||this.state.cardCheck||this.state.transferCheck),n=!this.state.openInsuranceMethod&&(this.state.insuranceCheck||this.state.companyCheck);return c.a.createElement(E.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"phieuthu"}),c.a.createElement(y.a,{noValidate:!0,validated:a,onSubmit:this.handleConfirm},c.a.createElement(E.a.Header,{className:"phieuthu-header",closeButton:!0},c.a.createElement(E.a.Title,null,c.a.createElement("h2",{className:"phieuthu-title"},"Phi\u1ebfu Thu")),c.a.createElement("div",{className:"right-side"},c.a.createElement("div",{className:"chi-nhanh"},c.a.createElement("p",null,"Chi nh\xe1nh"),c.a.createElement("h4",null,"31NDC.001")),c.a.createElement("div",{className:"thanh-toan"},c.a.createElement("p",null,"C\u1ea7n thanh to\xe1n"),c.a.createElement("h4",null,this.toCurrency(this.state.totalMoneyPay))))),c.a.createElement(E.a.Body,{className:"phieuthu-body"},this.state.isConfirm?c.a.createElement("section",{id:"phieuthu-step2"},c.a.createElement("div",{className:"table-result"},c.a.createElement("div",{className:"result-row"},c.a.createElement("div",{className:"result-col label"},c.a.createElement("p",{className:"sub"},"Ghi ch\xfa"),c.a.createElement("p",null,this.state.keynote)),c.a.createElement("div",{className:"result-col number"},c.a.createElement("p",{className:"sub"},"Kh\xe1ch thanh to\xe1n"),c.a.createElement("p",{className:"head"},this.toCurrency(this.state.moneyPay))))),c.a.createElement("h3",{className:"heading-middle-line"},"Ph\u01b0\u01a1ng th\u1ee9c thanh to\xe1n"),c.a.createElement("div",{className:"table-result"},this.state.cashCheck&&c.a.createElement("div",{className:"result-row"},c.a.createElement("div",{className:"result-col label"},"Ti\u1ec1n m\u1eb7t"),c.a.createElement("div",{className:"result-col"}),c.a.createElement("div",{className:"result-col number"},c.a.createElement("p",{className:"head"},this.toCurrency(this.state.cashMethod)))),this.state.cardCheck&&c.a.createElement("div",{className:"result-row"},c.a.createElement("div",{className:"result-col label"},"Th\u1ebb"),c.a.createElement("div",{className:"result-col"},c.a.createElement("p",{className:"head"},this.state.cardBank)),c.a.createElement("div",{className:"result-col number"},c.a.createElement("p",{className:"head"},this.toCurrency(this.state.cardMethod)))),this.state.transferCheck&&c.a.createElement("div",{className:"result-row"},c.a.createElement("div",{className:"result-col label"},"Chuy\u1ec3n kho\u1ea3n"),c.a.createElement("div",{className:"result-col"},c.a.createElement("p",{className:"head"},this.state.transferBank)),c.a.createElement("div",{className:"result-col number"},c.a.createElement("p",{className:"head"},this.toCurrency(this.state.transferMethod))))),c.a.createElement("h3",{className:"heading-middle-line"},"B\u1ea3o hi\u1ec3m v\xe0 c\xf4ng ty li\xean k\u1ebft"),c.a.createElement("div",{className:"table-result"},this.state.insuranceCheck&&c.a.createElement("div",{className:"result-row"},c.a.createElement("div",{className:"result-col label"},"B\u1ea3o hi\u1ec3m"),c.a.createElement("div",{className:"result-col"},c.a.createElement("p",{className:"head"},this.state.insurance),c.a.createElement("p",{className:"sub"},this.state.insuranceService)),c.a.createElement("div",{className:"result-col number"},c.a.createElement("p",{className:"head"},this.toCurrency(this.state.insuranceServicePrice)),c.a.createElement("p",{className:"sub"},this.toCurrency(this.state.insuranceServicePrice)))),this.state.companyCheck&&c.a.createElement("div",{className:"result-row"},c.a.createElement("div",{className:"result-col label"},"C\xf4ng ty"),c.a.createElement("div",{className:"result-col"},c.a.createElement("p",{className:"head"},this.state.company),c.a.createElement("p",{className:"sub"},this.state.companyService)),c.a.createElement("div",{className:"result-col number"},c.a.createElement("p",{className:"head"},this.toCurrency(this.state.companyServicePrice)),c.a.createElement("p",{className:"sub"},this.toCurrency(this.state.companyServicePrice)))))):c.a.createElement("section",{id:"phieuthu-step1"},c.a.createElement("section",{id:"section-thanh-toan"},c.a.createElement(y.a.Group,null,c.a.createElement(y.a.Label,{className:"phieuthu-label"},"Kh\xe1ch thanh to\xe1n"),c.a.createElement("div",{className:"field-input"},c.a.createElement("span",null,"S\u1ed1 ti\u1ec1n"),c.a.createElement(y.a.Control,{name:"moneyPay",value:this.state.moneyPay,onChange:function(a){e.handleInputChange(a,"currency")},onBlur:this.calcRestMoney,required:!0,placeholder:"1,000,000",type:"text"}),c.a.createElement(y.a.Control.Feedback,{type:"invalid"},"\u0110i\u1ec1n th\xf4ng tin \u0111\u01b0\u1ee3c y\xeau c\u1ea7u")),c.a.createElement("div",{className:"field-input rest-money"},c.a.createElement("span",null,"C\xf2n l\u1ea1i"),c.a.createElement(y.a.Control,{value:this.toCurrency(this.state.restMoneyPay),placeholder:"1,000,000",type:"text",disabled:!0})))),c.a.createElement(b.a,{className:"phieuthu-info",defaultActiveKey:"0"},c.a.createElement("section",{id:"section-phuongthuc"},c.a.createElement(b.a.Toggle,{as:f.a.Header,eventKey:"0",onClick:function(){return e.handleShowTableResult("openPayMethod")}},c.a.createElement("h3",{className:"heading-middle-line"},"Ph\u01b0\u01a1ng th\u1ee9c thanh to\xe1n")),c.a.createElement(b.a.Collapse,{eventKey:"0"},c.a.createElement("div",{className:"section-phuongthuc-wrapper"},c.a.createElement(y.a.Group,{controlId:"cashCheckbox"},c.a.createElement("div",{className:"custom-control custom-checkbox"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"cashCheck",name:"cashCheck",checked:this.state.cashCheck,onChange:this.handleInputChange}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"cashCheck"},"Ti\xea\u0300n m\u0103\u0323t")),this.state.cashCheck&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"field-input"},c.a.createElement("span",null,"S\u1ed1 ti\u1ec1n:"),c.a.createElement(y.a.Control,{name:"cashMethod",value:this.state.cashMethod,onChange:function(a){e.handleInputChange(a,"currency")},onBlur:this.calcRestMoney,required:!0,placeholder:"10,000,000",type:"text"}),c.a.createElement(y.a.Control.Feedback,{type:"invalid"},"\u0110i\u1ec1n th\xf4ng tin \u0111\u01b0\u1ee3c y\xeau c\u1ea7u")))),c.a.createElement(y.a.Group,{className:"group-card"},c.a.createElement("div",{className:"custom-control custom-checkbox"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"cardCheck",name:"cardCheck",checked:this.state.cardCheck,onChange:this.handleInputChange}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"cardCheck"},"The\u0309")),this.state.cardCheck&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"field-input"},c.a.createElement("span",null,"S\u1ed1 ti\u1ec1n:"),c.a.createElement("div",{className:"field-input"},c.a.createElement("span",null,"S\u1ed1 ti\u1ec1n"),c.a.createElement(y.a.Control,{name:"cardMethod",value:this.state.cardMethod,onChange:function(a){e.handleInputChange(a,"currency")},onBlur:this.calcRestMoney,required:!0,placeholder:"10,000,000",type:"text"}),c.a.createElement(y.a.Control.Feedback,{type:"invalid"},"\u0110i\u1ec1n th\xf4ng tin \u0111\u01b0\u1ee3c y\xeau c\u1ea7u"))),c.a.createElement("div",{className:"field-input select"},c.a.createElement("span",null,"Ng\xe2n ha\u0300ng:"),c.a.createElement(y.a.Control,{as:"select",name:"cardBank",value:this.state.cardBank,onChange:this.handleInputChange},c.a.createElement("option",{value:"Viettel QR Code"},"Viettel QR Code"),c.a.createElement("option",{value:"VNPT QR Code"},"VNPT QR Code"),c.a.createElement("option",{value:"FPT QR Code"},"FPT QR Code"),c.a.createElement("option",{value:"Viettel QR Code"},"Viettel QR Code"),c.a.createElement("option",{value:"Viettel QR Code"},"Viettel QR Code"))))),c.a.createElement(y.a.Group,{className:"group-transfer"},c.a.createElement("div",{className:"custom-control custom-checkbox"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"transferCheck",name:"transferCheck",checked:this.state.transferCheck,onChange:this.handleInputChange}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"transferCheck"},"Chuy\xea\u0309n khoa\u0309n")),this.state.transferCheck&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"field-input"},c.a.createElement("span",null,"S\u1ed1 ti\u1ec1n:"),c.a.createElement("div",{className:"field-input"},c.a.createElement("span",null,"S\u1ed1 ti\u1ec1n"),c.a.createElement(y.a.Control,{name:"transferMethod",value:this.state.transferMethod,onChange:function(a){e.handleInputChange(a,"currency")},onBlur:this.calcRestMoney,required:!0,placeholder:"10,000,000",type:"text"}),c.a.createElement(y.a.Control.Feedback,{type:"invalid"},"\u0110i\u1ec1n th\xf4ng tin \u0111\u01b0\u1ee3c y\xeau c\u1ea7u"))),c.a.createElement("div",{className:"field-input select"},c.a.createElement("span",null,"Ng\xe2n ha\u0300ng:"),c.a.createElement(y.a.Control,{as:"select",name:"transferBank",value:this.state.transferBank,onChange:this.handleInputChange},c.a.createElement("option",{value:"VCB Bi\xean Ho\u0300a"},"VCB Bi\xean Ho\u0300a"),c.a.createElement("option",{value:"BIDV HCM"},"BIDV HCM"),c.a.createElement("option",{value:"Vietin Bank"},"Vietin Bank"),c.a.createElement("option",{value:"ACB"},"ACB"),c.a.createElement("option",{value:"Viettel QR Code"},"Viettel QR Code"))))))),t&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"table-result"},this.state.cashCheck&&c.a.createElement("div",{className:"result-row"},c.a.createElement("div",{className:"result-col label"},"Ti\u1ec1n m\u1eb7t"),c.a.createElement("div",{className:"result-col"}),c.a.createElement("div",{className:"result-col number"},c.a.createElement("p",{className:"head"},this.toCurrency(this.state.cashMethod)))),this.state.cardCheck&&c.a.createElement("div",{className:"result-row"},c.a.createElement("div",{className:"result-col label"},"Th\u1ebb"),c.a.createElement("div",{className:"result-col"},c.a.createElement("p",{className:"head"},this.state.cardBank)),c.a.createElement("div",{className:"result-col number"},c.a.createElement("p",{className:"head"},this.toCurrency(this.state.cardMethod)))),this.state.transferCheck&&c.a.createElement("div",{className:"result-row"},c.a.createElement("div",{className:"result-col label"},"Chuy\u1ec3n kho\u1ea3n"),c.a.createElement("div",{className:"result-col"},c.a.createElement("p",{className:"head"},this.state.transferBank)),c.a.createElement("div",{className:"result-col number"},c.a.createElement("p",{className:"head"},this.toCurrency(this.state.transferMethod))))))),c.a.createElement("section",{id:"section-insurance"},c.a.createElement(b.a.Toggle,{as:f.a.Header,eventKey:"1",onClick:function(){return e.handleShowTableResult("openInsuranceMethod")}},c.a.createElement("h3",{className:"heading-middle-line"},"B\u1ea3o hi\u1ec3m v\xe0 c\xf4ng ty li\xean k\u1ebft")),c.a.createElement(b.a.Collapse,{eventKey:"1"},c.a.createElement("section",{className:"section-insurance-wrapper"},c.a.createElement(y.a.Group,{className:"insurance"},c.a.createElement("div",{className:"custom-control custom-checkbox"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"insuranceCheck",name:"insuranceCheck",checked:this.state.insuranceCheck,onChange:this.handleInputChange}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"insuranceCheck"},"B\u1ea3o hi\u1ec3m")),this.state.insuranceCheck&&c.a.createElement("div",{className:"right-side"},c.a.createElement("div",{className:"form-group-row"},c.a.createElement("div",{className:"field-input select"},c.a.createElement("span",null,"C\xf4ng ty:"),c.a.createElement(y.a.Control,{as:"select",name:"insurance",value:this.state.insurance,onChange:this.handleInputChange},c.a.createElement("option",{value:"TNHH DV Nam \xc1"},"TNHH DV Nam \xc1"),c.a.createElement("option",{value:"TNHH DV \u0110\xf4ng \xc1"},"TNHH DV \u0110\xf4ng \xc1"),c.a.createElement("option",{value:"TNHH DV B\u1eafc \xc1"},"TNHH DV B\u1eafc \xc1"),c.a.createElement("option",{value:"TNHH DV T\xe2y \xc1"},"TNHH DV T\xe2y \xc1"),c.a.createElement("option",{value:"TNHH DV \xc1"},"TNHH DV \xc1")))),c.a.createElement("div",{className:"form-group-row"},c.a.createElement("div",{className:"field-input select"},c.a.createElement("span",null,"D\u1ecbch v\u1ee5:"),c.a.createElement(y.a.Control,{as:"select",name:"insuranceService",value:this.state.insuranceService,onChange:this.handleInputChange},c.a.createElement("option",{value:"B\xe0n ch\u1ea3i k\u1ebd ch\u1ec9nh nha"},"B\xe0n ch\u1ea3i k\u1ebd ch\u1ec9nh nha"),c.a.createElement("option",{value:"B\xe0n ch\u1ea3i k\u1ebd"},"B\xe0n ch\u1ea3i k\u1ebd "),c.a.createElement("option",{value:"Kem \u1ed1ng"},"Kem \u1ed1ng"),c.a.createElement("option",{value:"Kem ch\u1ea3i"},"Kem ch\u1ea3i"),c.a.createElement("option",{value:"B\xe0n ch\u1ea3i k\u1ebd ch\u1ec9nh r\u0103ng"},"B\xe0n ch\u1ea3i k\u1ebd ch\u1ec9nh r\u0103ng"))),c.a.createElement("div",{className:"field-input"},c.a.createElement("span",null,"S\u1ed1 ti\u1ec1n"),c.a.createElement("div",{className:"field-input"},c.a.createElement("span",null,"S\u1ed1 ti\u1ec1n"),c.a.createElement(y.a.Control,{name:"insuranceServicePrice",value:this.state.insuranceServicePrice,onChange:function(a){e.handleInputChange(a,"currency")},onBlur:this.calcRestMoney,required:!0,placeholder:"10,000,000",type:"text"}),c.a.createElement(y.a.Control.Feedback,{type:"invalid"},"\u0110i\u1ec1n th\xf4ng tin \u0111\u01b0\u1ee3c y\xeau c\u1ea7u"))),c.a.createElement("i",{className:"ic ic-remove"})),c.a.createElement("div",{className:"form-group-row"},c.a.createElement("a",{className:"add-new-insurance"},c.a.createElement("i",{className:"ic-add-new"}),"Th\xeam m\u1edbi")))),c.a.createElement(y.a.Group,{className:"company"},c.a.createElement("div",{className:"custom-control custom-checkbox"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"companyCheck",name:"companyCheck",checked:this.state.companyCheck,onChange:this.handleInputChange}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"companyCheck"},"C\xf4ng ty")),this.state.companyCheck&&c.a.createElement("div",{className:"right-side"},c.a.createElement("div",{className:"form-group-row"},c.a.createElement("div",{className:"field-input select"},c.a.createElement("span",null,"C\xf4ng ty:"),c.a.createElement(y.a.Control,{as:"select",name:"company",value:this.state.company,onChange:this.handleInputChange},c.a.createElement("option",{value:"TNHH DV Nam \xc1"},"TNHH DV Nam \xc1"),c.a.createElement("option",{value:"TNHH DV \u0110\xf4ng \xc1"},"TNHH DV \u0110\xf4ng \xc1"),c.a.createElement("option",{value:"TNHH DV B\u1eafc \xc1"},"TNHH DV B\u1eafc \xc1"),c.a.createElement("option",{value:"TNHH DV T\xe2y \xc1"},"TNHH DV T\xe2y \xc1"),c.a.createElement("option",{value:"TNHH DV \xc1"},"TNHH DV \xc1")))),c.a.createElement("div",{className:"form-group-row"},c.a.createElement("div",{className:"field-input select"},c.a.createElement("span",null,"D\u1ecbch v\u1ee5:"),c.a.createElement(y.a.Control,{as:"select",name:"companyService",value:this.state.companyService,onChange:this.handleInputChange},c.a.createElement("option",{value:"B\xe0n ch\u1ea3i k\u1ebd ch\u1ec9nh nha"},"B\xe0n ch\u1ea3i k\u1ebd ch\u1ec9nh nha"),c.a.createElement("option",{value:"B\xe0n ch\u1ea3i k\u1ebd"},"B\xe0n ch\u1ea3i k\u1ebd "),c.a.createElement("option",{value:"Kem \u1ed1ng"},"Kem \u1ed1ng"),c.a.createElement("option",{value:"Kem ch\u1ea3i"},"Kem ch\u1ea3i"),c.a.createElement("option",{value:"B\xe0n ch\u1ea3i k\u1ebd ch\u1ec9nh r\u0103ng"},"B\xe0n ch\u1ea3i k\u1ebd ch\u1ec9nh r\u0103ng"))),c.a.createElement("div",{className:"field-input"},c.a.createElement("span",null,"S\u1ed1 ti\u1ec1n"),c.a.createElement("div",{className:"field-input"},c.a.createElement("span",null,"S\u1ed1 ti\u1ec1n"),c.a.createElement(y.a.Control,{name:"companyServicePrice",value:this.state.companyServicePrice,onChange:function(a){e.handleInputChange(a,"currency")},onBlur:this.calcRestMoney,required:!0,placeholder:"10,000,000",type:"text"}),c.a.createElement(y.a.Control.Feedback,{type:"invalid"},"\u0110i\u1ec1n th\xf4ng tin \u0111\u01b0\u1ee3c y\xeau c\u1ea7u"))),c.a.createElement("i",{className:"ic ic-remove"})),c.a.createElement("div",{className:"form-group-row"},c.a.createElement("a",{className:"add-new-insurance"},c.a.createElement("i",{className:"ic-add-new"}),"Th\xeam m\u1edbi")))),c.a.createElement(y.a.Group,{className:"thekim",controlId:"theKIMCheckbox"},c.a.createElement("div",{className:"custom-control custom-checkbox"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"theKIMCheck",name:"theKIMCheck",checked:this.state.theKIMCheck,onChange:this.handleInputChange}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"theKIMCheck"},"The\u0309 KIM")),this.state.theKIMCheck&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"field-input no-label thekim-code"},c.a.createElement(y.a.Control,{name:"theKIMCode",value:this.state.theKIMCode,onChange:this.handleInputChange,placeholder:"Nh\xe2\u0323p ma\u0303 the\u0309",type:"text"})),c.a.createElement("div",{className:"field-input no-label thekim-pin"},c.a.createElement(y.a.Control,{name:"theKIMPIN",value:this.state.theKIMPIN,onChange:this.handleInputChange,placeholder:"Ma\u0303 PIN",type:"text"})),c.a.createElement("div",{className:"field-input thekim-btn"},c.a.createElement("button",{className:"btn btn-azure"},"KI\xca\u0309M TRA MA\u0303 PIN")))))),n&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"table-result"},this.state.insuranceCheck&&c.a.createElement("div",{className:"result-row"},c.a.createElement("div",{className:"result-col label"},"B\u1ea3o hi\u1ec3m"),c.a.createElement("div",{className:"result-col"},c.a.createElement("p",{className:"head"},this.state.insurance),c.a.createElement("p",{className:"sub"},this.state.insuranceService)),c.a.createElement("div",{className:"result-col number"},c.a.createElement("p",{className:"head"},this.toCurrency(this.state.insuranceServicePayMoney)),c.a.createElement("p",{className:"sub"},this.toCurrency(this.state.insuranceServicePrice)))),this.state.companyCheck&&c.a.createElement("div",{className:"result-row"},c.a.createElement("div",{className:"result-col label"},"C\xf4ng ty"),c.a.createElement("div",{className:"result-col"},c.a.createElement("p",{className:"head"},this.state.company),c.a.createElement("p",{className:"sub"},this.state.companyService)),c.a.createElement("div",{className:"result-col number"},c.a.createElement("p",{className:"head"},this.toCurrency(this.state.companyServicePayMoney)),c.a.createElement("p",{className:"sub"},this.toCurrency(this.state.companyServicePrice)))))))),c.a.createElement("section",{id:"ghichu"},c.a.createElement(y.a.Group,{controlId:"exampleForm.ControlTextarea1"},c.a.createElement(y.a.Label,null,"Ghi ch\xfa"),c.a.createElement(y.a.Control,{as:"textarea",rows:"3",name:"keynote",value:this.state.keynote,onChange:this.handleInputChange}))))),this.state.isConfirm?c.a.createElement(E.a.Footer,null,c.a.createElement(C.a,{className:"btn-close",onClick:this.handleConfirm},"Quay l\u1ea1i"),c.a.createElement(C.a,{className:"btn-submit",type:"button",onClick:this.onSubmit},"T\u1ea1o phi\u1ebfu thu")):c.a.createElement(E.a.Footer,null,c.a.createElement(C.a,{className:"btn-close",onClick:this.props.onHide},"Thoa\u0301t"),c.a.createElement(C.a,{className:"btn-submit btn-azure",type:"submit"},"Xa\u0301c nh\xe2\u0323n"))))}}]),a}(c.a.Component),S=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(c)))).state={modalShow:!1},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(C.a,{variant:"primary",onClick:function(){return e.setState({modalShow:!0})}},"Launch vertically centered modal"),c.a.createElement(M,{show:this.state.modalShow,onHide:function(){return e.setState({modalShow:!1})}}))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},54:function(e,a,t){e.exports=t(116)},59:function(e,a,t){}},[[54,1,2]]]);
//# sourceMappingURL=main.fc47cb21.chunk.js.map