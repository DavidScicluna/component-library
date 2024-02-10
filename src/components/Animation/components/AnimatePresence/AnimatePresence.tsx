import { AnimatePresence as FMAnimatePresence } from 'framer-motion';

import type { AnimatePresenceProps } from './common/types';

const AnimatePresence = ({ children, ...rest }: AnimatePresenceProps): JSX.Element => (
	<FMAnimatePresence mode='wait' initial={false} {...rest}>
		{children}
	</FMAnimatePresence>
);

AnimatePresence.displayName = 'AnimatePresence';

export default AnimatePresence;
