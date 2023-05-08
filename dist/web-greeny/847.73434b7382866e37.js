"use strict";(self.webpackChunkWebGreeny=self.webpackChunkWebGreeny||[]).push([[847],{4847:(tt,g,m)=>{m.r(g),m.d(g,{AdminModule:()=>K});var l=m(9808),d=m(734),t=m(4893);let f=(()=>{class n{constructor(){}ngOnInit(){this.admin=localStorage.getItem("admin")?JSON.parse(localStorage.getItem("admin")):[]}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-header"]],decls:10,vars:2,consts:[["id","sticky",1,"header-main"],[1,"container-fluid","pd"],[1,"header-main-left","d-flex","align-items-ct","justify-sb"],[1,"logo"],["src","/assets/images/header/logo.png","height","45px","alt",""],[1,"user","d-flex","align-items-ct"],[1,"user-logo"],["alt","",3,"src"],[1,"user-name","ml-2"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5)(6,"div",6),t._UZ(7,"img",7),t.qZA(),t.TgZ(8,"p",8),t._uU(9),t.qZA()()()()()),2&e&&(t.xp6(7),t.s9C("src",i.admin.image,t.LSH),t.xp6(2),t.Oqu(i.admin.name))},styles:["p[_ngcontent-%COMP%]{margin:0}.user-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:42px;height:42px;border-radius:50%}.justify-sb[_ngcontent-%COMP%]{justify-content:space-between}.align-items-ct[_ngcontent-%COMP%]{align-items:center}.flex-wrap[_ngcontent-%COMP%]{flex-wrap:wrap}.header-main[_ngcontent-%COMP%]{padding:20px 0}.pd[_ngcontent-%COMP%]{padding:0 70px}"]}),n})();const _=function(){return["/admin"]},h=function(){return["/admin/products"]},Z=function(){return["/admin/category"]};let v=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-sidebar"]],decls:7,vars:6,consts:[[1,"list-group"],["tabIndex","1",1,"list-group-item","list-group-item-action","show","sideBar","mb-1",3,"routerLink"],["tabIndex","1",1,"list-group-item","list-group-item-action","sideBar","mb-1",3,"routerLink"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"a",1),t._uU(2,"Home"),t.qZA(),t.TgZ(3,"a",2),t._uU(4,"Products List"),t.qZA(),t.TgZ(5,"a",2),t._uU(6,"Products Category"),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("routerLink",t.DdM(3,_)),t.xp6(2),t.Q6J("routerLink",t.DdM(4,h)),t.xp6(2),t.Q6J("routerLink",t.DdM(5,Z)))},directives:[d.yS],styles:[".sideBar[_ngcontent-%COMP%]{border:2px solid #ffc107;transition:.4s;cursor:pointer}.sideBar[_ngcontent-%COMP%]:focus{border-radius:22px;background-color:#ffc107;font-weight:500}"]}),n})(),C=(()=>{class n{constructor(){}ngOnInit(){}onActivate(){window.scroll({top:0,left:0,behavior:"smooth"})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-admin"]],decls:7,vars:0,consts:[[1,"container-fluid","pd"],[1,"row"],[1,"col-lg-3"],[1,"col-lg-9"],[3,"activate"]],template:function(e,i){1&e&&(t._UZ(0,"app-header"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2),t._UZ(4,"app-sidebar"),t.qZA(),t.TgZ(5,"div",3)(6,"router-outlet",4),t.NdJ("activate",function(){return i.onActivate()}),t.qZA()()()())},directives:[f,v,d.lC],styles:[".pd[_ngcontent-%COMP%]{padding:0 70px!important}"]}),n})();var o=m(2382),u=m(4590);function b(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1,"Name cannot be empty"),t.qZA())}function x(n,a){if(1&n&&(t.TgZ(0,"div",17),t.YNc(1,b,2,0,"div",18),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.name.errors.required)}}function y(n,a){1&n&&(t.TgZ(0,"div",17)(1,"div"),t._uU(2,"Image cannot be empty"),t.qZA()())}let A=(()=>{class n{constructor(e){this.service=e,this.checkImg=!1,this.imageMain="",this.formData=new o.cw({name:new o.NI("",o.kI.required),image:new o.NI("")})}ngOnInit(){}submitForm(){this.formData.value.image?(this.service.postCategory(this.formData.value).subscribe(),alert("Done")):this.checkImg=!0}changeImg(e){const i=new FileReader;i.readAsDataURL(e.target.files[0]),i.onload=()=>{this.imageMain=i.result,this.formData.value.image=this.imageMain,console.log(this.formData.value.image)}}get f(){return this.formData.controls}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.D))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-category"]],decls:26,vars:5,consts:[[1,"container"],[1,"header","d-flex","justify-content-sb"],["type","button","routerLink","/admin/category",1,"btn","btn-success","text-light","m-2",2,"text-transform","capitalize","font-size","18px"],[1,"fa-solid","fa-rotate-left"],["action","",3,"formGroup"],[1,"input-item","mb-3"],["for","",1,"d-block","mb-1"],["type","text","formControlName","name",1,"ip-addProduct","w-100","p-2"],["class","text-danger",4,"ngIf"],[1,"input-group"],["for","",1,"d-block","w-100"],[1,"custom-file"],["type","file","id","inputGroupFile04",1,"custom-file-input",3,"change"],["for","inputGroupFile04",1,"custom-file-label"],["alt","",2,"max-width","50%","max-height","200px",3,"src"],[1,"submit","text-center",2,"margin-bottom","100px"],["type","submit",1,"btn","btn-success","w-100","p-2",2,"font-weight","600",3,"disabled","click"],[1,"text-danger"],[4,"ngIf"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3"),t._uU(3,"Add Category"),t.qZA(),t.TgZ(4,"button",2),t._UZ(5,"i",3),t._uU(6," Back To List "),t.qZA()(),t.TgZ(7,"form",4)(8,"div",5)(9,"label",6),t._uU(10,"Name Product"),t.qZA(),t._UZ(11,"input",7),t.YNc(12,x,2,1,"div",8),t.qZA(),t.TgZ(13,"div",5)(14,"div",9)(15,"label",10),t._uU(16,"Image "),t.qZA(),t.TgZ(17,"div",11)(18,"input",12),t.NdJ("change",function(c){return i.changeImg(c)}),t.qZA(),t.TgZ(19,"label",13),t._uU(20,"Choose file"),t.qZA()()(),t.YNc(21,y,3,0,"div",8),t._UZ(22,"img",14),t.qZA(),t.TgZ(23,"div",15)(24,"button",16),t.NdJ("click",function(){return i.submitForm()}),t._uU(25,"Add Product"),t.qZA()()()()),2&e&&(t.xp6(7),t.Q6J("formGroup",i.formData),t.xp6(5),t.Q6J("ngIf",i.f.name.invalid&&(i.f.name.dirty||i.f.name.touched)),t.xp6(9),t.Q6J("ngIf",i.checkImg),t.xp6(1),t.s9C("src",i.imageMain,t.LSH),t.xp6(2),t.Q6J("disabled",!i.formData.valid))},directives:[d.rH,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,l.O5],styles:[".justify-content-sb[_ngcontent-%COMP%]{justify-content:space-between}.wrap[_ngcontent-%COMP%]{flex-wrap:wrap}.input-item[_ngcontent-%COMP%]{font-size:18px}"]}),n})();var p=m(4281);function T(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1,"Name cannot be empty"),t.qZA())}function w(n,a){if(1&n&&(t.TgZ(0,"div",34),t.YNc(1,T,2,0,"div",35),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.name.errors.required)}}function q(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1,"Price cannot be empty"),t.qZA())}function U(n,a){if(1&n&&(t.TgZ(0,"div",34),t.YNc(1,q,2,0,"div",35),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.price.errors.required)}}function I(n,a){1&n&&(t.TgZ(0,"small",34),t._uU(1,"The sale price must be less than the original price"),t.qZA())}function P(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",36)(1,"input",37),t.NdJ("change",function(){const c=t.CHM(e).$implicit;return t.oxw().changeCategory(c.id)}),t.qZA(),t.TgZ(2,"label",38),t._uU(3),t.qZA()()}if(2&n){const e=a.$implicit;t.xp6(1),t.s9C("name",e.id),t.s9C("id",e.id),t.xp6(1),t.s9C("for",e.id),t.xp6(1),t.Oqu(e.name)}}function N(n,a){1&n&&(t.TgZ(0,"div",34)(1,"div"),t._uU(2,"Image cannot be empty"),t.qZA()())}function k(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",39),t._UZ(1,"input",40),t.TgZ(2,"div",41)(3,"p"),t._uU(4),t.qZA(),t.TgZ(5,"i",42),t.NdJ("click",function(){const c=t.CHM(e).index;return t.oxw().removeChild(c)}),t.qZA()(),t.TgZ(6,"img",43),t.NdJ("click",function(){const c=t.CHM(e).index;return t.oxw().changeImgChild(c)}),t.qZA()()}if(2&n){const e=a.$implicit,i=a.index;t.xp6(1),t.MGl("id","change-image-child-",i,""),t.xp6(3),t.hij("Image ",i+1,""),t.xp6(2),t.s9C("src",e,t.LSH),t.s9C("id",i)}}let D=(()=>{class n{constructor(e){this.service=e,this.checkImg=!1,this.imageMain="",this.image_child=[],this.data=new p.x,this.formData=new o.cw({name:new o.NI("",o.kI.required),price:new o.NI("",o.kI.required),sale_price:new o.NI(""),image:new o.NI(""),image_child:new o.NI([]),category_id:new o.NI([]),new:new o.NI(!1),sale:new o.NI(!1),feature:new o.NI(!1)})}ngOnInit(){this.service.getCategory().subscribe(e=>{this.listCategory=e})}submitForm(){this.formData.value.image?(this.data.name=this.formData.value.name,this.data.feature=this.formData.value.feature,this.data.price=this.formData.value.price,this.data.sale=this.formData.value.sale,this.data.sale_price=this.formData.value.sale_price,this.data.new=this.formData.value.new,this.data.image_child=this.formData.value.image_child,this.data.category_id=this.formData.value.category_id,this.data.image=this.formData.value.image,this.service.postProduct(this.data).subscribe(()=>{console.log(this.data)})):this.checkImg=!0}changeImg(e){const i=new FileReader;i.readAsDataURL(e.target.files[0]),i.onload=()=>{this.imageMain=i.result,this.formData.value.image=this.imageMain}}AddImgChild(e){let i=e.target.files;if(console.log(e),i[0]){let r=new FileReader;r.readAsDataURL(i[0]),r.onload=()=>{this.formData.value.image_child.push(r.result),this.image_child=this.formData.value.image_child}}}changeImgChild(e){let i=document.getElementById("change-image-child-"+e);e>=0&&(console.log(e),null==i||i.click(),null==i||i.addEventListener("change",r=>{console.log(e);let c=r.target.files;if(c[0]){let s=new FileReader;s.readAsDataURL(c[0]),s.onload=()=>{this.formData.value.image_child[e]=s.result,this.image_child[e]=this.formData.value.image_child[e]}}}))}removeChild(e){confirm("Are you remove ?")&&this.image_child.splice(e,1)}changeCategory(e){if(document.getElementById(e).checked)this.formData.value.category_id.push(e);else{let r=this.formData.value.category_id.findIndex(c=>{});this.formData.value.category_id.splice(r,1)}}get f(){return this.formData.controls}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.D))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-product"]],decls:67,vars:9,consts:[[1,"container"],[1,"header","d-flex","justify-content-sb"],["type","button","routerLink","/admin/products",1,"btn","btn-success","text-light","m-2",2,"text-transform","capitalize","font-size","18px"],[1,"fa-solid","fa-rotate-left"],["action","",3,"formGroup"],[1,"input-item","mb-3"],["for","",1,"d-block","mb-1"],["type","text","formControlName","name",1,"ip-addProduct","w-100","p-2"],["class","text-danger",4,"ngIf"],["type","number","formControlName","price",1,"ip-addProduct","w-100","p-2"],["type","number","formControlName","sale_price",1,"ip-addProduct","w-100","p-2"],[1,"category-list","d-flex","wrap"],["class","category-item col-lg-3",4,"ngFor","ngForOf"],[1,"tag-list","d-flex","wrap"],[1,"tag-item","col-lg-3"],["type","checkbox","name","","id","tag1","formControlName","new","value","1",1,"mr-2"],["for","tag1",2,"text-transform","capitalize","font-size","18px"],["type","checkbox","name","","id","tag2","formControlName","sale",1,"mr-2"],["for","tag2",2,"text-transform","capitalize","font-size","18px"],["type","checkbox","name","","id","tag3","formControlName","feature",1,"mr-2"],["for","tag3",2,"text-transform","capitalize","font-size","18px"],[1,"input-group"],["for","",1,"d-block","w-100"],[1,"custom-file"],["type","file","id","inputGroupFile04",1,"custom-file-input",3,"change"],["for","inputGroupFile04",1,"custom-file-label"],["alt","",2,"max-width","50%","max-height","200px",3,"src"],["id","child",1,"input-item","mb-3"],["type","file","data-id","change",1,"custom-file-input",3,"change"],["for","change-image-child",1,"custom-file-label"],[1,"showImage","d-flex","mt-4","wrap"],["class","image-child-item col-lg-3","style","border: 1px solid #ccc;",4,"ngFor","ngForOf"],[1,"submit","text-center",2,"margin-bottom","100px"],["type","submit",1,"btn","btn-success","w-100","p-2",2,"font-weight","600",3,"disabled","click"],[1,"text-danger"],[4,"ngIf"],[1,"category-item","col-lg-3"],["type","checkbox",1,"category_id","mr-2",3,"name","id","change"],[2,"text-transform","capitalize","font-size","18px",3,"for"],[1,"image-child-item","col-lg-3",2,"border","1px solid #ccc"],["type","file","data-id","change",1,"custom-file-input",3,"id"],[1,"head-img","d-flex","justify-content-sb","align-items-ct"],[1,"fa-solid","fa-xmark",2,"font-size","14px","margin-top","8px","cursor","pointer",3,"click"],["alt","",2,"max-width","100%","max-height","200px","cursor","pointer",3,"src","id","click"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3"),t._uU(3,"Add Product"),t.qZA(),t.TgZ(4,"button",2),t._UZ(5,"i",3),t._uU(6," Back To List "),t.qZA()(),t.TgZ(7,"form",4)(8,"div",5)(9,"label",6),t._uU(10,"Name Product"),t.qZA(),t._UZ(11,"input",7),t.YNc(12,w,2,1,"div",8),t.qZA(),t.TgZ(13,"div",5)(14,"label",6),t._uU(15,"Price"),t.qZA(),t._UZ(16,"input",9),t.YNc(17,U,2,1,"div",8),t.qZA(),t.TgZ(18,"div",5)(19,"label",6),t._uU(20,"Sale Price"),t.qZA(),t._UZ(21,"input",10),t.YNc(22,I,2,0,"small",8),t.qZA(),t.TgZ(23,"div",5)(24,"p"),t._uU(25,"Category"),t.qZA(),t.TgZ(26,"div",11),t.YNc(27,P,4,4,"div",12),t.qZA()(),t.TgZ(28,"div",5)(29,"p"),t._uU(30,"Tags"),t.qZA(),t.TgZ(31,"div",13)(32,"div",14),t._UZ(33,"input",15),t.TgZ(34,"label",16),t._uU(35,"New"),t.qZA()(),t.TgZ(36,"div",14),t._UZ(37,"input",17),t.TgZ(38,"label",18),t._uU(39,"Sale"),t.qZA()(),t.TgZ(40,"div",14),t._UZ(41,"input",19),t.TgZ(42,"label",20),t._uU(43,"Feature"),t.qZA()()()(),t.TgZ(44,"div",5)(45,"div",21)(46,"label",22),t._uU(47,"Image Main"),t.qZA(),t.TgZ(48,"div",23)(49,"input",24),t.NdJ("change",function(c){return i.changeImg(c)}),t.qZA(),t.TgZ(50,"label",25),t._uU(51,"Choose file"),t.qZA()()(),t.YNc(52,N,3,0,"div",8),t._UZ(53,"img",26),t.qZA(),t.TgZ(54,"div",27)(55,"div",21)(56,"label",22),t._uU(57,"Image Child"),t.qZA(),t.TgZ(58,"div",23)(59,"input",28),t.NdJ("change",function(c){return i.AddImgChild(c)}),t.qZA(),t.TgZ(60,"label",29),t._uU(61,"Choose file"),t.qZA()()(),t.TgZ(62,"div",30),t.YNc(63,k,7,4,"div",31),t.qZA()(),t.TgZ(64,"div",32)(65,"button",33),t.NdJ("click",function(){return i.submitForm()}),t._uU(66,"Add Product"),t.qZA()()()()),2&e&&(t.xp6(7),t.Q6J("formGroup",i.formData),t.xp6(5),t.Q6J("ngIf",i.f.name.invalid&&(i.f.name.dirty||i.f.name.touched)),t.xp6(5),t.Q6J("ngIf",i.f.price.invalid&&(i.f.price.dirty||i.f.price.touched)),t.xp6(5),t.Q6J("ngIf",i.formData.value.price<i.formData.value.sale_price),t.xp6(5),t.Q6J("ngForOf",i.listCategory),t.xp6(25),t.Q6J("ngIf",i.checkImg),t.xp6(1),t.s9C("src",i.imageMain,t.LSH),t.xp6(10),t.Q6J("ngForOf",i.image_child),t.xp6(2),t.Q6J("disabled",!i.formData.valid))},directives:[d.rH,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,l.O5,o.wV,l.sg,o.Wl],styles:[".justify-content-sb[_ngcontent-%COMP%]{justify-content:space-between}.wrap[_ngcontent-%COMP%]{flex-wrap:wrap}.input-item[_ngcontent-%COMP%]{font-size:18px}"]}),n})();function F(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"tr",5)(1,"td",6),t._uU(2),t.qZA(),t.TgZ(3,"td",7),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"img",8),t.qZA(),t.TgZ(7,"td")(8,"button",9),t._UZ(9,"i",10),t.qZA(),t.TgZ(10,"button",11),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw().deleteCategory(c.id)}),t._UZ(11,"i",12),t.qZA()()()}if(2&n){const e=a.$implicit,i=a.index;t.xp6(2),t.Oqu(i+1),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.s9C("src",e.image,t.LSH),t.xp6(2),t.MGl("routerLink","/admin/edit-category/",e.id,"")}}let J=(()=>{class n{constructor(e){this.service=e}ngOnInit(){this.service.getCategory().subscribe(e=>{this.list=e})}deleteCategory(e){confirm("Are you delete ?")&&(this.service.deleteCategory(e).subscribe(),this.service.getCategory().subscribe(i=>{this.list=i}))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.D))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-categorys"]],decls:19,vars:1,consts:[[1,"d-flex","mb-2",2,"justify-content","space-between"],["type","button","routerLink","/admin/add-category",1,"btn","btn-warning","text-light","m-2"],[1,"fa-solid","fa-plus","mr-1"],[1,"table"],["class","",4,"ngFor","ngForOf"],[1,""],["scope","row"],[2,"text-transform","capitalize"],["alt","",2,"max-width","200px","height","80px",3,"src"],["type","button",1,"btn","btn-primary","mr-1",3,"routerLink"],[1,"fa-solid","fa-pen-to-square"],["type","button",1,"btn","btn-danger",3,"click"],[1,"fa-solid","fa-trash-can"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"Products Category"),t.qZA(),t.TgZ(3,"button",1),t._UZ(4,"i",2),t._uU(5,"New"),t.qZA()(),t.TgZ(6,"table",3)(7,"thead")(8,"tr")(9,"th"),t._uU(10,"Serial"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Name"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Image"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Status"),t.qZA()()(),t.TgZ(17,"tbody"),t.YNc(18,F,12,4,"tr",4),t.qZA()()),2&e&&(t.xp6(18),t.Q6J("ngForOf",i.list))},directives:[d.rH,l.sg],styles:[".justify-content-sb[_ngcontent-%COMP%]{justify-content:space-between}.wrap[_ngcontent-%COMP%]{flex-wrap:wrap}.input-item[_ngcontent-%COMP%]{font-size:18px}"]}),n})();function M(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1,"Name cannot be empty"),t.qZA())}function O(n,a){if(1&n&&(t.TgZ(0,"div",17),t.YNc(1,M,2,0,"div",18),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.name.errors.required)}}function L(n,a){1&n&&(t.TgZ(0,"div",17)(1,"div"),t._uU(2,"Image cannot be empty"),t.qZA()())}let E=(()=>{class n{constructor(e,i,r){this.service=e,this.actRoute=i,this.router=r,this.checkImg=!1,this.imageMain="",this.formData=new o.cw({id:new o.NI("",o.kI.required),name:new o.NI("",o.kI.required),image:new o.NI("")})}ngOnInit(){this.service.getCategoryItem(this.actRoute.snapshot.params.id).subscribe(i=>{this.formData.patchValue(i),this.imageMain=this.formData.value.image})}submitForm(){this.formData.value.image?(this.service.postCategory(this.formData.value).subscribe(()=>{alert("Done")}),this.router.navigate(["admin/category"])):this.checkImg=!0}changeImg(e){const i=new FileReader;i.readAsDataURL(e.target.files[0]),i.onload=()=>{this.imageMain=i.result,this.formData.value.image=this.imageMain,console.log(this.formData.value.image)}}get f(){return this.formData.controls}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.D),t.Y36(d.gz),t.Y36(d.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-edit-category"]],decls:26,vars:5,consts:[[1,"container"],[1,"header","d-flex","justify-content-sb"],["type","button","routerLink","/admin/category",1,"btn","btn-success","text-light","m-2",2,"text-transform","capitalize","font-size","18px"],[1,"fa-solid","fa-rotate-left"],["action","",3,"formGroup"],[1,"input-item","mb-3"],["for","",1,"d-block","mb-1"],["type","text","formControlName","name",1,"ip-addProduct","w-100","p-2"],["class","text-danger",4,"ngIf"],[1,"input-group"],["for","",1,"d-block","w-100"],[1,"custom-file"],["type","file","id","inputGroupFile04",1,"custom-file-input",3,"change"],["for","inputGroupFile04",1,"custom-file-label"],["alt","",2,"max-width","50%","max-height","200px",3,"src"],[1,"submit","text-center",2,"margin-bottom","100px"],["type","submit",1,"btn","btn-success","w-100","p-2",2,"font-weight","600",3,"disabled","click"],[1,"text-danger"],[4,"ngIf"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3"),t._uU(3,"Edit Category"),t.qZA(),t.TgZ(4,"button",2),t._UZ(5,"i",3),t._uU(6," Back To List "),t.qZA()(),t.TgZ(7,"form",4)(8,"div",5)(9,"label",6),t._uU(10,"Name Product"),t.qZA(),t._UZ(11,"input",7),t.YNc(12,O,2,1,"div",8),t.qZA(),t.TgZ(13,"div",5)(14,"div",9)(15,"label",10),t._uU(16,"Image "),t.qZA(),t.TgZ(17,"div",11)(18,"input",12),t.NdJ("change",function(c){return i.changeImg(c)}),t.qZA(),t.TgZ(19,"label",13),t._uU(20,"Choose file"),t.qZA()()(),t.YNc(21,L,3,0,"div",8),t._UZ(22,"img",14),t.qZA(),t.TgZ(23,"div",15)(24,"button",16),t.NdJ("click",function(){return i.submitForm()}),t._uU(25,"Update Category"),t.qZA()()()()),2&e&&(t.xp6(7),t.Q6J("formGroup",i.formData),t.xp6(5),t.Q6J("ngIf",i.f.name.invalid&&(i.f.name.dirty||i.f.name.touched)),t.xp6(9),t.Q6J("ngIf",i.checkImg),t.xp6(1),t.s9C("src",i.imageMain,t.LSH),t.xp6(2),t.Q6J("disabled",!i.formData.valid))},directives:[d.rH,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,l.O5],styles:[".justify-content-sb[_ngcontent-%COMP%]{justify-content:space-between}.wrap[_ngcontent-%COMP%]{flex-wrap:wrap}.input-item[_ngcontent-%COMP%]{font-size:18px}"]}),n})();function Q(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1,"Name cannot be empty"),t.qZA())}function z(n,a){if(1&n&&(t.TgZ(0,"div",34),t.YNc(1,Q,2,0,"div",35),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.name.errors.required)}}function Y(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1,"Price cannot be empty"),t.qZA())}function j(n,a){if(1&n&&(t.TgZ(0,"div",34),t.YNc(1,Y,2,0,"div",35),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.price.errors.required)}}function H(n,a){1&n&&(t.TgZ(0,"small",34),t._uU(1,"The sale price must be less than the original price"),t.qZA())}function S(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",36)(1,"input",37),t.NdJ("change",function(){const c=t.CHM(e).$implicit;return t.oxw().changeCategory(c.id)}),t.qZA(),t.TgZ(2,"label",38),t._uU(3),t.qZA()()}if(2&n){const e=a.$implicit;t.xp6(1),t.s9C("name",e.id),t.s9C("id",e.id),t.xp6(1),t.s9C("for",e.id),t.xp6(1),t.Oqu(e.name)}}function R(n,a){1&n&&(t.TgZ(0,"div",34)(1,"div"),t._uU(2,"Image cannot be empty"),t.qZA()())}function G(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",39)(1,"div",40),t._UZ(2,"input",41),t.TgZ(3,"p"),t._uU(4),t.qZA(),t.TgZ(5,"i",42),t.NdJ("click",function(){const c=t.CHM(e).index;return t.oxw().removeChild(c)}),t.qZA()(),t.TgZ(6,"img",43),t.NdJ("click",function(){const c=t.CHM(e).index;return t.oxw().changeImgChild(c)}),t.qZA()()}if(2&n){const e=a.$implicit,i=a.index;t.xp6(2),t.MGl("id","change-image-child-",i,""),t.xp6(2),t.hij("Image ",i+1,""),t.xp6(2),t.s9C("src",e,t.LSH),t.s9C("id",i)}}let B=(()=>{class n{constructor(e,i,r){this.service=e,this.route=i,this.router=r,this.checkImg=!1,this.imageMain="",this.image_child=[],this.data=new p.x,this.formData=new o.cw({name:new o.NI("",o.kI.required),price:new o.NI("",o.kI.required),id:new o.NI(""),sale_price:new o.NI(""),image:new o.NI(""),image_child:new o.NI([]),category_id:new o.NI([]),new:new o.NI(!1),sale:new o.NI(!1),feature:new o.NI(!1)})}ngOnInit(){this.service.getCategory().subscribe(i=>{this.listCategory=i}),this.service.getItem(this.route.snapshot.params.id).subscribe(i=>{this.formData.patchValue(i),console.log(this.formData.value.image),this.imageMain=this.formData.value.image,this.image_child=this.formData.value.image_child,this.formData.value.category_id.forEach(r=>{document.getElementById(r).checked=!0})})}submitForm(){this.formData.value.image?(this.data.id=this.formData.value.id,this.data.name=this.formData.value.name,this.data.feature=this.formData.value.feature,this.data.price=this.formData.value.price,this.data.sale=this.formData.value.sale,this.data.sale_price=this.formData.value.sale_price,this.data.new=this.formData.value.new,this.data.image_child=this.formData.value.image_child,this.data.category_id=this.formData.value.category_id,this.data.image=this.formData.value.image,this.service.putProduct(this.data).subscribe(()=>{console.log(this.data)}),alert("Done"),this.router.navigate(["/admin/products"])):this.checkImg=!0}changeImg(e){const i=new FileReader;i.readAsDataURL(e.target.files[0]),i.onload=()=>{this.imageMain=i.result,this.formData.value.image=this.imageMain,console.log(this.formData.value.image)}}AddImgChild(e){let i=e.target.files;if(console.log(e),i[0]){let r=new FileReader;r.readAsDataURL(i[0]),r.onload=()=>{this.formData.value.image_child.push(r.result),this.formData.value.image_child=this.image_child}}}changeImgChild(e){let i=document.getElementById("change-image-child-"+e);e>=0&&(console.log(e),null==i||i.click(),null==i||i.addEventListener("change",r=>{console.log(e);let c=r.target.files;if(c[0]){let s=new FileReader;s.readAsDataURL(c[0]),s.onload=()=>{this.formData.value.image_child[e]=s.result,this.image_child[e]=this.formData.value.image_child[e]}}}))}removeChild(e){confirm("Are you remove ?")&&this.image_child.splice(e,1)}changeCategory(e){if(document.getElementById(e).checked)this.formData.value.category_id.push(e);else{let r=this.formData.value.category_id.findIndex(c=>{});this.formData.value.category_id.splice(r,1)}}get f(){return this.formData.controls}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.D),t.Y36(d.gz),t.Y36(d.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-edit-product"]],decls:67,vars:9,consts:[[1,"container"],[1,"header","d-flex","justify-content-sb"],["type","button","routerLink","/admin/products",1,"btn","btn-success","text-light","m-2",2,"text-transform","capitalize","font-size","18px"],[1,"fa-solid","fa-rotate-left"],["action","",3,"formGroup"],[1,"input-item","mb-3"],["for","",1,"d-block","mb-1"],["type","text","formControlName","name",1,"ip-addProduct","w-100","p-2"],["class","text-danger",4,"ngIf"],["type","number","formControlName","price",1,"ip-addProduct","w-100","p-2"],["type","number","formControlName","sale_price",1,"ip-addProduct","w-100","p-2"],[1,"category-list","d-flex","wrap"],["class","category-item col-lg-3",4,"ngFor","ngForOf"],[1,"tag-list","d-flex","wrap"],[1,"tag-item","col-lg-3"],["type","checkbox","name","","id","tag1","formControlName","new","value","1",1,"mr-2"],["for","tag1",2,"text-transform","capitalize","font-size","18px"],["type","checkbox","name","","id","tag2","formControlName","sale",1,"mr-2"],["for","tag2",2,"text-transform","capitalize","font-size","18px"],["type","checkbox","name","","id","tag3","formControlName","feature",1,"mr-2"],["for","tag3",2,"text-transform","capitalize","font-size","18px"],[1,"input-group"],["for","",1,"d-block","w-100"],[1,"custom-file"],["type","file","id","inputGroupFile04",1,"custom-file-input",3,"change"],["for","inputGroupFile04",1,"custom-file-label"],["alt","",2,"max-width","50%","max-height","200px",3,"src"],["id","child",1,"input-item","mb-3"],["type","file","data-id","change","id","change-image-child",1,"custom-file-input",3,"change"],["for","change-image-child",1,"custom-file-label"],[1,"showImage","d-flex","mt-4","wrap"],["class","image-child-item col-lg-3","style","border: 1px solid #ccc;",4,"ngFor","ngForOf"],[1,"submit","text-center",2,"margin-bottom","100px"],["type","submit",1,"btn","btn-success","w-100","p-2",2,"font-weight","600",3,"disabled","click"],[1,"text-danger"],[4,"ngIf"],[1,"category-item","col-lg-3"],["type","checkbox",1,"category_id","mr-2",3,"name","id","change"],[2,"text-transform","capitalize","font-size","18px",3,"for"],[1,"image-child-item","col-lg-3",2,"border","1px solid #ccc"],[1,"head-img","d-flex","justify-content-sb","align-items-ct"],["type","file","data-id","change",1,"custom-file-input",3,"id"],[1,"fa-solid","fa-xmark",2,"font-size","14px","margin-top","8px","cursor","pointer",3,"click"],["alt","",2,"max-width","100%","max-height","200px","cursor","pointer",3,"src","id","click"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3"),t._uU(3,"Edit Product"),t.qZA(),t.TgZ(4,"button",2),t._UZ(5,"i",3),t._uU(6," Back To List "),t.qZA()(),t.TgZ(7,"form",4)(8,"div",5)(9,"label",6),t._uU(10,"Name Product"),t.qZA(),t._UZ(11,"input",7),t.YNc(12,z,2,1,"div",8),t.qZA(),t.TgZ(13,"div",5)(14,"label",6),t._uU(15,"Price"),t.qZA(),t._UZ(16,"input",9),t.YNc(17,j,2,1,"div",8),t.qZA(),t.TgZ(18,"div",5)(19,"label",6),t._uU(20,"Sale Price"),t.qZA(),t._UZ(21,"input",10),t.YNc(22,H,2,0,"small",8),t.qZA(),t.TgZ(23,"div",5)(24,"p"),t._uU(25,"Category"),t.qZA(),t.TgZ(26,"div",11),t.YNc(27,S,4,4,"div",12),t.qZA()(),t.TgZ(28,"div",5)(29,"p"),t._uU(30,"Tags"),t.qZA(),t.TgZ(31,"div",13)(32,"div",14),t._UZ(33,"input",15),t.TgZ(34,"label",16),t._uU(35,"New"),t.qZA()(),t.TgZ(36,"div",14),t._UZ(37,"input",17),t.TgZ(38,"label",18),t._uU(39,"Sale"),t.qZA()(),t.TgZ(40,"div",14),t._UZ(41,"input",19),t.TgZ(42,"label",20),t._uU(43,"Feature"),t.qZA()()()(),t.TgZ(44,"div",5)(45,"div",21)(46,"label",22),t._uU(47,"Image Main"),t.qZA(),t.TgZ(48,"div",23)(49,"input",24),t.NdJ("change",function(c){return i.changeImg(c)}),t.qZA(),t.TgZ(50,"label",25),t._uU(51,"Choose file"),t.qZA()()(),t.YNc(52,R,3,0,"div",8),t._UZ(53,"img",26),t.qZA(),t.TgZ(54,"div",27)(55,"div",21)(56,"label",22),t._uU(57,"Image Child"),t.qZA(),t.TgZ(58,"div",23)(59,"input",28),t.NdJ("change",function(c){return i.AddImgChild(c)}),t.qZA(),t.TgZ(60,"label",29),t._uU(61,"Choose file"),t.qZA()()(),t.TgZ(62,"div",30),t.YNc(63,G,7,4,"div",31),t.qZA()(),t.TgZ(64,"div",32)(65,"button",33),t.NdJ("click",function(){return i.submitForm()}),t._uU(66,"Update Product"),t.qZA()()()()),2&e&&(t.xp6(7),t.Q6J("formGroup",i.formData),t.xp6(5),t.Q6J("ngIf",i.f.name.invalid&&(i.f.name.dirty||i.f.name.touched)),t.xp6(5),t.Q6J("ngIf",i.f.price.invalid&&(i.f.price.dirty||i.f.price.touched)),t.xp6(5),t.Q6J("ngIf",i.formData.value.price<i.formData.value.sale_price),t.xp6(5),t.Q6J("ngForOf",i.listCategory),t.xp6(25),t.Q6J("ngIf",i.checkImg),t.xp6(1),t.s9C("src",i.imageMain,t.LSH),t.xp6(10),t.Q6J("ngForOf",i.image_child),t.xp6(2),t.Q6J("disabled",!i.formData.valid))},directives:[d.rH,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,l.O5,o.wV,l.sg,o.Wl],styles:[".justify-content-sb[_ngcontent-%COMP%]{justify-content:space-between}.wrap[_ngcontent-%COMP%]{flex-wrap:wrap}.input-item[_ngcontent-%COMP%]{font-size:18px}"]}),n})();function X(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"tr",5)(1,"td",6),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._UZ(10,"img",7),t.qZA(),t.TgZ(11,"td")(12,"button",8),t._UZ(13,"i",9),t.qZA(),t.TgZ(14,"button",10),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw().deleteStudent(c.id)}),t._UZ(15,"i",11),t.qZA()()()}if(2&n){const e=a.$implicit,i=a.index;t.xp6(2),t.Oqu(i+1),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.hij("",e.price,"$"),t.xp6(2),t.hij("",e.sale_price,"$"),t.xp6(2),t.s9C("src",e.image,t.LSH),t.xp6(2),t.MGl("routerLink","/admin/edit-product/",e.id,"")}}const W=[{path:"",component:C,children:[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:7,vars:0,consts:[[1,""],[1,"d-flex","align-items-center"],[1,"col-lg-6"],["src","https://www.nldc.evn.vn/newsg/1/87/Tong-quan-ve-phu-tai-dien-trong-he-thong-dien-Quoc-gia/ImageHandler.aspx?image=%2FAdmin%2FUserFile%2FImages%2FNews%2F2013%2Ftang%20truong.jpg&fbclid=IwAR1QC_H3k9C-c7CQruh-r87A_A4TgPIWQux4Pjtv6goRxWT9IazmwvmRiZ8","alt","",1,"card-img"],["src","https://lambanner.com/wp-content/uploads/2016/09/lambanner_dich-vu-thiet-ke-banner-1130x570.png?fbclid=IwAR3oKwMk2rjclmnQ9LAGPzzkLVpiLKcwkSYY7x4SJQ1OJA_s5Mo8l8gjEJ8","alt","",1,"card-img"]],template:function(e,i){1&e&&(t.TgZ(0,"h2",0),t._uU(1,"Home"),t.qZA(),t.TgZ(2,"div",1)(3,"div",2),t._UZ(4,"img",3),t.qZA(),t.TgZ(5,"div",2),t._UZ(6,"img",4),t.qZA()())},styles:[""]}),n})()},{path:"products",component:(()=>{class n{constructor(e){this.service=e}ngOnInit(){this.service.getAll().subscribe(e=>{this.list=e})}deleteStudent(e){confirm("Are you delete ?")&&this.service.deleteProduct(e).subscribe(()=>{this.service.getAll().subscribe(i=>{this.list=i})})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.D))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-list-product"]],decls:23,vars:1,consts:[[1,"d-flex","mb-2",2,"justify-content","space-between"],["type","button","routerLink","/admin/add-product",1,"btn","btn-warning","text-light","m-2"],[1,"fa-solid","fa-plus","mr-1"],[1,"table"],["class","",4,"ngFor","ngForOf"],[1,""],["scope","row"],["alt","",2,"max-width","100px","max-height","80px",3,"src"],["type","button",1,"btn","btn-primary","mr-1",3,"routerLink"],[1,"fa-solid","fa-pen-to-square"],["type","button",1,"btn","btn-danger",3,"click"],[1,"fa-solid","fa-trash-can"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"List Products"),t.qZA(),t.TgZ(3,"button",1),t._UZ(4,"i",2),t._uU(5,"New"),t.qZA()(),t.TgZ(6,"table",3)(7,"thead")(8,"tr")(9,"th"),t._uU(10,"Serial"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Name"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Price"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Sale-Price"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"Image"),t.qZA(),t.TgZ(19,"th"),t._uU(20,"Status"),t.qZA()()(),t.TgZ(21,"tbody"),t.YNc(22,X,16,6,"tr",4),t.qZA()()),2&e&&(t.xp6(22),t.Q6J("ngForOf",i.list))},directives:[d.rH,l.sg],styles:[""]}),n})()},{path:"category",component:J},{path:"add-product",component:D},{path:"add-category",component:A},{path:"edit-category/:id",component:E},{path:"edit-product/:id",component:B}]}];let V=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[d.Bz.forChild(W)],d.Bz]}),n})(),K=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez,V,o.u5,o.UX]]}),n})()}}]);