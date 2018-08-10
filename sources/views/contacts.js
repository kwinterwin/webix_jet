import {JetView} from "webix-jet";
import {contacts} from "models/contacts";
import FormView from "./form";

export var ContactsData = new webix.DataCollection({
	data:contacts
});

export default class ContactsView extends JetView{
	config(){
		var list = {
			view:"list",
			localId:"list", 
			css:"contact",
			select: true, 
			gravity:1, 
			borderless:true,
			template:"#Name#<br>#Email#<i class='fa fa-times delete' style='float:right;margin-top:7px;'></i>",
			on: {
				"onAfterSelect":(id)=>{
					var path = "/top/contacts?id="+id;
					this.app.show(path);
				}
			},
			onClick: {
				delete: function (e, id) {
					webix.confirm({
						text: "Contact will be removed. Continue?", title: "Attention",
						ok: "Yes",
						cancel: "No",
						callback: function (result) {
							if (result) {
								ContactsData.remove(id);
							}
						}
					});
					return false;
				}
			}};
		var buttonAdd = {
			view:"button",
			value:"Add",
			click:()=>{
				ContactsData.add({"Name":"wevwewe","Email":"vwev@gmail.com","Status":2,"Country":1});
			}
		};
		
		var toolbar = {
			view:"toolbar",
			elements:[{view: "label", label: "Contacts", align:"center"}]
		};
		return {cols:[{rows:[toolbar, list,{},buttonAdd]},FormView]};
	}
	init(view){
		view.queryView({view:"list"}).parse(ContactsData);  	  
	}
	urlChange(view){
		var id = this.getParam("id") || ContactsData.getFirstId();
		if(ContactsData.exists(id))
			view.queryView({view:"list"}).select(id); 
	}
}