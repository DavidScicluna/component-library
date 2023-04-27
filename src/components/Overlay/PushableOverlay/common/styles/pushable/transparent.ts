import { Style } from '../../../../../../common/types';
import { transform } from '../../default/sizes';

export default (): Style => ({
	'borderTopWidth': `${transform.active}px`,
	'borderBottomWidth': `${transform.active}px`,

	'&:hover': {
		'borderTopWidth': `${transform.active}px`,
		'borderBottomWidth': `${transform.active}px`,

		'&:active': {
			borderTopWidth: `${transform.active}px`,
			borderBottomWidth: `${transform.active}px`
		}
	},

	'&:active': {
		borderTopWidth: `${transform.active}px`,
		borderBottomWidth: `${transform.active}px`
	}
});
