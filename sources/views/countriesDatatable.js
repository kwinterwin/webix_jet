// import {countries} from "models/countries";
import DatatableView from "./datatable";
import {CountriesData} from "models/countriesCollection";

export default class CountriesView extends DatatableView{
	init(view){
		view.queryView({view:"datatable"}).parse(CountriesData);
	}
    
	add(){
		CountriesData.add({Name:"djnfjen"});
	}

	delete(id){
		CountriesData.remove(id);
	}
}