import {statuses} from "models/statuses";
import DatatableView from "./datatable";

export default class StatusesView extends DatatableView{
	init(view){
		view.queryView({view:"datatable"}).parse(statuses);
	}   
	add(){
		this.getRoot().queryView({view:"datatable"}).add({Name:"ilekfhneiwoln", Icon:"jnrfkjwbe"});
	}
	delete(id){
		this.getRoot().queryView({view:"datatable"}).remove(id);
	}
}