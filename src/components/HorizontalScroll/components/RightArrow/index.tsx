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

	const [isDisabled, setIsDisabled] = useBoolean();
	const debouncedIsDisabled = useDebounce<boolean>(isDisabled, duration);

	useEffect(() => {
		if (visibleItemsWithoutSeparators.length) {
			if (isLastItemVisible) {
				setIsDisabled.on();
			} else {
				setIsDisabled.off();
			}
		}
	}, [visibleItemsWithoutSeparators, isLastItemVisible]);

	return <Arrow direction='right' isDisabled={debouncedIsDisabled} onClick={() => scrollNext()} />;
};

export default RightArrow;
