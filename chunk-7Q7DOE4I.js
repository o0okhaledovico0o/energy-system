import{$ as Z,E as Be,F as Re,I as Ve,N as Ue,O as Fe,P as Ae,Q as K,R as X,T as Y,V as $e,W as We,X as le,Y as se,Z as je,_ as He,a as Te,aa as ee,ba as te,da as ie,ea as Ke,f as Me,fa as Xe,ga as Ye,ha as Je,j as L,ja as Qe,k as g,l as q,m as G,n as Pe,p as De,r as $,s as W,t as j,u as pe,w as H}from"./chunk-GI7UUOGF.js";import{e as Ee}from"./chunk-BYSPJEKG.js";import{i as Oe,j as Le,k as qe,l as Ge,m as J,n as Q,o as me}from"./chunk-3JSZWDKY.js";import{a as ae,b as O,c as Ie}from"./chunk-WRGTXXAV.js";import{Bb as s,Cb as m,Db as we,Eb as T,Ha as v,Hf as A,I as ze,Ja as a,Jf as D,K as he,Kf as oe,Lb as ne,Me as ke,Ne as I,Oa as ve,Oe as E,Qe as M,Ra as _,Re as P,Wa as o,Xa as l,Ya as z,_ as u,a as de,ab as V,ba as y,db as S,fb as R,gc as Ne,ia as x,ib as _e,ja as w,nb as N,pb as d,qb as C,rb as h,tb as Ce,ub as be,vb as Se,wb as re,xb as k,ya as t,yb as ye,yc as U,zb as xe,zc as F}from"./chunk-ZYDLUYJD.js";var Ze=(()=>{let i=class i{constructor(){this.socialService=u(O),this.settingsSrv=u(A),this.type=""}ngOnInit(){this.mockModel()}mockModel(){let r={token:"123456789",name:"cipchk",email:`${this.type}@${this.type}.com`,id:1e4,time:+new Date};this.settingsSrv.setUser(de(de({},this.settingsSrv.user),r)),this.socialService.callback(r)}};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=y({type:i,selectors:[["app-callback"]],inputs:{type:"type"},standalone:!0,features:[re([O]),k],decls:0,vars:0,template:function(n,p){},encapsulation:2});let e=i;return e})();var nt=(()=>{let i=class i{constructor(){this.tokenService=u(ae),this.settings=u(A),this.router=u(U),this.f=new Pe({password:new De("",{nonNullable:!0,validators:[g.required]})})}get user(){return this.settings.user}submit(){this.f.controls.password.markAsDirty(),this.f.controls.password.updateValueAndValidity(),this.f.valid&&(console.log("Valid!"),console.log(this.f.value),this.tokenService.set({token:"123"}),this.router.navigate(["dashboard"]))}};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=y({type:i,selectors:[["passport-lock"]],standalone:!0,features:[k],decls:15,vars:11,consts:[[1,"ant-card","width-lg",2,"margin","0 auto"],[1,"ant-card-body"],[1,"avatar"],["nzIcon","user","nzSize","large",3,"nzSrc"],["nz-form","","role","form",1,"mt-md",3,"ngSubmit","formGroup"],[3,"nzErrorTip"],["nzSuffixIcon","lock"],["type","password","nz-input","","formControlName","password"],["nz-row","","nzType","flex","nzAlign","middle"],["nz-col","",2,"text-align","right",3,"nzOffset","nzSpan"],["nz-button","","nzType","primary",3,"disabled"]],template:function(n,p){n&1&&(o(0,"div",0)(1,"div",1)(2,"div",2),z(3,"nz-avatar",3),l(),o(4,"form",4),S("ngSubmit",function(){return p.submit()}),o(5,"nz-form-item")(6,"nz-form-control",5),s(7,"i18n"),o(8,"nz-input-group",6),z(9,"input",7),l()()(),o(10,"div",8)(11,"div",9)(12,"button",10),d(13),s(14,"i18n"),l()()()()()()),n&2&&(t(3),a("nzSrc",p.user.avatar),t(),a("formGroup",p.f),t(2),a("nzErrorTip",m(7,7,"validation.password.required")),t(5),a("nzOffset",12)("nzSpan",12),t(),a("disabled",!p.f.valid),t(),C(m(14,9,"app.lock")))},dependencies:[H,$,L,q,G,W,j,D,He,je,ie,Q,J,ee,Z,te,me,P,M,I,E,Y,K,X],styles:["[_nghost-%COMP%]     .ant-card-body{position:relative;margin-top:80px}[_nghost-%COMP%]     .avatar{position:absolute;top:-20px;left:50%;margin-left:-20px}"]});let e=i;return e})();function dt(e,i){if(e&1&&z(0,"nz-alert",4),e&2){let c=R();a("nzType","error")("nzMessage",c.error)("nzShowIcon",!0)}}function ut(e,i){e&1&&(d(0),s(1,"i18n")),e&2&&h(" ",m(1,1,"validation.phone-number.required")," ")}function ft(e,i){e&1&&(d(0),s(1,"i18n")),e&2&&h(" ",m(1,1,"validation.phone-number.wrong-format")," ")}function gt(e,i){if(e&1&&v(0,ut,2,3)(1,ft,2,3),e&2){let c=i.$implicit;_(0,c.errors.required?0:-1),t(),_(1,c.errors.pattern?1:-1)}}var ot=(()=>{let i=class i{constructor(){this.router=u(U),this.settingsService=u(A),this.socialService=u(O),this.reuseTabService=u(Ge,{optional:!0}),this.tokenService=u(ae),this.startupSrv=u(Me),this.http=u(oe),this.cdr=u(ne),this.form=u(pe).nonNullable.group({userName:["",[g.required,g.pattern(/^(admin|user)$/)]],password:["",[g.required,g.pattern(/^(admin|user)$/)]],mobile:["",[g.required,g.pattern(/^1\d{10}$/)]],captcha:["",[g.required]],remember:[!0]}),this.error="",this.type=0,this.loading=!1,this.count=0}switch({index:r}){this.type=r}getCaptcha(){let r=this.form.controls.mobile;if(r.invalid){r.markAsDirty({onlySelf:!0}),r.updateValueAndValidity({onlySelf:!0});return}this.count=59,this.interval$=setInterval(()=>{this.count-=1,this.count<=0&&clearInterval(this.interval$)},1e3)}submit(){if(this.error="",this.type===0){let{userName:r,password:n}=this.form.controls;if(r.markAsDirty(),r.updateValueAndValidity(),n.markAsDirty(),n.updateValueAndValidity(),r.invalid||n.invalid)return}else{let{mobile:r,captcha:n}=this.form.controls;if(r.markAsDirty(),r.updateValueAndValidity(),n.markAsDirty(),n.updateValueAndValidity(),r.invalid||n.invalid)return}this.loading=!0,this.cdr.detectChanges(),this.tokenService.set({token:"123456789"}),this.startupSrv.load().pipe(ze(1e3)).subscribe(()=>{let r=this.tokenService.referrer.url||"/";r.includes("/passport")&&(r="/"),this.router.navigateByUrl(r)})}open(r,n="href"){let p="",f="";switch(Te.production?f=`https://ng-alain.github.io/ng-alain/#/passport/callback/${r}`:f=`http://localhost:4200/#/passport/callback/${r}`,r){case"auth0":p=`//cipchk.auth0.com/login?client=8gcNydIDzGBYxzqV0Vm1CX_RXH-wsWo5&redirect_uri=${decodeURIComponent(f)}`;break;case"github":p=`//github.com/login/oauth/authorize?client_id=9d6baae4b04a23fcafa2&response_type=code&redirect_uri=${decodeURIComponent(f)}`;break;case"weibo":p=`https://api.weibo.com/oauth2/authorize?client_id=1239507802&response_type=code&redirect_uri=${decodeURIComponent(f)}`;break}n==="window"?this.socialService.login(p,"/",{type:"window"}).subscribe(b=>{b&&(this.settingsService.setUser(b),this.router.navigateByUrl("/"))}):this.socialService.login(p,"/",{type:"href"})}ngOnDestroy(){this.interval$&&clearInterval(this.interval$)}};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=y({type:i,selectors:[["passport-login"]],standalone:!0,features:[re([O]),k],decls:45,vars:33,consts:[["mobileErrorTip",""],["nz-form","","role","form",3,"ngSubmit","formGroup"],[1,"tabs",3,"nzSelectChange","nzAnimated"],[3,"nzTitle"],[1,"mb-lg",3,"nzType","nzMessage","nzShowIcon"],["nzErrorTip","Please enter mobile number, muse be: admin or user"],["nzSize","large","nzPrefixIcon","user"],["nz-input","","formControlName","userName","placeholder","username: admin or user"],["nzErrorTip","Please enter password, muse be: admin"],["nzSize","large","nzPrefixIcon","lock"],["nz-input","","type","password","formControlName","password","placeholder","password: admin"],[3,"nzErrorTip"],["nz-input","","formControlName","mobile","placeholder","mobile number"],[3,"nzGutter"],[3,"nzSpan"],["nzSize","large","nzPrefixIcon","mail"],["nz-input","","formControlName","captcha","placeholder","captcha"],["type","button","nz-button","","nzSize","large","nzBlock","",3,"click","disabled","nzLoading"],["nz-checkbox","","formControlName","remember"],[1,"text-right",3,"nzSpan"],["routerLink","/passport/register",1,"forgot"],["nz-button","","type","submit","nzType","primary","nzSize","large","nzBlock","",3,"nzLoading"]],template:function(n,p){if(n&1){let f=V();o(0,"form",1),S("ngSubmit",function(){return x(f),w(p.submit())}),o(1,"nz-tabset",2),S("nzSelectChange",function(B){return x(f),w(p.switch(B))}),o(2,"nz-tab",3),s(3,"i18n"),v(4,dt,1,3,"nz-alert",4),o(5,"nz-form-item")(6,"nz-form-control",5)(7,"nz-input-group",6),z(8,"input",7),l()()(),o(9,"nz-form-item")(10,"nz-form-control",8)(11,"nz-input-group",9),z(12,"input",10),l()()()(),o(13,"nz-tab",3),s(14,"i18n"),o(15,"nz-form-item")(16,"nz-form-control",11)(17,"nz-input-group",6),z(18,"input",12),l(),v(19,gt,2,2,"ng-template",null,0,T),l()(),o(21,"nz-form-item")(22,"nz-form-control",11),s(23,"i18n"),o(24,"nz-row",13)(25,"nz-col",14)(26,"nz-input-group",15),z(27,"input",16),l()(),o(28,"nz-col",14)(29,"button",17),S("click",function(){return x(f),w(p.getCaptcha())}),d(30),s(31,"i18n"),l()()()()()()(),o(32,"nz-form-item")(33,"nz-col",14)(34,"label",18),d(35),s(36,"i18n"),l()(),o(37,"nz-col",19)(38,"a",20),d(39),s(40,"i18n"),l()()(),o(41,"nz-form-item")(42,"button",21),d(43),s(44,"i18n"),l()()()}if(n&2){let f=N(20);a("formGroup",p.form),t(),a("nzAnimated",!1),t(),a("nzTitle",m(3,19,"app.login.tab-login-credentials")),t(2),_(4,p.error?4:-1),t(9),a("nzTitle",m(14,21,"app.login.tab-login-mobile")),t(3),a("nzErrorTip",f),t(6),a("nzErrorTip",m(23,23,"validation.verification-code.required")),t(2),a("nzGutter",8),t(),a("nzSpan",16),t(3),a("nzSpan",8),t(),a("disabled",p.count>=0)("nzLoading",p.loading),t(),h(" ",p.count?p.count+"s":m(31,25,"app.register.get-verification-code")," "),t(3),a("nzSpan",12),t(2),C(m(36,27,"app.login.remember-me")),t(2),a("nzSpan",12),t(2),C(m(40,29,"app.login.forgot-password")),t(3),a("nzLoading",p.loading),t(),h(" ",m(44,31,"app.login.login")," ")}},dependencies:[F,H,$,L,q,G,W,j,D,Re,Be,qe,Le,Oe,se,le,ie,Q,J,ee,Z,te,Y,K,X,P,M,I,E,Ve,ke],styles:["[_nghost-%COMP%]{display:block;width:368px;margin:0 auto}[_nghost-%COMP%]     .ant-tabs .ant-tabs-bar{margin-bottom:24px;text-align:center;border-bottom:0}[_nghost-%COMP%]     .ant-tabs-tab{font-size:16px;line-height:24px}[_nghost-%COMP%]     .ant-input-affix-wrapper .ant-input:not(:first-child){padding-left:4px}[_nghost-%COMP%]     .icon{cursor:pointer;margin-left:16px;font-size:24px;color:#0003;vertical-align:middle;transition:color .3s}[_nghost-%COMP%]     .icon:hover{color:#1890ff}[_nghost-%COMP%]     .other{margin-top:24px;line-height:22px;text-align:left}[_nghost-%COMP%]     .other nz-tooltip{vertical-align:middle}[_nghost-%COMP%]     .other .register{float:right}[data-theme=dark]   [_nghost-%COMP%]     .icon{color:#fff3}[data-theme=dark]   [_nghost-%COMP%]     .icon:hover{color:#fff}"],changeDetection:0});let e=i;return e})();function at(e,i){return c=>{let r=c.get(e),n=c.get(i);return n.errors&&!n.errors.matchControl||(r.value!==n.value?n.setErrors({matchControl:!0}):n.setErrors(null)),null}}var zt=()=>({"width.px":240});function ht(e,i){if(e&1&&z(0,"nz-alert",6),e&2){let c=R();a("nzType","error")("nzMessage",c.error)("nzShowIcon",!0)}}function vt(e,i){e&1&&(d(0),s(1,"i18n")),e&2&&h(" ",m(1,1,"validation.email.required")," ")}function _t(e,i){e&1&&(d(0),s(1,"i18n")),e&2&&h(" ",m(1,1,"validation.email.wrong-format")," ")}function Ct(e,i){if(e&1&&v(0,vt,2,3)(1,_t,2,3),e&2){let c=i.$implicit;_(0,c.errors!=null&&c.errors.required?0:-1),t(),_(1,c.errors!=null&&c.errors.email?1:-1)}}function bt(e,i){e&1&&(o(0,"div",26),d(1),s(2,"i18n"),l()),e&2&&(t(),C(m(2,1,"validation.password.strength.strong")))}function St(e,i){e&1&&(o(0,"div",27),d(1),s(2,"i18n"),l()),e&2&&(t(),C(m(2,1,"validation.password.strength.medium")))}function yt(e,i){e&1&&(o(0,"div",28),d(1),s(2,"i18n"),l()),e&2&&(t(),C(m(2,1,"validation.password.strength.short")))}function xt(e,i){if(e&1&&(o(0,"div",23),v(1,bt,3,3)(2,St,3,3)(3,yt,3,3),o(4,"div"),z(5,"nz-progress",24),l(),o(6,"p",25),d(7),s(8,"i18n"),l()()),e&2){let c,r=R();t(),_(1,(c=r.status)==="ok"?1:c==="pass"?2:3),t(3),ve("progress-",r.status,""),t(),a("nzPercent",r.progress)("nzStatus",r.passwordProgressMap[r.status])("nzStrokeWidth",6)("nzShowInfo",!1),t(2),C(m(8,9,"validation.password.strength.msg"))}}function wt(e,i){e&1&&(d(0),s(1,"i18n")),e&2&&h(" ",m(1,1,"validation.confirm-password.required")," ")}function Nt(e,i){e&1&&(d(0),s(1,"i18n")),e&2&&h(" ",m(1,1,"validation.password.twice")," ")}function kt(e,i){if(e&1&&v(0,wt,2,3)(1,Nt,2,3),e&2){let c=i.$implicit;_(0,c.errors!=null&&c.errors.required?0:-1),t(),_(1,c.errors!=null&&c.errors.matchControl?1:-1)}}function Tt(e,i){e&1&&(o(0,"nz-select",29),z(1,"nz-option",30)(2,"nz-option",30),l()),e&2&&(t(),a("nzLabel","+86")("nzValue","+86"),t(),a("nzLabel","+87")("nzValue","+87"))}function It(e,i){e&1&&(d(0),s(1,"i18n")),e&2&&h(" ",m(1,1,"validation.phone-number.required")," ")}function Et(e,i){e&1&&(d(0),s(1,"i18n")),e&2&&h(" ",m(1,1,"validation.phone-number.wrong-format")," ")}function Mt(e,i){if(e&1&&v(0,It,2,3)(1,Et,2,3),e&2){let c=i.$implicit;_(0,c.errors!=null&&c.errors.required?0:-1),t(),_(1,c.errors!=null&&c.errors.pattern?1:-1)}}var pt=(()=>{let i=class i{constructor(){this.router=u(U),this.http=u(oe),this.cdr=u(ne),this.form=u(pe).nonNullable.group({mail:["",[g.required,g.email]],password:["",[g.required,g.minLength(6),i.checkPassword.bind(this)]],confirm:["",[g.required,g.minLength(6)]],mobilePrefix:["+86"],mobile:["",[g.required,g.pattern(/^1\d{10}$/)]],captcha:["",[g.required]]},{validators:at("password","confirm")}),this.error="",this.type=0,this.loading=!1,this.visible=!1,this.status="pool",this.progress=0,this.passwordProgressMap={ok:"success",pass:"normal",pool:"exception"},this.count=0}static checkPassword(r){if(!r)return null;let n=this;n.visible=!!r.value,r.value&&r.value.length>9?n.status="ok":r.value&&r.value.length>5?n.status="pass":n.status="pool",n.visible&&(n.progress=r.value.length*10>100?100:r.value.length*10)}getCaptcha(){let{mobile:r}=this.form.controls;if(r.invalid){r.markAsDirty({onlySelf:!0}),r.updateValueAndValidity({onlySelf:!0});return}this.count=59,this.cdr.detectChanges(),this.interval$=setInterval(()=>{this.count-=1,this.cdr.detectChanges(),this.count<=0&&clearInterval(this.interval$)},1e3)}submit(){if(this.error="",Object.keys(this.form.controls).forEach(n=>{let p=this.form.controls[n];p.markAsDirty(),p.updateValueAndValidity()}),this.form.invalid)return;let r=this.form.value;this.loading=!0,this.cdr.detectChanges(),this.http.post("/register",r,null,{context:new Ne().set(Ie,!0)}).pipe(he(()=>{this.loading=!1,this.cdr.detectChanges()})).subscribe(()=>{this.router.navigate(["passport","register-result"],{queryParams:{email:r.mail}})})}ngOnDestroy(){this.interval$&&clearInterval(this.interval$)}};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=y({type:i,selectors:[["passport-register"]],standalone:!0,features:[k],decls:50,vars:34,consts:[["mailErrorTip",""],["pwdCdkTpl",""],["confirmErrorTip",""],["addOnBeforeTemplate",""],["mobileErrorTip",""],["nz-form","","role","form",3,"ngSubmit","formGroup"],[1,"mb-lg",3,"nzType","nzMessage","nzShowIcon"],[3,"nzErrorTip"],["nzSize","large","nzAddonBeforeIcon","user"],["nz-input","","formControlName","mail","placeholder","Email"],["nzSize","large","nzAddonBeforeIcon","lock","nz-popover","","nzPopoverPlacement","right","nzPopoverTrigger","focus","nzPopoverOverlayClassName","register-password-cdk",3,"nzPopoverVisibleChange","nzPopoverVisible","nzPopoverOverlayStyle","nzPopoverContent"],["nz-input","","type","password","formControlName","password","placeholder","Password"],["nzSize","large","nzAddonBeforeIcon","lock"],["nz-input","","type","password","formControlName","confirm","placeholder","Confirm Password"],["nzSize","large",3,"nzAddOnBefore"],["formControlName","mobile","nz-input","","placeholder","Phone number"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan"],["nzSize","large","nzAddonBeforeIcon","mail"],["nz-input","","formControlName","captcha","placeholder","Captcha"],["type","button","nz-button","","nzSize","large","nzBlock","",3,"click","disabled","nzLoading"],["nz-button","","nzType","primary","nzSize","large","type","submit",1,"submit",3,"nzLoading"],["routerLink","/passport/login",1,"login"],[2,"padding","4px 0"],[3,"nzPercent","nzStatus","nzStrokeWidth","nzShowInfo"],[1,"mt-sm"],[1,"success"],[1,"warning"],[1,"error"],["formControlName","mobilePrefix",2,"width","100px"],[3,"nzLabel","nzValue"]],template:function(n,p){if(n&1){let f=V();o(0,"h3"),d(1),s(2,"i18n"),l(),o(3,"form",5),S("ngSubmit",function(){return x(f),w(p.submit())}),v(4,ht,1,3,"nz-alert",6),o(5,"nz-form-item")(6,"nz-form-control",7)(7,"nz-input-group",8),z(8,"input",9),l(),v(9,Ct,2,2,"ng-template",null,0,T),l()(),o(11,"nz-form-item")(12,"nz-form-control",7),s(13,"i18n"),o(14,"nz-input-group",10),Se("nzPopoverVisibleChange",function(B){return x(f),be(p.visible,B)||(p.visible=B),w(B)}),z(15,"input",11),l(),v(16,xt,9,11,"ng-template",null,1,T),l()(),o(18,"nz-form-item")(19,"nz-form-control",7)(20,"nz-input-group",12),z(21,"input",13),l(),v(22,kt,2,2,"ng-template",null,2,T),l()(),o(24,"nz-form-item")(25,"nz-form-control",7)(26,"nz-input-group",14),v(27,Tt,3,4,"ng-template",null,3,T),z(29,"input",15),l(),v(30,Mt,2,2,"ng-template",null,4,T),l()(),o(32,"nz-form-item")(33,"nz-form-control",7),s(34,"i18n"),o(35,"div",16)(36,"div",17)(37,"nz-input-group",18),z(38,"input",19),l()(),o(39,"div",17)(40,"button",20),S("click",function(){return x(f),w(p.getCaptcha())}),d(41),s(42,"i18n"),l()()()()(),o(43,"nz-form-item")(44,"button",21),d(45),s(46,"i18n"),l(),o(47,"a",22),d(48),s(49,"i18n"),l()()()}if(n&2){let f=N(10),b=N(17),B=N(23),st=N(28),mt=N(31);t(),C(m(2,21,"app.register.register")),t(2),a("formGroup",p.form),t(),_(4,p.error?4:-1),t(2),a("nzErrorTip",f),t(6),a("nzErrorTip",m(13,23,"validation.password.required")),t(2),Ce("nzPopoverVisible",p.visible),a("nzPopoverOverlayStyle",ye(33,zt))("nzPopoverContent",b),t(5),a("nzErrorTip",B),t(6),a("nzErrorTip",mt),t(),a("nzAddOnBefore",st),t(7),a("nzErrorTip",m(34,25,"validation.verification-code.required")),t(2),a("nzGutter",8),t(),a("nzSpan",16),t(3),a("nzSpan",8),t(),a("disabled",p.count>0)("nzLoading",p.loading),t(),h(" ",p.count?p.count+"s":m(42,27,"app.register.get-verification-code")," "),t(3),a("nzLoading",p.loading),t(),h(" ",m(46,29,"app.register.register")," "),t(3),C(m(49,31,"app.register.sign-in"))}},dependencies:[H,$,L,q,G,W,j,D,F,se,le,ie,Q,J,ee,Z,te,Y,K,X,Xe,Ke,Je,Ye,Ae,Ue,Fe,me,P,M,I,E],styles:["[_nghost-%COMP%]{display:block;width:368px;margin:0 auto}[_nghost-%COMP%]     h3{margin-bottom:20px;font-size:16px}[_nghost-%COMP%]     .submit{width:50%}[_nghost-%COMP%]     .login{float:right;line-height:40px}  .register-password-cdk .success,   .register-password-cdk .warning,   .register-password-cdk .error{transition:color .3s}  .register-password-cdk .success{color:#52c41a}  .register-password-cdk .warning{color:#faad14}  .register-password-cdk .error{color:#ff4d4f}  .register-password-cdk .progress-pass>.progress .ant-progress-bg{background-color:#faad14}"],changeDetection:0});let e=i;return e})();var Pt=e=>({email:e});function Dt(e,i){if(e&1&&(o(0,"div",4),d(1),s(2,"i18n"),l()),e&2){let c=R();t(),h(" ",we(2,1,"app.register-result.msg",xe(4,Pt,c.email))," ")}}var lt=(()=>{let i=class i{constructor(){this.msg=u(Ee),this.email=""}};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=y({type:i,selectors:[["passport-register-result"]],inputs:{email:"email"},standalone:!0,features:[k],decls:10,vars:11,consts:[["title",""],["type","success",3,"title","description"],["nz-button","","nzSize","large",3,"click","nzType"],["routerLink","/","nz-button","","nzSize","large"],[1,"title",2,"font-size","20px"]],template:function(n,p){if(n&1){let f=V();o(0,"result",1),s(1,"i18n"),v(2,Dt,3,6,"ng-template",null,0,T),o(4,"button",2),S("click",function(){return x(f),w(p.msg.success("email"))}),d(5),s(6,"i18n"),l(),o(7,"button",3),d(8),s(9,"i18n"),l()()}if(n&2){let f=N(3);_e("description",m(1,5,"app.register-result.activation-email")),a("title",f),t(4),a("nzType","primary"),t(),h(" ",m(6,7,"app.register-result.view-mailbox")," "),t(3),h(" ",m(9,9,"app.register-result.back-home")," ")}},dependencies:[F,D,P,M,I,E,We,$e],encapsulation:2});let e=i;return e})();var pr=[{path:"passport",component:Qe,children:[{path:"login",component:ot,data:{title:"\u767B\u5F55",titleI18n:"app.login.login"}},{path:"register",component:pt,data:{title:"\u6CE8\u518C",titleI18n:"app.register.register"}},{path:"register-result",component:lt,data:{title:"\u6CE8\u518C\u7ED3\u679C",titleI18n:"app.register.register"}},{path:"lock",component:nt,data:{title:"\u9501\u5C4F",titleI18n:"app.lock"}}]},{path:"passport/callback/:type",component:Ze}];export{pr as routes};
