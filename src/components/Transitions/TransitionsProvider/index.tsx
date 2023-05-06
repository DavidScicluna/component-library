import { FC } from 'react';

import { useConst } from '@chakra-ui/react';

import { MotionConfig, Transition } from 'framer-motion';

import { useTheme } from '../../../common/hooks';
import { getConfig } from '../common/utils';

import { TransitionsProviderProps } from './common/types';

const TransitionsProvider: FC<TransitionsProviderProps> = ({ children, ...rest }) => {
	const theme = useTheme();

	const config = useConst<Transition>(getConfig({ theme }));

	return (
		<MotionConfig {...rest} transition={{ ...config }}>
			{children}
		</MotionConfig>
	);
};

export default TransitionsProvider;
