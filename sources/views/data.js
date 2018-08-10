import {JetView} from "webix-jet";
import CountriesView from "./countriesDatatable";
import StatusesView from "./statusesDatatable";

export default class DataView extends JetView{
	config(){
		var toolbar = {
			view:"toolbar",
			elements:[{view: "label", label: "Data", align:"center"}]
		};
		
		var list = {
			view:"list",
			width:200,
			select: true,
			template:"#title#",
			on: {
				onAfterSelect: function (id) {
					webix.$$(id).show();
				}
			},
			data:[
				{ id:"countries", title:"Countries"},
				{ id:"statuses", title:"Statuses"}
			]
		};
		var ui = {
			rows:[
				toolbar,
				{
					cols: [
						list,
						{
							cells: [
								{id: "countries", rows:[CountriesView]},
								{id: "statuses", rows: [StatusesView]}
							]
						}
					]
				}
			]
		};
		return ui;
	}
	init(view){
		view.queryView({view:"list"}).select("countries");
	}
}