import {JetView} from "webix-jet";
import {countries} from "models/countries";
import {statuses} from "models/statuses";
import {ContactsData} from "./contacts";

export default class FormView extends JetView{
	config(){
		return {
			view:"form", localId:"myform", gravity:3, elements:[
				{ view:"text", label:"User Name", name:"Name", inputWidth:300 },
				{ view:"text", label:"Email", name:"Email", inputWidth:300},
				{
					view:"combo", 
					label: "Country",
					options:{body:{template:"#Name#"}, data: countries},
					inputWidth:300,
					name:"Country"
				},
				{
					view:"combo", 
					label: "Status",
					options:{body:{template:"#Name#"}, data: statuses},
					inputWidth:300,
					name: "Status"
				},{}
					
			],
			elementsConfig:{
				labelPosition:"top"
			},
			on: {
				"onChange":function () {
					ContactsData.updateItem(this.getValues().id, this.getValues());
				}
			}};
	}
	init(){
	}
	urlChange(view){
		var id = this.getParam("id");
		if(id && ContactsData.exists(id))
			view.setValues(ContactsData.getItem(id));
	}
}