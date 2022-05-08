import { FC } from 'react';

import { VStack, Text, Box, SlideFade } from '@chakra-ui/react';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isActive as defaultIsActive,
	isDisabled as defaultIsDisabled
} from './common/data/defaultPropValues';
import useStyles from './common/styles';
import { TabProps } from './types';

import { useTheme } from '../../../../common/hooks';
import { getColor } from '../../../../common/utils/color';

const Tab: FC<TabProps> = (props) => {
	const theme = useTheme();

	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		renderIcon,
		label,
		isActive = defaultIsActive,
		isDisabled = defaultIsDisabled,
		onClick
	} = props;

	const style = useStyles({ theme, color, colorMode, isActive });

	return (
		<VStack
			aria-disabled={isDisabled}
			onClick={() => onClick()}
			spacing={1}
			sx={{ ...style.tab }}
			_disabled={{ ...style.disabled }}
		>
			<VStack spacing={0}>
				{renderIcon({ width: theme.fontSizes['4xl'], height: theme.fontSizes['4xl'] })}

				<Text
					align='center'
					fontSize='xs'
					fontWeight='semibold'
					textTransform='uppercase'
					whiteSpace='nowrap'
					lineHeight='normal'
					letterSpacing='.6px'
				>
					{label}
				</Text>
			</VStack>

			<SlideFade in={isActive} offsetY={theme.space['1']} unmountOnExit>
				<Box
					width={theme.space['0.5']}
					height={theme.space['0.5']}
					backgroundColor={getColor({ theme, colorMode, color, type: 'color' })}
					borderRadius='full'
				/>
			</SlideFade>
		</VStack>
	);
};

export default Tab;
