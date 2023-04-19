import { FC, useCallback } from 'react';

import { Box,Center, HStack, VStack } from '@chakra-ui/react';

import { useElementSize } from 'usehooks-ts';

import { useTheme } from '../../../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../../../common/utils';
import { getColor } from '../../../../../common/utils/color';
import { Space } from '../../../../../theme/types';
import { useCardContext } from '../../common/hooks';

import { CardHeaderProps } from './types';

const CardHeader: FC<CardHeaderProps> = (props) => {
	const theme = useTheme();

	const { color, colorMode, spacing: spacingHook } = useCardContext();

	const [leftRef, { width: leftWidth }] = useElementSize();
	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();
	const [rightRef, { width: rightWidth }] = useElementSize();

	const [actionsRef, { width: actionsWidth }] = useElementSize();

	const { renderLeft, renderRight, renderTitle, renderSubtitle, actions, spacing = spacingHook, ...rest } = props;

	const handleCalculateTextWidth = useCallback((): string => {
		const spacingWidth = convertREMToPixels(convertStringToNumber(theme.space[spacing as Space], 'rem'));

		return `calc(100% - ${actions ? actionsWidth + spacingWidth : 0}px)`;
	}, [theme, spacing, actionsWidth]);

	return (
		<HStack width='100%' spacing={spacing} {...rest}>
			{renderLeft && (
				<Box ref={leftRef}>
					{renderLeft({ color, colorMode, width: childrenWidth, height: childrenHeight })}
				</Box>
			)}

			<HStack
				ref={childrenRef}
				width={`calc(100% - ${(renderLeft ? leftWidth : 0) + (renderRight ? rightWidth : 0)}px)`}
				alignItems='center'
				justifyContent={renderTitle ? 'space-between' : 'flex-end'}
				spacing={spacing}
				{...rest}
			>
				{renderTitle && (
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
				)}

				{actions && <Center ref={actionsRef}>{actions}</Center>}
			</HStack>

			{renderRight && (
				<Box ref={rightRef}>
					{renderRight({ color, colorMode, width: childrenWidth, height: childrenHeight })}
				</Box>
			)}
		</HStack>
	);
};

export default CardHeader;
