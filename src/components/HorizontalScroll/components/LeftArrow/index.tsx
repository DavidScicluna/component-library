import { FC, useContext, useEffect } from 'react';

import { useBoolean } from '@chakra-ui/react';

import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import Arrow from '../Arrow';

const LeftArrow: FC = () => {
	const { isFirstItemVisible, scrollPrev, visibleItemsWithoutSeparators, initComplete } =
		useContext(VisibilityContext);

	const [isDisabled, setIsDisabled] = useBoolean();

	useEffect(() => {
		if (visibleItemsWithoutSeparators.length) {
			if (!initComplete || (initComplete && isFirstItemVisible)) {
				setIsDisabled.on();
			} else {
				setIsDisabled.off();
			}
		}
	}, [visibleItemsWithoutSeparators, isFirstItemVisible]);

	return (
		<Arrow aria-label='Left Arrow Button' direction='left' isDisabled={isDisabled} onClick={() => scrollPrev()} />
	);
};

export default LeftArrow;
