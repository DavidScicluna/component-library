import { __DEFAULT_CLASS_PREFIX__ } from '@common/constants';
import type { PolymorphicDefaultElement } from '@common/types';

import type { SlideProps } from '../types';

export const __KEYS_SLIDE_CLASS__ = `${__DEFAULT_CLASS_PREFIX__}-collapse`;

export const __KEYS_SLIDE__: Array<keyof SlideProps<PolymorphicDefaultElement>> = [
	'offsetX',
	'offsetY',
	'transition',
	'transitionEnd',
	'isReversed'
];
