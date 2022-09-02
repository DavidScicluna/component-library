import { FC } from 'react';

import { useConst, ScaleFade as CUIScaleFade } from '@chakra-ui/react';

import { Transition } from 'framer-motion';

import { useTheme } from '../../../common/hooks';
import { getConfig } from '../common/utils';
import { unmountOnExit as defaultUnmountOnExit } from '../common/data/defaultPropValues';

import { ScaleFadeProps } from './types';

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
