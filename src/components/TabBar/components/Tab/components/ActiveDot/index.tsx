import { FC, useContext } from 'react';

import { Box } from '@chakra-ui/react';

import { TabBarContext } from '../../../..';
import { useTheme } from '../../../../../../common/hooks';
import { getColor } from '../../../../../../common/utils/color';
import {
	colorMode as defaultColorMode,
	direction as defaultDirection
} from '../../../../common/data/defaultPropValues';
import { TabBarContext as TabBarContextType } from '../../../../types';

const ActiveDot: FC = () => {
	const theme = useTheme();

	const { colorMode = defaultColorMode, direction = defaultDirection } = useContext<TabBarContextType>(TabBarContext);

	return (
		<Box
			width={theme.space['0.5']}
			height={theme.space['0.5']}
			backgroundColor={getColor({ theme, colorMode, type: 'background' })}
			borderRadius='full'
			mt={direction === 'bottom' ? 0.5 : 0}
			mb={direction === 'top' ? 0.5 : 0}
			sx={{ transition: 'none' }}
		/>
	);
};

export default ActiveDot;
