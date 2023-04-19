import { FC, useCallback } from 'react';

import { Center, HStack, Text } from '@chakra-ui/react';

import { useElementSize } from 'usehooks-ts';

import { useTheme } from '../../../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../../../common/utils';
import { getColor } from '../../../../../common/utils/color';
import { Space } from '../../../../../theme/types';
import Divider from '../../../../Divider';
import HorizontalScroll from '../../../../HorizontalScroll';
import { size as defaultSize } from '../../../OriginalAccordions/components/QuickToggles/common/data/defaultPropValues';
import { useDummyAccordionsContext } from '../../common/hooks';

import DummyAccordion from './components/DummyAccordion';
import DummyToggle from './components/DummyToggle';
import { DummyQuickTogglesProps } from './types';

const DummyQuickToggles: FC<DummyQuickTogglesProps> = (props) => {
	const theme = useTheme();

	const { accordions, color: colorHook, colorMode, spacing: spacingHook } = useDummyAccordionsContext();

	const [borderRef, { width: borderWidth }] = useElementSize();
	const [textRef, { width: textWidth }] = useElementSize();
	const [toggleRef, { width: toggleWidth }] = useElementSize();

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
				<Center ref={borderRef} alignItems='stretch' justifyContent='stretch' border='none'>
					<Divider colorMode={colorMode} orientation='vertical' />
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
