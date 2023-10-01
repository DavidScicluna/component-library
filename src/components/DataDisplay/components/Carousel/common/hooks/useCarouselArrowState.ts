import { useEffect } from 'react';

import { debounce } from 'lodash-es';

import { useBoolean } from '@common/hooks';
import type { PickFrom } from '@common/types';

import type { CarouselVariant } from '../types';

import useCarouselManager from './useCarouselManager';

type UseCarouselArrowStateReturn = Record<'isDisabled' | 'isVisible', boolean>;

const useCarouselArrowState = (direction: PickFrom<CarouselVariant, 'left' | 'right'>): UseCarouselArrowStateReturn => {
	const { isFirstItemVisible = false, isLastItemVisible = false, visibleItems = [] } = useCarouselManager();

	const [isDisabled, setIsDisabled] = useBoolean();

	const [isVisible, setIsVisible] = useBoolean();

	const handleCheckStatus = debounce((): void => {
		switch (direction) {
			case 'left': {
				if (visibleItems.length > 0) {
					if (isFirstItemVisible) {
						setIsDisabled.on();
						setIsVisible.off();
					} else {
						setIsDisabled.off();
						setIsVisible.on();
					}
				}
				break;
			}
			case 'right': {
				if (visibleItems.length > 0) {
					if (isLastItemVisible) {
						setIsDisabled.on();
						setIsVisible.off();
					} else {
						setIsDisabled.off();
						setIsVisible.on();
					}
				}
				break;
			}
		}
	}, 250);

	useEffect(() => handleCheckStatus(), [isFirstItemVisible, isLastItemVisible, visibleItems]);

	return { isDisabled, isVisible };
};

export default useCarouselArrowState;
