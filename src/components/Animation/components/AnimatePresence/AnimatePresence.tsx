import type { ReactElement } from 'react';

import { AnimatePresence as FMAnimatePresence } from 'framer-motion';

import type { AnimatePresenceProps } from './common/types';

const AnimatePresence = ({ children, ...rest }: AnimatePresenceProps): ReactElement => (
	<FMAnimatePresence mode='wait' initial={false} {...rest}>
		{children}
	</FMAnimatePresence>
);

export default AnimatePresence;
