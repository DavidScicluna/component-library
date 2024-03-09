import { DEFAULT_CLASS_PREFIX } from '@common/constants';

import type { BoxOtherProps } from '../types';

export const KEYS_BOX_CLASS = `${DEFAULT_CLASS_PREFIX}-box`;

export const KEYS_BOX: Array<keyof BoxOtherProps> = [
	'w',
	'minW',
	'maxW',
	'h',
	'minH',
	'maxH',
	'p',
	'px',
	'py',
	'pl',
	'pt',
	'pr',
	'pb',
	'm',
	'mx',
	'my',
	'ml',
	'mt',
	'mr',
	'mb'
];
