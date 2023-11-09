import { useMemo } from 'react';

import type { PickFrom } from '@common/types';

import type { CarouselVariant } from '../types';

import useCarouselContext from './useCarouselContext';
import useCarouselManager from './useCarouselManager';

type UseCarouselArrowStateReturn = Record<'isDisabled' | 'isVisible', boolean>;

const useCarouselArrowState = (direction: PickFrom<CarouselVariant, 'left' | 'right'>): UseCarouselArrowStateReturn => {
	const { visibleItems } = useCarouselContext();
	const { isFirstItemVisible, isLastItemVisible } = useCarouselManager();

	const isDisabled = useMemo<boolean>(() => {
		if (visibleItems.length > 0) {
			switch (direction) {
				case 'left':
					return isFirstItemVisible();
				case 'right':
					return isLastItemVisible();
				default:
					return true;
			}
		}
		return true;
	}, [direction, visibleItems]);

	const isVisible = useMemo<boolean>(() => {
		if (visibleItems.length > 0) {
			switch (direction) {
				case 'left':
					return !isFirstItemVisible();
				case 'right':
					return !isLastItemVisible();
				default:
					return false;
			}
		}
		return false;
	}, [direction, visibleItems]);

	return { isDisabled, isVisible };
};

export default useCarouselArrowState;
