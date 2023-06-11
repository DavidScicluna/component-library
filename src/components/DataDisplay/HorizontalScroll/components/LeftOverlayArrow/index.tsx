import { FC, useContext } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import { useHorizontalScrollArrowState } from '../../common/hooks';
import OverlayArrow from '../OverlayArrow';

import { LeftOverlayArrowProps } from './common/types';

const LeftOverlayArrow: FC<LeftOverlayArrowProps> = ({ scrollAmount = 'multiple' }) => {
	const scroll = useContext(VisibilityContext);
	const { getPrevItem, scrollToItem, scrollPrev } = scroll;

	const { isVisible } = useHorizontalScrollArrowState({ direction: 'left', scroll });

	const handleScrollPrev = (): void => {
		switch (scrollAmount) {
			case 'single': {
				const prevItem = getPrevItem();
				scrollToItem(prevItem?.entry?.target, 'smooth', 'nearest', 'nearest');
				break;
			}
			case 'multiple': {
				scrollPrev();
				break;
			}
		}
	};

	return <OverlayArrow direction='left' isVisible={isVisible} onClick={handleScrollPrev} />;
};

export default LeftOverlayArrow;
