import { ReactNode } from 'react';

import { AnimatePresenceProps as FMAnimatePresenceProps } from 'framer-motion';

export type AnimatePresenceProps = FMAnimatePresenceProps & {
	children: ReactNode;
};
