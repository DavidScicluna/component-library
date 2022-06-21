import { FC, useContext, useCallback } from 'react';

import { HStack, VStack, Center, Text } from '@chakra-ui/react';

import { useElementSize } from 'usehooks-ts';

import { DummyAccordionHeaderProps } from './types';

import { DummyAccordionsContext } from '../../../..';
import { useTheme } from '../../../../../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../../../../../common/utils';
import { getColor } from '../../../../../../../common/utils/color';
import { Space } from '../../../../../../../theme/types';
import Icon from '../../../../../../Icon';
import Skeleton from '../../../../../../Skeleton';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	spacing as defaultSpacing
} from '../../../../../OriginalAccordions/common/data/defaultPropValues';
import { DummyAccordionsContext as DummyAccordionsContextType } from '../../../../types';

const DummyAccordionHeader: FC<DummyAccordionHeaderProps> = (props) => {
	const theme = useTheme();

	const { color = defaultColor, colorMode = defaultColorMode } =
		useContext<DummyAccordionsContextType>(DummyAccordionsContext);

	const [iconRef, { width: iconWidth }] = useElementSize();

	const { actions, hasSubtitle = false, spacing = defaultSpacing, ...rest } = props;

	const handleCalculateTextWidth = useCallback((): string => {
		const spacingWidth = convertREMToPixels(convertStringToNumber(theme.space[spacing as Space], 'rem'));

		return `calc(100% - ${actions ? iconWidth + spacingWidth : 0}px)`;
	}, [theme, spacing, iconWidth]);

	return (
		<HStack width='100%' alignItems='center' justifyContent='space-between' spacing={spacing} {...rest}>
			<VStack width={handleCalculateTextWidth()} alignItems='flex-start' spacing={0.5}>
				{/* Title */}
				<Skeleton color={color} colorMode={colorMode} isLoaded={false} type='text'>
					<Text
						align='left'
						color={getColor({ theme, colorMode, type: 'text.primary' })}
						fontSize='xl'
						fontWeight='bold'
						lineHeight='normal'
						noOfLines={1}
					>
						DummyDummy Accordion Label
					</Text>
				</Skeleton>

				{/* Subtitle */}
				{hasSubtitle && (
					<Skeleton color={color} colorMode={colorMode} isLoaded={false} type='text'>
						<Text
							align='left'
							color={getColor({ theme, colorMode, type: 'text.secondary' })}
							fontSize='sm'
							lineHeight='normal'
							noOfLines={1}
						>
							DummyDummy Accordion Label
						</Text>
					</Skeleton>
				)}
			</VStack>

			<Center ref={iconRef}>
				<Skeleton color={color} colorMode={colorMode} isLoaded={false} type='rectangle'>
					<Icon icon='add' color={getColor({ theme, colorMode, type: 'text.secondary' })} />
				</Skeleton>
			</Center>
		</HStack>
	);
};

export default DummyAccordionHeader;
