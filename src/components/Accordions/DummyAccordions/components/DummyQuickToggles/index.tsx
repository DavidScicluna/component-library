import { FC, useContext, useCallback } from 'react';

import { HStack, Center, Text } from '@chakra-ui/react';

import { useElementSize } from 'usehooks-ts';

import { DummyAccordionsContext } from '../..';
import { useTheme } from '../../../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../../../common/utils';
import { getColor } from '../../../../../common/utils/color';
import { Space } from '../../../../../theme/types';
import Divider from '../../../../Divider';
import HorizontalScroll from '../../../../HorizontalScroll';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	spacing as defaultSpacing
} from '../../../common/data/defaultPropValues';
import { size as defaultSize } from '../../../OriginalAccordions/components/QuickToggles/common/data/defaultPropValues';
import { accordions as defaultAccordions } from '../../common/data/defaultPropValues';
import { DummyAccordionsContext as DummyAccordionsContextType } from '../../types';

import DummyAccordion from './components/DummyAccordion';
import DummyToggle from './components/DummyToggle';
import { DummyQuickTogglesProps } from './types';

const DummyQuickToggles: FC<DummyQuickTogglesProps> = (props) => {
	const theme = useTheme();

	const {
		accordions = defaultAccordions,
		color: colorHook = defaultColor,
		colorMode = defaultColorMode,
		spacing: spacingHook = defaultSpacing
	} = useContext<DummyAccordionsContextType>(DummyAccordionsContext);

	const [borderRef, { width: borderWidth }] = useElementSize();
	const [textRef, { width: textWidth }] = useElementSize();
	const [toggleRef, { width: toggleWidth, height: toggleHeight }] = useElementSize();

	const { color = colorHook, spacing = spacingHook, size = defaultSize } = props;

	const handleAccordionsWidth = useCallback((): string => {
		const spacingWidth = convertREMToPixels(convertStringToNumber(theme.space[spacing as Space], 'rem') * 2);

		return `calc(100% - ${toggleWidth + spacingWidth + borderWidth}px)`;
	}, [theme.space, toggleWidth, borderWidth, spacing]);

	const handleScrollWidth = useCallback((): string => {
		const spacingWidth = convertREMToPixels(convertStringToNumber(theme.space[spacing as Space], 'rem'));

		return `calc(100% - ${textWidth + spacingWidth}px)`;
	}, [theme.space, textWidth, spacing]);

	return (
		<HStack
			width='100%'
			alignItems='stretch'
			justifyContent='stretch'
			divider={
				<Center ref={borderRef} border='none'>
					<Divider colorMode={colorMode} orientation='vertical' height={`${toggleHeight}px`} />
				</Center>
			}
			spacing={spacing}
		>
			<HStack width={handleAccordionsWidth()} alignItems='stretch' justifyContent='stretch' spacing={spacing}>
				<Center ref={textRef}>
					<Text
						align='left'
						color={getColor({ theme, colorMode, type: 'text.secondary' })}
						fontSize={size}
						whiteSpace='nowrap'
						noOfLines={0}
					>
						Jump to:
					</Text>
				</Center>

				<Center width={handleScrollWidth()} height='100%'>
					<HorizontalScroll
						colorMode={colorMode}
						isDisabled
						renderDivider={({ padding }) => (
							<Text
								align='left'
								color={getColor({ theme, colorMode, type: 'text.secondary' })}
								fontSize='md'
								px={padding}
							>
								•
							</Text>
						)}
					>
						{accordions.map((_dummy, index: number) => (
							<DummyAccordion key={index} color={color} size={size} />
						))}
					</HorizontalScroll>
				</Center>
			</HStack>

			<Center ref={toggleRef}>
				<DummyToggle color={color} size={size} />
			</Center>
		</HStack>
	);
};

export default DummyQuickToggles;
