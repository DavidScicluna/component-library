import memoize from 'memoizee';

import { FontSize } from '../../../../../theme/types';
import { FormLabelSize } from '../../types';
import { size as defaultSize } from '../data/defaultPropValues';

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
