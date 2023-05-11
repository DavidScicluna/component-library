import memoize from 'micro-memoize';

import { FontSize } from '../../../../../theme/types';
import { size as defaultSize } from '../../../FormControl/common/default/props';
import { FormControlProps } from '../../../FormControl/common/types';

type GetFormLabelFontSizeProps = Pick<FormControlProps, 'size'>;

export const getFormLabelFontSize = memoize(({ size = defaultSize }: GetFormLabelFontSizeProps): FontSize => {
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
