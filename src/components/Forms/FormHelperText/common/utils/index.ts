import memoize from 'memoizee';

import { FontSize } from '../../../../../theme/types';
import { FormHelperTextSize } from '../../types';
import { size as defaultSize } from '../data/defaultPropValues';

type GetFontSizeProps = { size: FormHelperTextSize };

export const getFontSize = memoize(({ size = defaultSize }: GetFontSizeProps): FontSize => {
	switch (size) {
		case 'xs':
			return 'xs';
		case 'sm':
			return 'sm';
		case 'lg':
			return 'lg';
		case 'xl':
			return 'xl';
		default:
			return 'md';
	}
});
