import { FC, useContext, useEffect } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import { useBoolean } from '@chakra-ui/react';

import { useDebounce } from '../../../../common/hooks';
import Gradient from '../Gradient';

const RightGradient: FC = () => {
	const { initComplete = false, isLastItemVisible = false, visibleElements = [] } = useContext(VisibilityContext);

	const [isVisible, setIsVisible] = useBoolean();
	const debouncedIsVisible = useDebounce<boolean>(isVisible, 'ultra-fast');

	const handleCheckIsVisible = (): void => {
		if (visibleElements.length) {
			if (!initComplete || (initComplete && isLastItemVisible)) {
				setIsVisible.off();
			} else {
				setIsVisible.on();
			}
		}
	};

	useEffect(() => {
		handleCheckIsVisible();
	}, [isLastItemVisible, visibleElements]);

	return <Gradient direction='right' isVisible={debouncedIsVisible} />;
};

export default RightGradient;
