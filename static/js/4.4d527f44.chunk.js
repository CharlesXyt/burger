(this.webpackJsonpburger=this.webpackJsonpburger||[]).push([[4],{102:function(e,t,n){"use strict";n.r(t);var a=n(23),i=n(20),u=n(3),l=n(4),r=n(6),o=n(5),c=n(7),s=n(0),h=n.n(s),p=n(96),d=n(33),g=n(99),m=n.n(g),v=n(14),f=n(13),b=n(41),y=n(18),_=function(e){function t(){var e,n;Object(u.a)(this,t);for(var l=arguments.length,c=new Array(l),s=0;s<l;s++)c[s]=arguments[s];return(n=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail Address"},value:"",validation:{required:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!1},n.checkValidity=function(e,t){var n=!0;return t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),n},n.inputChangedHandler=function(e,t){var u=Object(i.a)({},n.state.controls,Object(a.a)({},t,Object(i.a)({},n.state.controls[t],{value:e.target.value,valid:n.checkValidity(e.target.value,n.state.controls[t].validation),touched:!0})));n.setState({controls:u})},n.submitHandler=function(e){e.preventDefault(),n.props.onAuth(n.state.controls.email.value,n.state.controls.password.value,n.state.isSignup)},n.switchAuthHandler=function(){n.setState((function(e){return{isSignup:!e.isSignup}}))},n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.bulidingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var a=t.map((function(t){return h.a.createElement(p.a,{key:t.id,shouldValidate:t.config.validation,inValid:!t.config.valid,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)},elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value})}));this.props.loading&&(a=h.a.createElement(b.a,null));var i=null;this.props.error&&(i=h.a.createElement("p",null,this.props.error.message));var u=null;return this.props.isAuthenticated&&(u=h.a.createElement(y.a,{to:this.props.authRedirectPath})),h.a.createElement("div",{className:m.a.Auth},u,i,h.a.createElement("form",{onSubmit:this.submitHandler},a,h.a.createElement(d.a,{btnType:"Success"},"Submit")),h.a.createElement(d.a,{btnType:"Danger",clicked:this.switchAuthHandler},"Switch to ",this.state.isSignup?"Sign up":"Sign in"))}}]),t}(s.Component);t.default=Object(f.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,bulidingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,n,a){return e(v.b(t,n,a))},onSetAuthRedirectPath:function(){return e(v.j("/"))}}}))(_)},96:function(e,t,n){"use strict";var a=n(97),i=n.n(a),u=n(0),l=n.n(u);t.a=function(e){var t=null,n=[i.a.InputElement];switch(e.inValid&&e.shouldValidate&&e.touched&&n.push(i.a.Invalid),e.elementType){case"input":t=l.a.createElement("input",Object.assign({className:n.join(" "),onChange:e.changed},e.elementConfig,{value:e.value}));break;case"textarea":t=l.a.createElement("textarea",Object.assign({className:n.join(" "),onChange:e.changed},e.elementConfig,{value:e.value}));break;case"select":t=l.a.createElement("select",{className:n.join(" "),onChange:e.changed,value:e.value},e.elementConfig.options.map((function(e){return l.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=l.a.createElement("input",Object.assign({className:n.join(" "),onChange:e.changed},e.elementConfig,{value:e.value}))}return l.a.createElement("div",null,l.a.createElement("label",{className:i.a.Label},e.label),t)}},97:function(e,t,n){e.exports={Input:"Input_Input__3BuOy",Label:"Input_Label__cfpa2",InputElement:"Input_InputElement__3o5ui",Invalid:"Input_Invalid__2_Kl9"}},99:function(e,t,n){e.exports={Auth:"Auth_Auth__2IqmA",Input:"Auth_Input__19gfY"}}}]);
//# sourceMappingURL=4.4d527f44.chunk.js.map