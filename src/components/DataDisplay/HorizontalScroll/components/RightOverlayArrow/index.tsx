import { FC, useContext } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import { useHorizontalScrollArrowState } from '../../common/hooks';
import OverlayArrow from '../OverlayArrow';

import { RightOverlayArrowProps } from './common/types';

const RightOverlayArrow: FC<RightOverlayArrowProps> = ({ scrollAmount = 'multiple' }) => {
	const scroll = useContext(VisibilityContext);
	const { getNextItem, scrollToItem, scrollNext } = scroll;

	const { isVisible } = useHorizontalScrollArrowState({ direction: 'right', scroll });

	const handleScrollNext = (): void => {
		switch (scrollAmount) {
			case 'single': {
				const nextItem = getNextItem();
				scrollToItem(nextItem?.entry?.target, 'smooth', 'nearest', 'nearest');
				break;
			}
			case 'multiple': {
				scrollNext();
				break;
			}
		}
	};

	return <OverlayArrow direction='right' isVisible={isVisible} onClick={handleScrollNext} />;
};

export default RightOverlayArrow;
