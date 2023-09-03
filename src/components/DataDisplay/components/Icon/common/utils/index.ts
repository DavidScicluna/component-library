import { includes } from 'lodash-es';
import memoize from 'micro-memoize';

import type { ThemeFontSizeArr } from '@common/types';

import type { IconSize, IconSizes } from '../types';

type IconSizeType = 'theme' | 'other';

const sizes: IconSizes = [
	'xs',
	'sm',
	'md',
	'lg',
	'xl',
	'2xl',
	'3xl',
	'4xl',
	'5xl',
	'6xl',
	'7xl',
	'8xl',
	'9xl'
] as ThemeFontSizeArr;

export const checkIconSize = memoize((size: IconSize): IconSizeType => {
	if (includes(sizes, size)) {
		return 'theme';
	} else {
		return 'other';
	}
});
