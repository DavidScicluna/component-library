import { Style } from '../../../../../../common/types';
import { border, transform } from '../../default/sizes';

export default (): Style => ({
	'borderTopWidth': `${border}px`, // 2px
	'borderBottomWidth': `${transform.default}px`, // 4px

	'&:hover': {
		'borderTopWidth': `${transform.active}px`, // 0px,
		'borderBottomWidth': `${transform.hover}px`, // 6px

		'&:active': {
			borderTopWidth: `${transform.hover}px`, // 6px
			borderBottomWidth: `${transform.active}px` // 0px
		}
	},

	'&:active': {
		borderTopWidth: `${transform.hover}px`, // 6px
		borderBottomWidth: `${transform.active}px` // 0px
	}
});
