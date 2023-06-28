import { FC, useEffect } from 'react';

import { HStack } from '@chakra-ui/react';

import { useBoolean, useDebounce } from '../../../../../../common/hooks';
import CardHeader from '../../../../Cards/OriginalCard/components/CardHeader';
import HorizontalGridArrows from '../../../components/HorizontalGridArrows';
import { useHorizontalGridContext } from '../../common/hooks';

import { HorizontalGridHeaderProps } from './common/types';

const HorizontalGridHeader: FC<HorizontalGridHeaderProps> = (props) => {
	const { color, colorMode, scroll, spacing: defaultSpacing } = useHorizontalGridContext();
	const {
		scrollPrev,
		scrollNext,
		initComplete = false,
		isFirstItemVisible = false,
		isLastItemVisible = false,
		visibleElements = []
	} = scroll;

	const { actions, arrowProps, spacing = defaultSpacing, ...rest } = props;

	const [isLeftArrowDisabled, setIsLeftArrowDisabled] = useBoolean(true);
	const debouncedIsLeftArrowDisabled = useDebounce<boolean>(isLeftArrowDisabled, 'ultra-fast');

	const [isRightArrowDisabled, setIsRightArrowDisabled] = useBoolean(true);
	const debouncedIsRightArrowDisabled = useDebounce<boolean>(isRightArrowDisabled, 'ultra-fast');

	useEffect(() => {
		if (visibleElements.length) {
			if (!initComplete || (initComplete && isFirstItemVisible)) {
				setIsLeftArrowDisabled.on();
			} else {
				setIsLeftArrowDisabled.off();
			}
		}
	}, [isFirstItemVisible, visibleElements]);

	useEffect(() => {
		if (visibleElements.length) {
			if (!initComplete || (initComplete && isLastItemVisible)) {
				setIsRightArrowDisabled.on();
			} else {
				setIsRightArrowDisabled.off();
			}
		}
	}, [isLastItemVisible, visibleElements]);

	return (
		<CardHeader
			{...rest}
			spacing={spacing}
			actions={
				<HStack spacing={spacing}>
					{actions}

					<HorizontalGridArrows
						isLeftDisabled={debouncedIsLeftArrowDisabled || !scroll}
						isRightDisabled={debouncedIsRightArrowDisabled || !scroll}
						onLeftClick={() => scrollPrev()}
						onRightClick={() => scrollNext()}
						arrowProps={{ ...arrowProps, color, colorMode }}
					/>
				</HStack>
			}
		/>
	);
};

export default HorizontalGridHeader;
