(self.webpackChunkbluecore=self.webpackChunkbluecore||[]).push([[554],{7136:(e,t,n)=>{"use strict";n.d(t,{w:()=>s});var i=n(7716);let s=(()=>{class e{constructor(){this.class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px",this.dataKtMenu="true"}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-dropdown-menu2"]],hostVars:3,hostBindings:function(e,t){2&e&&(i.uIk("data-kt-menu",t.dataKtMenu),i.Tol(t.class))},decls:33,vars:0,consts:[[1,"menu-item","px-3"],[1,"menu-content","fs-6","text-dark","fw-bolder","px-3","py-4"],[1,"separator","mb-3","opacity-75"],[1,"menu-link","px-3","cursor-pointer"],["data-kt-menu-trigger","hover","data-kt-menu-placement","right-start","data-kt-menu-flip","left-start, top",1,"menu-item","px-3"],[1,"menu-title"],[1,"menu-arrow"],[1,"menu-sub","menu-sub-dropdown","w-175px","py-4"],[1,"separator","mt-3","opacity-75"],[1,"menu-content","px-3","py-3"],[1,"btn","btn-primary","btn-sm","px-4","cursor-pointer"]],template:function(e,t){1&e&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i._uU(2," Quick Actions "),i.qZA(),i.qZA(),i._UZ(3,"div",2),i.TgZ(4,"div",0),i.TgZ(5,"a",3),i._uU(6," New Ticket "),i.qZA(),i.qZA(),i.TgZ(7,"div",0),i.TgZ(8,"a",3),i._uU(9," New Customer "),i.qZA(),i.qZA(),i.TgZ(10,"div",4),i.TgZ(11,"a",3),i.TgZ(12,"span",5),i._uU(13,"New Group"),i.qZA(),i._UZ(14,"span",6),i.qZA(),i.TgZ(15,"div",7),i.TgZ(16,"div",0),i.TgZ(17,"a",3),i._uU(18," Admin Group "),i.qZA(),i.qZA(),i.TgZ(19,"div",0),i.TgZ(20,"a",3),i._uU(21," Staff Group "),i.qZA(),i.qZA(),i.TgZ(22,"div",0),i.TgZ(23,"a",3),i._uU(24," Member Group "),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(25,"div",0),i.TgZ(26,"a",3),i._uU(27," New Contact "),i.qZA(),i.qZA(),i._UZ(28,"div",8),i.TgZ(29,"div",0),i.TgZ(30,"div",9),i.TgZ(31,"a",10),i._uU(32," Generate Reports "),i.qZA(),i.qZA(),i.qZA())},encapsulation:2}),e})()},4499:(e,t,n)=>{"use strict";n.d(t,{x:()=>l});var i=n(4733),s=n(7716),o=n(2789),a=n(3481),r=n(4256);let l=(()=>{class e{constructor(){this.chartOptions={}}ngOnInit(){this.chartOptions=function(e){const t=(0,i.mK)("--bs-gray-500"),n=(0,i.mK)("--bs-gray-200");return{series:[{name:"Net Profit",data:[44,55,57,56,61,58]},{name:"Revenue",data:[76,85,101,98,87,105]}],chart:{fontFamily:"inherit",type:"bar",height:350,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"30%",borderRadius:5}},legend:{show:!1},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:t,fontSize:"12px"}}},yaxis:{labels:{style:{colors:t,fontSize:"12px"}}},fill:{opacity:1},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(e){return"$"+e+" thousands"}}},colors:[(0,i.mK)("--bs-primary"),(0,i.mK)("--bs-gray-300")],grid:{borderColor:n,strokeDashArray:4,yaxis:{lines:{show:!0}}}}}()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-charts-widget1"]],decls:14,vars:16,consts:[[1,"card-header","border-0","pt-5"],[1,"card-title","align-items-start","flex-column"],[1,"card-label","fw-bolder","fs-3","mb-1"],[1,"text-muted","fw-bold","fs-7"],[1,"card-toolbar"],["type","button","data-kt-menu-trigger","click","data-kt-menu-placement","bottom-end","data-kt-menu-flip","top-end",1,"btn","btn-sm","btn-icon","btn-color-primary","btn-active-light-primary"],[1,"svg-icon","svg-icon-2",3,"inlineSVG"],[1,"card-body"],["id","kt_charts_widget_1_chart"],["chartRef",""],[3,"series","chart","xaxis","yaxis","dataLabels","stroke","legend","fill","states","tooltip","colors","markers","plotOptions"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"h3",1),s.TgZ(2,"span",2),s._uU(3,"Recent Statistics"),s.qZA(),s.TgZ(4,"span",3),s._uU(5,"More than 400 new members"),s.qZA(),s.qZA(),s.TgZ(6,"div",4),s.TgZ(7,"button",5),s._UZ(8,"span",6),s.qZA(),s._UZ(9,"app-dropdown-menu1"),s.qZA(),s.qZA(),s.TgZ(10,"div",7),s.TgZ(11,"div",8,9),s._UZ(13,"apx-chart",10),s.qZA(),s.qZA()),2&e&&(s.xp6(8),s.Q6J("inlineSVG","./assets//media/icons/duotune/general/gen024.svg"),s.xp6(3),s.Udp("height","350px"),s.xp6(2),s.Q6J("series",t.chartOptions.series)("chart",t.chartOptions.chart)("xaxis",t.chartOptions.xaxis)("yaxis",t.chartOptions.yaxis)("dataLabels",t.chartOptions.dataLabels)("stroke",t.chartOptions.stroke)("legend",t.chartOptions.legend)("fill",t.chartOptions.fill)("states",t.chartOptions.states)("tooltip",t.chartOptions.tooltip)("colors",t.chartOptions.colors)("markers",t.chartOptions.markers)("plotOptions",t.chartOptions.plotOptions))},directives:[o.d$,a.W,r.x],encapsulation:2}),e})()},5096:(e,t,n)=>{"use strict";n.d(t,{C:()=>a});var i=n(7716),s=n(2789),o=n(3481);let a=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-feeds-widget2"]],decls:32,vars:5,consts:[[1,"card-body","pb-0"],[1,"d-flex","align-items-center","mb-5"],[1,"d-flex","align-items-center","flex-grow-1"],[1,"symbol","symbol-45px","me-5"],["src","./assets/media/avatars/150-6.jpg","alt",""],[1,"d-flex","flex-column"],["href","#",1,"text-gray-800","text-hover-primary","fs-6","fw-bolder"],[1,"text-gray-400","fw-bold"],[1,"my-0"],["type","button","data-kt-menu-trigger","click","data-kt-menu-placement","bottom-end","data-kt-menu-flip","top-end",1,"btn","btn-sm","btn-icon","btn-color-primary","btn-active-light-primary"],[1,"svg-icon","svg-icon-2",3,"inlineSVG"],[1,"mb-5"],[1,"text-gray-800","fw-normal","mb-5"],["href","#",1,"btn","btn-sm","btn-light","btn-color-muted","btn-active-light-success","px-4","py-2","me-4"],["href","#",1,"btn","btn-sm","btn-light","btn-color-muted","btn-active-light-danger","px-4","py-2"],[1,"separator","mb-4"],[1,"position-relative","mb-6"],["rows","1","placeholder","Reply..",1,"form-control","border-0","p-0","pe-10","resize-none","min-h-25px"],[1,"position-absolute","top-0","end-0","me-n5"],[1,"btn","btn-icon","btn-sm","btn-active-color-primary","pe-0","me-2"],[1,"svg-icon","svg-icon-2","mb-3",3,"inlineSVG"],[1,"btn","btn-icon","btn-sm","btn-active-color-primary","ps-0"]],template:function(e,t){1&e&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i.TgZ(3,"div",3),i._UZ(4,"img",4),i.qZA(),i.TgZ(5,"div",5),i.TgZ(6,"a",6),i._uU(7," Nick Logan "),i.qZA(),i.TgZ(8,"span",7),i._uU(9,"PHP, SQLite, Artisan CLI"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(10,"div",8),i.TgZ(11,"button",9),i._UZ(12,"span",10),i.qZA(),i._UZ(13,"app-dropdown-menu1"),i.qZA(),i.qZA(),i.TgZ(14,"div",11),i.TgZ(15,"p",12),i._uU(16," Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post "),i.qZA(),i.TgZ(17,"div",1),i.TgZ(18,"a",13),i._UZ(19,"span",10),i._uU(20," 120 "),i.qZA(),i.TgZ(21,"a",14),i._UZ(22,"span",10),i._uU(23," 15 "),i.qZA(),i.qZA(),i.qZA(),i._UZ(24,"div",15),i.TgZ(25,"form",16),i._UZ(26,"textarea",17),i.TgZ(27,"div",18),i.TgZ(28,"span",19),i._UZ(29,"span",20),i.qZA(),i.TgZ(30,"span",21),i._UZ(31,"span",20),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&e&&(i.xp6(12),i.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen024.svg"),i.xp6(7),i.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen022.svg"),i.xp6(3),i.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen030.svg"),i.xp6(7),i.Q6J("inlineSVG","./assets/media/icons/duotune/communication/com008.svg"),i.xp6(2),i.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen018.svg"))},directives:[s.d$,o.W],encapsulation:2}),e})()},9359:(e,t,n)=>{"use strict";n.d(t,{v:()=>a});var i=n(7716),s=n(2789),o=n(7136);let a=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-feeds-widget3"]],decls:59,vars:5,consts:[[1,"card-body","pb-0"],[1,"d-flex","align-items-center","mb-3"],[1,"d-flex","align-items-center","flex-grow-1"],[1,"symbol","symbol-45px","me-5"],["src","./assets/media/avatars/150-10.jpg","alt",""],[1,"d-flex","flex-column"],["href","#",1,"text-gray-800","text-hover-primary","fs-6","fw-bolder"],[1,"text-gray-400","fw-bold"],[1,"my-0"],["type","button","data-kt-menu-trigger","click","data-kt-menu-placement","bottom-end","data-kt-menu-flip","top-end",1,"btn","btn-sm","btn-icon","btn-color-primary","btn-active-light-primary"],[1,"svg-icon","svg-icon-2",3,"inlineSVG"],[1,"mb-7"],[1,"text-gray-800","mb-5"],[1,"d-flex","align-items-center","mb-5"],["href","#",1,"btn","btn-sm","btn-light","btn-color-muted","btn-active-light-success","px-4","py-2","me-4"],["href","#",1,"btn","btn-sm","btn-light","btn-color-muted","btn-active-light-danger","px-4","py-2"],[1,"mb-7","ps-10"],[1,"d-flex","mb-5"],["src","./assets/media/avatars/150-11.jpg","alt",""],[1,"d-flex","flex-column","flex-row-fluid"],[1,"d-flex","align-items-center","flex-wrap","mb-1"],["href","#",1,"text-gray-800","text-hover-primary","fw-bolder","me-2"],[1,"text-gray-400","fw-bold","fs-7"],["href","#",1,"ms-auto","text-gray-400","text-hover-primary","fw-bold","fs-7"],[1,"text-gray-800","fs-7","fw-normal","pt-1"],[1,"d-flex"],["src","./assets/media/avatars/150-8.jpg","alt",""],[1,"separator","mb-4"],[1,"position-relative","mb-6"],["data-kt-autosize","true","rows","1","placeholder","Reply..",1,"form-control","border-0","p-0","pe-10","resize-none","min-h-25px"],[1,"position-absolute","top-0","end-0","me-n5"],[1,"btn","btn-icon","btn-sm","btn-active-color-primary","pe-0","me-2"],[1,"svg-icon","svg-icon-3","mb-3",3,"inlineSVG"],[1,"btn","btn-icon","btn-sm","btn-active-color-primary","ps-0"]],template:function(e,t){1&e&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i.TgZ(3,"div",3),i._UZ(4,"img",4),i.qZA(),i.TgZ(5,"div",5),i.TgZ(6,"a",6),i._uU(7," Carles Nilson "),i.qZA(),i.TgZ(8,"span",7),i._uU(9,"Yestarday at 5:06 PM"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(10,"div",8),i.TgZ(11,"button",9),i._UZ(12,"span",10),i.qZA(),i._UZ(13,"app-dropdown-menu2"),i.qZA(),i.qZA(),i.TgZ(14,"div",11),i.TgZ(15,"div",12),i._uU(16," Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post "),i.qZA(),i.TgZ(17,"div",13),i.TgZ(18,"a",14),i._UZ(19,"span",10),i._uU(20," 12 "),i.qZA(),i.TgZ(21,"a",15),i._UZ(22,"span",10),i._uU(23," 150 "),i.qZA(),i.qZA(),i.qZA(),i.TgZ(24,"div",16),i.TgZ(25,"div",17),i.TgZ(26,"div",3),i._UZ(27,"img",18),i.qZA(),i.TgZ(28,"div",19),i.TgZ(29,"div",20),i.TgZ(30,"a",21),i._uU(31," Alice Danchik "),i.qZA(),i.TgZ(32,"span",22),i._uU(33,"1 day"),i.qZA(),i.TgZ(34,"a",23),i._uU(35," Reply "),i.qZA(),i.qZA(),i.TgZ(36,"span",24),i._uU(37," Long before you sit dow to put digital pen to paper you need to make sure you have to sit down and write. "),i.qZA(),i.qZA(),i.qZA(),i.TgZ(38,"div",25),i.TgZ(39,"div",3),i._UZ(40,"img",26),i.qZA(),i.TgZ(41,"div",19),i.TgZ(42,"div",20),i.TgZ(43,"a",21),i._uU(44," Harris Bold "),i.qZA(),i.TgZ(45,"span",22),i._uU(46,"2 days"),i.qZA(),i.TgZ(47,"a",23),i._uU(48," Reply "),i.qZA(),i.qZA(),i.TgZ(49,"span",24),i._uU(50," Outlines keep you honest. They stop you from indulging in poorly "),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i._UZ(51,"div",27),i.TgZ(52,"form",28),i._UZ(53,"textarea",29),i.TgZ(54,"div",30),i.TgZ(55,"span",31),i._UZ(56,"span",32),i.qZA(),i.TgZ(57,"span",33),i._UZ(58,"span",32),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&e&&(i.xp6(12),i.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen024.svg"),i.xp6(7),i.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen022.svg"),i.xp6(3),i.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen030.svg"),i.xp6(34),i.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen022.svg"),i.xp6(2),i.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen018.svg"))},directives:[s.d$,o.w],encapsulation:2}),e})()},617:(e,t,n)=>{"use strict";n.d(t,{e:()=>a});var i=n(7716),s=n(2789),o=n(3481);let a=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-feeds-widget4"]],decls:32,vars:5,consts:[[1,"card-body","pb-0"],[1,"d-flex","align-items-center","mb-5"],[1,"d-flex","align-items-center","flex-grow-1"],[1,"symbol","symbol-45px","me-5"],["src","./assets/media/avatars/150-13.jpg","alt",""],[1,"d-flex","flex-column"],["href","#",1,"text-gray-800","text-hover-primary","fs-6","fw-bolder"],[1,"text-gray-400","fw-bold"],[1,"my-0"],["type","button","data-kt-menu-trigger","click","data-kt-menu-placement","bottom-end","data-kt-menu-flip","top-end",1,"btn","btn-sm","btn-icon","btn-color-primary","btn-active-light-primary"],[1,"svg-icon","svg-icon-2",3,"inlineSVG"],[1,"mb-7"],[1,"text-gray-800","mb-5"],["href","#",1,"btn","btn-sm","btn-light","btn-color-muted","btn-active-light-success","px-4","py-2","me-4"],[1,"svg-icon","svg-icon-3",3,"inlineSVG"],["href","#",1,"btn","btn-sm","btn-light","btn-color-muted","btn-active-light-danger","px-4","py-2"],[1,"separator","mb-4"],[1,"position-relative","mb-6"],["rows","1","placeholder","Reply..",1,"form-control","border-0","p-0","pe-10","resize-none","min-h-25px"],[1,"position-absolute","top-0","end-0","me-n5"],[1,"btn","btn-icon","btn-sm","btn-active-color-primary","pe-0","me-2"],[1,"svg-icon","svg-icon-3","mb-3",3,"inlineSVG"],[1,"btn","btn-icon","btn-sm","btn-active-color-primary","ps-0"]],template:function(e,t){1&e&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i.TgZ(3,"div",3),i._UZ(4,"img",4),i.qZA(),i.TgZ(5,"div",5),i.TgZ(6,"a",6),i._uU(7," Carles Nilson "),i.qZA(),i.TgZ(8,"span",7),i._uU(9,"Last week at 10:00 PM"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(10,"div",8),i.TgZ(11,"button",9),i._UZ(12,"span",10),i.qZA(),i._UZ(13,"app-dropdown-menu1"),i.qZA(),i.qZA(),i.TgZ(14,"div",11),i.TgZ(15,"div",12),i._uU(16," Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post "),i.qZA(),i.TgZ(17,"div",1),i.TgZ(18,"a",13),i._UZ(19,"span",14),i._uU(20," 22 "),i.qZA(),i.TgZ(21,"a",15),i._UZ(22,"span",10),i._uU(23," 59 "),i.qZA(),i.qZA(),i.qZA(),i._UZ(24,"div",16),i.TgZ(25,"form",17),i._UZ(26,"textarea",18),i.TgZ(27,"div",19),i.TgZ(28,"span",20),i._UZ(29,"span",21),i.qZA(),i.TgZ(30,"span",22),i._UZ(31,"span",21),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&e&&(i.xp6(12),i.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen024.svg"),i.xp6(7),i.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen022.svg"),i.xp6(3),i.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen030.svg"),i.xp6(7),i.Q6J("inlineSVG","./assets/media/icons/duotune/communication/com008.svg"),i.xp6(2),i.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen018.svg"))},directives:[s.d$,o.W],encapsulation:2}),e})()},5416:(e,t,n)=>{"use strict";n.d(t,{N:()=>a});var i=n(7716),s=n(2789),o=n(3481);let a=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-feeds-widget5"]],decls:33,vars:7,consts:[[1,"card-body","pb-0"],[1,"d-flex","align-items-center","mb-5"],[1,"d-flex","align-items-center","flex-grow-1"],[1,"symbol","symbol-45px","me-5"],["src","./assets/media/avatars/150-15.jpg","alt",""],[1,"d-flex","flex-column"],["href","#",1,"text-gray-800","text-hover-primary","fs-6","fw-bolder"],[1,"text-gray-400","fw-bold"],[1,"my-0"],["type","button","data-kt-menu-trigger","click","data-kt-menu-placement","bottom-end","data-kt-menu-flip","top-end",1,"btn","btn-sm","btn-icon","btn-color-primary","btn-active-light-primary"],[1,"svg-icon","svg-icon-2",3,"inlineSVG"],[1,"mb-5"],[1,"bgi-no-repeat","bgi-size-cover","rounded","min-h-250px","mb-5"],[1,"text-gray-800","mb-5"],["href","#",1,"btn","btn-sm","btn-light","btn-color-muted","btn-active-light-success","px-4","py-2","me-4"],[1,"svg-icon","svg-icon-3",3,"inlineSVG"],["href","#",1,"btn","btn-sm","btn-light","btn-color-muted","btn-active-light-danger","px-4","py-2"],[1,"separator","mb-4"],[1,"position-relative","mb-6"],["rows","1","placeholder","Reply..",1,"form-control","border-0","p-0","pe-10","resize-none","min-h-25px"],[1,"position-absolute","top-0","end-0","me-n5"],[1,"btn","btn-icon","btn-sm","btn-active-color-primary","pe-0","me-2"],[1,"svg-icon","svg-icon-3","mb-3",3,"inlineSVG"],[1,"btn","btn-icon","btn-sm","btn-active-color-primary","ps-0"],[1,"svg-icon","svg-icon-2","mb-3",3,"inlineSVG"]],template:function(e,t){1&e&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i.TgZ(3,"div",3),i._UZ(4,"img",4),i.qZA(),i.TgZ(5,"div",5),i.TgZ(6,"a",6),i._uU(7," Sam Logan "),i.qZA(),i.TgZ(8,"span",7),i._uU(9,"Mango, Java, Python"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(10,"div",8),i.TgZ(11,"button",9),i._UZ(12,"span",10),i.qZA(),i._UZ(13,"app-dropdown-menu1"),i.qZA(),i.qZA(),i.TgZ(14,"div",11),i._UZ(15,"div",12),i.TgZ(16,"div",13),i._uU(17," Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post "),i.qZA(),i.TgZ(18,"div",1),i.TgZ(19,"a",14),i._UZ(20,"span",15),i._uU(21," 89 "),i.qZA(),i.TgZ(22,"a",16),i._UZ(23,"span",10),i._uU(24," 29 "),i.qZA(),i.qZA(),i.qZA(),i._UZ(25,"div",17),i.TgZ(26,"form",18),i._UZ(27,"textarea",19),i.TgZ(28,"div",20),i.TgZ(29,"span",21),i._UZ(30,"span",22),i.qZA(),i.TgZ(31,"span",23),i._UZ(32,"span",24),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&e&&(i.xp6(12),i.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen024.svg"),i.xp6(3),i.Udp("background-image","url(./assets/media/stock/900x600/20.jpg)"),i.xp6(5),i.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen022.svg"),i.xp6(3),i.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen030.svg"),i.xp6(7),i.Q6J("inlineSVG","./assets/media/icons/duotune/communication/com008.svg"),i.xp6(2),i.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen018.svg"))},directives:[s.d$,o.W],encapsulation:2}),e})()},4146:(e,t,n)=>{"use strict";n.d(t,{E:()=>a});var i=n(7716),s=n(2789),o=n(3481);let a=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-feeds-widget6"]],decls:34,vars:5,consts:[[1,"card-body","pb-0"],[1,"d-flex","align-items-center","mb-5"],[1,"d-flex","align-items-center","flex-grow-1"],[1,"symbol","symbol-45px","me-5"],["src","./assets/media/avatars/150-17.jpg","alt",""],[1,"d-flex","flex-column"],["href","#",1,"text-gray-800","text-hover-primary","fs-6","fw-bolder"],[1,"text-gray-400","fw-bold"],[1,"my-0"],["type","button","data-kt-menu-trigger","click","data-kt-menu-placement","bottom-end","data-kt-menu-flip","top-end",1,"btn","btn-sm","btn-icon","btn-color-primary","btn-active-light-primary"],[1,"svg-icon","svg-icon-2",3,"inlineSVG"],[1,"mb-6"],[1,"text-gray-800","fs-6","fw-normal","mb-5"],[1,"mb-5"],["title","widget11-video","src","https://www.youtube.com/embed/qIHXpnASPAA","allowFullScreen","true",1,"embed-responsive-item","rounded","h-300px","w-100"],["href","#",1,"btn","btn-sm","btn-light","btn-color-muted","btn-active-light-success","px-4","py-2","me-4"],[1,"svg-icon","svg-icon-3",3,"inlineSVG"],["href","#",1,"btn","btn-sm","btn-light","btn-color-muted","btn-active-light-danger","px-4","py-2"],[1,"separator","mb-4"],[1,"position-relative","mb-6"],["data-kt-autosize","true","rows","{1}","placeholder","Reply..",1,"form-control","border-0","p-0","pe-10","resize-none","min-h-25px"],[1,"position-absolute","top-0","end-0","me-n5"],[1,"btn","btn-icon","btn-sm","btn-active-color-primary","pe-0","me-2"],[1,"svg-icon","svg-icon-3","mb-3",3,"inlineSVG"],[1,"btn","btn-icon","btn-sm","btn-active-color-primary","ps-0"]],template:function(e,t){1&e&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i.TgZ(3,"div",3),i._UZ(4,"img",4),i.qZA(),i.TgZ(5,"div",5),i.TgZ(6,"a",6),i._uU(7," Mat Dillon "),i.qZA(),i.TgZ(8,"span",7),i._uU(9,"Last month"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(10,"div",8),i.TgZ(11,"button",9),i._UZ(12,"span",10),i.qZA(),i._UZ(13,"app-dropdown-menu1"),i.qZA(),i.qZA(),i.TgZ(14,"div",11),i.TgZ(15,"div",12),i._uU(16," Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors "),i.qZA(),i.TgZ(17,"div",13),i._UZ(18,"iframe",14),i.qZA(),i.TgZ(19,"div",1),i.TgZ(20,"a",15),i._UZ(21,"span",16),i._uU(22," 189 "),i.qZA(),i.TgZ(23,"a",17),i._UZ(24,"span",10),i._uU(25," 229 "),i.qZA(),i.qZA(),i.qZA(),i._UZ(26,"div",18),i.TgZ(27,"form",19),i._UZ(28,"textarea",20),i.TgZ(29,"div",21),i.TgZ(30,"span",22),i._UZ(31,"span",23),i.qZA(),i.TgZ(32,"span",24),i._UZ(33,"span",23),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&e&&(i.xp6(12),i.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen024.svg"),i.xp6(9),i.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen022.svg"),i.xp6(3),i.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen030.svg"),i.xp6(7),i.Q6J("inlineSVG","./assets/media/icons/duotune/communication/com008.svg"),i.xp6(2),i.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen018.svg"))},directives:[s.d$,o.W],encapsulation:2}),e})()}}]);