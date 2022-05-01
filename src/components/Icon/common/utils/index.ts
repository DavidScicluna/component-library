import { memoize } from 'lodash';

import { Type } from '../../types';

export const checkFontStatus = memoize((type: Type): boolean => {
	if (document.fonts.check(`1rem 'Material Icons${type === 'outlined' ? ' Outlined' : ''}'`)) {
		return true;
	} else {
		return false;
	}
});
