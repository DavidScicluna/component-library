import { FC } from 'react';

import { useConst, SlideFade as CUISlideFade } from '@chakra-ui/react';

import { Transition } from 'framer-motion';

import { useTheme } from '../../../common/hooks';
import { getConfig } from '../common/utils';

import { SlideFadeProps } from './types';

const SlideFade: FC<SlideFadeProps> = (props) => {
	const theme = useTheme();

	const config = useConst<Transition>(getConfig({ theme }));

	const { children, transition, ...rest } = props;
	const { enter = { ...config }, exit = { ...config } } = transition || {};

	return (
		<CUISlideFade {...rest} transition={{ enter: enter || { ...config }, exit: exit || { ...config } }}>
			{children}
		</CUISlideFade>
	);
};

export default SlideFade;
