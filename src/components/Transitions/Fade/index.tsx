import { FC } from 'react';

import { useConst, Fade as CUIFade } from '@chakra-ui/react';

import { Transition } from 'framer-motion';

import { FadeProps } from './types';

import { useTheme } from '../../../common/hooks';
import { getConfig } from '../common/utils';

const Fade: FC<FadeProps> = (props) => {
	const theme = useTheme();

	const config = useConst<Transition>(getConfig({ theme }));

	const { children, transition, ...rest } = props;
	const { enter = { ...config }, exit = { ...config } } = transition || {};

	return (
		<CUIFade {...rest} transition={{ enter: enter || { ...config }, exit: exit || { ...config } }}>
			{children}
		</CUIFade>
	);
};

export default Fade;
