import { FC } from 'react';

import { useConst, Slide as CUISlide } from '@chakra-ui/react';

import { Transition } from 'framer-motion';

import { useTheme } from '../../../common/hooks';
import { getConfig } from '../common/utils';

import { SlideProps } from './types';

const Slide: FC<SlideProps> = (props) => {
	const theme = useTheme();

	const config = useConst<Transition>(getConfig({ theme }));

	const { children, transition, ...rest } = props;
	const { enter = { ...config }, exit = { ...config } } = transition || {};

	return (
		<CUISlide {...rest} transition={{ enter: enter || { ...config }, exit: exit || { ...config } }}>
			{children}
		</CUISlide>
	);
};

export default Slide;
