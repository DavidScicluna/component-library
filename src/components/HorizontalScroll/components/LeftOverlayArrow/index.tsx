import { FC, useContext } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import { useHorizontalScrollArrowState } from '../../common/hooks';
import OverlayArrow from '../OverlayArrow';

const LeftOverlayArrow: FC = () => {
	const scroll = useContext(VisibilityContext);
	const { scrollPrev } = scroll;

	const { isVisible } = useHorizontalScrollArrowState({ direction: 'left', scroll });

	return <OverlayArrow direction='left' isVisible={isVisible} onClick={() => scrollPrev()} />;
};

export default LeftOverlayArrow;
