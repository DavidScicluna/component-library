import { __DEFAULT_CLASS_PREFIX__ } from '@common/constants';
import type { PolymorphicDefaultElement } from '@common/types';

import type { PopProps } from '../types';

export const __KEYS_POP_CLASS__ = `${__DEFAULT_CLASS_PREFIX__}-pop`;

export const __KEYS_POP__: Array<keyof PopProps<PolymorphicDefaultElement>> = [
	'transition',
	'transitionEnd',
	'initialScale',
	'isReversed'
];
