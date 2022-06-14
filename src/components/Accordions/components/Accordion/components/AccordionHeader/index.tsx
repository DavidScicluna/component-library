import { FC, useContext, useCallback } from 'react';

import { HStack, VStack, Center } from '@chakra-ui/react';

import { useElementSize } from 'usehooks-ts';

import { AccordionHeaderProps } from './types';

import { AccordionContext } from '../..';
import { AccordionsContext } from '../../../..';
import { useTheme } from '../../../../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../../../../common/utils';
import { getColor } from '../../../../../../common/utils/color';
import { Space } from '../../../../../../theme/types';
import Icon from '../../../../../Icon';
import { colorMode as defaultColorMode, spacing as defaultSpacing } from '../../../../common/data/defaultPropValues';
import { AccordionsContext as AccordionsContextType } from '../../../../types';
import { isOpen as defaultIsOpen, isHovering as defaultIsHovering } from '../../common/data/defaultPropValues';
import { AccordionContext as AccordionContextType } from '../../types';

const AccordionHeader: FC<AccordionHeaderProps> = (props) => {
	const theme = useTheme();

	const { colorMode = defaultColorMode, spacing: spacingHook = defaultSpacing } =
		useContext<AccordionsContextType>(AccordionsContext);
	const { isOpen = defaultIsOpen, isHovering = defaultIsHovering } =
		useContext<AccordionContextType>(AccordionContext);

	const [actionsRef, { width: actionsWidth }] = useElementSize();

	const { renderTitle, renderSubtitle, actions, spacing: spacingProp = defaultSpacing, ...rest } = props;

	const spacing = spacingProp || spacingHook;

	const handleCalculateTextWidth = useCallback((): string => {
		const spacingWidth = convertREMToPixels(convertStringToNumber(theme.space[spacing as Space], 'rem'));

		return `calc(100% - ${actions ? actionsWidth + spacingWidth : 0}px)`;
	}, [theme, spacing, actionsWidth]);

	return (
		<HStack width='100%' alignItems='center' justifyContent='space-between' spacing={spacing} {...rest}>
			<VStack width={handleCalculateTextWidth()} alignItems='flex-start' spacing={0.5}>
				{/* Title */}
				{renderTitle({
					align: 'left',
					color: getColor({ theme, colorMode, type: 'text.primary' }),
					fontSize: 'xl',
					fontWeight: 'bold',
					lineHeight: 'normal',
					noOfLines: 1
				})}

				{/* Subtitle */}
				{renderSubtitle &&
					renderSubtitle({
						align: 'left',
						color: getColor({ theme, colorMode, type: 'text.secondary' }),
						fontSize: 'sm',
						lineHeight: 'normal',
						noOfLines: 1
					})}
			</VStack>

			<HStack spacing={2}>
				{actions && <Center ref={actionsRef}>{actions}</Center>}

				<Icon
					icon={isOpen ? 'remove' : 'add'}
					color={getColor({
						theme,
						colorMode,
						type: isOpen || isHovering ? 'text.primary' : 'text.secondary'
					})}
				/>
			</HStack>
		</HStack>
	);
};

export default AccordionHeader;
