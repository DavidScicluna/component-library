import { FC, useContext, useCallback } from 'react';

import { HStack, VStack, Center } from '@chakra-ui/react';

import { useElementSize } from 'usehooks-ts';

import { CardHeaderProps } from './types';

import { CardContext } from '../..';
import { useTheme } from '../../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../../common/utils';
import { getColor } from '../../../../common/utils/color';
import { Space } from '../../../../theme/types';
import { colorMode as defaultColorMode } from '../../common/data/defaultPropValues';
import { CardContext as CardContextType } from '../../types';

const CardHeader: FC<CardHeaderProps> = ({ renderTitle, renderSubtitle, actions, spacing = 2, ...rest }) => {
	const theme = useTheme();

	const { colorMode = defaultColorMode } = useContext<CardContextType>(CardContext);

	const [actionsRef, { width: actionsWidth }] = useElementSize();

	const handleCalculateTextWidth = useCallback((): string => {
		const spacingWidth = convertREMToPixels(convertStringToNumber(theme.space[spacing as Space], 'rem'));

		return `calc(100% - ${actions ? actionsWidth + spacingWidth : 0}px)`;
	}, [theme, spacing, actionsWidth]);

	return (
		<HStack
			width='100%'
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
	);
};

export default CardHeader;
