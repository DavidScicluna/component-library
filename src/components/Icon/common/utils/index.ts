import { memoize } from 'lodash';

import { IconProps } from '../../types';
import { category as defaultCategory } from '../data/defaultPropValues';

type CheckFontStatusProps = Pick<IconProps, 'category'>;

export const checkFontStatus = memoize(({ category = defaultCategory }: CheckFontStatusProps): boolean => {
	if (document.fonts.check(`1rem 'Material Icons${category === 'outlined' ? ' Outlined' : ''}'`)) {
		return true;
	} else {
		return false;
	}
});
