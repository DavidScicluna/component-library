import { FC } from 'react';

import { useConst, Collapse as CUICollapse } from '@chakra-ui/react';

import { Transition } from 'framer-motion';

import { CollapseProps } from './types';

import { useTheme } from '../../../common/hooks';
import { convertEasingsToArray, convertStringToNumber } from '../../../common/utils';

const Collapse: FC<CollapseProps> = (props) => {
	const theme = useTheme();

	const duration = useConst<number>(convertStringToNumber(theme.transition.duration.normal, 'ms') / 1000);
	const easings = useConst<number[]>(convertEasingsToArray({ easing: theme.transition.easing['ease-in-out'] }));

	const config = useConst<Transition>({ duration, easings });

	const { children, transition, ...rest } = props;
	const { enter = { ...config }, exit = { ...config } } = transition || {};

	return (
		<CUICollapse {...rest} transition={{ enter, exit }}>
			{children}
		</CUICollapse>
	);
};

export default Collapse;
