
import {JetView} from "webix-jet";
import {statuses} from "models/statuses";

export default class StatusesView extends JetView{
	config(){
		return {
			rows:[
				{
					view:"datatable",
					columns:[
						{ id:"Name", template:"#Name#", editor:"text"},
						{ id:"Icon", template:"#Icon#", fillspace:true, editor:"text"}
					],
					id:"statusesDatatable",
					select: true,
					editable: true,
					editaction: "dblclick",
					scrollX:false,
					borderless:true
				},
				{},
				{
					cols:[
						{view:"button", value:"Add", click:()=>this.add()},
						{view:"button", value:"Delete", click:()=>this.delete($$("statusesDatatable").getSelectedId())}
					]
				}
			]
			
		};
	}
	init(){
		$$("statusesDatatable").parse(statuses);}   
	add(){
		$$("statusesDatatable").add({Name:"ilekfhneiwoln", Icon:"jnrfkjwbe"});}
	delete(id){
		$$("statusesDatatable").remove(id);}
}