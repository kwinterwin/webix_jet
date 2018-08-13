// import {statuses} from "models/statuses";
import {StatusesData} from "models/statusesCollection";
import DatatableView from "./datatable";

export default class StatusesView extends DatatableView{
	init(view){
		view.queryView({view:"datatable"}).parse(StatusesData);
	}   
	add(){
		StatusesData.add({Name:"ilekfhneiwoln", Icon:"jnrfkjwbe"});
	}
	delete(id){
		StatusesData.remove(id);
	}
}