import memoize from 'micro-memoize';

import type { ThemeDuration } from '@common/types';
import { checkDurationType, getAnimationDuration } from '@common/utils';

import { DEFAULT_COPY_BUTTON_TIMEOUT } from '../constants';
import type { CopyButtonTimeout } from '../types';

export const getCopyButtonTimeout = memoize((timeout: CopyButtonTimeout = DEFAULT_COPY_BUTTON_TIMEOUT): number => {
	return checkDurationType(timeout) === 'theme'
		? getAnimationDuration(timeout as ThemeDuration, 0)
		: (timeout as number);
});
