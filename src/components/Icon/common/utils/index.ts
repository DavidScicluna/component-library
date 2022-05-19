import { memoize } from 'lodash';

import { IconType } from '../../types';

type CheckFontStatusProps = {
	type: IconType;
};

export const checkFontStatus = memoize(({ type }: CheckFontStatusProps): boolean => {
	if (document.fonts.check(`1rem 'Material Icons${type === 'outlined' ? ' Outlined' : ''}'`)) {
		return true;
	} else {
		return false;
	}
});
