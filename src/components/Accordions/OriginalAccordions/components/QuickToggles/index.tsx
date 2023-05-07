import { ReactElement, useCallback } from 'react';

import { Center, HStack, Text } from '@chakra-ui/react';

import { useElementSize } from 'usehooks-ts';

import { useTheme } from '../../../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../../../common/utils';
import { getColor } from '../../../../../common/utils/color';
import { Space } from '../../../../../theme/types';
import Divider from '../../../../Divider';
import HorizontalScroll from '../../../../HorizontalScroll';
import { useAccordionsContext } from '../../common/hooks';

import { size as defaultSize } from './common/default/props';
import { QuickTogglesProps } from './common/types';
import AccordionButton from './components/AccordionButton';
import ToggleAllButton from './components/ToggleAllButton';

const QuickToggles = <D,>(props: QuickTogglesProps<D>): ReactElement => {
	const theme = useTheme();

	const {
		accordions,
		color: defaultColor,
		colorMode,
		isDisabled: defaultIsDisabled,
		spacing: defaultSpacing
	} = useAccordionsContext<D>();

	const [borderRef, { width: borderWidth }] = useElementSize();
	const [textRef, { width: textWidth }] = useElementSize();
	const [toggleRef, { width: toggleWidth }] = useElementSize();

	const {
		color = defaultColor,
		isDisabled = defaultIsDisabled,
		spacing = defaultSpacing,
		size = defaultSize
	} = props;

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
			<HStack
				width='100%'
				maxWidth={handleAccordionsWidth()}
				flex={1}
				alignItems='stretch'
				justifyContent='stretch'
				spacing={spacing}
			>
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

				{/* <Center > */}
				<HorizontalScroll
					maxWidth={handleScrollWidth()}
					height='100%'
					colorMode={colorMode}
					isDisabled={isDisabled}
					renderDivider={() => (
						<Text
							align='left'
							color={getColor({ theme, colorMode, type: 'text.secondary' })}
							fontSize='md'
							userSelect='none'
						>
							•
						</Text>
					)}
				>
					{accordions.map((accordion) => (
						<AccordionButton
							{...accordion}
							key={accordion.id}
							color={color}
							isDisabled={isDisabled}
							size={size}
						/>
					))}
				</HorizontalScroll>
				{/* </Center> */}
			</HStack>

			<Center ref={toggleRef}>
				<ToggleAllButton color={color} isDisabled={isDisabled} size={size} />
			</Center>
		</HStack>
	);
};

export default QuickToggles;
