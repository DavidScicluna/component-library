import { FC, useContext, useEffect } from 'react';

import { useBoolean } from '@chakra-ui/react';

import { VisibilityContext as ScrollContext } from 'react-horizontal-scrolling-menu';

import { height } from '../../..';
import { useDebounce, useTheme } from '../../../../../../../../common/hooks';
import { convertStringToNumber } from '../../../../../../../../common/utils';
import { getColor } from '../../../../../../../../common/utils/color';
import HorizontalScrollArrow from '../../../../../../../HorizontalScroll/components/Arrow';
import { useStepperContext } from '../../../../../common/hooks';

const border = 2;

const HorizontalScrollRightArrow: FC = () => {
	const theme = useTheme();

	const { colorMode } = useStepperContext();

	const scroll = useContext(ScrollContext);
	const { getNextItem, scrollToItem, initComplete = false, isLastItemVisible = false, visibleElements = [] } = scroll;

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

	const handleScrollNext = (): void => {
		const nextItem = getNextItem();
		scrollToItem(nextItem?.entry?.target, 'smooth', 'nearest', 'nearest');
	};

	useEffect(() => {
		handleCheckIsVisible();
	}, [isLastItemVisible, visibleElements]);

	return (
		<HorizontalScrollArrow
			direction='right'
			isVisible={debouncedIsVisible}
			onClick={handleScrollNext}
			sx={{
				'height': `calc(100% - ${border * 2}px)`,
				'minHeight': height,

				'borderBottomWidth': '2px',
				'borderBottomStyle': 'solid',
				'borderBottomColor': getColor({ theme, colorMode, type: 'divider' }),

				'&::before': {
					height: `calc(100% - ${border * 2}px)`,
					minHeight: `${convertStringToNumber(height, 'px') - 2}px`,

					borderBottom: 'none'
				}
			}}
		/>
	);
};

export default HorizontalScrollRightArrow;
