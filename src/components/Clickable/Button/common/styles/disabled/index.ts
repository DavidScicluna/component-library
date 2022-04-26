import { Style } from '../../../../../../common/types';
import { Size, Variant } from '../../../types';
import { handleSize } from '../../utils';
import { ButtonStyleProps } from '../types';

export default (isLoading: ButtonStyleProps['isLoading'] = false, sizeProp: Size, variant: Variant): Style => {
	const size = handleSize(sizeProp);
	const border = size.border;

	return {
		cursor: 'not-allowed',
		pointerEvents: 'none',

		opacity: isLoading ? 1 : 0.5,

		borderTop: `${variant !== 'text' ? border : 0}px solid transparent`,
		borderBottom: `${variant !== 'text' ? border : 0}px solid transparent`,

		transform: variant !== 'text' ? 'translateY(0px)' : 'none'
	};
};
