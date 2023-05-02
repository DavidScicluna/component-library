import { Style } from '../../../../../../common/types';
import { isFixed as defaultIsFixed } from '../../default/props';
import { transform } from '../../default/sizes';
import { PushableOverlayStyleProps } from '../types';

export default ({ isFixed = defaultIsFixed }: PushableOverlayStyleProps): Style => ({
	'borderTopWidth': `${transform.active}px`,
	'borderBottomWidth': `${transform.active}px`,

	'&:hover': !isFixed
		? {
				'borderTopWidth': `${transform.active}px`,
				'borderBottomWidth': `${transform.active}px`,

				'&:active': {
					borderTopWidth: `${transform.active}px`,
					borderBottomWidth: `${transform.active}px`
				}
		  }
		: {},

	'&:active': !isFixed
		? {
				borderTopWidth: `${transform.active}px`,
				borderBottomWidth: `${transform.active}px`
		  }
		: {}
});
