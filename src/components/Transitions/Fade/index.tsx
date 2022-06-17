import { FC } from 'react';

import { useConst, Fade as CUIFade } from '@chakra-ui/react';

import { Transition } from 'framer-motion';

import { FadeProps } from './types';

import { useTheme } from '../../../common/hooks';
import { convertEasingsToArray, convertStringToNumber } from '../../../common/utils';

const Fade: FC<FadeProps> = (props) => {
	const theme = useTheme();

	const duration = useConst<number>(convertStringToNumber(theme.transition.duration.normal, 'ms') / 1000);
	const easings = useConst<number[]>(convertEasingsToArray({ easing: theme.transition.easing['ease-in-out'] }));

	const config = useConst<Transition>({ duration, easings });

	const { children, transition, ...rest } = props;
	const { enter = { ...config }, exit = { ...config } } = transition || {};

	return (
		<CUIFade {...rest} transition={{ enter: enter || { ...config }, exit: exit || { ...config } }}>
			{children}
		</CUIFade>
	);
};

export default Fade;
