import { FC } from 'react';

import { Box } from '@chakra-ui/react';

import { useTheme } from '../../../../../../../common/hooks';
import { getColor } from '../../../../../../../common/utils/color';
import { useTabBarContext } from '../../../../common/hooks';

const ActiveDot: FC = () => {
	const theme = useTheme();

	const { colorMode, direction } = useTabBarContext();

	return (
		<Box
			width={theme.space['0.5']}
			height={theme.space['0.5']}
			backgroundColor={getColor({ theme, colorMode, type: 'background' })}
			borderRadius='full'
			mt={direction === 'bottom' ? 1 : 0}
			mb={direction === 'top' ? 1 : 0}
			sx={{ transition: 'none' }}
		/>
	);
};

export default ActiveDot;
