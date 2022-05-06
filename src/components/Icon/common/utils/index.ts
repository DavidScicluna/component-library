import { memoize } from 'lodash';

import { Type } from '../../types';

type CheckFontStatusProps = {
	type: Type;
};

export const checkFontStatus = memoize(({ type }: CheckFontStatusProps): boolean => {
	if (document.fonts.check(`1rem 'Material Icons${type === 'outlined' ? ' Outlined' : ''}'`)) {
		return true;
	} else {
		return false;
	}
});
