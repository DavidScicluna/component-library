import { FC, useContext, useCallback } from 'react';

import { useMediaQuery, Stack, HStack, Center, Text } from '@chakra-ui/react';

import range from 'lodash/range';
import { useElementSize } from 'usehooks-ts';

import {
	opened as defaultOpened,
	isDisabled as defaultQuickTogglesIsDisabled,
	isLoading as defaultIsLoading
} from './common/data/defaultPropValues';
import Accordion from './components/Accordion';
import DummyAccordion from './components/DummyAccordion';
import { QuickTogglesProps } from './types';

import { AccordionsContext } from '../..';
import { useTheme } from '../../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../../common/utils';
import { getColor } from '../../../../common/utils/color';
import { Space } from '../../../../theme/types';
import Button from '../../../Clickable/Button';
import Divider from '../../../Divider';
import HorizontalScroll from '../../../HorizontalScroll';
import {
	accordions as defaultAccordions,
	color as defaultColor,
	colorMode as defaultColorMode,
	isDisabled as defaultAccordionsIsDisabled,
	spacing as defaultSpacing
} from '../../common/data/defaultPropValues';
import { AccordionsContext as AccordionsContextType } from '../../types';

const QuickToggles: FC<QuickTogglesProps> = (props) => {
	const theme = useTheme();

	const [isXs] = useMediaQuery('(max-width: 600px)');

	const {
		accordions = defaultAccordions,
		color = defaultColor,
		colorMode = defaultColorMode,
		isDisabled: isDisabledHook = defaultAccordionsIsDisabled,
		spacing = defaultSpacing
	} = useContext<AccordionsContextType>(AccordionsContext);

	const [textRef, { width: textWidth }] = useElementSize<HTMLParagraphElement>();
	const [borderRef, { width: borderWidth }] = useElementSize<HTMLParagraphElement>();
	const [buttonRef, { width: buttonWidth, height: buttonHeight }] = useElementSize<HTMLButtonElement>();

	const {
		opened = defaultOpened,
		isDisabled: isDisabledProp = defaultIsLoading,
		isLoading = defaultQuickTogglesIsDisabled,
		onToggle
	} = props;

	const isDisabled = isDisabledHook || isDisabledProp;

	const handleAccordionsWidth = useCallback((): string => {
		const spacingWidth = convertREMToPixels(convertStringToNumber(theme.space[spacing as Space], 'rem'));

		return `calc(100% - ${buttonWidth + spacingWidth + borderWidth}px)`;
	}, [theme, borderWidth, buttonWidth, spacing]);

	const handleScrollWidth = useCallback((): string => {
		const spacingWidth = convertREMToPixels(convertStringToNumber(theme.space[spacing as Space], 'rem'));

		return `calc(100% - ${textWidth + spacingWidth}px)`;
	}, [theme, textWidth, spacing]);

	return (
		<Stack
			width='100%'
			direction={isXs ? 'column' : 'row'}
			divider={
				<Divider
					ref={borderRef}
					colorMode={colorMode}
					orientation={isXs ? 'vertical' : 'vertical'}
					height={!isXs ? `${buttonHeight}px` : undefined}
				/>
			}
			spacing={spacing}
		>
			<HStack width={handleAccordionsWidth()} justifyContent='stretch'>
				<Text
					ref={textRef}
					align='left'
					color={getColor({ theme, colorMode, type: 'text.secondary' })}
					fontSize='sm'
					noOfLines={1}
				>
					Jump to:
				</Text>

				<Center width={handleScrollWidth()} height='100%'>
					<HorizontalScroll
						isDisabled={isLoading || isDisabled}
						renderDivider={({ padding }) => (
							<Text
								align='left'
								color={`gray.${colorMode === 'light' ? 400 : 500}`}
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
										isDisabled={isDisabled}
										onToggle={onToggle}
									/>
							  ))
							: range(0, 10).map((_dummy, index: number) => <DummyAccordion key={index} />)}
					</HorizontalScroll>
				</Center>
			</HStack>

			<Button
				ref={buttonRef}
				color={color}
				colorMode={colorMode}
				isDisabled={isLoading || isDisabled}
				isFullWidth={isXs}
				onClick={() => onToggle()}
				size='sm'
				variant='text'
			>
				{accordions.length === opened ? 'Hide all' : 'Show all'}
			</Button>
		</Stack>
	);
};

export default QuickToggles;
