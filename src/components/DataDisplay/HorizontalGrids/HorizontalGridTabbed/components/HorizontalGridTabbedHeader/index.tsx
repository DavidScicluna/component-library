import { FC, useEffect } from 'react';

import { HStack, VStack } from '@chakra-ui/react';

import { useBoolean, useDebounce } from '../../../../../../common/hooks';
import TabList from '../../../../../Navigation/Tabs/OriginalTabs/components/TabList';
import CardHeader from '../../../../Cards/OriginalCard/components/CardHeader';
import HorizontalGridArrows from '../../../components/HorizontalGridArrows';
import { useHorizontalGridTabbedContext } from '../../common/hooks';

import { HorizontalGridTabbedHeaderProps } from './common/types';

const HorizontalGridTabbedHeader: FC<HorizontalGridTabbedHeaderProps> = (props) => {
	const { color, colorMode, scroll, spacing: defaultSpacing } = useHorizontalGridTabbedContext();
	const {
		scrollPrev,
		scrollNext,
		initComplete = false,
		isFirstItemVisible = false,
		isLastItemVisible = false,
		visibleElements = []
	} = scroll;

	const { cardHeaderProps, tabListProps, arrowProps, spacing = defaultSpacing, ...rest } = props;

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
		<VStack {...rest} width='100%' spacing={spacing}>
			<CardHeader
				{...cardHeaderProps}
				actions={
					<HStack spacing={2}>
						{cardHeaderProps.actions}

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

			<TabList {...tabListProps} />
		</VStack>
	);
};

export default HorizontalGridTabbedHeader;
