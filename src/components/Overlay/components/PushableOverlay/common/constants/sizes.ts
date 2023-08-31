import { __DEFAULT_BORDER_WIDTH__ } from '@common/constants';
import type { ThemeBorderWidth } from '@common/types';

export const __DEFAULT_PUSHABLE_OVERLAY_TRANSFORM_SIZE__: Record<
	'base' | 'pushable' | 'hover' | 'active',
	ThemeBorderWidth
> = {
	base: __DEFAULT_BORDER_WIDTH__,
	pushable: (__DEFAULT_BORDER_WIDTH__ * 2) as ThemeBorderWidth,
	hover: (__DEFAULT_BORDER_WIDTH__ * 3) as ThemeBorderWidth,
	active: 0
};
