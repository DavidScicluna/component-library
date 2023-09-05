import memoize from 'micro-memoize';

import type { ThemeAppColorMode } from '@common/types';

export type GetAmountType = 'active' | 'back' | 'hover' | 'placeholder' | 'selection';
export type GetAmountTypeArr = Array<GetAmountType>;
export type GetAmountTypeObj = Record<GetAmountType, number>;

export const getAmount = memoize((colorMode: ThemeAppColorMode, type: GetAmountType): number => {
	switch (type) {
		case 'active':
			return colorMode === 'light' ? 0.2 : 0.15;
		case 'back':
			return colorMode === 'light' ? 0.1 : 0.05;
		case 'hover':
			return colorMode === 'light' ? 0.15 : 0.1;
		case 'placeholder':
			return colorMode === 'light' ? 0 : 0;
		case 'selection':
			return colorMode === 'light' ? 0.25 : 0.25;
	}
});
