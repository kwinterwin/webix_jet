import {JetView} from "webix-jet";
import {countries} from "models/countries";

export default class DatatableView extends JetView{
	config(){
		return {
			rows:[
				{
					view:"datatable",
					autoConfig: true,
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
						{view:"button", value:"Delete", click:()=>this.delete(this.getRoot().queryView({view:"datatable"}).getSelectedId())}
					]
				}
			]
		};
	}
	init(view){
	//	this._table = 
		view.queryView({view:"datatable"}).parse(countries); 
	}
}