import { IconButtonDisabledStylingProps } from './types';

import { Style } from '../../../../../../common/types';
import { isLoading as defaultIsLoading } from '../../data/defaultPropValues';

export default ({ isLoading = defaultIsLoading }: IconButtonDisabledStylingProps): Style => ({
	cursor: 'not-allowed',
	pointerEvents: 'none',

	opacity: isLoading ? 1 : 0.5
});
