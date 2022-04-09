import { Style } from '../../../../../../common/types';
import { Size, Variant } from '../../../types';
import { handleSize } from '../../utils';

export default (sizeProp: Size, variant: Variant): Style => {
	const size = handleSize(sizeProp);
	const border = size.border;
	const transform = size.transform[variant];

	return {
		borderBottom: '0px solid transparent',

		transform: variant !== 'text' ? `translateY(${variant === 'outlined' ? border : transform}px)` : 'none'
	};
};
