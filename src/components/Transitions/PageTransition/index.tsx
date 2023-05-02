import { FC } from 'react';

import { useConst } from '@chakra-ui/react';

import { motion, Transition } from 'framer-motion';

import { useTheme } from '../../../common/hooks';
import { convertREMToPixels, convertStringToNumber } from '../../../common/utils';
import { getConfig as getTransitionConfig, getDuration as getTransitionDuration } from '../common/utils';

import { PageTransitionProps } from './types';

const PageTransition: FC<PageTransitionProps> = ({ children }) => {
	const theme = useTheme();

	const duration = useConst(getTransitionDuration({ theme, duration: 'ultra-slow' }));
	const config = useConst<Transition>({ ...getTransitionConfig({ theme }), duration });

	const blur = useConst<number>(convertREMToPixels(convertStringToNumber(theme.space[2], 'rem')));

	return (
		<motion.div
			initial={{
				width: '100%',
				filter: `blur(${blur}px)`,
				opacity: 0
			}}
			animate={{
				width: '100%',
				filter: 'blur(0px)',
				opacity: 1
			}}
			exit={{
				width: '100%',
				filter: `blur(${blur}px)`,
				opacity: 0
			}}
			transition={{ ...config }}
		>
			{children}
		</motion.div>
	);
};

export default PageTransition;
