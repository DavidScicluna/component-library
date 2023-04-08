import { FC, useContext } from 'react';

import { useBoolean } from '@chakra-ui/react';

import { VisibilityContext as ScrollContext } from 'react-horizontal-scrolling-menu';
import { useUpdateEffect } from 'usehooks-ts';

import { useDebounce } from '../../../../../../common/hooks';
import HorizontalScrollArrow from '../../../../../HorizontalScroll/components/Arrow';

const HorizontalScrollLeftArrow: FC = () => {
	const scroll = useContext(ScrollContext);
	const {
		getPrevItem,
		scrollToItem,
		initComplete = false,
		isFirstItemVisible = false,
		visibleItemsWithoutSeparators = [],
		visibleElements = []
	} = scroll || {};

	const [isVisible, setIsVisible] = useBoolean();
	const debouncedIsVisible = useDebounce<boolean>(isVisible, 'ultra-fast');

	const handleScrollPrev = () => {
		const prevItem = getPrevItem();
		scrollToItem(prevItem?.entry?.target, 'smooth', 'nearest', 'nearest');
	};

	useUpdateEffect(() => {
		if (visibleItemsWithoutSeparators.length) {
			if (!initComplete || (initComplete && isFirstItemVisible) || visibleElements.length) {
				setIsVisible.off();
			} else {
				setIsVisible.on();
			}
		}
	}, [initComplete, isFirstItemVisible, visibleItemsWithoutSeparators, visibleElements]);

	return <HorizontalScrollArrow direction='left' isVisible={debouncedIsVisible} onClick={handleScrollPrev} />;
};

export default HorizontalScrollLeftArrow;
