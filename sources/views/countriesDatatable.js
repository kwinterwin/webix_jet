import {countries} from "models/countries";
import DatatableView from "./datatable";

export default class CountriesView extends DatatableView{
	init(view){
		view.queryView({view:"datatable"}).parse(countries);
	}
    
	add(){
		this.getRoot().queryView({view:"datatable"}).add({Name:"djnfjen"});
	}

	delete(id){
		this.getRoot().queryView({view:"datatable"}).remove(id);
	}
}