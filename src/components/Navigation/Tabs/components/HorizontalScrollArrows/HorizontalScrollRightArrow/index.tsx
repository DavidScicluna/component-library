import { FC, useContext } from 'react';

import { useBoolean } from '@chakra-ui/react';

import { VisibilityContext as ScrollContext } from 'react-horizontal-scrolling-menu';
import { useUpdateEffect } from 'usehooks-ts';

import { useDebounce } from '../../../../../../common/hooks';
import HorizontalScrollArrow from '../../../../../HorizontalScroll/components/Arrow';

const HorizontalScrollRightArrow: FC = () => {
	const scroll = useContext(ScrollContext);
	const {
		getNextItem,
		scrollToItem,
		initComplete = false,
		isLastItemVisible = false,
		visibleItemsWithoutSeparators = [],
		visibleElements = []
	} = scroll;

	const [isVisible, setIsVisible] = useBoolean();
	const debouncedIsVisible = useDebounce<boolean>(isVisible, 'ultra-fast');

	const handleScrollNext = (): void => {
		const nextItem = getNextItem();
		scrollToItem(nextItem?.entry?.target, 'smooth', 'nearest', 'nearest');
	};

	useUpdateEffect(() => {
		if (visibleItemsWithoutSeparators.length) {
			if (!initComplete || (initComplete && isLastItemVisible) || visibleElements.length) {
				setIsVisible.off();
			} else {
				setIsVisible.on();
			}
		}
	}, [initComplete, isLastItemVisible, visibleItemsWithoutSeparators, visibleElements]);

	return <HorizontalScrollArrow direction='right' isVisible={debouncedIsVisible} onClick={handleScrollNext} />;
};

export default HorizontalScrollRightArrow;
