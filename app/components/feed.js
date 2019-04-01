import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';

export default class FeedComponent extends Component {
	@tracked tweets = [{
			id:1,
			name:'lel',
			txt:'lmao'
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
