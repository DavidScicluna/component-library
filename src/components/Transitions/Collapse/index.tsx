import { FC } from 'react';

import { useConst, Collapse as CUICollapse } from '@chakra-ui/react';

import { Transition } from 'framer-motion';


import { useTheme } from '../../../common/hooks';
import { getConfig } from '../common/utils';

import { CollapseProps } from './types';

const Collapse: FC<CollapseProps> = (props) => {
	const theme = useTheme();

	const config = useConst<Transition>(getConfig({ theme }));

	const { children, transition, ...rest } = props;
	const { enter = { ...config }, exit = { ...config } } = transition || {};

	return (
		<CUICollapse {...rest} transition={{ enter, exit }}>
			{children}
		</CUICollapse>
	);
};

export default Collapse;
