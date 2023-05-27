import { FC, useMemo } from 'react';

import { Center, HStack, Text, useMediaQuery } from '@chakra-ui/react';

import { useElementSize } from 'usehooks-ts';

import { useGetColor, useTheme } from '../../../../../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../../../../../common/utils';
import { Space } from '../../../../../../../theme/types';
import HorizontalScroll from '../../../../../../DataDisplay/HorizontalScroll';
import { useDummyAccordionsContext } from '../../../../common/hooks';

import { DummyToggleButtonsProps } from './common/types';

const DummyToggleButtons: FC<DummyToggleButtonsProps> = (props) => {
	const theme = useTheme();

	const [isXs] = useMediaQuery('(max-width: 320px)');

	const { colorMode, spacing: defaultSpacing } = useDummyAccordionsContext();

	const [textRef, { width: textWidth }] = useElementSize();

	const { children, size, spacing = defaultSpacing } = props;

	const textSecondaryColor = useGetColor({ color: 'gray', colorMode, type: 'text.secondary' });

	const horizontalScrollWidth = useMemo((): string => {
		const spacingWidth = convertREMToPixels(convertStringToNumber(theme.space[spacing as Space], 'rem'));

		return `calc(100% - ${textWidth + spacingWidth}px)`;
	}, [textWidth, spacing]);

	return (
		<HStack width='100%' height='100%' alignItems='stretch' justifyContent='stretch' spacing={spacing}>
			{!isXs ? (
				<Center ref={textRef}>
					<Text align='left' color={textSecondaryColor} fontSize='xl' whiteSpace='nowrap'>
						Jump to:
					</Text>
				</Center>
			) : null}

			<HorizontalScroll
				width={horizontalScrollWidth}
				height='100%'
				colorMode={colorMode}
				renderDivider={() => (
					<Text align='left' color={textSecondaryColor} fontSize={size} userSelect='none'>
						•
					</Text>
				)}
				variant='right'
			>
				{children}
			</HorizontalScroll>
		</HStack>
	);
};

export default DummyToggleButtons;
