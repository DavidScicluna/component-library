import { FC, useContext, useEffect } from 'react';

import { useConst, useBoolean } from '@chakra-ui/react';

import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { useDebounce } from 'usehooks-ts';

import { useTheme } from '../../../../common/hooks';
import { convertStringToNumber } from '../../../../common/utils';
import Arrow from '../Arrow';

const RightArrow: FC = () => {
	const theme = useTheme();

	const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } = useContext(VisibilityContext);

	const duration = useConst<number>(convertStringToNumber(theme.transition.duration.normal, 'ms'));

	const [isVisible, setIsVisible] = useBoolean();
	const debouncedIsVisible = useDebounce<boolean>(isVisible, duration);

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
