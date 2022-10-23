import { FC, useContext, useCallback } from 'react';

import { ModalHeader as CUIModalHeader, HStack, VStack, Center } from '@chakra-ui/react';

import { useElementSize } from 'usehooks-ts';

import { ModalContext } from '../..';
import { useTheme } from '../../../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../../../common/utils';
import { getColor } from '../../../../../common/utils/color';
import { colorMode as defaultColorMode, spacing as defaultSpacing } from '../../common/data/defaultPropValues';
import { ModalContext as ModalContextType } from '../../types';

import { ModalHeaderProps } from './types';

const ModalHeader: FC<ModalHeaderProps> = (props) => {
	const theme = useTheme();

	const {
		colorMode = defaultColorMode,
		onClose,
		spacing = defaultSpacing
	} = useContext<ModalContextType>(ModalContext);

	const [cancelRef, { width: cancelWidth }] = useElementSize();

	const { renderTitle, renderSubtitle, renderCancel, ...rest } = props;

	const handleCalculateTextWidth = useCallback((): number => {
		return cancelWidth + convertREMToPixels(convertStringToNumber(theme.space[spacing], 'rem'));
	}, [theme.space, spacing, cancelWidth]);

	return (
		<CUIModalHeader as={HStack} width='100%' justifyContent='space-between' p={0} m={0} {...rest}>
			<VStack
				width={`calc(100% - ${renderCancel ? handleCalculateTextWidth() : 0}px)`}
				alignItems='flex-start'
				spacing={0}
			>
				{/* Title */}
				{renderTitle({
					align: 'left',
					color: getColor({ theme, colorMode, type: 'text.primary' }),
					fontSize: 'xl',
					fontWeight: 'bold',
					noOfLines: 1
				})}

				{/* Subtitle */}
				{renderSubtitle &&
					renderSubtitle({
						align: 'left',
						color: getColor({ theme, colorMode, type: 'text.secondary' }),
						fontSize: 'sm',
						fontWeight: 'normal',
						noOfLines: 1
					})}
			</VStack>

			{renderCancel && (
				<Center ref={cancelRef}>
					{renderCancel({
						'aria-label': 'Close modal?',
						'color': 'gray',
						'colorMode': colorMode,
						'icon': 'close',
						'category': 'outlined',
						'onClick': () => onClose(),
						'variant': 'icon'
					})}
				</Center>
			)}
		</CUIModalHeader>
	);
};

export default ModalHeader;
