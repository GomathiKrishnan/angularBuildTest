"use strict";(self.webpackChunkangularTest=self.webpackChunkangularTest||[]).push([[161],{3161:(u,s,l)=>{l.r(s),l.d(s,{LoginModule:()=>f});var d=l(613),g=l(3051),o=l(4006),n=l(4650),m=l(3619);const p=[{path:"login",component:(()=>{class e{constructor(t,i,a){this.fb=t,this.login=i,this.route=a,this.loginCredential=new o.cw({}),this.loginCredential=this.fb.group({email:[""],password:[""]})}ngOnInit(){}submit(){console.log("called",this.loginCredential),"VALID"==this.loginCredential.status&&(console.log("called"),sessionStorage.setItem("auth","asdsadfsadf"),this.route.navigate(["/booking"]))}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(o.qu),n.Y36(m.l),n.Y36(g.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-login"]],decls:19,vars:1,consts:[[1,"main"],[1,"container"],[1,"wrapper"],[1,"heading"],[1,"text","text-large"],[1,"text","text-normal"],[1,"text","text-links"],[1,"form",3,"formGroup"],[1,"input-control"],["type","email","placeholder","Email Address","autocomplete","off","formControlName","email",1,"input-field"],["type","password","placeholder","Password","autocomplete","new-password","formControlName","password",1,"input-field"],[1,"input-control","justify-content-center"],[1,"sign-in-btn",3,"click"]],template:function(t,i){1&t&&(n.TgZ(0,"main",0)(1,"div",1)(2,"section",2)(3,"div",3)(4,"h1",4),n._uU(5,"Sign In"),n.qZA(),n.TgZ(6,"p",5),n._uU(7,"New user? "),n.TgZ(8,"span")(9,"a",6),n._uU(10,"Create an account"),n.qZA()()()(),n.TgZ(11,"form",7)(12,"div",8),n._UZ(13,"input",9),n.qZA(),n.TgZ(14,"div",8),n._UZ(15,"input",10),n.qZA(),n.TgZ(16,"div",11)(17,"button",12),n.NdJ("click",function(){return i.submit()}),n._uU(18,"Sign In"),n.qZA()()()()()()),2&t&&(n.xp6(11),n.Q6J("formGroup",i.loginCredential))},dependencies:[o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u],styles:["[_ngcontent-%COMP%]:root{--color-white: #ffffff;--color-light: #f1f5f9;--color-black: #121212;--color-night: #001632;--color-red: #f44336;--color-blue: #1a73e8;--color-gray: #80868b;--color-grayish: #dadce0;--shadow-normal: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);--shadow-medium: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06);--shadow-large: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)}html[_ngcontent-%COMP%]{font-size:100%;font-size-adjust:100%;box-sizing:border-box;scroll-behavior:smooth}*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{padding:0;margin:0;box-sizing:inherit;list-style:none;list-style-type:none;text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}body[_ngcontent-%COMP%]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:1rem;font-weight:400;line-height:1.5;color:var(--color-black);background:var(--color-light)}a[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{font-family:inherit;font-size:inherit;line-height:inherit;cursor:pointer;border:none;outline:none;background:none;text-decoration:none}img[_ngcontent-%COMP%]{display:block;width:100%;height:auto;object-fit:cover}.container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;max-width:80rem;min-height:100vh;width:100%;padding:0 2rem;margin:0 auto}.ion-logo-apple[_ngcontent-%COMP%]{font-size:1.65rem;line-height:inherit;margin-right:.5rem;color:var(--color-black)}.ion-logo-google[_ngcontent-%COMP%]{font-size:1.65rem;line-height:inherit;margin-right:.5rem;color:var(--color-red)}.ion-logo-facebook[_ngcontent-%COMP%]{font-size:1.65rem;line-height:inherit;margin-right:.5rem;color:var(--color-blue)}.text[_ngcontent-%COMP%]{font-family:inherit;line-height:inherit;text-transform:unset;text-rendering:optimizeLegibility}.text-large[_ngcontent-%COMP%]{font-size:2rem;font-weight:600;color:var(--color-black)}.text-normal[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;color:var(--color-black)}.text-links[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;color:var(--color-blue)}.text-links[_ngcontent-%COMP%]:hover{text-decoration:underline}.main[_ngcontent-%COMP%]{background:#F1F5F9}.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{max-width:28rem;width:100%;margin:2rem auto;padding:2rem 2.5rem;border:none;outline:none;border-radius:.25rem;color:var(--color-black);background:#FFFFFF;box-shadow:var(--shadow-large)}.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{width:100%;height:auto;margin-top:2rem}.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .input-control[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem}.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]{font-family:inherit;font-size:1rem;font-weight:400;line-height:inherit;width:100%;height:auto;padding:.75rem 1.25rem;border:1px solid #E8F0FE;outline:none;border-radius:2rem;color:var(--color-black);background:var(--color-light);text-transform:unset;text-rendering:optimizeLegibility}.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]:focus{background:#E8F0FE}.main[_ngcontent-%COMP%]   .sign-in-btn[_ngcontent-%COMP%]{width:125px;height:40px;display:grid;place-items:center;background:#1A73E8;border-radius:20px;color:#fff}"]}),e})()},{path:"register",component:(()=>{class e{constructor(t,i,a){this.fb=t,this.loginService=i,this.router=a,this.userDetails=new o.cw({}),this.userDetails=this.fb.group({name:["",[o.kI.minLength(3),o.kI.maxLength(50)]],email:["",[o.kI.email]],password:[""],confirm_password:[""]})}ngOnInit(){}uploadImage(t){let i=t.target.files[0],a=new FormData;a.append("profileImage",i,i.name),this.loginService.uploadImgae(a).subscribe(c=>{console.log(c)})}submit(){"VALID"==this.userDetails.status&&this.loginService.registerUser(this.userDetails.value).subscribe(t=>{t&&this.router.navigate(["login"])})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(o.qu),n.Y36(m.l),n.Y36(g.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-register"]],decls:24,vars:1,consts:[[1,"main"],[1,"container"],[1,"wrapper"],[1,"heading"],[1,"text","text-large","text-center"],[1,"form",3,"formGroup"],[1,"input-control"],["for","image",1,"image"],[1,"fa-solid","fa-user"],["type","file","id","image","hidden","",3,"change"],["type","text","placeholder","Name","autocomplete","off","formControlName","name",1,"input-field"],["type","email","placeholder","Email Address","autocomplete","false","value","","formControlName","email",1,"input-field"],["type","password","placeholder","Password","autocomplete","new-password","value","","formControlName","password",1,"input-field"],["type","password","placeholder","Confirm Password","autocomplete","off","formControlName","confirm_password",1,"input-field"],[1,"input-control","justify-content-between"],[1,"text","text-links"],[1,"sign-in-btn",3,"click"]],template:function(t,i){1&t&&(n.TgZ(0,"main",0)(1,"div",1)(2,"section",2)(3,"div",3)(4,"h1",4),n._uU(5,"Sign Up"),n.qZA()(),n.TgZ(6,"form",5)(7,"div",6)(8,"label",7),n._UZ(9,"i",8),n.qZA(),n.TgZ(10,"input",9),n.NdJ("change",function(c){return i.uploadImage(c)}),n.qZA()(),n.TgZ(11,"div",6),n._UZ(12,"input",10),n.qZA(),n.TgZ(13,"div",6),n._UZ(14,"input",11),n.qZA(),n.TgZ(15,"div",6),n._UZ(16,"input",12),n.qZA(),n.TgZ(17,"div",6),n._UZ(18,"input",13),n.qZA(),n.TgZ(19,"div",14)(20,"a",15),n._uU(21,"Back to Login"),n.qZA(),n.TgZ(22,"button",16),n.NdJ("click",function(){return i.submit()}),n._uU(23,"Sign Up"),n.qZA()()()()()()),2&t&&(n.xp6(6),n.Q6J("formGroup",i.userDetails))},dependencies:[o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u],styles:["[_ngcontent-%COMP%]:root{--color-white: #ffffff;--color-light: #f1f5f9;--color-black: #121212;--color-night: #001632;--color-red: #f44336;--color-blue: #1a73e8;--color-gray: #80868b;--color-grayish: #dadce0;--shadow-normal: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);--shadow-medium: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06);--shadow-large: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)}html[_ngcontent-%COMP%]{font-size:100%;font-size-adjust:100%;box-sizing:border-box;scroll-behavior:smooth}*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{padding:0;margin:0;box-sizing:inherit;list-style:none;list-style-type:none;text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}body[_ngcontent-%COMP%]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:1rem;font-weight:400;line-height:1.5;color:var(--color-black);background:var(--color-light)}a[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{font-family:inherit;font-size:inherit;line-height:inherit;cursor:pointer;border:none;outline:none;background:none;text-decoration:none}img[_ngcontent-%COMP%]{display:block;width:100%;height:auto;object-fit:cover}.container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;max-width:80rem;min-height:100vh;width:100%;padding:0 2rem;margin:0 auto}.ion-logo-apple[_ngcontent-%COMP%]{font-size:1.65rem;line-height:inherit;margin-right:.5rem;color:var(--color-black)}.ion-logo-google[_ngcontent-%COMP%]{font-size:1.65rem;line-height:inherit;margin-right:.5rem;color:var(--color-red)}.ion-logo-facebook[_ngcontent-%COMP%]{font-size:1.65rem;line-height:inherit;margin-right:.5rem;color:var(--color-blue)}.text[_ngcontent-%COMP%]{font-family:inherit;line-height:inherit;text-transform:unset;text-rendering:optimizeLegibility}.text-large[_ngcontent-%COMP%]{font-size:2rem;font-weight:600;color:var(--color-black)}.text-normal[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;color:var(--color-black)}.text-links[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;color:var(--color-blue)}.text-links[_ngcontent-%COMP%]:hover{text-decoration:underline}.main[_ngcontent-%COMP%]{background:#F1F5F9}.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{max-width:28rem;width:100%;margin:2rem auto;padding:2rem 2.5rem;border:none;outline:none;border-radius:.25rem;color:var(--color-black);background:#FFFFFF;box-shadow:var(--shadow-large)}.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{width:100%;height:auto;margin-top:2rem}.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .input-control[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin-bottom:1.25rem}.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]{font-family:inherit;font-size:1rem;font-weight:400;line-height:inherit;width:100%;height:auto;padding:.75rem 1.25rem;border:1px solid #E8F0FE;outline:none;border-radius:2rem;color:var(--color-black);background:var(--color-light);text-transform:unset;text-rendering:optimizeLegibility}.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]:focus{background:#E8F0FE}.main[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:5rem;height:5rem;background:#E8F0FE;border-radius:50%;display:grid;place-items:center}.main[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:30px}.main[_ngcontent-%COMP%]   .sign-in-btn[_ngcontent-%COMP%]{width:125px;height:40px;display:grid;place-items:center;background:#1A73E8;border-radius:20px;color:#fff}"]}),e})()}];let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[g.Bz.forChild(p)]}),e})(),f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[d.m,h]}),e})()}}]);