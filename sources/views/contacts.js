import {JetView} from "webix-jet";
import {contacts} from "models/contacts";

export default class ContactsView extends JetView{
	config(){
		var list =  {
			view:"list",
			id:"list", 
			css:"contact",
			select: true, 
			gravity:1, 
			template:"#Name#<br>#Email#<i class='fa fa-times delete' style='float:right;margin-top:7px;'></i>",
			onClick: {
				delete: function (e, id) {
					webix.confirm({
						text: "Contact will be removed. Continue?", title: "Attention",
						ok: "Yes",
						cancel: "No",
						callback: function (result) {
							if (result) {
								$$("list").remove(id);
							}
						}
					});
					return false;
				}
			}};
		var form = {view:"form", id:"myform", gravity:3, elements:[
			{ view:"text", label:"User Name", name:"Name", inputWidth:300 },
			{ view:"text", label:"Email", name:"Email", inputWidth:300},{}
		],
		elementsConfig:{
			labelPosition:"top"
		},
		on: {
			"onChange":
                function () {this.save();}
		}};
		var toolbar = {
			view:"toolbar",
			elements:[{view: "label", label: "Contacts", align:"center"}]
		};
		return {cols:[{rows:[toolbar, list]},form]};
	}
	init(view){
		view.queryView({view:"list"}).parse(contacts);      
		$$("myform").bind($$("list"));
	}
}