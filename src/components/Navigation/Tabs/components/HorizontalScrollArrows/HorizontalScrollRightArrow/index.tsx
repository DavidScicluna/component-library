import { FC, useContext, useEffect } from 'react';
import { VisibilityContext as ScrollContext } from 'react-horizontal-scrolling-menu';

import { useBoolean } from '@chakra-ui/react';

import { useDebounce } from '../../../../../../common/hooks';
import HorizontalScrollArrow from '../../../../../HorizontalScroll/components/Arrow';

const HorizontalScrollRightArrow: FC = () => {
	const scroll = useContext(ScrollContext);
	const { getNextItem, scrollToItem, initComplete = false, isLastItemVisible = false, visibleElements = [] } = scroll;

	const [isVisible, setIsVisible] = useBoolean();
	const debouncedIsVisible = useDebounce<boolean>(isVisible, 'ultra-fast');

	const handleCheckIsVisible = (): void => {
		if (visibleElements.length) {
			if (!initComplete || (initComplete && isLastItemVisible)) {
				setIsVisible.off();
			} else {
				setIsVisible.on();
			}
		}
	};

	const handleScrollNext = (): void => {
		const nextItem = getNextItem();
		scrollToItem(nextItem?.entry?.target, 'smooth', 'nearest', 'nearest');
	};

	useEffect(() => {
		handleCheckIsVisible();
	}, [isLastItemVisible, visibleElements]);

	return <HorizontalScrollArrow direction='right' isVisible={debouncedIsVisible} onClick={handleScrollNext} />;
};

export default HorizontalScrollRightArrow;
