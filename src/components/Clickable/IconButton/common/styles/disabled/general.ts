import { IconButtonDisabledStylingProps } from './types';

import { Style } from '../../../../../../common/types';

export default ({ isLoading = false }: IconButtonDisabledStylingProps): Style => {
	return {
		cursor: 'not-allowed',
		pointerEvents: 'none',

		opacity: isLoading ? 1 : 0.5
	};
};
