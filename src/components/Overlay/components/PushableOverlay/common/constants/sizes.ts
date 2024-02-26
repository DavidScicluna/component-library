import { DEFAULT_BORDER_WIDTH } from '@common/constants';
import type { ThemeBorderWidth } from '@common/types';

export const DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE: Record<
	'base' | 'pushable' | 'hover' | 'active',
	ThemeBorderWidth
> = {
	base: DEFAULT_BORDER_WIDTH,
	pushable: (DEFAULT_BORDER_WIDTH * 2) as ThemeBorderWidth,
	hover: (DEFAULT_BORDER_WIDTH * 3) as ThemeBorderWidth,
	active: 0
};
