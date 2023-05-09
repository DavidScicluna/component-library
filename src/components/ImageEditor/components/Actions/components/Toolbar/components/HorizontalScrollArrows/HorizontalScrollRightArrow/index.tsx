import { FC } from 'react';

import { useTheme } from '../../../../../../../../../common/hooks';
import { getColor } from '../../../../../../../../../common/utils/color';
import {
	useGetHorizontalScrollAPIContext,
	useHorizontalScrollArrowState
} from '../../../../../../../../DataDisplay/HorizontalScroll/common/hooks';
import HorizontalScrollOverlayArrow from '../../../../../../../../DataDisplay/HorizontalScroll/components/OverlayArrow';
import { useImageEditorContext } from '../../../../../../../common/hooks';

const HorizontalScrollRightArrow: FC = () => {
	const theme = useTheme();

	const { colorMode } = useImageEditorContext();

	const scroll = useGetHorizontalScrollAPIContext();
	const { getNextItem, scrollToItem } = scroll || {};

	const { isVisible } = useHorizontalScrollArrowState({ direction: 'right', scroll });

	const handleScrollNext = (): void => {
		const nextItem = getNextItem();
		scrollToItem(nextItem?.entry?.target, 'smooth', 'center', 'nearest');
	};

	return (
		<HorizontalScrollOverlayArrow
			direction='right'
			isVisible={isVisible}
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
