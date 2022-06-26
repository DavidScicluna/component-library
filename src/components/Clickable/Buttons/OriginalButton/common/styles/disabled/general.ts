import { ButtonDisabledStylingProps } from './types';

import { Style } from '../../../../../../../common/types';
import { isLoading as defaultIsLoading } from '../../../../common/data/defaultPropValues';

export default ({ isLoading = defaultIsLoading }: ButtonDisabledStylingProps): Style => ({
	cursor: 'not-allowed',
	pointerEvents: 'none',

	opacity: isLoading ? 1 : 0.5
});
