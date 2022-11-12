import { FC, useContext, useEffect } from 'react';

import { useBoolean } from '@chakra-ui/react';

import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import { useDebounce } from '../../../../common/hooks';
import Arrow from '../Arrow';

const RightArrow: FC = () => {
	const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } = useContext(VisibilityContext);

	const [isVisible, setIsVisible] = useBoolean();
	const debouncedIsVisible = useDebounce<boolean>(isVisible, 'ultra-fast');

	useEffect(() => {
		if (visibleItemsWithoutSeparators.length) {
			if (isLastItemVisible) {
				setIsVisible.off();
			} else {
				setIsVisible.on();
			}
		}
	}, [visibleItemsWithoutSeparators, isLastItemVisible]);

	return <Arrow direction='right' isVisible={debouncedIsVisible} onClick={() => scrollNext()} />;
};

export default RightArrow;
