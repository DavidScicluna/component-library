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
import { HorizontalScrollArrowProps as HorizontalScrollLeftArrowProps } from '../common/types';

const HorizontalScrollLeftArrow: FC<HorizontalScrollLeftArrowProps> = (props) => {
	const theme = useTheme();

	const { colorMode = defaultColorMode } = useContext<StepperContextType>(StepperContext);

	const { scroll, isDisabled = defaultIsDisabled } = props;
	const {
		getPrevItem,
		isFirstItemVisible = false,
		scrollToItem,
		visibleItemsWithoutSeparators = [],
		initComplete = false
	} = scroll || {};

	const [isVisible, setIsVisible] = useBoolean(true);
	const debouncedIsVisible = useDebounce<boolean>(isVisible, 250);

	const handleScrollPrev = () => {
		const prevItem = getPrevItem();
		scrollToItem(prevItem?.entry?.target, 'smooth', 'center', 'nearest');
	};

	useEffect(() => {
		if (visibleItemsWithoutSeparators.length) {
			if (!initComplete || (initComplete && isFirstItemVisible)) {
				setIsVisible.off();
			} else {
				setIsVisible.on();
			}
		}
	}, [initComplete, visibleItemsWithoutSeparators, isFirstItemVisible]);

	return (
		<HorizontalScrollArrow
			direction='left'
			isVisible={debouncedIsVisible}
			isDisabled={isDisabled}
			onClick={() => handleScrollPrev()}
			sx={{
				'borderBottomWidth': '2px',
				'borderBottomStyle': 'solid',
				'borderBottomColor': getColor({ theme, colorMode, type: 'divider' }),

				'&::after': { borderBottom: 'none' }
			}}
		/>
	);
};

export default HorizontalScrollLeftArrow;
