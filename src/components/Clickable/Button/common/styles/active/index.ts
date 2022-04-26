import { Style } from '../../../../../../common/types';
import { Size, Variant } from '../../../types';
import { handleSize } from '../../utils';

export default (sizeProp: Size, variant: Variant): Style => {
	const size = handleSize(sizeProp);
	const border = size.border;

	return {
		borderTop: `${variant !== 'text' ? border : 0}px solid transparent`,
		borderBottom: `${variant !== 'text' ? border : 0}px solid transparent`,

		transform: variant !== 'text' ? 'translateY(0px)' : 'none'
	};
};
