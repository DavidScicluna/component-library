import { FC } from 'react';

import {
	useGetHorizontalScrollAPIContext,
	useHorizontalScrollArrowState
} from '../../../../../HorizontalScroll/common/hooks';
import HorizontalScrollOverlayArrow from '../../../../../HorizontalScroll/components/OverlayArrow';

const HorizontalScrollRightArrow: FC = () => {
	const scroll = useGetHorizontalScrollAPIContext();
	const { getNextItem, scrollToItem } = scroll || {};

	const { isVisible } = useHorizontalScrollArrowState({ direction: 'right', scroll });

	const handleScrollNext = (): void => {
		const nextItem = getNextItem();
		scrollToItem(nextItem?.entry?.target, 'smooth', 'nearest', 'nearest');
	};

	return <HorizontalScrollOverlayArrow direction='right' isVisible={isVisible} onClick={handleScrollNext} />;
};

export default HorizontalScrollRightArrow;
