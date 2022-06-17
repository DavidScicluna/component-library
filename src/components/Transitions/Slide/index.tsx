import { FC } from 'react';

import { useConst, Slide as CUISlide } from '@chakra-ui/react';

import { Transition } from 'framer-motion';

import { SlideProps } from './types';

import { useTheme } from '../../../common/hooks';
import { convertEasingsToArray, convertStringToNumber } from '../../../common/utils';

const Slide: FC<SlideProps> = (props) => {
	const theme = useTheme();

	const duration = useConst<number>(convertStringToNumber(theme.transition.duration.normal, 'ms') / 1000);
	const easings = useConst<number[]>(convertEasingsToArray({ easing: theme.transition.easing['ease-in-out'] }));

	const config = useConst<Transition>({ duration, easings });

	const { children, transition, ...rest } = props;
	const { enter = { ...config }, exit = { ...config } } = transition || {};

	return (
		<CUISlide {...rest} transition={{ enter: enter || { ...config }, exit: exit || { ...config } }}>
			{children}
		</CUISlide>
	);
};

export default Slide;
