import type { FC } from 'react';

import { useGetHorizontalScrollAPIContext, useHorizontalScrollArrowState } from '../../common/hooks';
import { HorizontalScrollLinearGradient } from '../HorizontalScrollLinearGradient';

const HorizontalScrollLeftLinearGradient: FC = () => {
	const scroll = useGetHorizontalScrollAPIContext();
	const { isVisible } = useHorizontalScrollArrowState({ direction: 'left', scroll });

	return <HorizontalScrollLinearGradient direction='left' isVisible={isVisible} />;
};

export default HorizontalScrollLeftLinearGradient;
