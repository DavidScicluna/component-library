import { FC, useContext, useEffect } from 'react';

import { useConst, useBoolean } from '@chakra-ui/react';

import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { useDebounce } from 'usehooks-ts';

import { useTheme } from '../../../../common/hooks';
import { convertStringToNumber } from '../../../../common/utils';
import Arrow from '../Arrow';

const LeftArrow: FC = () => {
	const theme = useTheme();

	const { isFirstItemVisible, scrollPrev, visibleItemsWithoutSeparators, initComplete } =
		useContext(VisibilityContext);

	const duration = useConst<number>(convertStringToNumber(theme.transition.duration.normal, 'ms'));

	const [isVisible, setIsVisible] = useBoolean();
	const debouncedIsVisible = useDebounce<boolean>(isVisible, duration);

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
