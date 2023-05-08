import { FC, useContext, useEffect } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import { useBoolean } from '@chakra-ui/react';

import { useDebounce } from '../../../../common/hooks';
import OverlayArrow from '../OverlayArrow';

const LeftOverlayArrow: FC = () => {
	const {
		scrollPrev,
		initComplete = false,
		isFirstItemVisible = false,
		visibleElements = []
	} = useContext(VisibilityContext);

	const [isVisible, setIsVisible] = useBoolean();
	const debouncedIsVisible = useDebounce<boolean>(isVisible, 'ultra-fast');

	const handleCheckIsVisible = (): void => {
		if (visibleElements.length) {
			if (!initComplete || (initComplete && isFirstItemVisible)) {
				setIsVisible.off();
			} else {
				setIsVisible.on();
			}
		}
	};

	useEffect(() => {
		handleCheckIsVisible();
	}, [isFirstItemVisible, visibleElements]);

	return <OverlayArrow direction='left' isVisible={debouncedIsVisible} onClick={() => scrollPrev()} />;
};

export default LeftOverlayArrow;
