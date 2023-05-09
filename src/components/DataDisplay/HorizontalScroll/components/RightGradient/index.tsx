import { FC, useContext } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import { useHorizontalScrollArrowState } from '../../common/hooks';
import Gradient from '../Gradient';

const RightGradient: FC = () => {
	const scroll = useContext(VisibilityContext);

	const { isVisible } = useHorizontalScrollArrowState({ direction: 'right', scroll });

	return <Gradient direction='right' isVisible={isVisible} />;
};

export default RightGradient;
