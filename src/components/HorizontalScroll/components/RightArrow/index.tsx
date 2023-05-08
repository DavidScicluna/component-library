import { FC, useEffect } from 'react';

import { useBoolean } from '@chakra-ui/react';

import { useDebounce } from '../../../../common/hooks';
import Arrow from '../Arrow';

import { RightArrowProps } from './common/types';

const RightArrow: FC<RightArrowProps> = ({ scroll }) => {
	const { scrollNext, initComplete = false, isLastItemVisible = false, visibleElements = [] } = scroll || {};

	const [isDisabled, setIsDisabled] = useBoolean();
	const debouncedIsDisabled = useDebounce<boolean>(isDisabled, 'ultra-fast');

	const handleCheckIsDisabled = (): void => {
		if (visibleElements.length) {
			if (!initComplete || (initComplete && isLastItemVisible)) {
				setIsDisabled.on();
			} else {
				setIsDisabled.off();
			}
		}
	};

	useEffect(() => {
		handleCheckIsDisabled();
	}, [isLastItemVisible, visibleElements]);

	return <Arrow direction='right' isDisabled={debouncedIsDisabled} onClick={() => scrollNext()} />;
};

export default RightArrow;
