import { FC } from 'react';

import { useHorizontalScrollArrowState } from '../../common/hooks';
import Arrow from '../Arrow';

import { LeftArrowProps } from './common/types';

const LeftArrow: FC<LeftArrowProps> = ({ scroll }) => {
	const { scrollPrev } = scroll || {};

	const { isDisabled } = useHorizontalScrollArrowState({ direction: 'left', scroll });

	return <Arrow direction='left' isDisabled={isDisabled} onClick={() => scrollPrev()} />;
};

export default LeftArrow;
