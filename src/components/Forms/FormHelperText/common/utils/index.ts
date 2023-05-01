import memoize from 'micro-memoize';

import { FontSize } from '../../../../../theme/types';
import { size as defaultSize } from '../default/props';
import { FormHelperTextSize } from '../types';

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
