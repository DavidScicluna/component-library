import { FC } from 'react';

import { ScaleFade as CUIScaleFade, useConst } from '@chakra-ui/react';

import { Transition } from 'framer-motion';

import { useTheme } from '../../../common/hooks';
import { unmountOnExit as defaultUnmountOnExit } from '../common/default/props';
import { getConfig } from '../common/utils';

import { ScaleFadeProps } from './common/types';

const ScaleFade: FC<ScaleFadeProps> = (props) => {
	const theme = useTheme();

	const config = useConst<Transition>(getConfig({ theme }));

	const { children, unmountOnExit = defaultUnmountOnExit, transition, ...rest } = props;
	const { enter = { ...config }, exit = { ...config } } = transition || {};

	return (
		<CUIScaleFade
			{...rest}
			unmountOnExit={unmountOnExit}
			transition={{ enter: enter || { ...config }, exit: exit || { ...config } }}
		>
			{children}
		</CUIScaleFade>
	);
};

export default ScaleFade;
