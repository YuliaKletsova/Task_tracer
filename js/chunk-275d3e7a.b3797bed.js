(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-275d3e7a"],{7441:function(t,e,i){},d879:function(t,e,i){"use strict";i.r(e);i("a4d3"),i("e01a");var s=i("7a23"),a=Object(s["F"])("data-v-9c9f89d8");Object(s["s"])("data-v-9c9f89d8");var c={class:"row"},n={class:"offset-s3"},d=Object(s["g"])("h1",null,"Create task",-1),r={class:"input-field"},l=Object(s["g"])("label",{for:"title"},"Title",-1),o=Object(s["g"])("span",{class:"helper-text","data-error":"Title is required"},null,-1),p={class:"chips input-field",ref:"chips"},u={class:"input-field"},h=Object(s["g"])("label",{for:"description"},"Description",-1),b={class:"character-counter",style:{float:"right","font-size":"12px"}},f={type:"text",class:"datepicker",ref:"datepicker"},j=Object(s["g"])("button",{class:"btn deep-purple accent-1",type:"submit"},"Create",-1);Object(s["q"])();var O=a((function(t,e,i,a,O,g){return Object(s["p"])(),Object(s["d"])("div",c,[Object(s["g"])("div",n,[d,Object(s["g"])("form",{class:"col s6",onSubmit:e[3]||(e[3]=Object(s["E"])((function(){return g.submitHandler.apply(g,arguments)}),["prevent"]))},[Object(s["g"])("div",r,[Object(s["D"])(Object(s["g"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.title=e}),id:"title",type:"text",class:"validate",required:""},null,512),[[s["B"],t.title]]),l,o]),Object(s["g"])("div",p,null,512),Object(s["g"])("div",u,[Object(s["D"])(Object(s["g"])("textarea",{"onUpdate:modelValue":e[2]||(e[2]=function(e){return t.description=e}),id:"description",class:"materialize-textarea"},null,512),[[s["B"],t.description]]),h,Object(s["g"])("span",b,Object(s["y"])(t.description.length)+"/2048",1)]),Object(s["g"])("input",f,null,512),j],32)])])})),g=i("4d5c"),v=i.n(g),m={name:"create",data:function(){return{description:"",title:"",chips:null,date:null}},components:{},mounted:function(){this.chips=v.a.Chips.init(this.$refs.chips,{placeholder:"Tags"}),this.date=v.a.Datepicker.init(this.$refs.datepicker,{placeholder:"Choose deadline date",minDate:new Date,disableWeekends:!0,firstDay:1,setDefaultDate:!0,defaultDate:new Date}),console.log(this.$store.state)},methods:{submitHandler:function(){var t={title:this.title,description:this.description,id:Date.now(),status:"active",tags:this.chips.chipsData,date:this.date.date};this.$store.dispatch("createTask",t),this.$router.push("/list")}},unmounted:function(){this.date&&this.date.destroy&&this.date.destroy(),this.chips&&this.chips.destroy&&this.chips.destroy()}};i("dbe1");m.render=O,m.__scopeId="data-v-9c9f89d8";e["default"]=m},dbe1:function(t,e,i){"use strict";i("7441")}}]);
//# sourceMappingURL=chunk-275d3e7a.b3797bed.js.map