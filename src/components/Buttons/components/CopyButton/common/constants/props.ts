import theme from '@common/theme';
import type { ThemeDuration } from '@common/types';
import { convertStringToNumber } from '@common/utils';

import type { CopyButtonTimeout } from '../types';

export const DEFAULT_COPY_BUTTON_DURATION: ThemeDuration = 'ultra-slow';
export const DEFAULT_COPY_BUTTON_TIMEOUT: CopyButtonTimeout = convertStringToNumber(
	theme.transitionDuration[DEFAULT_COPY_BUTTON_DURATION],
	'ms'
);
