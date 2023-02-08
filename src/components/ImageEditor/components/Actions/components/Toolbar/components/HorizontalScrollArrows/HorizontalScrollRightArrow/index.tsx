import { FC, useEffect } from 'react';

import { useBoolean } from '@chakra-ui/react';

import { useDebounce, useTheme } from '../../../../../../../../../common/hooks';
import { getColor } from '../../../../../../../../../common/utils/color';
import HorizontalScrollArrow from '../../../../../../../../HorizontalScroll/components/Arrow';
import { useImageEditorContext } from '../../../../../../../common/hooks';
import { HorizontalScrollArrowProps as HorizontalScrollRightArrowProps } from '../common/types';

const HorizontalScrollRightArrow: FC<HorizontalScrollRightArrowProps> = (props) => {
	const theme = useTheme();

	const { colorMode } = useImageEditorContext();

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
