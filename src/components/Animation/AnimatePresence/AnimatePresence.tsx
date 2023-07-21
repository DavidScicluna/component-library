import { ReactElement } from 'react';

import { AnimatePresence as AP } from 'framer-motion';

import { AnimatePresenceProps } from './common/types';

const AnimatePresence = ({ children, ...rest }: AnimatePresenceProps): ReactElement => (
	<AP {...rest} mode='wait' initial={false}>
		{children}
	</AP>
);

export default AnimatePresence;
