import { FC } from 'react';

import { useTheme } from '../../../../../../../../../common/hooks';
import { getColor } from '../../../../../../../../../common/utils/color';
import {
	useGetHorizontalScrollAPIContext,
	useHorizontalScrollArrowState
} from '../../../../../../../../DataDisplay/HorizontalScroll/common/hooks';
import HorizontalScrollOverlayArrow from '../../../../../../../../DataDisplay/HorizontalScroll/components/OverlayArrow';
import { useImageEditorContext } from '../../../../../../../common/hooks';

const HorizontalScrollLeftArrow: FC = () => {
	const theme = useTheme();

	const { colorMode } = useImageEditorContext();

	const scroll = useGetHorizontalScrollAPIContext();
	const { getPrevItem, scrollToItem } = scroll || {};

	const { isVisible } = useHorizontalScrollArrowState({ direction: 'left', scroll });

	const handleScrollPrev = () => {
		const prevItem = getPrevItem();
		scrollToItem(prevItem?.entry?.target, 'smooth', 'center', 'nearest');
	};

	return (
		<HorizontalScrollOverlayArrow
			direction='left'
			isVisible={isVisible}
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
