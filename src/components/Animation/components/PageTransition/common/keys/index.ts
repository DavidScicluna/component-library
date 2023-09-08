import { __DEFAULT_CLASS_PREFIX__ } from '@common/constants';
import type { PolymorphicDefaultElement } from '@common/types';

import type { PageTransitionProps } from '../types';

export const __KEYS_PAGE_TRANSITION_CLASS__ = `${__DEFAULT_CLASS_PREFIX__}-page-transition`;

export const __KEYS_PAGE_TRANSITION__: Array<keyof PageTransitionProps<PolymorphicDefaultElement>> = [
	'blur',
	'transition',
	'transitionEnd'
];
