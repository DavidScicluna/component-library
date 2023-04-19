import { FC, useContext, useEffect } from 'react';
import { VisibilityContext as ScrollContext } from 'react-horizontal-scrolling-menu';

import { useBoolean } from '@chakra-ui/react';

import { useDebounce, useTheme } from '../../../../../../../../common/hooks';
import { convertStringToNumber } from '../../../../../../../../common/utils';
import { getColor } from '../../../../../../../../common/utils/color';
import HorizontalScrollArrow from '../../../../../../../HorizontalScroll/components/Arrow';
import { useStepperContext } from '../../../../../common/hooks';
import { height } from '../../..';

const border = 2;

const HorizontalScrollLeftArrow: FC = () => {
	const theme = useTheme();

	const { colorMode } = useStepperContext();

	const scroll = useContext(ScrollContext);
	const {
		getPrevItem,
		scrollToItem,
		initComplete = false,
		isFirstItemVisible = false,
		visibleElements = []
	} = scroll || {};

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

	const handleScrollPrev = (): void => {
		const prevItem = getPrevItem();
		scrollToItem(prevItem?.entry?.target, 'smooth', 'nearest', 'nearest');
	};

	useEffect(() => {
		handleCheckIsVisible();
	}, [isFirstItemVisible, visibleElements]);

	return (
		<HorizontalScrollArrow
			direction='left'
			isVisible={debouncedIsVisible}
			onClick={handleScrollPrev}
			sx={{
				'height': `calc(100% - ${border * 2}px)`,
				'minHeight': height,

				'borderBottomWidth': '2px',
				'borderBottomStyle': 'solid',
				'borderBottomColor': getColor({ theme, colorMode, type: 'divider' }),

				'&::after': {
					height: `calc(100% - ${border * 2}px)`,
					minHeight: `${convertStringToNumber(height, 'px') - 2}px`,

					borderBottom: 'none'
				}
			}}
		/>
	);
};

export default HorizontalScrollLeftArrow;
