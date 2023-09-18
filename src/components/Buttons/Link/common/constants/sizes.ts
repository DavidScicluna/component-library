import { __DEFAULT_TEXT_DECORATION_OFFSET__ } from '@common/constants';
import type { TextUnderlineOffsetClass } from '@common/types';

export const __DEFAULT_LINK_OFFSET_SIZE__: Record<'base' | 'hover' | 'active', TextUnderlineOffsetClass> = {
	base: __DEFAULT_TEXT_DECORATION_OFFSET__,
	hover: ((__DEFAULT_TEXT_DECORATION_OFFSET__ as number) * 2) as TextUnderlineOffsetClass,
	active: 1 as TextUnderlineOffsetClass
};
