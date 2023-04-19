import { FC, useContext, useEffect } from 'react';
import { VisibilityContext as ScrollContext } from 'react-horizontal-scrolling-menu';

import { useBoolean } from '@chakra-ui/react';

import { useDebounce } from '../../../../../../common/hooks';
import HorizontalScrollArrow from '../../../../../HorizontalScroll/components/Arrow';

const HorizontalScrollLeftArrow: FC = () => {
	const scroll = useContext(ScrollContext);
	const {
		getPrevItem,
		scrollToItem,
		initComplete = false,
		isFirstItemVisible = false,
		visibleElements = []
	} = scroll || {};

	const [isVisible, setIsVisible] = useBoolean();
	const debouncedIsVisible = useDebounce<boolean>(isVisible, 'ultra-fast');

	const handleCheckIsVisible = (): void => {
		if (visibleElements.length) {
			if (!initComplete || (initComplete && isFirstItemVisible)) {
				setIsVisible.off();
			} else {
				setIsVisible.on();
			}
		}
	};

	const handleScrollPrev = (): void => {
		const prevItem = getPrevItem();
		scrollToItem(prevItem?.entry?.target, 'smooth', 'nearest', 'nearest');
	};

	useEffect(() => {
		handleCheckIsVisible();
	}, [isFirstItemVisible, visibleElements]);

	return <HorizontalScrollArrow direction='left' isVisible={debouncedIsVisible} onClick={handleScrollPrev} />;
};

export default HorizontalScrollLeftArrow;
