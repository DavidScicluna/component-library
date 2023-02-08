import { FC, useEffect } from 'react';

import { useBoolean } from '@chakra-ui/react';

import { height } from '../../..';
import { useDebounce, useTheme } from '../../../../../../../../common/hooks';
import { convertStringToNumber } from '../../../../../../../../common/utils';
import { getColor } from '../../../../../../../../common/utils/color';
import HorizontalScrollArrow from '../../../../../../../HorizontalScroll/components/Arrow';
import { useStepperContext } from '../../../../../common/hooks';
import { isDisabled as defaultIsDisabled } from '../../../common/data/defaultPropValues';
import { HorizontalScrollArrowProps as HorizontalScrollLeftArrowProps } from '../common/types';

const border = 2;

const HorizontalScrollLeftArrow: FC<HorizontalScrollLeftArrowProps> = (props) => {
	const theme = useTheme();

	const { colorMode } = useStepperContext();

	const { scroll, isDisabled = defaultIsDisabled } = props;
	const {
		getPrevItem,
		isFirstItemVisible = false,
		scrollToItem,
		visibleItemsWithoutSeparators = [],
		initComplete = false
	} = scroll || {};

	const [isVisible, setIsVisible] = useBoolean(true);
	const debouncedIsVisible = useDebounce<boolean>(isVisible, 'ultra-fast');

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
