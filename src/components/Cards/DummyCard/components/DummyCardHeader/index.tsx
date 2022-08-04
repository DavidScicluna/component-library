import { FC, useContext, useCallback } from 'react';

import { HStack, VStack, Center, Text } from '@chakra-ui/react';

import { useElementSize } from 'usehooks-ts';


import { DummyCardContext } from '../..';
import { useTheme } from '../../../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../../../common/utils';
import { Space } from '../../../../../theme/types';
import Skeleton from '../../../../Skeleton';
import { colorMode as defaultColorMode, spacing as defaultSpacing } from '../../../common/data/defaultPropValues';
import { DummyCardContext as DummyCardContextType } from '../../types';

import { DummyCardHeaderProps } from './types';

const DummyCardHeader: FC<DummyCardHeaderProps> = (props) => {
	const theme = useTheme();

	const { colorMode = defaultColorMode, spacing: spacingHook = defaultSpacing } =
		useContext<DummyCardContextType>(DummyCardContext);

	const [actionsRef, { width: actionsWidth }] = useElementSize();

	const { hasTitle = true, hasSubtitle = false, actions, spacing = spacingHook, ...rest } = props;

	const handleCalculateTextWidth = useCallback((): string => {
		const spacingWidth = convertREMToPixels(convertStringToNumber(theme.space[spacing as Space], 'rem'));

		return `calc(100% - ${actions ? actionsWidth + spacingWidth : 0}px)`;
	}, [theme, spacing, actionsWidth]);

	return (
		<HStack
			width='100%'
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
	);
};

export default DummyCardHeader;
