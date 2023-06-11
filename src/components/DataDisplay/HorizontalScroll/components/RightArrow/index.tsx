import { FC } from 'react';

import { useHorizontalScrollArrowState } from '../../common/hooks';
import Arrow from '../Arrow';

import { RightArrowProps } from './common/types';

const RightArrow: FC<RightArrowProps> = ({ scroll, scrollAmount = 'multiple' }) => {
	const { getNextItem, scrollToItem, scrollNext } = scroll || {};

	const { isDisabled } = useHorizontalScrollArrowState({ direction: 'right', scroll });

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

	return <Arrow direction='right' isDisabled={isDisabled} onClick={handleScrollNext} />;
};

export default RightArrow;
