import { FC, useContext, useEffect } from 'react';

import { useBoolean } from '@chakra-ui/react';

import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import Arrow from '../Arrow';

const RightArrow: FC = () => {
	const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } = useContext(VisibilityContext);

	const [isDisabled, setIsDisabled] = useBoolean(!visibleItemsWithoutSeparators.length && isLastItemVisible);

	useEffect(() => {
		if (visibleItemsWithoutSeparators.length) {
			if (isLastItemVisible) {
				setIsDisabled.on();
			} else {
				setIsDisabled.off();
			}
		}
	}, [visibleItemsWithoutSeparators, isLastItemVisible]);

	return (
		<Arrow aria-label='Right Arrow Button' direction='right' isDisabled={isDisabled} onClick={() => scrollNext()} />
	);
};

export default RightArrow;
