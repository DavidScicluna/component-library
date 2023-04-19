import { FC, useCallback } from 'react';

import { Box, Center, HStack, Text,VStack } from '@chakra-ui/react';

import { useElementSize } from 'usehooks-ts';

import { useTheme } from '../../../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../../../common/utils';
import { Space } from '../../../../../theme/types';
import Skeleton from '../../../../Skeleton';
import { useDummyCardContext } from '../../common/hooks';

import { DummyCardHeaderProps } from './types';

const DummyCardHeader: FC<DummyCardHeaderProps> = (props) => {
	const theme = useTheme();

	const { color, colorMode, spacing: spacingHook } = useDummyCardContext();

	const [leftRef, { width: leftWidth }] = useElementSize();
	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();
	const [rightRef, { width: rightWidth }] = useElementSize();

	const [actionsRef, { width: actionsWidth }] = useElementSize();

	const {
		renderLeft,
		renderRight,
		hasTitle = true,
		hasSubtitle = false,
		actions,
		spacing = spacingHook,
		...rest
	} = props;

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
				justifyContent={hasTitle ? 'space-between' : 'flex-end'}
				spacing={spacing}
				{...rest}
			>
				{hasTitle && (
					<VStack width={handleCalculateTextWidth()} alignItems='flex-start' spacing={0.5}>
						{/* Title */}
						<Skeleton colorMode={colorMode} isLoaded={false} variant='text'>
							<Text align='left' fontSize='xl' fontWeight='bold' lineHeight='normal' noOfLines={1}>
								Card Title
							</Text>
						</Skeleton>

						{/* Subtitle */}
						{hasSubtitle && (
							<Skeleton colorMode={colorMode} isLoaded={false} variant='text'>
								<Text align='left' fontSize='sm' lineHeight='normal' noOfLines={1}>
									This is the Card Header Subtitle
								</Text>
							</Skeleton>
						)}
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

export default DummyCardHeader;
