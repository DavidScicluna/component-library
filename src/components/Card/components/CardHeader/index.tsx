import { FC, useContext, useCallback } from 'react';

import { HStack, VStack, Center } from '@chakra-ui/react';

import { useElementSize } from 'usehooks-ts';

import { CardHeaderProps } from './types';

import { CardContext } from '../..';
import { useTheme } from '../../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../../common/utils';
import { getHue } from '../../../../common/utils/color';
import { CardContext as CardContextType } from '../../types';

const CardHeader: FC<CardHeaderProps> = ({ renderTitle, renderSubtitle, actions, spacing = 2, ...rest }) => {
	const theme = useTheme();

	const { colorMode } = useContext<CardContextType>(CardContext);

	const [actionsRef, { width: actionsWidth }] = useElementSize();

	const handleCalculateTextWidth = useCallback((): number => {
		return actionsWidth + convertREMToPixels(convertStringToNumber(theme.space[spacing], 'rem'));
	}, [theme.space, spacing, actionsWidth]);

	return (
		<HStack
			width='100%'
			alignItems='center'
			justifyContent={renderTitle ? 'space-between' : 'flex-end'}
			spacing={spacing}
			{...rest}
		>
			{renderTitle && (
				<VStack
					width={`calc(100% - ${actions ? handleCalculateTextWidth() : 0}px)`}
					alignItems='flex-start'
					spacing={0}
				>
					{/* Title */}
					{renderTitle({
						align: 'left',
						color: `gray.${getHue({ colorMode, type: 'text.primary' })}`,
						fontSize: 'xl',
						fontWeight: 'bold',
						isTruncated: true,
						overflow: 'hidden',
						whiteSpace: 'nowrap'
					})}

					{/* Subtitle */}
					{renderSubtitle &&
						renderSubtitle({
							align: 'left',
							color: `gray.${getHue({ colorMode, type: 'text.secondary' })}`,
							fontSize: 'sm',
							isTruncated: true,
							overflow: 'hidden',
							whiteSpace: 'nowrap'
						})}
				</VStack>
			)}

			{actions && <Center ref={actionsRef}>{actions}</Center>}
		</HStack>
	);
};

export default CardHeader;
