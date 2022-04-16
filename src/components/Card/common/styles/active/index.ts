import { Style } from '../../../../../common/types';
import { Variant } from '../../../types';
import { handleSize } from '../../utils';
import { CardStyleProps } from '../types';

export default (isClickable: CardStyleProps['isClickable'] = true, variant: Variant): Style => {
	const size = handleSize();
	const border = size.border;

	return {
		borderBottom: `${variant !== 'transparent' ? border : 0}px solid transparent`,

		transform: variant !== 'transparent' && isClickable ? `translateY(${border}px)` : 'none'
	};
};
