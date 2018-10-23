(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{jETr:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=t("tct4"),o=t("67Y/"),a=t("t9fZ"),r=Object.assign||function(n){for(var l,t=1,e=arguments.length;t<e;t++)for(var u in l=arguments[t])Object.prototype.hasOwnProperty.call(l,u)&&(n[u]=l[u]);return n},i=function(){function n(n){this.afs=n,this.serviceUrl="students"}return n.prototype.create=function(n){var l=r({},n,{createdAt:new Date,updatedAt:new Date});return this.afs.collection(this.serviceUrl).add(r({},l))},n.prototype.getAll=function(){return this.afs.collection(this.serviceUrl,function(n){return n.orderBy("createdAt")}).snapshotChanges().pipe(Object(a.a)(1),Object(o.a)(function(n){return n.map(function(n){var l=n.payload.doc.data();return r({id:n.payload.doc.id},l)})}))},n.prototype.get=function(n){return this.afs.doc(this.serviceUrl+"/"+n).valueChanges().pipe(Object(a.a)(1),Object(o.a)(function(l){return r({},l,{id:n})}))},n.prototype.getPaginatedStartAfter=function(n,l,t){return void 0===n&&(n="asc"),this.afs.collection(this.serviceUrl,function(e){return e.orderBy("createdAt",n).limit(l).startAfter(t)}).snapshotChanges().pipe(Object(o.a)(function(l){return"asc"===n&&l.reverse(),l.map(function(n){var l=n.payload.doc.data();return r({id:n.payload.doc.id},l)})}))},n.prototype.getDateBetween=function(n,l,t,e){return void 0===l&&(l="asc"),this.afs.collection(this.serviceUrl,function(u){return u.orderBy(n,l).startAt(t).endAt(e)}).snapshotChanges().pipe(Object(o.a)(function(n){return n.map(function(n){var l=n.payload.doc.data();return r({id:n.payload.doc.id},l)})}))},n.prototype.update=function(n,l){return delete l.id,this.afs.doc(this.serviceUrl+"/"+n).update(r({},l,{updatedAt:new Date}))},n.prototype.delete=function(n){return this.afs.doc(this.serviceUrl+"/"+n).delete()},n.ngInjectableDef=e.W({factory:function(){return new n(e.Aa(u.a))},token:n,providedIn:"root"}),n}(),s=Object.assign||function(n){for(var l,t=1,e=arguments.length;t<e;t++)for(var u in l=arguments[t])Object.prototype.hasOwnProperty.call(l,u)&&(n[u]=l[u]);return n},c=function(){function n(n){this.meta=n}return n.prototype.generateTags=function(n){n=s({title:"Angular <3 Linkbots",description:"My SEO friendly Angular Component",image:"https://i.imgur.com/5fVjb2W.png",slug:""},n),this.meta.updateTag({name:"twitter:card",content:"summary"}),this.meta.updateTag({name:"twitter:site",content:"@angularfirebase"}),this.meta.updateTag({name:"twitter:title",content:n.title}),this.meta.updateTag({name:"twitter:description",content:n.description}),this.meta.updateTag({name:"twitter:image",content:n.image}),this.meta.updateTag({property:"og:type",content:"article"}),this.meta.updateTag({property:"og:site_name",content:"AngularFirebase"}),this.meta.updateTag({property:"og:title",content:n.title}),this.meta.updateTag({property:"og:description",content:n.description}),this.meta.updateTag({property:"og:image",content:n.image}),this.meta.updateTag({property:"og:url",content:"https://instafire-app.firebaseapp.com/"+n.slug})},n}(),d=function(){function n(n,l,t){this.router=n,this.seo=l,this.studentService=t,this.showBusy=!1}return n.prototype.ngOnInit=function(){this.seo.generateTags({title:"Contact Page",description:"Contact me through this awesome search engine optimized Angular component",image:"https://i.imgur.com/5fVjb2W.png",slug:"contact-page"})},n.prototype.onCreate=function(n){var l=this;console.log(n),this.studentService.create(n).then(function(n){l.showBusy=!1,l.router.navigate(["/"])})},n}(),g=function(){},p=t("pMnS"),f=t("ZYCi"),m=t("Ip0R"),b=t("gIcY"),h=function(){function n(n){this.fb=n,this.create=new e.n,this.mouseoverShifting=!1,this.form=this.fb.group({date:[new Date,b.p.required],name:["",b.p.required],phone:["",[b.p.required,b.p.pattern("^01[3-9][ ]?[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{3}$")]]})}return n.prototype.ngOnChanges=function(){},n.prototype.saveSession=function(){this.create.emit(this.form.value),this.form.reset()},n}(),v=e.Ra({encapsulation:0,styles:[[".student[_ngcontent-%COMP%]{background-color:#fff;border-radius:4px;box-shadow:0 2px 4px rgba(0,0,0,.1)!important}.student-head[_ngcontent-%COMP%]{color:#333;background-color:#eef2f9;width:100%;height:88px;padding-top:20px;font-size:28px}.student-form[_ngcontent-%COMP%]{padding:15px}"]],data:{}});function y(n){return e.jb(0,[(n()(),e.Ta(0,0,null,null,1,"small",[["class","text-danger"]],null,null,null,null,null)),(n()(),e.ib(-1,null,["Name required"]))],null,null)}function T(n){return e.jb(0,[(n()(),e.Ta(0,0,null,null,4,"small",[["class","text-danger"]],null,null,null,null,null)),(n()(),e.Ta(1,0,null,null,1,"div",[],[[8,"hidden",0]],null,null,null,null)),(n()(),e.ib(-1,null,["Phone number required"])),(n()(),e.Ta(3,0,null,null,1,"div",[],[[8,"hidden",0]],null,null,null,null)),(n()(),e.ib(-1,null,["Phone number format 01934953023"]))],null,function(n,l){var t=l.component;n(l,1,0,!t.form.controls.phone.errors.required),n(l,3,0,!t.form.controls.phone.errors.pattern)})}function C(n){return e.jb(0,[(n()(),e.Ta(0,0,null,null,42,"div",[["class","student"]],null,[[null,"mouseleave"]],function(n,l,t){var e=!0;return"mouseleave"===l&&(e=0!=(n.component.mouseoverShifting=!1)&&e),e},null,null)),(n()(),e.Ta(1,0,null,null,6,"div",[["class","student-head text-center"]],null,null,null,null,null)),(n()(),e.Ta(2,0,null,null,2,"a",[["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.db(n,3).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e.Sa(3,671744,null,0,f.m,[f.k,f.a,m.h],{routerLink:[0,"routerLink"]},null),(n()(),e.Ta(4,0,null,null,0,"img",[["alt","logo"],["src","assets/images/logo.png"],["style","height: 50px; width: 50px;"]],null,null,null,null,null)),(n()(),e.Ta(5,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),e.ib(-1,null,["Mon IT Bd "])),(n()(),e.ib(-1,null,["Student Register"])),(n()(),e.Ta(8,0,null,null,34,"form",[["class","student-form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,t){var u=!0,o=n.component;return"submit"===l&&(u=!1!==e.db(n,10).onSubmit(t)&&u),"reset"===l&&(u=!1!==e.db(n,10).onReset()&&u),"ngSubmit"===l&&(u=!1!==o.saveSession()&&u),u},null,null)),e.Sa(9,16384,null,0,b.r,[],null,null),e.Sa(10,540672,null,0,b.f,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.fb(2048,null,b.b,null,[b.f]),e.Sa(12,16384,null,0,b.m,[[4,b.b]],null,null),(n()(),e.Ta(13,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),e.Ta(14,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),e.ib(-1,null,["Name"])),(n()(),e.Ta(16,0,null,null,5,"input",[["class","form-control"],["formControlName","name"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var u=!0;return"input"===l&&(u=!1!==e.db(n,17)._handleInput(t.target.value)&&u),"blur"===l&&(u=!1!==e.db(n,17).onTouched()&&u),"compositionstart"===l&&(u=!1!==e.db(n,17)._compositionStart()&&u),"compositionend"===l&&(u=!1!==e.db(n,17)._compositionEnd(t.target.value)&&u),u},null,null)),e.Sa(17,16384,null,0,b.c,[e.G,e.l,[2,b.a]],null,null),e.fb(1024,null,b.j,function(n){return[n]},[b.c]),e.Sa(19,671744,null,0,b.e,[[3,b.b],[8,null],[8,null],[6,b.j],[2,b.t]],{name:[0,"name"]},null),e.fb(2048,null,b.k,null,[b.e]),e.Sa(21,16384,null,0,b.l,[[4,b.k]],null,null),(n()(),e.Ka(16777216,null,null,1,null,y)),e.Sa(23,16384,null,0,m.k,[e.S,e.P],{ngIf:[0,"ngIf"]},null),(n()(),e.Ta(24,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),e.Ta(25,0,null,null,1,"label",[["for","treatments"]],null,null,null,null,null)),(n()(),e.ib(-1,null,["Phone"])),(n()(),e.Ta(27,0,null,null,7,"input",[["class","form-control"],["formControlName","phone"],["maxlength","11"],["placeholder","Phone"]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var u=!0;return"input"===l&&(u=!1!==e.db(n,28)._handleInput(t.target.value)&&u),"blur"===l&&(u=!1!==e.db(n,28).onTouched()&&u),"compositionstart"===l&&(u=!1!==e.db(n,28)._compositionStart()&&u),"compositionend"===l&&(u=!1!==e.db(n,28)._compositionEnd(t.target.value)&&u),u},null,null)),e.Sa(28,16384,null,0,b.c,[e.G,e.l,[2,b.a]],null,null),e.Sa(29,540672,null,0,b.h,[],{maxlength:[0,"maxlength"]},null),e.fb(1024,null,b.i,function(n){return[n]},[b.h]),e.fb(1024,null,b.j,function(n){return[n]},[b.c]),e.Sa(32,671744,null,0,b.e,[[3,b.b],[6,b.i],[8,null],[6,b.j],[2,b.t]],{name:[0,"name"]},null),e.fb(2048,null,b.k,null,[b.e]),e.Sa(34,16384,null,0,b.l,[[4,b.k]],null,null),(n()(),e.Ka(16777216,null,null,1,null,T)),e.Sa(36,16384,null,0,m.k,[e.S,e.P],{ngIf:[0,"ngIf"]},null),(n()(),e.Ta(37,0,null,null,5,"div",[["class","d-flex flex-row-reverse bd-highlight"]],null,null,null,null,null)),(n()(),e.Ta(38,0,null,null,4,"span",[],null,[[null,"mouseenter"]],function(n,l,t){var e=!0;return"mouseenter"===l&&(e=0!=(n.component.mouseoverShifting=!0)&&e),e},null,null)),(n()(),e.Ta(39,0,null,null,3,"button",[["class","btn btn-primary"],["type","submit"]],null,null,null,null,null)),e.Sa(40,278528,null,0,m.i,[e.v,e.w,e.l,e.G],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.eb(41,{disabled:0}),(n()(),e.ib(-1,null,["Register"]))],function(n,l){var t=l.component;n(l,3,0,"/"),n(l,10,0,t.form),n(l,19,0,"name"),n(l,23,0,(null==t.form.controls.name.errors?null:t.form.controls.name.errors.required)&&(t.form.controls.name.dirty||t.mouseoverShifting)),n(l,29,0,"11"),n(l,32,0,"phone"),n(l,36,0,t.form.controls.phone.errors&&(t.form.controls.phone.touched||t.mouseoverShifting)),n(l,40,0,"btn btn-primary",n(l,41,0,t.form.invalid))},function(n,l){n(l,2,0,e.db(l,3).target,e.db(l,3).href),n(l,8,0,e.db(l,12).ngClassUntouched,e.db(l,12).ngClassTouched,e.db(l,12).ngClassPristine,e.db(l,12).ngClassDirty,e.db(l,12).ngClassValid,e.db(l,12).ngClassInvalid,e.db(l,12).ngClassPending),n(l,16,0,e.db(l,21).ngClassUntouched,e.db(l,21).ngClassTouched,e.db(l,21).ngClassPristine,e.db(l,21).ngClassDirty,e.db(l,21).ngClassValid,e.db(l,21).ngClassInvalid,e.db(l,21).ngClassPending),n(l,27,0,e.db(l,29).maxlength?e.db(l,29).maxlength:null,e.db(l,34).ngClassUntouched,e.db(l,34).ngClassTouched,e.db(l,34).ngClassPristine,e.db(l,34).ngClassDirty,e.db(l,34).ngClassValid,e.db(l,34).ngClassInvalid,e.db(l,34).ngClassPending)})}var S=e.Ra({encapsulation:0,styles:[[".student-reg[_ngcontent-%COMP%]{min-height:100vh;background-color:#f5f6f7}.student-reg-form[_ngcontent-%COMP%]{padding-top:100px}.message[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;padding:30px;font-size:22px;font-weight:500}.message[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 10px 0 0}"]],data:{}});function w(n){return e.jb(0,[(n()(),e.Ta(0,0,null,null,2,"div",[["class",""]],null,null,null,null,null)),(n()(),e.Ta(1,0,null,null,1,"reg-form",[],null,[[null,"create"]],function(n,l,t){var e=!0;return"create"===l&&(e=!1!==n.component.onCreate(t)&&e),e},C,v)),e.Sa(2,573440,null,0,h,[b.d],null,{create:"create"})],null,null)}function j(n){return e.jb(0,[(n()(),e.Ta(0,0,null,null,2,"div",[["class","message"]],null,null,null,null,null)),(n()(),e.Ta(1,0,null,null,0,"i",[["class","fa fa-refresh"]],null,null,null,null,null)),(n()(),e.ib(-1,null,["\xa0 Information sending ... "]))],null,null)}function k(n){return e.jb(0,[(n()(),e.Ta(0,0,null,null,6,"div",[["class","student-reg"]],null,null,null,null,null)),(n()(),e.Ta(1,0,null,null,5,"div",[["class","container"]],null,null,null,null,null)),(n()(),e.Ta(2,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(n()(),e.Ta(3,0,null,null,3,"div",[["class","offset-md-3 col-md-6 student-reg-form"]],null,null,null,null,null)),(n()(),e.Ka(16777216,null,null,1,null,w)),e.Sa(5,16384,null,0,m.k,[e.S,e.P],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),e.Ka(0,[["loading",2]],null,0,null,j))],function(n,l){n(l,5,0,!l.component.showBusy,e.db(l,6))},null)}var x=e.Pa("app-student-reg",d,function(n){return e.jb(0,[(n()(),e.Ta(0,0,null,null,1,"app-student-reg",[],null,null,null,k,S)),e.Sa(1,114688,null,0,d,[f.k,c,i],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),P=t("ZYjt"),O=function(){};t.d(l,"StudentModuleNgFactory",function(){return I});var I=e.Qa(g,[],function(n){return e.ab([e.bb(512,e.k,e.Fa,[[8,[p.a,x]],[3,e.k],e.A]),e.bb(4608,m.m,m.l,[e.x,[2,m.y]]),e.bb(4608,i,i,[u.a]),e.bb(4608,c,c,[P.h]),e.bb(4608,b.s,b.s,[]),e.bb(4608,b.d,b.d,[]),e.bb(1073742336,m.b,m.b,[]),e.bb(1073742336,O,O,[]),e.bb(1073742336,b.q,b.q,[]),e.bb(1073742336,b.g,b.g,[]),e.bb(1073742336,b.o,b.o,[]),e.bb(1073742336,f.n,f.n,[[2,f.t],[2,f.k]]),e.bb(1073742336,g,g,[]),e.bb(1024,f.i,function(){return[[{path:"reg",component:d},{path:"**",redirectTo:"/"}]]},[])])})}}]);