import { FC } from 'react';

import { useConst, Slide as CUISlide } from '@chakra-ui/react';

import { Transition } from 'framer-motion';

import { useTheme } from '../../../common/hooks';
import { unmountOnExit as defaultUnmountOnExit } from '../common/data/defaultPropValues';
import { getConfig } from '../common/utils';

import { SlideProps } from './types';

const Slide: FC<SlideProps> = (props) => {
	const theme = useTheme();

	const config = useConst<Transition>(getConfig({ theme }));

	const { children, unmountOnExit = defaultUnmountOnExit, transition, ...rest } = props;
	const { enter = { ...config }, exit = { ...config } } = transition || {};

	return (
		<CUISlide
			{...rest}
			unmountOnExit={unmountOnExit}
			transition={{ enter: enter || { ...config }, exit: exit || { ...config } }}
		>
			{children}
		</CUISlide>
	);
};

export default Slide;
