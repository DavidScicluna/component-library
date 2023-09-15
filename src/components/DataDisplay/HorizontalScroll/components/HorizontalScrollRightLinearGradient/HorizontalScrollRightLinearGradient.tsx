import type { FC } from 'react';

import { useGetHorizontalScrollAPIContext, useHorizontalScrollArrowState } from '../../common/hooks';
import { HorizontalScrollLinearGradient } from '../HorizontalScrollLinearGradient';

const HorizontalScrollRightLinearGradient: FC = () => {
	const scroll = useGetHorizontalScrollAPIContext();
	const { isVisible } = useHorizontalScrollArrowState({ direction: 'right', scroll });

	return <HorizontalScrollLinearGradient direction='right' isVisible={isVisible} />;
};

export default HorizontalScrollRightLinearGradient;
