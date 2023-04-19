import { FC, useContext, useEffect } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import { useBoolean } from '@chakra-ui/react';

import { useDebounce } from '../../../../common/hooks';
import Arrow from '../Arrow';

const LeftArrow: FC = () => {
	const { isFirstItemVisible, scrollPrev, visibleItemsWithoutSeparators, initComplete } =
		useContext(VisibilityContext);

	const [isVisible, setIsVisible] = useBoolean();
	const debouncedIsVisible = useDebounce<boolean>(isVisible, 'ultra-fast');

	useEffect(() => {
		if (visibleItemsWithoutSeparators.length) {
			if (!initComplete || (initComplete && isFirstItemVisible)) {
				setIsVisible.off();
			} else {
				setIsVisible.on();
			}
		}
	}, [initComplete, visibleItemsWithoutSeparators, isFirstItemVisible]);

	return <Arrow direction='left' isVisible={debouncedIsVisible} onClick={() => scrollPrev()} />;
};

export default LeftArrow;
