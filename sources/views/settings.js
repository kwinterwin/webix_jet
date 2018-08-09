import {JetView} from "webix-jet";

export default class SettingsView extends JetView{
	config(){
        return {
            view:"segmented", 
            value:1, options:[
                { "id":"1", "value":"RU" }, 
                { "id":"2", "value":"EN" }
            ]
        };
	}
	init(view){
        
	}
}