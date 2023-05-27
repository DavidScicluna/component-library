import { FC } from 'react';

import { useGetColor } from '../../../../../../../../../common/hooks';
import {
	useGetHorizontalScrollAPIContext,
	useHorizontalScrollArrowState
} from '../../../../../../../../DataDisplay/HorizontalScroll/common/hooks';
import HorizontalScrollOverlayArrow from '../../../../../../../../DataDisplay/HorizontalScroll/components/OverlayArrow';
import { useImageEditorContext } from '../../../../../../../common/hooks';

const HorizontalScrollLeftArrow: FC = () => {
	const { colorMode } = useImageEditorContext();

	const scroll = useGetHorizontalScrollAPIContext();
	const { getPrevItem, scrollToItem } = scroll || {};

	const { isVisible } = useHorizontalScrollArrowState({ direction: 'left', scroll });

	const borderColor = useGetColor({ colorMode, type: 'divider' });

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
				'borderBottomColor': borderColor,

				'&::after': { borderBottom: 'none' }
			}}
		/>
	);
};

export default HorizontalScrollLeftArrow;
