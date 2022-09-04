import { FC, useContext, useEffect } from 'react';

import { useBoolean } from '@chakra-ui/react';

import { useDebounce } from 'usehooks-ts';

import { colorMode as defaultColorMode } from '../../../../../../../../../common/data/defaultPropValues';
import { HorizontalScrollArrowProps as HorizontalScrollLeftArrowProps } from '../common/types';
import { ImageEditorContext } from '../../../../../../..';
import { ImageEditorContext as ImageEditorContextType } from '../../../../../../../types';
import { useTheme } from '../../../../../../../../../common/hooks';
import HorizontalScrollArrow from '../../../../../../../../HorizontalScroll/components/Arrow';
import { getColor } from '../../../../../../../../../common/utils/color';

const HorizontalScrollLeftArrow: FC<HorizontalScrollLeftArrowProps> = (props) => {
	const theme = useTheme();

	const { colorMode = defaultColorMode } = useContext<ImageEditorContextType>(ImageEditorContext);

	const { scroll } = props;
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
