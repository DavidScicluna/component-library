import { FC, useEffect } from 'react';

import { useBoolean } from '@chakra-ui/react';

import { useDebounce } from '../../../../common/hooks';
import Arrow from '../Arrow';

import { LeftArrowProps } from './common/types';

const LeftArrow: FC<LeftArrowProps> = ({ scroll }) => {
	const { scrollPrev, initComplete = false, isFirstItemVisible = false, visibleElements = [] } = scroll || {};

	const [isDisabled, setIsDisabled] = useBoolean();
	const debouncedIsDisabled = useDebounce<boolean>(isDisabled, 'ultra-fast');

	const handleCheckIsDisabled = (): void => {
		if (visibleElements.length) {
			if (!initComplete || (initComplete && isFirstItemVisible)) {
				setIsDisabled.on();
			} else {
				setIsDisabled.off();
			}
		}
	};

	useEffect(() => {
		handleCheckIsDisabled();
	}, [isFirstItemVisible, visibleElements]);

	return <Arrow direction='left' isDisabled={debouncedIsDisabled} onClick={() => scrollPrev()} />;
};

export default LeftArrow;
