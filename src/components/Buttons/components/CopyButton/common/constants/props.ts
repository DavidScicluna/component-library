import theme from '@common/theme';
import type { ThemeDuration } from '@common/types';
import { convertStringToNumber } from '@common/utils';

import type { CopyButtonTimeout } from '../types';

export const __DEFAULT_COPY_BUTTON_DURATION__: ThemeDuration = 'ultra-slow';
export const __DEFAULT_COPY_BUTTON_TIMEOUT__: CopyButtonTimeout = convertStringToNumber(
	theme.transitionDuration[__DEFAULT_COPY_BUTTON_DURATION__],
	'ms'
);
