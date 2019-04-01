import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object'

export default class InputBoxComponent extends Component {
	@tracked text;

	@action
	handleChange(text){
		console.log('antes '+text);
		this.text=text;
		console.log('despues '+text);
	}

	@action
	handleSubmit(){
		let newText=this.text;
		if (this.args.OnSubmit){
		this.args.OnSubmit(newText);
		}
	}
}
