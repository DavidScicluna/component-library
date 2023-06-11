import { FC } from 'react';

import { useHorizontalScrollArrowState } from '../../common/hooks';
import Arrow from '../Arrow';

import { LeftArrowProps } from './common/types';

const LeftArrow: FC<LeftArrowProps> = ({ scroll, scrollAmount = 'multiple' }) => {
	const { getPrevItem, scrollToItem, scrollPrev } = scroll || {};

	const { isDisabled } = useHorizontalScrollArrowState({ direction: 'left', scroll });

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

	return <Arrow direction='left' isDisabled={isDisabled} onClick={handleScrollPrev} />;
};

export default LeftArrow;
