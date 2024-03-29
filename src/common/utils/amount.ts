import memoize from 'micro-memoize';

import type { ThemeAppColorMode } from '@common/types';

export type GetAmountType = 'active' | 'back' | 'focus' | 'hover';
export type GetAmountTypeArr = Array<GetAmountType>;
export type GetAmountTypeObj = Record<GetAmountType, number>;

export const getAmount = memoize((colorMode: ThemeAppColorMode, type: GetAmountType): number => {
	switch (type) {
		case 'active':
			return colorMode === 'light' ? 0.15 : 0.1;
		case 'back':
			return colorMode === 'light' ? 0.05 : 0;
		case 'focus':
			return colorMode === 'light' ? 0.15 : 0.1;
		case 'hover':
			return colorMode === 'light' ? 0.1 : 0.05;
	}
});
