import { ReactElement } from 'react';

import { AnimatePresence as AP } from 'framer-motion';

import type { AnimatePresenceProps } from './common/types';

const AnimatePresence = ({ children, ...rest }: AnimatePresenceProps): ReactElement => (
	<AP mode='wait' initial={false} {...rest}>
		{children}
	</AP>
);

export default AnimatePresence;
