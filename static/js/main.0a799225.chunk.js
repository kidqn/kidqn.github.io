(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(10),s=t.n(c),r=(t(59),t(21)),i=t(22),o=t(24),m=t(23),h=t(25),u=t(53),d=t(11),E=t(13),p=t.n(E),v=t(12),N=t.n(v),g=t(3),C=t.n(g),b=(t(60),t(66),t(16)),y=t.n(b),k=t(30),f=t.n(k),S=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={isEditing:!1,openPayMethod:!0,openInsuranceMethod:!1,totalMoneyPay:45e6,moneyPay:0,cashCheck:!1,cashMethod:0,cardCheck:!1,cardMethod:0,cardBank:"",transferCheck:!1,transferMethod:0,transferBank:"",restMoneyPay:45e6,insurance:"",insuranceCheck:!1,insuranceService:"",insuranceServicePrice:0,insuranceServiceExtra:"",insuranceServiceExtraPrice:0,companyCheck:!1,note:"",isConfirm:!1},t.handleInputChange=t.handleInputChange.bind(Object(d.a)(t)),t.handleConfirm=t.handleConfirm.bind(Object(d.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(d.a)(t)),t.handleShowTableResult=t.handleShowTableResult.bind(Object(d.a)(t)),t.toggleEditing=t.toggleEditing.bind(Object(d.a)(t)),t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"handleInputChange",value:function(e){var a=this,t=e.target,n="checkbox"===t.type?t.checked:t.value,l=t.name;this.setState(Object(u.a)({},l,n),function(){var e=a.state.totalMoneyPay-a.state.moneyPay;a.setState({restMoneyPay:e})})}},{key:"handleConfirm",value:function(e){console.log("Note: "+this.state.note),console.log("Cash method: "+this.state.cashMethod),console.log("Card: "+this.state.cardMethod,this.state.cardBank),console.log("Transfer: "+this.state.transferMethod,this.state.transferBank),e.preventDefault(),this.setState({isConfirm:!this.state.isConfirm})}},{key:"handleSubmit",value:function(e){console.log("push to server"),e.preventDefault()}},{key:"handleShowTableResult",value:function(e){"openPayMethod"===e&&this.setState({openPayMethod:!this.state.openPayMethod,openInsuranceMethod:this.state.openPayMethod?this.state.openInsuranceMethod:this.state.openPayMethod}),"openInsuranceMethod"===e&&this.setState({openInsuranceMethod:!this.state.openInsuranceMethod,openPayMethod:this.state.openInsuranceMethod?this.state.openPayMethod:this.state.openInsuranceMethod})}},{key:"toCurrency",value:function(e){return new Intl.NumberFormat("en-US",{maximumSignificantDigits:3}).format(e)}},{key:"toggleEditing",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"render",value:function(){var e=this,a=this.state.isEditing,t=!this.state.openPayMethod&&(this.state.cashCheck||this.state.cardCheck||this.state.transferCheck),n=!this.state.openInsuranceMethod&&(this.state.insuranceCheck||this.state.companyCheck);return console.log("isShowMethodTable",this.state.openPayMethod),console.log("isShowInsuranceTable",this.state.openInsuranceMethod),l.a.createElement(p.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"phieuthu"}),l.a.createElement(C.a,{noValidate:!0,onSubmit:this.handleSubmit},l.a.createElement(p.a.Header,{className:"phieuthu-header",closeButton:!0},l.a.createElement(p.a.Title,null,l.a.createElement("h2",{className:"phieuthu-title"},"Phi\u1ebfu Thu")),l.a.createElement("div",{className:"right-side"},l.a.createElement("div",{className:"chi-nhanh"},l.a.createElement("p",null,"Chi nh\xe1nh"),l.a.createElement("h4",null,"31NDC.001")),l.a.createElement("div",{className:"thanh-toan"},l.a.createElement("p",null,"C\u1ea7n thanh to\xe1n"),l.a.createElement("h4",null,this.toCurrency(this.state.totalMoneyPay))))),l.a.createElement(p.a.Body,{className:"phieuthu-body"},this.state.isConfirm?l.a.createElement("section",{id:"phieuthu-step2"},l.a.createElement("div",{className:"table-result"},l.a.createElement("div",{className:"result-row"},l.a.createElement("div",{className:"result-col label"},l.a.createElement("p",{className:"sub"},"Ghi ch\xfa"),l.a.createElement("p",null,this.state.node)),l.a.createElement("div",{className:"result-col number"},l.a.createElement("p",{className:"sub"},"Kh\xe1ch thanh to\xe1n"),l.a.createElement("p",{className:"head"},this.toCurrency(this.state.totalMoneyPay))))),l.a.createElement("h3",{className:"heading-middle-line"},"Ph\u01b0\u01a1ng th\u1ee9c thanh to\xe1n"),l.a.createElement("div",{className:"table-result"},l.a.createElement("div",{className:"result-row"},l.a.createElement("div",{className:"result-col label"},"Ti\u1ec1n m\u1eb7t"),l.a.createElement("div",{className:"result-col"}),l.a.createElement("div",{className:"result-col number"},l.a.createElement("p",{className:"head"},"10,000,000"))),l.a.createElement("div",{className:"result-row"},l.a.createElement("div",{className:"result-col label"},"Th\u1ebb"),l.a.createElement("div",{className:"result-col"},l.a.createElement("p",{className:"head"},"Viettel QR Code")),l.a.createElement("div",{className:"result-col number"},l.a.createElement("p",{className:"head"},"10,000,000"))),l.a.createElement("div",{className:"result-row"},l.a.createElement("div",{className:"result-col label"},"Chuy\u1ec3n kho\u1ea3n"),l.a.createElement("div",{className:"result-col"},l.a.createElement("p",{className:"head"},"VCB Bi\xean Ho\u0300a")),l.a.createElement("div",{className:"result-col number"},l.a.createElement("p",{className:"head"},"10,000,000")))),l.a.createElement("h3",{className:"heading-middle-line"},"B\u1ea3o hi\u1ec3m v\xe0 c\xf4ng ty li\xean k\u1ebft"),l.a.createElement("div",{className:"table-result"},l.a.createElement("div",{className:"result-row"},l.a.createElement("div",{className:"result-col label"},"B\u1ea3o hi\u1ec3m"),l.a.createElement("div",{className:"result-col"},l.a.createElement("p",{className:"head"},"TNHH DV Nam \xc1"),l.a.createElement("p",{className:"sub"},"B\xe0n ch\u1ea3i k\u1ebd ch\u1ec9nh nha"),l.a.createElement("p",{className:"sub"},"Nh\u1ed5 r\u0103ng g\xe2y t\xea - R34")),l.a.createElement("div",{className:"result-col number"},"10,000,000",l.a.createElement("p",{className:"sub"},"1,000,000"),l.a.createElement("p",{className:"sub"},"1,000,000"))),l.a.createElement("div",{className:"result-row"},l.a.createElement("div",{className:"result-col label"},"C\xf4ng ty"),l.a.createElement("div",{className:"result-col"},l.a.createElement("p",{className:"head"},"CTY TNHH Th\u01b0\u01a1ng m\u1ea1i v\xe0 d\u1ecbch v\u1ee5Le Gourmet Pass"),l.a.createElement("p",{className:"sub"},"Nh\u1ed5 r\u0103ng g\xe2y t\xea - R35")),l.a.createElement("div",{className:"result-col number"},l.a.createElement("p",{className:"head"},"10,000,000"),l.a.createElement("p",{className:"sub"},"1,000,000"))))):l.a.createElement("section",{id:"phieuthu-step1"},l.a.createElement("section",{id:"section-thanh-toan"},l.a.createElement(C.a.Group,null,l.a.createElement(C.a.Label,{className:"phieuthu-label"},"Kh\xe1ch thanh to\xe1n"),a?l.a.createElement("div",{className:"field-input"},l.a.createElement("span",null,"S\u1ed1 ti\u1ec1n"),l.a.createElement(C.a.Control,{name:"moneyPay",value:this.state.moneyPay,onChange:this.handleInputChange,onBlur:this.toggleEditing,placeholder:"1,000,000",type:"number"})):l.a.createElement("div",{className:"field-input"},l.a.createElement("span",null,"S\u1ed1 ti\u1ec1n"),l.a.createElement(C.a.Control,{value:this.toCurrency(this.state.moneyPay),onFocus:this.toggleEditing,placeholder:"1,000,000",type:"text"})),l.a.createElement("div",{className:"field-input rest-money"},l.a.createElement("span",null,"C\xf2n l\u1ea1i"),l.a.createElement(C.a.Control,{value:this.toCurrency(this.state.restMoneyPay),placeholder:"1,000,000",type:"text",disabled:!0})))),l.a.createElement(y.a,{className:"phieuthu-info",defaultActiveKey:"0"},l.a.createElement("section",{id:"section-phuongthuc"},l.a.createElement(y.a.Toggle,{as:f.a.Header,eventKey:"0",onClick:function(){return e.handleShowTableResult("openPayMethod")}},l.a.createElement("h3",{className:"heading-middle-line"},"Ph\u01b0\u01a1ng th\u1ee9c thanh to\xe1n")),l.a.createElement(y.a.Collapse,{eventKey:"0"},l.a.createElement("div",{className:"section-phuongthuc-wrapper"},l.a.createElement(C.a.Group,{controlId:"cashCheckbox"},l.a.createElement("div",{className:"custom-control custom-checkbox"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"cashCheck",name:"cashCheck",checked:this.state.cashCheck,onChange:this.handleInputChange}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"cashCheck"},"Ti\xea\u0300n m\u0103\u0323t:")),l.a.createElement("div",{className:"field-input"},l.a.createElement("span",null,"S\u1ed1 ti\u1ec1n:"),a?l.a.createElement("div",{className:"field-input"},l.a.createElement("span",null,"S\u1ed1 ti\u1ec1n"),l.a.createElement(C.a.Control,{name:"cashMethod",value:this.state.cashMethod,onChange:this.handleInputChange,onBlur:this.toggleEditing,placeholder:"10,000,000",type:"number"})):l.a.createElement("div",{className:"field-input"},l.a.createElement("span",null,"S\u1ed1 ti\u1ec1n"),l.a.createElement(C.a.Control,{value:this.toCurrency(this.state.cashMethod),onFocus:this.toggleEditing,placeholder:"10,000,000",type:"text"})))),l.a.createElement(C.a.Group,{className:"group-card"},l.a.createElement("div",{className:"custom-control custom-checkbox"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"cardCheck",name:"cardCheck",checked:this.state.cardCheck,onChange:this.handleInputChange}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"cardCheck"},"The\u0309:")),this.state.cardCheck&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"field-input"},l.a.createElement("span",null,"S\u1ed1 ti\u1ec1n:"),a?l.a.createElement("div",{className:"field-input"},l.a.createElement("span",null,"S\u1ed1 ti\u1ec1n"),l.a.createElement(C.a.Control,{name:"cardMethod",value:this.state.cardMethod,onChange:this.handleInputChange,onBlur:this.toggleEditing,placeholder:"10,000,000",type:"number"})):l.a.createElement("div",{className:"field-input"},l.a.createElement("span",null,"S\u1ed1 ti\u1ec1n"),l.a.createElement(C.a.Control,{value:this.toCurrency(this.state.cardMethod),onFocus:this.toggleEditing,placeholder:"10,000,000",type:"text"}))),l.a.createElement("div",{className:"field-input select"},l.a.createElement("span",null,"Ng\xe2n ha\u0300ng:"),l.a.createElement(C.a.Control,{as:"select",name:"cardBank",value:this.state.cardBank,onChange:this.handleInputChange},l.a.createElement("option",{value:"Viettel QR Code"},"Viettel QR Code"),l.a.createElement("option",{value:"VNPT QR Code"},"VNPT QR Code"),l.a.createElement("option",{value:"FPT QR Code"},"FPT QR Code"),l.a.createElement("option",{value:"Viettel QR Code"},"Viettel QR Code"),l.a.createElement("option",{value:"Viettel QR Code"},"Viettel QR Code"))))),l.a.createElement(C.a.Group,{className:"group-transfer"},l.a.createElement("div",{className:"custom-control custom-checkbox"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"transferCheck",name:"transferCheck",checked:this.state.transferCheck,onChange:this.handleInputChange}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"transferCheck"},"Chuy\xea\u0309n khoa\u0309n:")),this.state.transferCheck&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"field-input"},l.a.createElement("span",null,"S\u1ed1 ti\u1ec1n:"),a?l.a.createElement("div",{className:"field-input"},l.a.createElement("span",null,"S\u1ed1 ti\u1ec1n"),l.a.createElement(C.a.Control,{name:"transferMethod",value:this.state.transferMethod,onChange:this.handleInputChange,onBlur:this.toggleEditing,placeholder:"10,000,000",type:"number"})):l.a.createElement("div",{className:"field-input"},l.a.createElement("span",null,"S\u1ed1 ti\u1ec1n"),l.a.createElement(C.a.Control,{value:this.toCurrency(this.state.transferMethod),onFocus:this.toggleEditing,placeholder:"10,000,000",type:"text"}))),l.a.createElement("div",{className:"field-input select"},l.a.createElement("span",null,"Ng\xe2n ha\u0300ng:"),l.a.createElement(C.a.Control,{as:"select",name:"transferBank",value:this.state.transferBank,onChange:this.handleInputChange},l.a.createElement("option",{value:"VCB Bi\xean Ho\u0300a"},"VCB Bi\xean Ho\u0300a"),l.a.createElement("option",{value:"BIDV HCM"},"BIDV HCM"),l.a.createElement("option",{value:"Vietin Bank"},"Vietin Bank"),l.a.createElement("option",{value:"ACB"},"ACB"),l.a.createElement("option",{value:"Viettel QR Code"},"Viettel QR Code"))))))),t&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"table-result"},l.a.createElement("div",{className:"result-row"},l.a.createElement("div",{className:"result-col label"},"Ti\u1ec1n m\u1eb7t"),l.a.createElement("div",{className:"result-col"}),l.a.createElement("div",{className:"result-col number"},l.a.createElement("p",{className:"head"},this.state.cashMethod))),l.a.createElement("div",{className:"result-row"},l.a.createElement("div",{className:"result-col label"},"Th\u1ebb"),l.a.createElement("div",{className:"result-col"},l.a.createElement("p",{className:"head"},this.state.cardBank)),l.a.createElement("div",{className:"result-col number"},l.a.createElement("p",{className:"head"},this.state.cardMethod))),l.a.createElement("div",{className:"result-row"},l.a.createElement("div",{className:"result-col label"},"Chuy\u1ec3n kho\u1ea3n"),l.a.createElement("div",{className:"result-col"},l.a.createElement("p",{className:"head"},this.state.transferBank)),l.a.createElement("div",{className:"result-col number"},l.a.createElement("p",{className:"head"},this.state.transferMethod)))))),l.a.createElement("section",{id:"section-insurance"},l.a.createElement(y.a.Toggle,{as:f.a.Header,eventKey:"1",onClick:function(){return e.handleShowTableResult("openInsuranceMethod")}},l.a.createElement("h3",{className:"heading-middle-line"},"B\u1ea3o hi\u1ec3m v\xe0 c\xf4ng ty li\xean k\u1ebft")),l.a.createElement(y.a.Collapse,{eventKey:"1"},l.a.createElement("section",{className:"section-insurance-wrapper"},l.a.createElement(C.a.Group,{className:"insurance"},l.a.createElement("div",{className:"custom-control custom-checkbox"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"insuranceCheck",name:"insuranceCheck",checked:this.state.insuranceCheck,onChange:this.handleInputChange}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"insuranceCheck"},"B\u1ea3o hi\u1ec3m")),l.a.createElement("div",{className:"right-side"},l.a.createElement("div",{className:"form-group-row"},l.a.createElement("div",{className:"field-input select"},l.a.createElement("span",null,"C\xf4ng ty:"),l.a.createElement(C.a.Control,{as:"select",name:"insurance",value:this.state.insurance,onChange:this.handleInputChange},l.a.createElement("option",{value:"TNHH DV Nam \xc1"},"TNHH DV Nam \xc1"),l.a.createElement("option",{value:"TNHH DV \u0110\xf4ng \xc1"},"TNHH DV \u0110\xf4ng \xc1"),l.a.createElement("option",{value:"TNHH DV B\u1eafc \xc1"},"TNHH DV B\u1eafc \xc1"),l.a.createElement("option",{value:"TNHH DV T\xe2y \xc1"},"TNHH DV T\xe2y \xc1"),l.a.createElement("option",{value:"TNHH DV \xc1"},"TNHH DV \xc1")))),l.a.createElement("div",{className:"form-group-row"},l.a.createElement("div",{className:"field-input select"},l.a.createElement("span",null,"D\u1ecbch v\u1ee5:"),l.a.createElement(C.a.Control,{as:"select",name:"insuranceService",value:this.state.insuranceService,onChange:this.handleInputChange},l.a.createElement("option",{value:"B\xe0n ch\u1ea3i k\u1ebd ch\u1ec9nh nha"},"B\xe0n ch\u1ea3i k\u1ebd ch\u1ec9nh nha"),l.a.createElement("option",{value:"B\xe0n ch\u1ea3i k\u1ebd"},"B\xe0n ch\u1ea3i k\u1ebd "),l.a.createElement("option",{value:"Kem \u1ed1ng"},"Kem \u1ed1ng"),l.a.createElement("option",{value:"Kem ch\u1ea3i"},"Kem ch\u1ea3i"),l.a.createElement("option",{value:"B\xe0n ch\u1ea3i k\u1ebd ch\u1ec9nh r\u0103ng"},"B\xe0n ch\u1ea3i k\u1ebd ch\u1ec9nh r\u0103ng"))),l.a.createElement("div",{className:"field-input"},l.a.createElement("span",null,"S\u1ed1 ti\u1ec1n"),a?l.a.createElement("div",{className:"field-input"},l.a.createElement("span",null,"S\u1ed1 ti\u1ec1n"),l.a.createElement(C.a.Control,{name:"insuranceServicePrice",value:this.state.insuranceServicePrice,onChange:this.handleInputChange,onBlur:this.toggleEditing,placeholder:"10,000,000",type:"number"})):l.a.createElement("div",{className:"field-input"},l.a.createElement("span",null,"S\u1ed1 ti\u1ec1n"),l.a.createElement(C.a.Control,{value:this.toCurrency(this.state.insuranceServicePrice),onFocus:this.toggleEditing,placeholder:"10,000,000",type:"text"})))),l.a.createElement("div",{className:"form-group-row"},l.a.createElement("div",{className:"field-input select"},l.a.createElement("span",null,"D\u1ecbch v\u1ee5:"),l.a.createElement(C.a.Control,{as:"select",name:"insuranceServiceExtra",value:this.state.insuranceServiceExtra,onChange:this.handleInputChange},l.a.createElement("option",{value:"Nh\u1ed5 r\u0103ng g\xe2y t\xea - R34"},"Nh\u1ed5 r\u0103ng g\xe2y t\xea - R34"),l.a.createElement("option",{value:"B\xe0n ch\u1ea3i k\u1ebd"},"B\xe0n ch\u1ea3i k\u1ebd "),l.a.createElement("option",{value:"C\u1ea1o v\xf4i r\u0103ng"},"C\u1ea1o v\xf4i r\u0103ng"),l.a.createElement("option",{value:"T\u1ea9y tr\u1eafng r\u0103ng"},"T\u1ea9y tr\u1eafng r\u0103ng"),l.a.createElement("option",{value:"B\xe0n ch\u1ea3i k\u1ebd ch\u1ec9nh r\u0103ng"},"B\xe0n ch\u1ea3i k\u1ebd ch\u1ec9nh r\u0103ng"))),l.a.createElement("div",{className:"field-input"},l.a.createElement("span",null,"S\u1ed1 ti\u1ec1n"),a?l.a.createElement("div",{className:"field-input"},l.a.createElement("span",null,"S\u1ed1 ti\u1ec1n"),l.a.createElement(C.a.Control,{name:"insuranceServiceExtraPrice",value:this.state.insuranceServiceExtraPrice,onChange:this.handleInputChange,onBlur:this.toggleEditing,placeholder:"10,000,000",type:"number"})):l.a.createElement("div",{className:"field-input"},l.a.createElement("span",null,"S\u1ed1 ti\u1ec1n"),l.a.createElement(C.a.Control,{value:this.toCurrency(this.state.insuranceServiceExtraPrice),onFocus:this.toggleEditing,placeholder:"10,000,000",type:"text"}))),l.a.createElement("i",{className:"ic ic-remove"})),l.a.createElement("div",{className:"form-group-row"},l.a.createElement("a",{className:"add-new-insurance"},l.a.createElement("i",{className:"ic-add-new"}),"Th\xeam m\u1edbi")))),l.a.createElement(C.a.Group,{className:"company"},l.a.createElement("div",{className:"custom-control custom-checkbox"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"companyCheck",name:"companyCheck",checked:this.state.companyCheck,onChange:this.handleInputChange}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"companyCheck"},"C\xf4ng ty"))))),n&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"table-result"},l.a.createElement("div",{className:"result-row"},l.a.createElement("div",{className:"result-col label"},"B\u1ea3o hi\u1ec3m"),l.a.createElement("div",{className:"result-col"},l.a.createElement("p",{className:"head"},this.state.insurance),l.a.createElement("p",{className:"sub"},this.state.insuranceService),l.a.createElement("p",{className:"sub"},this.state.insuranceServiceExtra)),l.a.createElement("div",{className:"result-col number"},l.a.createElement("p",{className:"head"},"2,000,000"),l.a.createElement("p",{className:"sub"},this.state.insuranceServicePrice),l.a.createElement("p",{className:"sub"},this.state.insuranceServiceExtraPrice))),l.a.createElement("div",{className:"result-row"},l.a.createElement("div",{className:"result-col label"},"C\xf4ng ty"),l.a.createElement("div",{className:"result-col"},l.a.createElement("p",{className:"head"},"CTY TNHH Th\u01b0\u01a1ng m\u1ea1i v\xe0 d\u1ecbch v\u1ee5Le Gourmet Pass"),l.a.createElement("p",{className:"sub"},"Nh\u1ed5 r\u0103ng g\xe2y t\xea - R35")),l.a.createElement("div",{className:"result-col number"},l.a.createElement("p",{className:"head"},"10,000,000"),l.a.createElement("p",{className:"sub"},"1,000,000"))))))),l.a.createElement("section",{id:"ghichu"},l.a.createElement(C.a.Group,{controlId:"exampleForm.ControlTextarea1"},l.a.createElement(C.a.Label,null,"Ghi ch\xfa"),l.a.createElement(C.a.Control,{as:"textarea",rows:"3",name:"note",value:this.state.note,onChange:this.handleInputChange}))))),this.state.isConfirm?l.a.createElement(p.a.Footer,null,l.a.createElement(N.a,{className:"btn-close",onClick:this.handleConfirm},"Quay l\u1ea1i"),l.a.createElement(N.a,{className:"btn-submit",type:"submit"},"T\u1ea1o phi\u1ebfu thu")):l.a.createElement(p.a.Footer,null,l.a.createElement(N.a,{className:"btn-close",onClick:this.props.onHide},"Thoa\u0301t"),l.a.createElement(N.a,{className:"btn-submit",type:"button",onClick:this.handleConfirm},"Xa\u0301c nh\xe2\u0323n"))))}}]),a}(l.a.Component),B=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={modalShow:!1},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(N.a,{variant:"primary",onClick:function(){return e.setState({modalShow:!0})}},"Launch vertically centered modal"),l.a.createElement(S,{show:this.state.modalShow,onHide:function(){return e.setState({modalShow:!1})}}))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},54:function(e,a,t){e.exports=t(117)},59:function(e,a,t){}},[[54,1,2]]]);
//# sourceMappingURL=main.0a799225.chunk.js.map