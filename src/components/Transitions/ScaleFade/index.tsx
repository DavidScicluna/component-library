import { FC } from 'react';

import { useConst, ScaleFade as CUIScaleFade } from '@chakra-ui/react';

import { Transition } from 'framer-motion';

import { ScaleFadeProps } from './types';

import { useTheme } from '../../../common/hooks';
import { getConfig } from '../common/utils';

const ScaleFade: FC<ScaleFadeProps> = (props) => {
	const theme = useTheme();

	const config = useConst<Transition>(getConfig({ theme }));

	const { children, transition, ...rest } = props;
	const { enter = { ...config }, exit = { ...config } } = transition || {};

	return (
		<CUIScaleFade {...rest} transition={{ enter: enter || { ...config }, exit: exit || { ...config } }}>
			{children}
		</CUIScaleFade>
	);
};

export default ScaleFade;
