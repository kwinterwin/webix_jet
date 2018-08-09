import {JetView, plugins} from "webix-jet";
import {countries} from "models/countries";

export default class CountriesView extends JetView{
	config(){
		return {
			rows:[
				{
					view:"datatable",
					columns:[
						{ id:"Name", editor:"text"},
						{ id:"Name", fillspace:true, editor:"text"}
					],
					id:"countriesDatatable",
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
						{view:"button", value:"Delete", click:()=>this.delete($$("countriesDatatable").getSelectedId())}
					]
				}
			]
		};
	}
	init(){
        $$("countriesDatatable").parse(countries);
    }
    
    add(){
        $$("countriesDatatable").add({Name:"djnfjen"});
    }

    delete(id){
        $$("countriesDatatable").remove(id);
    }
}