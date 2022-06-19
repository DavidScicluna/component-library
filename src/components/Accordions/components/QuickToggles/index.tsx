import { FC, useContext, useCallback } from 'react';

import { HStack, Center, Text } from '@chakra-ui/react';

import range from 'lodash/range';
import { useElementSize } from 'usehooks-ts';

import {
	isLoading as defaultIsLoading,
	spacing as defaultSpacing,
	size as defaultSize
} from './common/data/defaultPropValues';
import Accordion from './components/Accordion';
import DummyAccordion from './components/DummyAccordion';
import Toggle from './components/Toggle';
import { QuickTogglesProps } from './types';

import { AccordionsContext } from '../..';
import { useTheme } from '../../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../../common/utils';
import { getColor } from '../../../../common/utils/color';
import { Space } from '../../../../theme/types';
import Divider from '../../../Divider';
import HorizontalScroll from '../../../HorizontalScroll';
import {
	accordions as defaultAccordions,
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled
} from '../../common/data/defaultPropValues';
import { AccordionsContext as AccordionsContextType } from '../../types';

const QuickToggles: FC<QuickTogglesProps> = (props) => {
	const theme = useTheme();

	const {
		accordions = defaultAccordions,
		color: colorHook = defaultColor,
		colorMode = defaultColorMode,
		isDisabled: isDisabledHook = defaultIsDisabled
	} = useContext<AccordionsContextType>(AccordionsContext);

	const [borderRef, { width: borderWidth }] = useElementSize();
	const [textRef, { width: textWidth }] = useElementSize();
	const [toggleRef, { width: toggleWidth, height: toggleHeight }] = useElementSize();

	const {
		color: colorProp = defaultColor,
		isDisabled: isDisabledProp = defaultIsDisabled,
		isLoading = defaultIsLoading,
		spacing = defaultSpacing,
		size = defaultSize
	} = props;

	const color = colorProp || colorHook;
	const isDisabled = isDisabledHook || isDisabledProp;

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
						isDisabled={isLoading || isDisabled}
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
						{!isLoading
							? accordions.map((accordion) => (
									<Accordion
										{...accordion}
										key={accordion.id}
										color={color}
										isDisabled={isDisabled}
										size={size}
									/>
							  ))
							: range(0, 10).map((_dummy, index: number) => (
									<DummyAccordion key={index} color={color} size={size} />
							  ))}
					</HorizontalScroll>
				</Center>
			</HStack>

			<Center ref={toggleRef}>
				<Toggle color={color} isDisabled={isLoading || isDisabled} size={size} />
			</Center>
		</HStack>
	);
};

export default QuickToggles;
