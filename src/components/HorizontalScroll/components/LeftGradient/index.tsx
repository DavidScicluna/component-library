import { FC, useContext, useEffect } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import { useBoolean } from '@chakra-ui/react';

import { useDebounce } from '../../../../common/hooks';
import Gradient from '../Gradient';

const LeftGradient: FC = () => {
	const { initComplete = false, isFirstItemVisible = false, visibleElements = [] } = useContext(VisibilityContext);

	const [isVisible, setIsVisible] = useBoolean();
	const debouncedIsVisible = useDebounce<boolean>(isVisible, 'ultra-fast');

	const handleCheckIsVisible = (): void => {
		if (visibleElements.length) {
			if (!initComplete || (initComplete && isFirstItemVisible)) {
				setIsVisible.off();
			} else {
				setIsVisible.on();
			}
		}
	};

	useEffect(() => {
		handleCheckIsVisible();
	}, [isFirstItemVisible, visibleElements]);

	return <Gradient direction='left' isVisible={debouncedIsVisible} />;
};

export default LeftGradient;
