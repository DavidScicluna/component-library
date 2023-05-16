import { useEffect } from 'react';

import { useBoolean, useDebounce } from '../../../../../common/hooks';
import { HorizontalScrollAPIContext, HorizontalScrollArrowDirection } from '../types';

type UseHorizontalScrollArrowStateProps = {
	direction: HorizontalScrollArrowDirection;
	scroll: HorizontalScrollAPIContext;
};
type UseHorizontalScrollArrowStateReturn = Record<'isDisabled' | 'isVisible', boolean>;

const useHorizontalScrollArrowState = (
	props: UseHorizontalScrollArrowStateProps
): UseHorizontalScrollArrowStateReturn => {
	const { direction, scroll } = props;
	const {
		initComplete = false,
		isFirstItemVisible = false,
		isLastItemVisible = false,
		visibleElements = []
	} = scroll;

	const [isDisabled, setIsDisabled] = useBoolean();
	const debouncedIsDisabled = useDebounce<boolean>(isDisabled, 'ultra-fast');

	const [isVisible, setIsVisible] = useBoolean();
	const debouncedIsVisible = useDebounce<boolean>(isVisible, 'ultra-fast');

	const handleCheckStatus = (): void => {
		switch (direction) {
			case 'left': {
				if (visibleElements.length) {
					if (!initComplete || (initComplete && isFirstItemVisible)) {
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
				if (visibleElements.length) {
					if (!initComplete || (initComplete && isLastItemVisible)) {
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
	};

	useEffect(() => handleCheckStatus(), [isFirstItemVisible, isLastItemVisible, visibleElements]);

	return { isDisabled: debouncedIsDisabled, isVisible: debouncedIsVisible };
};

export default useHorizontalScrollArrowState;
