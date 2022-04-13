import { Style } from '../../../../../../common/types';
import { Size, Variant } from '../../../types';
import { handleSize } from '../../utils';

export default (sizeProp: Size, variant: Variant): Style => {
	const size = handleSize(sizeProp);
	const border = size.border;

	return {
		borderBottom: `${border}px solid transparent`,

		transform: variant !== 'icon' ? `translateY(${border}px)` : 'none'
	};
};
