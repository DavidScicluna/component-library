import memoize from 'micro-memoize';

import { FontSize } from '../../../../../theme/types';
import { size as defaultSize } from '../default/props';
import { FormLabelSize } from '../types';

type GetFontSizeProps = { size: FormLabelSize };

export const getFontSize = memoize(({ size = defaultSize }: GetFontSizeProps): FontSize => {
	switch (size) {
		case 'xs':
			return 'sm';
		case 'sm':
			return 'md';
		case 'lg':
			return 'xl';
		case 'xl':
			return '2xl';
		default:
			return 'lg';
	}
});
