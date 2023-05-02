import { Style } from '../../../../../../common/types';
import { isFixed as defaultIsFixed } from '../../default/props';
import { border, transform } from '../../default/sizes';
import { PushableOverlayStyleProps } from '../types';

export default ({ isFixed = defaultIsFixed }: PushableOverlayStyleProps): Style => ({
	'borderTopWidth': `${border}px`,
	'borderBottomWidth': `${transform.default}px`,

	'&:hover': !isFixed
		? {
				'borderTopWidth': `${transform.active}px`,
				'borderBottomWidth': `${transform.hover}px`,

				'&:active': {
					borderTopWidth: `${transform.hover}px`,
					borderBottomWidth: `${transform.active}px`
				}
		  }
		: {},

	'&:active': !isFixed
		? {
				borderTopWidth: `${transform.hover}px`,
				borderBottomWidth: `${transform.active}px`
		  }
		: {}
});
