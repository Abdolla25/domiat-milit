(function(t){function e(e){for(var n,a,r=e[0],l=e[1],s=e[2],u=0,p=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&p.push(c[a][0]),c[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,r=1;r<i.length;r++){var l=i[r];0!==c[l]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},c={app:0},o=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var s=0;s<r.length;s++)e(r[s]);var d=l;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"56d7":function(t,e,i){"use strict";i.r(e);var n=i("2b0e"),c=i("5f5b");i("ab8b"),i("2dd8");n["default"].use(c["a"]);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Header"),i("router-view"),i("Footer")],1)},a=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("b-navbar",{staticClass:"fixed-top bg-light",attrs:{toggleable:"lg",type:"light"}},[n("b-navbar-brand",{staticClass:"mx-2",attrs:{href:"/"}},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("img",{attrs:{id:"logo",src:i("9ff1"),alt:"المستشفى العسكري بدمياط الجديدة"}})])],1),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",t._l(t.menuItems,(function(e){return n("span",{key:e.id},[e.hasSub?n("b-nav-item-dropdown",{attrs:{href:e.routerLink,text:e.content}},t._l(e.sub,(function(e,i){return n("b-dropdown-item",{key:i,attrs:{href:e.routerLink}},[t._v(" "+t._s(e.content)+" ")])})),1):e.hasSub?t._e():n("b-nav-item",{attrs:{href:e.routerLink}},[t._v(" "+t._s(e.content)+" ")])],1)})),0),n("b-navbar-nav",{staticClass:"mx-2"},[n("b-nav-form",[n("b-form-input",{staticClass:"mr-sm-2 me-2",attrs:{placeholder:"بحث في الموقع"}}),n("b-button",{staticClass:"my-2 my-sm-0",attrs:{variant:"outline-primary",type:"submit"}},[t._v("بحث")])],1)],1)],1)],1)],1)},l=[],s={name:"Header",methods:{toggleMenu:function(t){alert(menuItem.hasSub)}},data:function(){return{menuItems:[{id:0,content:"عن المستشفى",routerLink:"#",hasSub:!0,sub:[{content:"نظرة عامة",routerLink:"overview"},{content:"رسالتنا ورؤيتنا",routerLink:"our-vision"},{content:"مجلس الإدارة",routerLink:"board"}]},{id:1,content:"الخدمات الطبية",routerLink:"#",hasSub:!0,sub:[{content:"قسم العلاج الطبيعي",routerLink:"physical-therapy-department"},{content:"قسم الغسيل الكلوي",routerLink:"dialysis-department"},{content:"قسم المناظير",routerLink:"endoscopy-department"},{content:"قسم الحضانات وحديثي الولادة",routerLink:"nursery-newborn-department"},{content:"قسم الداخلي والحجز",routerLink:"in-patient-department"},{content:"قسم الاستقبال والطوارئ",routerLink:"emergency-department"},{content:"قسم الرعاية المركزة",routerLink:"icu-department"},{content:"قسم العمليات",routerLink:"operations-department"},{content:"قسم المعمل",routerLink:"laboratory-department"},{content:"قسم الأشعة",routerLink:"radiology-department"},{content:"قسم العزل",routerLink:"isolation-department"}]},{id:2,content:"العيادات الخارجية",routerLink:"#",hasSub:!0,sub:[{content:"عيادة أمراض الصدر والحساسية",routerLink:"chest-clinic"},{content:"عيادة الأمراض النفسية والعصبية",routerLink:"psychiatric-clinic"},{content:"عيادة الغدد الصماء",routerLink:"endocrinology-clinic"},{content:"عيادة الروماتيزم",routerLink:"rheumatology-clinic"},{content:"عيادة التغذية",routerLink:"nutrition-clinic"},{content:"عيادة الأمراض الجلدية والتناسلية",routerLink:"dermatology-clinic"},{content:"عيادة الأطفال",routerLink:"pediatric-clinic"},{content:"عيادة الأنف والأذن والحنجرة",routerLink:"ent-clinic"},{content:"عيادة جراحة المخ والأعصاب",routerLink:"neurosurgery-clinic"},{content:"عيادة الرمد",routerLink:"ophthalmology-clinic"},{content:"عيادة جراحة العظام",routerLink:"orthopedic-clinic"},{content:"عيادة القلب والإيكو",routerLink:"heart-clinic"},{content:"عيادة الأسنان",routerLink:"dental-clinic"},{content:"عيادة النساء والتوليد",routerLink:"gynecology-obstetrics-clinic"},{content:"عيادة السونار",routerLink:"ultrasound-clinic"},{content:"عيادة الكلى والجهاز الهضمي",routerLink:"gastroenterology-clinic"},{content:"عيادة الباطنة",routerLink:"internal-medicine-clinic"},{content:"عيادة المسالك",routerLink:"urology-clinic"},{content:"عيادة الجراحة العامة",routerLink:"surgery-clinic"},{content:"عيادة جراحة الأوعية الدموية",routerLink:"vascular-clinic"},{content:"عيادة التجميل وتساقط الشعر",routerLink:"cosmetic-clinic"}]},{id:3,content:"مواعيد العمل",routerLink:"#time-table",hasSub:!1,sub:-1},{id:4,content:"تواصل معنا",routerLink:"contact-us",hasSub:!1,sub:-1}]}}},d=s,u=(i("8baf"),i("2877")),p=Object(u["a"])(d,r,l,!1,null,null,null),m=p.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"container my-5 py-5"},[i("hr",{staticClass:"mb-5"}),i("p",{staticClass:"float-left"},[i("a",{attrs:{href:"#"}},[i("i",{staticClass:"fa fa-arrow-circle-up",staticStyle:{"font-size":"2.5rem"},attrs:{"aria-hidden":"true"}})])]),i("p",{staticClass:"float-right"},[t._v("المستشفى العسكري بدمياط الجديدة © 2021 · "),i("a",{attrs:{href:"#"}},[t._v("سياسة الخصوصية")]),t._v(" · "),i("a",{attrs:{href:"#"}},[t._v("شروط الاستخدام")])])])}],b={},h=b,v=Object(u["a"])(h,y,f,!1,null,null,null),z=v.exports,g={name:"App",components:{Header:m,Footer:z}};function _(){document.body.scrollTop>80||document.documentElement.scrollTop>80?(document.getElementById("logo").style.maxHeight="50px",document.getElementById("nav-collapse").style.top="75px"):(document.getElementById("logo").style.maxHeight="100px",document.getElementById("nav-collapse").style.top="125px")}window.onscroll=function(){_()};var T=g,k=(i("034f"),Object(u["a"])(T,o,a,!1,null,null,null)),x=k.exports,L=i("8c4f"),w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("carousel"),i("main-icons"),i("hr",{staticClass:"m-5"}),i("time-table")],1)},C=[],S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"carousel"},[i("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.slides,(function(e){return i("b-carousel-slide",{key:e.id,attrs:{caption:e.caption,text:e.text,"img-src":e.img}},[i("b-button",{attrs:{variant:"primary"}},[t._v(t._s(e.button))])],1)})),1)],1)},O=[],E={name:"carousel",data(){return{slide:0,sliding:null,slides:[{caption:"المستشفى العسكري ... صحتك تهمنا",text:"نحن نقدم الرعاية الصحية على أعلى مستوى من الجودة والأمان فى مصر وإفريقيا والشرق الأوسط.",img:"https://picsum.photos/1024/480/?image=52",button:"سجل اليوم"},{caption:"رعاية صحية متميزة",text:"يقدم أطباؤنا وموظفونا المرموقون لمرضانا العناية الطبية والجراحية النادرة لتدعيم أعلى مستويات الصحة والراحة.",img:"https://picsum.photos/1024/480/?image=52",button:"اعرف أكثر"},{caption:"كوادر طبية مميزة",text:"تضم المستشفى العسكري بدمياط الجديدة نخبة من أفضل الأطباء الحاصلين على أعلى الشهادات الجامعية المصرية والأجنبية في مختلف التخصصات.",img:"https://picsum.photos/1024/480/?image=52",button:"تصفح المعرض"}]}},methods:{onSlideStart(t){this.sliding=!0},onSlideEnd(t){this.sliding=!1}}},j=E,I=(i("ccaa"),Object(u["a"])(j,S,O,!1,null,null,null)),$=I.exports,H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"row"},t._l(t.mainIcons,(function(e,n){return i("div",{key:n,staticClass:"col-lg-4 main-icons"},[i("i",{class:e.faIcon}),i("h2",[t._v(" "+t._s(e.heading)+" ")]),i("p",[t._v(" "+t._s(e.text)+" ")]),i("p",[i("b-button",{attrs:{variant:"primary",href:e.btnLink}},[t._v(" "+t._s(e.btnText)+" ")])],1)])})),0)])},P=[],M={name:"mainIcons",data(){return{mainIcons:[{faIcon:"fa fa-user-md",heading:"العيادات الخارجية",text:"تتميز العيادات الخارجية لدينا بتغطية جميع التخصصات الطبية والجراحية.",btnText:"عرض التفاصيل",btnLink:"outpatient"},{faIcon:"fa fa-clock-o",heading:"مواعيد العمل",text:"نعمل 24 ساعة يومياً في الطوارئ والاستقبال على مدار الأسبوع",btnText:"عرض المواعيد",btnLink:"timetable"},{faIcon:"fa fa-phone",heading:"تواصل معنا",text:"يمكنك التواصل معنا على مدار الساعة للاستعلام عن طريق الاتصال على الرقم 2402556-057",btnText:"اتصل بنا",btnLink:"tel:0572402556"}]}}},B=M,A=(i("8f88"),Object(u["a"])(B,H,P,!1,null,null,null)),F=A.exports,J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[t._m(0),i("b-card",{staticClass:"w-100",attrs:{"no-body":""}},[i("b-tabs",{attrs:{pills:"",card:"","active-nav-item-class":"btn-primary"}},t._l(t.tabs,(function(e,n){return i("b-tab",{key:n,attrs:{title:e.clinicTitle}},[i("b-card-text",[i("table",{staticClass:"table table-striped table-bordered align-middle",staticStyle:{"text-align":"center"}},[i("tfoot",[i("tr",[i("th",{staticStyle:{"text-align":"center"},attrs:{scope:"col",colspan:"6"}},[t._v(" "+t._s(t.footText)+" "),i("span",{staticClass:"text-muted"},[t._v(t._s(t.footNote))])])])]),i("tbody",t._l(e.clinicTimes,(function(e,n){return i("tr",{key:n},[i("th",[t._v(t._s(e.day))]),i("td",[t._v(" "+t._s(e.doctor)+" "),i("br"),i("span",{staticClass:"text-muted"},[t._v(t._s(e.specialize))])])])})),0)])])],1)})),1)],1)],1)])},N=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h2",{staticClass:"w-100 mb-5",staticStyle:{"text-align":"right"},attrs:{id:"time-table"}},[t._v("مواعيد العيادات"),i("span",{staticClass:"text-muted"},[t._v(" الخارجية")])])}],Q={name:"timeTable",data(){return{footText:"الحجز يبدأ من 8 صباحاً بالمستشفى |",footNote:"| غير متوفر الحجز عن طريق التليفون",tabs:[{clinicTitle:"عيادة الباطنة",clinicTimes:[{day:"السبت",doctor:"د. مصطفى الخواجه",specialize:"استشاري الباطنة"},{day:"",doctor:"د. باسم زايد",specialize:"أخصائي الباطنة"},{day:"الأحد",doctor:"د. مصطفى الخواجه",specialize:"استشاري الباطنة"},{day:"الإثنين",doctor:"د. إيهاب عبدالعال",specialize:"أخصائي كبد وجهاز هضمي"},{day:"الثلاثاء",doctor:"د. إيهاب عبدالعال",specialize:"أخصائي كبد وجهاز هضمي"},{day:"الأربعاء",doctor:"د. محمود شريف",specialize:"أخصائي جهاز هضمي ومناظير"}]},{clinicTitle:"عيادة الجهاز الهضمي",clinicTimes:[{day:"الإثنين",doctor:"د. محمد حيزة",specialize:"استشاري كبد وجهاز هضمي ومناظير"},{day:"الأربعاء",doctor:"أ د. سعد الدين الشريف",specialize:"استشاري كبد وجهاز هضمي ومناظير"}]},{clinicTitle:"عيادة الأسنان",clinicTimes:[{day:"-",doctor:"يومياً من السبت إلى الأربعاء",specialize:""},{day:"السبت",doctor:"د. مجدي حسونة",specialize:""},{day:"الأربعاء",doctor:"د. مجدي حسونة",specialize:""}]},{clinicTitle:"عيادة الرمد",clinicTimes:[{day:"السبت",doctor:"د. نسرين البلتاجي",specialize:"أخصائي الرمد"},{day:"الأحد",doctor:"د. إسلام مدحت",specialize:"أخصائي الرمد"},{day:"الإثنين",doctor:"د. حسام فهمي",specialize:"أخصائي الرمد"},{day:"الثلاثاء",doctor:"د. محمد عاصم",specialize:"أخصائي الرمد"},{day:"الأربعاء",doctor:"د. محمد عاطف العشماوي",specialize:"استشاري الرمد"}]},{clinicTitle:"عيادة القلب",clinicTimes:[{day:"الأحد",doctor:"د. هاني مهنى",specialize:"أخصائي أمراض القلب"},{day:"الإثنين",doctor:"د. معتز هاشم",specialize:"أخصائي أمراض القلب"},{day:"الثلاثاء",doctor:"د. وسيم عمر",specialize:"استشاري أمراض القلب"},{day:"الأربعاء",doctor:"د. حسام الجمل",specialize:"أخصائي أمراض القلب"}]},{clinicTitle:"عيادة الإيكو",clinicTimes:[{day:"السبت",doctor:"د. نادية مصباح",specialize:""},{day:"الأحد",doctor:"د. وسيم عمر",specialize:""},{day:"الإثنين",doctor:"د. وسيم عمر",specialize:""},{day:"الثلاثاء",doctor:"د. حسام الجمل",specialize:""}]},{clinicTitle:"عيادة الأطفال",clinicTimes:[{day:"السبت",doctor:"د. رانيا نشأت",specialize:""},{day:"الأربعاء",doctor:"د. رانيا نشأت",specialize:""}]},{clinicTitle:"عيادة الجلدية",clinicTimes:[{day:"السبت",doctor:"د. عمرو شبكة",specialize:"أخصائي الأمراض الجلدية"},{day:"الأحد",doctor:"د. ماجدة كامل",specialize:"استشاري الأمراض الجلدية"},{day:"الإثنين",doctor:"د. جابر عوض",specialize:"استشاري الأمراض الجلدية"},{day:"الثلاثاء",doctor:"د. نرمين محمد الوسيه",specialize:"أخصائي الأمراض الجلدية"}]},{clinicTitle:"عيادة النساء والتوليد",clinicTimes:[{day:"السبت",doctor:"د. سلوى سمير عنتر",specialize:"استشاري النساء والتوليد"},{day:"الأحد",doctor:"د. ثروت صقر",specialize:"استشاري النساء والتوليد"},{day:"الإثنين",doctor:"د. ريهام الطرابيلي",specialize:"أخصائي النساء والتوليد"},{day:"الثلاثاء",doctor:"د. سلوى سمير عنتر",specialize:"استشاري النساء والتوليد"},{day:"الأربعاء",doctor:"د. محمد مجاهد",specialize:"أخصائي النساء والتوليد"}]},{clinicTitle:"عيادة الأنف والأذن والحنجرة",clinicTimes:[{day:"السبت",doctor:"نقيب ط. ندى زكريا",specialize:"أخصائي الأنف والأذن"},{day:"الأحد",doctor:"د. دينا شمس الدين",specialize:"أخصائي الأنف والأذن"},{day:"الإثنين",doctor:"نقيب ط. ندى زكريا",specialize:"أخصائي الأنف والأذن"},{day:"الثلاثاء",doctor:"نقيب ط. ندى زكريا",specialize:"أخصائي الأنف والأذن"},{day:"الأربعاء",doctor:"نقيب ط. ندى زكريا",specialize:"أخصائي الأنف والأذن"}]},{clinicTitle:"عيادة الجراحة العامة",clinicTimes:[{day:"السبت",doctor:"د. بهاء الدين شنب",specialize:"أخصائي الجراحة العامة"},{day:"الأحد",doctor:"د. جمال التابعى الفار",specialize:"استشاري الجراحة العامة"},{day:"الإثنين",doctor:"د. محمد صلاح نعمان",specialize:"أخصائي الجراحة العامة"},{day:"الثلاثاء",doctor:"عقيد ط. سمير عبدالعاطى",specialize:"استشاري الجراحة العامة"},{day:"الأربعاء",doctor:"عقيد ط. محمد عوض",specialize:"استشاري الجراحة العامة"},{day:"الخميس",doctor:"أ د. أحمد سلامة صيوح",specialize:"استشاري الجراحة العامة"},{day:"",doctor:"د. محمد أبو الخير",specialize:"أخصائي الجراحة العامة"}]},{clinicTitle:"عيادة جراحة العظام",clinicTimes:[{day:"السبت",doctor:"د. شادي جودة",specialize:"أخصائي العظام والعمود الفقري"},{day:"الأحد",doctor:"د. طارق سليم",specialize:"استشاري العظام والعمود الفقري"},{day:"",doctor:"د. أحمد العبد",specialize:"أخصائي العظام والعمود الفقري"},{day:"الإثنين",doctor:"د. احمد ابوعطيه ",specialize:"استشاري جراحة العظام"},{day:"الثلاثاء",doctor:"د. عثمان الشريف",specialize:"استشاري جراحة العظام"},{day:"",doctor:"د. طارق سليم",specialize:"استشاري العظام والعمود الفقري"},{day:"الأربعاء",doctor:"د. محمد صبري",specialize:"أخصائي العظام والعمود الفقري"},{day:"",doctor:"د. محمود العتباني",specialize:"أخصائي العظام والعمود الفقري"},{day:"الخميس",doctor:"د. أشرف العزب",specialize:"استشاري جراحة العظام والمفاصل وإصابة الملاعب"}]},{clinicTitle:"عيادة جراحة التجميل",clinicTimes:[{day:"الإثنين",doctor:"د. احمد مخاريطه",specialize:"أخصائي جراحة التجميل وزراعة الشعر"},{day:"الأربعاء",doctor:"د. احمد مخاريطه",specialize:"أخصائي جراحة التجميل وزراعة الشعر"}]},{clinicTitle:"عيادة المخ والأعصاب",clinicTimes:[{day:"السبت",doctor:"د. حاتم السمولى",specialize:"استشارى جراحات المخ والاعصاب والعمود الفقرى"},{day:"الأحد",doctor:"د. محمد الشافعى",specialize:"أخصائى  جراحات المخ والاعصاب  "},{day:"الأربعاء",doctor:"د. أحمد المنسى",specialize:"أخصائى المخ والاعصاب والطب  النفسى"}]},{clinicTitle:"عيادة جراحة الأطفال",clinicTimes:[{day:"الإثنين",doctor:"د. أحمد صلاح",specialize:"أخصائي جراحة الأطفال"}]},{clinicTitle:"عيادة جراحة الأوعية الدموية",clinicTimes:[{day:"السبت",doctor:"د. عمرو احمد عبدالبارى",specialize:"اخصائى  جراحه الاوعيه والقسطرة التداخليه"},{day:"الثلاثاء",doctor:"د. محمد شبانه",specialize:"استشاري جراحة الاوعيه"}]},{clinicTitle:"عيادة الروماتيزم",clinicTimes:[{day:"الإثنين",doctor:"أ د. اشرف عبد السلام",specialize:"استشارى الروماتيزم"}]},{clinicTitle:"عيادة الصدر والحساسية",clinicTimes:[{day:"السبت",doctor:"د. عاطف وهدان",specialize:"استشارى الصدر والحساسية"}]},{clinicTitle:"عيادة الكلى والغدد الصماء والسكر",clinicTimes:[{day:"الأربعاء",doctor:"د. احمد سلامة العدل",specialize:"استشارى الباطنة والكلى"}]},{clinicTitle:"عيادة جراحة الأورام",clinicTimes:[{day:"السبت",doctor:"د. سامح البوهى",specialize:"استشاري اورام"},{day:"الثلاثاء",doctor:"د. خالد جاب الله",specialize:"استشاري اورام"}]},{clinicTitle:"عيادة التغذية",clinicTimes:[{day:"الأحد",doctor:"د. محمد حلمى",specialize:"استشارى التغذية العلاجية"},{day:"الثلاثاء",doctor:"د. أحمد صادق",specialize:"أخصائي التغذية العلاجية"}]},{clinicTitle:"عيادة الكلى",clinicTimes:[{day:"الإثنين",doctor:"د. داليا مقلد",specialize:"اخصائى الباطنة والكلى"},{day:"الأربعاء",doctor:"د. احمد سلامة العدل",specialize:"استشارى الباطنة والكلى"}]},{clinicTitle:"عيادة المسالك البولية",clinicTimes:[{day:"السبت",doctor:"أ د. محمود فوزى",specialize:"استشارى المسالك البولية"},{day:"الأحد",doctor:"د. احمد العريف",specialize:"أخصائي المسالك البولية"},{day:"الإثنين",doctor:"د. يوسف أبو العزم",specialize:"أخصائي المسالك البولية"},{day:"الثلاثاء",doctor:"أ د. عادل موسى",specialize:"استشارى المسالك البولية"}]}]}}},q=Q,D=(i("b988"),Object(u["a"])(q,J,N,!1,null,null,null)),G=D.exports,K={name:"Home",components:{carousel:$,MainIcons:F,TimeTable:G}},R=K,U=Object(u["a"])(R,w,C,!1,null,null,null),V=U.exports,W=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("h1",[t._v("This is an about page")])])}],Y={},Z=Object(u["a"])(Y,W,X,!1,null,null,null),tt=Z.exports;n["default"].use(L["a"]);const et=[{path:"/",name:"Home",component:V},{path:"/about",name:"About",component:tt}],it=new L["a"]({mode:"history",base:"/",routes:et});var nt=it;n["default"].config.productionTip=!1,new n["default"]({router:nt,render:function(t){return t(x)}}).$mount("#app")},"65f7":function(t,e,i){},6860:function(t,e,i){},"748e":function(t,e,i){},"85ec":function(t,e,i){},"8baf":function(t,e,i){"use strict";i("6860")},"8f88":function(t,e,i){"use strict";i("748e")},"9ff1":function(t,e,i){t.exports=i.p+"img/logoHQ.a86b2397.png"},b988:function(t,e,i){"use strict";i("e586")},ccaa:function(t,e,i){"use strict";i("65f7")},e586:function(t,e,i){}});
//# sourceMappingURL=app.9705fda6.js.map