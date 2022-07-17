import { FC, useContext } from 'react';

import { VStack, Text } from '@chakra-ui/react';

import { isActive as defaultIsActive, isDisabled as defaultIsDisabled } from './common/data/defaultPropValues';
import useStyles from './common/styles';
import ActiveDot from './components/ActiveDot';
import { TabProps } from './types';

import { TabBarContext } from '../..';
import { useTheme } from '../../../../../common/hooks';
import SlideFade from '../../../../Transitions/SlideFade';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	direction as defaultDirection
} from '../../common/data/defaultPropValues';
import { TabBarContext as TabBarContextType } from '../../types';

const Tab: FC<TabProps> = (props) => {
	const theme = useTheme();

	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		direction = defaultDirection
	} = useContext<TabBarContextType>(TabBarContext);

	const { renderIcon, label, isActive = defaultIsActive, isDisabled = defaultIsDisabled, onClick } = props;

	const style = useStyles({ theme, color, colorMode, isActive });

	return (
		<VStack
			aria-disabled={isDisabled}
			onClick={() => onClick()}
			spacing={0.5}
			sx={{ ...style.tab }}
			_disabled={{ ...style.disabled }}
		>
			{direction === 'bottom' ? (
				renderIcon({ width: theme.fontSizes['4xl'], height: theme.fontSizes['4xl'] })
			) : (
				<SlideFade in={isActive} unmountOnExit>
					<ActiveDot />
				</SlideFade>
			)}

			<Text
				align='center'
				fontSize='xs'
				fontWeight='semibold'
				textTransform='uppercase'
				whiteSpace='nowrap'
				lineHeight='normal'
				letterSpacing='.6px'
				sx={{ transition: 'none' }}
			>
				{label}
			</Text>

			{direction === 'top' ? (
				renderIcon({ width: theme.fontSizes['4xl'], height: theme.fontSizes['4xl'] })
			) : (
				<SlideFade in={isActive} unmountOnExit>
					<ActiveDot />
				</SlideFade>
			)}
		</VStack>
	);
};

export default Tab;
