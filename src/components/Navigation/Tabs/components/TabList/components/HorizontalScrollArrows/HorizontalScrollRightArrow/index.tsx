import { FC, useContext, useEffect } from 'react';

import { useBoolean } from '@chakra-ui/react';

import { TabsContext } from '../../../../..';
import { useDebounce, useTheme } from '../../../../../../../../common/hooks';
import { getColor } from '../../../../../../../../common/utils/color';
import HorizontalScrollArrow from '../../../../../../../HorizontalScroll/components/Arrow';
import {
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled
} from '../../../../../common/data/defaultPropValues';
import { TabsContext as TabContextType } from '../../../../../types';
import { HorizontalScrollArrowProps as HorizontalScrollLeftArrowProps } from '../common/types';

// const border = 2;

const HorizontalScrollRightArrow: FC<HorizontalScrollLeftArrowProps> = (props) => {
	const theme = useTheme();

	const { colorMode = defaultColorMode, isDisabled = defaultIsDisabled } = useContext<TabContextType>(TabsContext);

	const { scroll } = props;
	const { getNextItem, isLastItemVisible = false, scrollToItem, visibleItemsWithoutSeparators = [] } = scroll || {};

	const [isVisible, setIsVisible] = useBoolean(true);
	const debouncedIsVisible = useDebounce<boolean>(isVisible, 'ultra-fast');

	const handleScrollNext = (): void => {
		const nextItem = getNextItem();
		scrollToItem(nextItem?.entry?.target, 'smooth', 'center', 'nearest');
	};

	useEffect(() => {
		if (visibleItemsWithoutSeparators.length) {
			if (isLastItemVisible) {
				setIsVisible.off();
			} else {
				setIsVisible.on();
			}
		}
	}, [visibleItemsWithoutSeparators, isLastItemVisible]);

	return (
		<HorizontalScrollArrow
			direction='right'
			isVisible={debouncedIsVisible}
			isDisabled={isDisabled}
			onClick={() => handleScrollNext()}
			sx={{
				// 'height': `calc(100% - ${border * 2}px)`,
				// 'minHeight': height,

				'borderBottomWidth': '2px',
				'borderBottomStyle': 'solid',
				'borderBottomColor': getColor({ theme, colorMode, type: 'divider' }),

				'&::before': {
					// height: `calc(100% - ${border * 2}px)`,
					// minHeight: `${convertStringToNumber(height, 'px') - 2}px`,

					borderBottom: 'none'
				}
			}}
		/>
	);
};

export default HorizontalScrollRightArrow;
