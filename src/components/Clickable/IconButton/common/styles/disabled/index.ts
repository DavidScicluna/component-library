import { Style } from '../../../../../../common/types';
import { Size, Variant } from '../../../types';
import { handleSize } from '../../utils';

export default (isLoading = false, sizeProp: Size, variant: Variant): Style => {
	const size = handleSize(sizeProp);
	const border = size.border;

	return {
		cursor: 'not-allowed',
		pointerEvents: 'none',

		opacity: isLoading ? 1 : 0.5,

		borderBottom: `${border}px solid transparent`,

		transform: variant !== 'icon' ? `translateY(${border}px)` : 'none'
	};
};
