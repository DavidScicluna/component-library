import { FC } from 'react';

import { useHorizontalScrollArrowState } from '../../common/hooks';
import Arrow from '../Arrow';

import { RightArrowProps } from './common/types';

const RightArrow: FC<RightArrowProps> = ({ scroll }) => {
	const { scrollNext } = scroll || {};

	const { isDisabled } = useHorizontalScrollArrowState({ direction: 'right', scroll });

	return <Arrow direction='right' isDisabled={isDisabled} onClick={() => scrollNext()} />;
};

export default RightArrow;
