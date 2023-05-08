import { FC, useContext } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import { useHorizontalScrollArrowState } from '../../common/hooks';
import OverlayArrow from '../OverlayArrow';

const RightOverlayArrow: FC = () => {
	const scroll = useContext(VisibilityContext);
	const { scrollNext } = scroll;

	const { isVisible } = useHorizontalScrollArrowState({ direction: 'right', scroll });

	return <OverlayArrow direction='right' isVisible={isVisible} onClick={() => scrollNext()} />;
};

export default RightOverlayArrow;
