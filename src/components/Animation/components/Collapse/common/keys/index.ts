import { __DEFAULT_CLASS_PREFIX__ } from '@common/constants';
import type { PolymorphicDefaultElement } from '@common/types';

import type { CollapseProps, CollapseXAxisProps, CollapseYAxisProps } from '../types';

export const __KEYS_COLLAPSE_CLASS__ = `${__DEFAULT_CLASS_PREFIX__}-collapse`;

export const __KEYS_COLLAPSE__: Array<keyof CollapseProps<PolymorphicDefaultElement>> = [
	'axis',
	'transition',
	'transitionEnd',
	'isOpacityAnimated'
];
export const __KEYS_COLLAPSE_X_AXIS__: Array<keyof CollapseXAxisProps> = ['startingWidth', 'endingWidth'];
export const __KEYS_COLLAPSE_Y_AXIS__: Array<keyof CollapseYAxisProps> = ['startingHeight', 'endingHeight'];
