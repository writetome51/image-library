(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"6/1c":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("pQSM");t.__SetResultMessageDecorator=s.getClassModificationDecorator((function(e,t){e.resultMessage=t[0]}))},"6AIa":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var s=r("fXoL"),n=r("570Q"),o=r("tyNb");let a=(()=>{class e{constructor(e,t){this.__localSessionID=e,this.__router=t}canActivate(){return this.__ifSessionIDExists_returnTrue_ifNot_redirectToLoginAndReturnFalse()}__ifSessionIDExists_returnTrue_ifNot_redirectToLoginAndReturnFalse(){return!!this.__localSessionID.get()||(this.__router.navigate(["/"]),!1)}}return e.\u0275fac=function(t){return new(t||e)(s.Sb(n.a),s.Sb(o.b))},e.\u0275prov=s.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},lqtZ:function(e,t,r){"use strict";r.r(t);var s=r("ofXK"),n=r("3Pt+"),o=r("+MHq"),a=r("6AIa"),c=r("tyNb"),i=r("sLZ3"),u=r("fXoL"),d=r("TJMr"),l=r("j1d5"),p=r("mrSG");const b=r("pRam").__PrefixLabel_to_ValidatingInputServiceDecorator;var f=r("zo3k"),h=r("qQ8G");let v=(()=>{class e extends f.a{constructor(e){super(),this.__localEmail=e,this.data.isValid=()=>this.data.objectToBind[this.data.propertyToBind]===this.__localEmail.get(),this.data.errorMessage="The email entered is not the logged-in user's email."}}return e.\u0275fac=function(t){return new(t||e)(u.Sb(h.a))},e.\u0275prov=u.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),m=(()=>{let e=class extends v{};return e=Object(p.b)([b({prefix:"current"})],e),e})(),_=(()=>{class e extends m{}return e.\u0275fac=function(t){return g(t||e)},e.\u0275prov=u.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const g=u.Qb(_);let w=(()=>{let e=class extends f.a{};return e=Object(p.b)([b({prefix:"new",prefix_propertyToBind:!0})],e),e})(),x=(()=>{class e extends w{}return e.\u0275fac=function(t){return y(t||e)},e.\u0275prov=u.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const y=u.Qb(x);var S=r("YkuO");let k=(()=>{class e extends l.a{constructor(e,t,r){super(e,t,r)}}return e.\u0275fac=function(t){return new(t||e)(u.Sb(_),u.Sb(x),u.Sb(S.a))},e.\u0275prov=u.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var I=r("lhtc");let O=(()=>{class e extends d.ValidatingFormInputsComponent{constructor(e){super(e)}}return e.\u0275fac=function(t){return new(t||e)(u.Kb(k))},e.\u0275cmp=u.Eb({type:e,selectors:[["update-user-email-form-inputs"]],features:[u.xb],decls:1,vars:1,consts:[[3,"inputs"]],template:function(e,t){1&e&&u.Lb(0,"validating-inputs",0),2&e&&u.bc("inputs",t.inputs)},directives:[I.a],encapsulation:2}),e})();var P=r("L8vR"),M=r("xYW/"),D=r("FGTy"),T=r("8j7K"),j=r("ZN2g"),A=r("570Q");let E=(()=>{class e{constructor(e,t,r){this.__userRestApi=e,this.__localSessionID=t,this.__localEmail=r}updatePassword(){return Object(p.a)(this,void 0,void 0,(function*(){return yield Object(T.getSubscriptionData)(this.__userRestApi.updatePassword({email:this.__localEmail.get(),password:D.a.password,newPassword:D.a.newPassword,sessionID:this.__localSessionID.get()}))}))}updateEmail(){return Object(p.a)(this,void 0,void 0,(function*(){return yield Object(T.getSubscriptionData)(this.__userRestApi.updateEmail({email:D.a.email,password:D.a.password,newEmail:D.a.newEmail,sessionID:this.__localSessionID.get()}))}))}}return e.\u0275fac=function(t){return new(t||e)(u.Sb(j.a),u.Sb(A.a),u.Sb(h.a))},e.\u0275prov=u.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var G=r("kA1H"),L=r("lfoF"),R=r("3LUQ"),Q=r("rmih");let H=(()=>{class e{constructor(e){this.__userResultProcessor=e}process(e){return Object(p.a)(this,void 0,void 0,(function*(){if(this.__userResultProcessor.process(e),!this.resultMessage)throw new Error('The "resultMessage" property is not set.');R.a.success=this.resultMessage}))}}return e.\u0275fac=function(t){return new(t||e)(u.Sb(Q.a))},e.\u0275prov=u.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const U=r("6/1c").__SetResultMessageDecorator;let C=(()=>{let e=class extends H{};return e=Object(p.b)([U("Email updated")],e),e})(),F=(()=>{class e extends C{}return e.\u0275fac=function(t){return B(t||e)},e.\u0275prov=u.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const B=u.Qb(F);let K=(()=>{class e extends G.a{constructor(e,t){super(e,t)}}return e.\u0275fac=function(t){return new(t||e)(u.Sb(L.a),u.Sb(F))},e.\u0275prov=u.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),V=(()=>{class e extends M.a{constructor(e,t,r){super(t,r),this.__userUpdater=e}_getResult(){return Object(p.a)(this,void 0,void 0,(function*(){return yield this.__userUpdater.updateEmail()}))}}return e.\u0275fac=function(t){return new(t||e)(u.Sb(E),u.Sb(k),u.Sb(K))},e.\u0275prov=u.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var J=r("oTHP");let N=(()=>{class e extends P.a{constructor(e){super(e)}}return e.\u0275fac=function(t){return new(t||e)(u.Kb(V))},e.\u0275cmp=u.Eb({type:e,selectors:[["update-email-save-button"]],features:[u.xb],decls:2,vars:3,consts:[[3,"type","context","clickHandler"]],template:function(e,t){1&e&&(u.Pb(0,"processing-button",0),u.lc(1," Save Changes "),u.Ob()),2&e&&u.bc("type","submit")("context",t)("clickHandler",t.process)},directives:[J.a],encapsulation:2}),e})(),Y=(()=>{class e extends i.a{}return e.\u0275fac=function(t){return q(t||e)},e.\u0275cmp=u.Eb({type:e,selectors:[["update-user-email-form"]],features:[u.xb],decls:2,vars:0,template:function(e,t){1&e&&(u.Lb(0,"update-user-email-form-inputs"),u.Lb(1,"update-email-save-button"))},directives:[O,N],encapsulation:2}),e})();const q=u.Qb(Y);let X=(()=>{let e=class extends S.a{};return e=Object(p.b)([b({prefix:"current"})],e),e})(),Z=(()=>{class e extends X{}return e.\u0275fac=function(t){return z(t||e)},e.\u0275prov=u.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const z=u.Qb(Z);let W=(()=>{let e=class extends S.a{};return e=Object(p.b)([b({prefix:"new",prefix_propertyToBind:!0})],e),e})(),$=(()=>{class e extends W{}return e.\u0275fac=function(t){return ee(t||e)},e.\u0275prov=u.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ee=u.Qb($);var te=r("sU8M");let re=(()=>{let e=class extends te.a{};return e=Object(p.b)([b({prefix:"new"})],e),e})(),se=(()=>{class e extends re{constructor(){super(),this.data.propertyToMatch="newPassword",this.data.errorMessage="The two new password inputs must match"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=u.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),ne=(()=>{class e extends l.a{constructor(e,t,r){super(e,t,r)}}return e.\u0275fac=function(t){return new(t||e)(u.Sb(Z),u.Sb($),u.Sb(se))},e.\u0275prov=u.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),oe=(()=>{class e extends d.ValidatingFormInputsComponent{constructor(e){super(e)}}return e.\u0275fac=function(t){return new(t||e)(u.Kb(ne))},e.\u0275cmp=u.Eb({type:e,selectors:[["update-user-password-form-inputs"]],features:[u.xb],decls:1,vars:1,consts:[[3,"inputs"]],template:function(e,t){1&e&&u.Lb(0,"validating-inputs",0),2&e&&u.bc("inputs",t.inputs)},directives:[I.a],encapsulation:2}),e})(),ae=(()=>{let e=class extends H{};return e=Object(p.b)([U("Password updated")],e),e})(),ce=(()=>{class e extends ae{}return e.\u0275fac=function(t){return ie(t||e)},e.\u0275prov=u.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ie=u.Qb(ce);let ue=(()=>{class e extends G.a{constructor(e,t){super(e,t)}}return e.\u0275fac=function(t){return new(t||e)(u.Sb(L.a),u.Sb(ce))},e.\u0275prov=u.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),de=(()=>{class e extends M.a{constructor(e,t,r){super(t,r),this.__userUpdater=e}_getResult(){return Object(p.a)(this,void 0,void 0,(function*(){return yield this.__userUpdater.updatePassword()}))}}return e.\u0275fac=function(t){return new(t||e)(u.Sb(E),u.Sb(ne),u.Sb(ue))},e.\u0275prov=u.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),le=(()=>{class e extends P.a{constructor(e){super(e)}}return e.\u0275fac=function(t){return new(t||e)(u.Kb(de))},e.\u0275cmp=u.Eb({type:e,selectors:[["update-password-save-button"]],features:[u.xb],decls:2,vars:3,consts:[[3,"type","context","clickHandler"]],template:function(e,t){1&e&&(u.Pb(0,"processing-button",0),u.lc(1," Save Changes "),u.Ob()),2&e&&u.bc("type","submit")("context",t)("clickHandler",t.process)},directives:[J.a],encapsulation:2}),e})(),pe=(()=>{class e extends i.a{}return e.\u0275fac=function(t){return be(t||e)},e.\u0275cmp=u.Eb({type:e,selectors:[["update-user-password-form"]],features:[u.xb],decls:2,vars:0,template:function(e,t){1&e&&(u.Lb(0,"update-user-password-form-inputs"),u.Lb(1,"update-password-save-button"))},directives:[oe,le],encapsulation:2}),e})();const be=u.Qb(pe);var fe=r("AytR");let he=(()=>{class e extends l.a{constructor(e,t){super(e,t)}}return e.\u0275fac=function(t){return new(t||e)(u.Sb(v),u.Sb(S.a))},e.\u0275prov=u.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),ve=(()=>{class e extends d.ValidatingFormInputsComponent{constructor(e){super(e)}}return e.\u0275fac=function(t){return new(t||e)(u.Kb(he))},e.\u0275cmp=u.Eb({type:e,selectors:[["delete-user-form-inputs"]],features:[u.xb],decls:1,vars:1,consts:[[3,"inputs"]],template:function(e,t){1&e&&u.Lb(0,"validating-inputs",0),2&e&&u.bc("inputs",t.inputs)},directives:[I.a],encapsulation:2}),e})(),me=(()=>{class e{constructor(e,t){this.__userRestApi=e,this.__localSessionID=t}delete(){return Object(p.a)(this,void 0,void 0,(function*(){return yield Object(T.getSubscriptionData)(this.__userRestApi.delete({email:D.a.email,password:D.a.password,sessionID:this.__localSessionID.get()}))}))}}return e.\u0275fac=function(t){return new(t||e)(u.Sb(j.a),u.Sb(A.a))},e.\u0275prov=u.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var _e=r("JA+f");let ge=(()=>{class e{constructor(e){this.__logoutResultProcessor=e}process(e){return Object(p.a)(this,void 0,void 0,(function*(){yield this.__logoutResultProcessor.process(e),R.a.success="Account deleted"}))}}return e.\u0275fac=function(t){return new(t||e)(u.Sb(_e.a))},e.\u0275prov=u.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),we=(()=>{class e extends G.a{constructor(e,t){super(e,t)}}return e.\u0275fac=function(t){return new(t||e)(u.Sb(L.a),u.Sb(ge))},e.\u0275prov=u.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),xe=(()=>{class e extends M.a{constructor(e,t,r){super(t,r),this.__userDeleter=e}_getResult(){return Object(p.a)(this,void 0,void 0,(function*(){return yield this.__userDeleter.delete()}))}}return e.\u0275fac=function(t){return new(t||e)(u.Sb(me),u.Sb(he),u.Sb(we))},e.\u0275prov=u.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),ye=(()=>{class e extends P.a{constructor(e){super(e)}}return e.\u0275fac=function(t){return new(t||e)(u.Kb(xe))},e.\u0275cmp=u.Eb({type:e,selectors:[["delete-user-button"]],features:[u.xb],decls:2,vars:3,consts:[[3,"type","context","clickHandler"]],template:function(e,t){1&e&&(u.Pb(0,"processing-button",0),u.lc(1," Delete "),u.Ob()),2&e&&u.bc("type","submit")("context",t)("clickHandler",t.process)},directives:[J.a],encapsulation:2}),e})(),Se=(()=>{class e extends i.a{constructor(){super(...arguments),this.gif={src:fe.a.assets+"head-exploding.gif",width:124,height:82,alt:"Head exploding"}}}return e.\u0275fac=function(t){return ke(t||e)},e.\u0275cmp=u.Eb({type:e,selectors:[["delete-user-form"]],features:[u.xb],decls:8,vars:4,consts:[[3,"src","width","height","alt"],[1,"warning-text"]],template:function(e,t){1&e&&(u.Pb(0,"div"),u.Lb(1,"img",0),u.Pb(2,"p",1),u.lc(3,"You cannot undo this."),u.Ob(),u.Pb(4,"p"),u.lc(5,"If you wish to proceed, enter your info and click Delete"),u.Ob(),u.Ob(),u.Lb(6,"delete-user-form-inputs"),u.Lb(7,"delete-user-button")),2&e&&(u.Ab(1),u.bc("src",t.gif.src,u.ic)("width",t.gif.width)("height",t.gif.height)("alt",t.gif.alt))},directives:[ve,ye],styles:[".warning-text[_ngcontent-%COMP%] { color: red; font-weight: bold; }"]}),e})();const ke=u.Qb(Se),Ie={email:{path:"email",linkText:"Email",component:Y,heading:"Email"},password:{path:"password",linkText:"Password",component:pe,heading:"Password"},delete:{path:"delete-account",linkText:"Delete Account",component:Se,heading:"Self Destruct?"}};function Oe(e,t){1&e&&(u.Pb(0,"span"),u.lc(1," | "),u.Ob())}function Pe(e,t){if(1&e&&(u.Pb(0,"div",2),u.Pb(1,"a",3),u.lc(2),u.Ob(),u.kc(3,Oe,2,0,"span",4),u.Ob()),2&e){const e=t.$implicit,r=t.index,s=u.Yb();u.Ab(1),u.bc("routerLink",s.choicesMap[e].path),u.Ab(1),u.nc(" ",s.choicesMap[e].linkText," "),u.Ab(1),u.bc("ngIf",r<s.choices.length-1)}}const Me=[{path:"",pathMatch:"full",redirectTo:Ie.email.path},{path:"",component:(()=>{class e{constructor(e){this.__router=e,this.heading="Update",this.choicesMap=Ie,this.choices=Object.keys(this.choicesMap)}get formHeading(){let e=this.__router.routerState.snapshot.url;for(let t=0;t<this.choices.length;++t){let r=this.choicesMap[this.choices[t]];if(e.endsWith(`/${r.path}`))return r.heading}}}return e.\u0275fac=function(t){return new(t||e)(u.Kb(c.b))},e.\u0275cmp=u.Eb({type:e,selectors:[["update-user"]],decls:12,vars:3,consts:[["class","nav-link-container",4,"ngFor","ngForOf"],[1,"form-container"],[1,"nav-link-container"],["routerLinkActive","active",3,"routerLink"],[4,"ngIf"]],template:function(e,t){1&e&&(u.Pb(0,"header"),u.Pb(1,"h2"),u.lc(2),u.Ob(),u.Ob(),u.Pb(3,"nav"),u.kc(4,Pe,4,3,"div",0),u.Ob(),u.Pb(5,"div",1),u.Pb(6,"div"),u.Pb(7,"header"),u.Pb(8,"h3"),u.lc(9),u.Ob(),u.Ob(),u.Ob(),u.Pb(10,"form"),u.Lb(11,"router-outlet"),u.Ob(),u.Ob()),2&e&&(u.Ab(2),u.mc(t.heading),u.Ab(2),u.bc("ngForOf",t.choices),u.Ab(5),u.mc(t.formHeading))},directives:[s.h,n.i,n.d,n.e,c.f,c.d,c.c,s.i],encapsulation:2}),e})(),canActivate:[a.a],children:[{path:Ie.email.path,component:Ie.email.component},{path:Ie.password.path,component:Ie.password.component},{path:Ie.delete.path,component:Ie.delete.component}]}];let De=(()=>{class e{}return e.\u0275mod=u.Ib({type:e}),e.\u0275inj=u.Hb({factory:function(t){return new(t||e)},imports:[[c.e.forChild(Me)],c.e]}),e})();var Te=r("Uz0t");r.d(t,"UpdateUserModule",(function(){return je}));let je=(()=>{class e{}return e.\u0275mod=u.Ib({type:e}),e.\u0275inj=u.Hb({factory:function(t){return new(t||e)},imports:[[s.b,n.b,Te.a,o.a,De]]}),e})()},pRam:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("VoJJ"),n=r("pQSM");t.__PrefixLabel_to_ValidatingInputServiceDecorator=n.getClassModificationDecorator((function(e,t){var r=t[0],n=r.prefix,o=r.prefix_propertyToBind;e.data.id=n+"-"+e.data.id,o&&(e.data.propertyToBind=e.data.propertyToBind?n+e.data.propertyToBind[0].toUpperCase()+e.data.propertyToBind.slice(1):n);var a=n[0].toUpperCase()+n.slice(1);if(e.data.label=a+" "+e.data.label,s.isArray(e.data.errorMessage))for(var c=0;c<e.data.errorMessage.length;++c)e.data.errorMessage[c]="The "+n+" "+e.data.errorMessage[c].slice(4);else e.data.errorMessage="The "+n+" "+e.data.errorMessage.slice(4)}))}}]);