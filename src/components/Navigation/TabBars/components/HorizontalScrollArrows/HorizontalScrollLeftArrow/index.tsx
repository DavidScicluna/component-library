import { FC } from 'react';

import {
	useGetHorizontalScrollAPIContext,
	useHorizontalScrollArrowState
} from '../../../../../DataDisplay/HorizontalScroll/common/hooks';
import HorizontalScrollOverlayArrow from '../../../../../DataDisplay/HorizontalScroll/components/OverlayArrow';

const HorizontalScrollLeftArrow: FC = () => {
	const scroll = useGetHorizontalScrollAPIContext();
	const { getPrevItem, scrollToItem } = scroll || {};

	const { isVisible } = useHorizontalScrollArrowState({ direction: 'left', scroll });

	const handleScrollPrev = (): void => {
		const prevItem = getPrevItem();
		scrollToItem(prevItem?.entry?.target, 'smooth', 'nearest', 'nearest');
	};

	return <HorizontalScrollOverlayArrow direction='left' isVisible={isVisible} onClick={handleScrollPrev} />;
};

export default HorizontalScrollLeftArrow;
