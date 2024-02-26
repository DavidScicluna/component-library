import { DEFAULT_TEXT_DECORATION_OFFSET } from '@common/constants';
import type { TextUnderlineOffsetClass } from '@common/types';

export const DEFAULT_LINK_OFFSET_SIZE: Record<'base' | 'hover' | 'active', TextUnderlineOffsetClass> = {
	base: DEFAULT_TEXT_DECORATION_OFFSET,
	hover: ((DEFAULT_TEXT_DECORATION_OFFSET as number) * 2) as TextUnderlineOffsetClass,
	active: 1 as TextUnderlineOffsetClass
};
