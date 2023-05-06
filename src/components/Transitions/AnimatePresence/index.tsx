import { FC } from 'react';

import { AnimatePresence as AP } from 'framer-motion';

import { AnimatePresenceProps } from './common/types';

const AnimatePresence: FC<AnimatePresenceProps> = ({ children, ...rest }) => {
	return (
		<AP {...rest} mode='wait' initial={false}>
			{children}
		</AP>
	);
};

export default AnimatePresence;
