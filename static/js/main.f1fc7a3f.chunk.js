(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={formInput:"ContactForm_formInput__1eFAi"}},12:function(t,e,n){t.exports={input:"Filter_input__16-Hx"}},20:function(t,e,n){},3:function(t,e,n){t.exports={item:"ContactList_item__2AqhW",text:"ContactList_text__3dxPk"}},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(13),i=n.n(r),s=(n(20),n(15)),o=n(5),u=n(6),l=n(8),m=n(7),d=n(14),b=n(11),h=n.n(b),p=n(2),j=n.n(p),f=n(0),x=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=j.a.generate(),t.numberInputId=j.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{htmlFor:this.nameInputId,children:["Name"," ",Object(f.jsx)("input",{className:h.a.formInput,id:this.nameInputId,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(f.jsxs)("label",{htmlFor:this.numberInputId,children:["Number"," ",Object(f.jsx)("input",{className:h.a.formInput,id:this.numberInputId,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(f.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),C=n(12),O=n.n(C);function v(t){var e=t.value,n=t.onChange,a=j.a.generate();return Object(f.jsxs)("label",{className:O.a.label,htmlFor:a,children:["Find contact by name/number",Object(f.jsx)("input",{className:O.a.input,id:a,type:"text",value:e,onChange:n})]})}var g=n(3),_=n.n(g),I=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(f.jsx)("ul",{className:_.a.contactList,children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(f.jsxs)("li",{className:_.a.item,children:[Object(f.jsx)("span",{className:_.a.text,children:e}),Object(f.jsx)("span",{className:_.a.text,children:a}),Object(f.jsx)("button",{type:"button",onClick:function(){return n(c)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},c)}))})},y=n(9),A=n.n(y),N=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:j.a.generate(),name:n,number:a};t.state.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()||t.number===a}))?alert("".concat(c.name," witn ").concat(c.number," is already in Contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(s.a)(e),[c])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)||t.number.includes(n)}))},t}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(){0===this.getVisibleContacts().length&&this.state.contacts.length>0&&alert("\u0421\u043entact is not on the ContactList")}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=e.length,c=this.getVisibleContacts();return Object(f.jsxs)("div",{className:A.a.container,children:[Object(f.jsx)("h1",{className:A.a.title,children:"Phonebook"}),Object(f.jsxs)("span",{children:[" Total contacts: ",a]}),Object(f.jsx)(x,{onSubmit:this.addContact}),Object(f.jsx)("h2",{className:A.a.title,children:"Contacts"}),Object(f.jsx)(v,{value:n,onChange:this.changeFilter}),Object(f.jsx)(I,{contacts:c,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component),F=N;i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(F,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={container:"App_container__3FWo7",title:"App_title__2vtWv"}}},[[30,1,2]]]);
//# sourceMappingURL=main.f1fc7a3f.chunk.js.map