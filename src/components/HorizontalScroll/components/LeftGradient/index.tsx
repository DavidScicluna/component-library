import { FC, useContext } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import { useHorizontalScrollArrowState } from '../../common/hooks';
import Gradient from '../Gradient';

const LeftGradient: FC = () => {
	const scroll = useContext(VisibilityContext);

	const { isVisible } = useHorizontalScrollArrowState({ direction: 'left', scroll });

	return <Gradient direction='left' isVisible={isVisible} />;
};

export default LeftGradient;
