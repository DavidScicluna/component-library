import memoize from 'micro-memoize';

import { category as defaultCategory } from '../default/props';
import { IconProps } from '../types';

type CheckFontStatusProps = Pick<IconProps, 'category'>;

export const checkFontStatus = memoize(({ category = defaultCategory }: CheckFontStatusProps): boolean => {
	if (document.fonts.check(`1rem 'Material Icons${category === 'outlined' ? ' Outlined' : ''}'`)) {
		return true;
	} else {
		return false;
	}
});
