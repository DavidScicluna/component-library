import type { ReactNode } from 'react';

import type { AnimatePresenceProps as FMAnimatePresenceProps } from 'framer-motion';

export type AnimatePresenceProps = FMAnimatePresenceProps & {
	children: ReactNode;
};
