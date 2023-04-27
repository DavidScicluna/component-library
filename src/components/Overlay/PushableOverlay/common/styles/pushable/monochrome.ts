import { Style } from '../../../../../../common/types';
import { border, transform } from '../../default/sizes';

export default (): Style => ({
	'borderTopWidth': `${border}px`,
	'borderBottomWidth': `${transform.default}px`,

	'&:hover': {
		'borderTopWidth': `${transform.active}px`,
		'borderBottomWidth': `${transform.hover}px`,

		'&:active': {
			borderTopWidth: `${transform.hover}px`,
			borderBottomWidth: `${transform.active}px`
		}
	},

	'&:active': {
		borderTopWidth: `${transform.hover}px`,
		borderBottomWidth: `${transform.active}px`
	}
});
