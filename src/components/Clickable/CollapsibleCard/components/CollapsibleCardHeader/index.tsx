import { FC, useCallback } from 'react';

import { Center,HStack, VStack } from '@chakra-ui/react';

import { useElementSize } from 'usehooks-ts';

import { useTheme } from '../../../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../../../common/utils';
import { getColor } from '../../../../../common/utils/color';
import { Space } from '../../../../../theme/types';
import Icon from '../../../../Icon';
import { useCollapsibleCardContext } from '../../common/hooks';

import { CollapsibleCardHeaderProps } from './types';

const CollapsibleCardHeader: FC<CollapsibleCardHeaderProps> = (props) => {
	const theme = useTheme();

	const { colorMode, isOpen, spacing: spacingHook } = useCollapsibleCardContext();

	const [actionsRef, { width: actionsWidth }] = useElementSize();

	const { renderTitle, renderSubtitle, actions, spacing = spacingHook, ...rest } = props;

	const handleCalculateTextWidth = useCallback((): string => {
		const spacingWidth = convertREMToPixels(convertStringToNumber(theme.space[spacing as Space], 'rem'));

		return `calc(100% - ${actions ? actionsWidth + spacingWidth : 0}px)`;
	}, [theme, spacing, actionsWidth]);

	return (
		// <VStack width='100%' divider={isXs ? <CollapsibleCardDivider /> : undefined} spacing={spacing}>
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

			<HStack ref={actionsRef} spacing={spacing}>
				{actions && <Center>{actions}</Center>}

				<Icon
					color={getColor({ theme, colorMode, type: 'text.secondary' })}
					colorMode={colorMode}
					icon={isOpen ? 'remove' : 'add'}
				/>
			</HStack>
		</HStack>
		// 	{actions && isXs && <Center width='100%'>{actions}</Center>}
		// </VStack>
	);
};

export default CollapsibleCardHeader;
