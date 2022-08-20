import { FC, useContext, useEffect } from 'react';

import { useBoolean } from '@chakra-ui/react';

import { useDebounce } from 'usehooks-ts';

import { StepperContext } from '../../../../..';
import { useTheme } from '../../../../../../../../common/hooks';
import { getColor } from '../../../../../../../../common/utils/color';
import HorizontalScrollArrow from '../../../../../../../HorizontalScroll/components/Arrow';
import { colorMode as defaultColorMode } from '../../../../../common/data/defaultPropValues';
import { StepperContext as StepperContextType } from '../../../../../types';
import { isDisabled as defaultIsDisabled } from '../../../common/data/defaultPropValues';
import { HorizontalScrollArrowProps as HorizontalScrollRightArrowProps } from '../common/types';

const HorizontalScrollRightArrow: FC<HorizontalScrollRightArrowProps> = (props) => {
	const theme = useTheme();

	const { colorMode = defaultColorMode } = useContext<StepperContextType>(StepperContext);

	const { scroll, isDisabled = defaultIsDisabled } = props;
	const { getNextItem, isLastItemVisible = false, scrollToItem, visibleItemsWithoutSeparators = [] } = scroll || {};

	const [isVisible, setIsVisible] = useBoolean(true);
	const debouncedIsVisible = useDebounce<boolean>(isVisible, 250);

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
				'borderBottomWidth': '2px',
				'borderBottomStyle': 'solid',
				'borderBottomColor': getColor({ theme, colorMode, type: 'divider' }),

				'&::before': { borderBottom: 'none' }
			}}
		/>
	);
};

export default HorizontalScrollRightArrow;
