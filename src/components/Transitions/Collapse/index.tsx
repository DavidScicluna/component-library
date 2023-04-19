import { FC } from 'react';

import { Collapse as CUICollapse,useConst } from '@chakra-ui/react';

import { Transition } from 'framer-motion';

import { useTheme } from '../../../common/hooks';
import { unmountOnExit as defaultUnmountOnExit } from '../common/data/defaultPropValues';
import { getConfig } from '../common/utils';

import { CollapseProps } from './types';

const Collapse: FC<CollapseProps> = (props) => {
	const theme = useTheme();

	const config = useConst<Transition>(getConfig({ theme }));

	const { children, unmountOnExit = defaultUnmountOnExit, transition, ...rest } = props;
	const { enter = { ...config }, exit = { ...config } } = transition || {};

	return (
		<CUICollapse
			{...rest}
			unmountOnExit={unmountOnExit}
			transition={{ enter: enter || { ...config }, exit: exit || { ...config } }}
		>
			{children}
		</CUICollapse>
	);
};

export default Collapse;
