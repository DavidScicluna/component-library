import { FC } from 'react';

import { VStack, Text, Box, SlideFade } from '@chakra-ui/react';

import useStyles from './common/styles';
import { TabProps } from './types';

import { useTheme } from '../../../../common/hooks';
import { handleHue } from '../../../../common/utils';
import Icon from '../../../Icon';

const Tab: FC<TabProps> = (props) => {
	const theme = useTheme();

	const { color, colorMode = 'light', icon, label, isActive = false, isDisabled = false, onClick } = props;

	const style = useStyles(theme, { color, colorMode });

	return (
		<VStack
			aria-disabled={isDisabled}
			onClick={() => onClick()}
			spacing={1}
			sx={{ ...style.tab }}
			_disabled={{ ...style.disabled }}
		>
			<VStack spacing={0.5}>
				<Icon width={theme.fontSizes['4xl']} height={theme.fontSizes['4xl']} icon={icon} type='outlined' />
				<Text align='center' fontSize='xs' fontWeight='semibold' textTransform='uppercase' whiteSpace='nowrap'>
					{label}
				</Text>
			</VStack>

			<SlideFade in={isActive} offsetY={theme.space['1']} unmountOnExit>
				<Box
					width={theme.space['0.5']}
					height={theme.space['0.5']}
					backgroundColor={`${color}.${handleHue(colorMode, color)}`}
					borderRadius='full'
				/>
			</SlideFade>
		</VStack>
	);
};

export default Tab;
