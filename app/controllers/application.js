import Controller from '@ember/controller';
import {tracked} from '@glimmer/tracking';

export default class ApplicationController extends Controller {
	@tracked tweets = [{
			id:1,
			name:'lel',
			txt:'laotracosa'
		},{
			id:2,
			name:'lel',
			txt:'lmao'
		},{
			id:2,
			name:'lel',
			txt:'lmao'
		}
	]
}
