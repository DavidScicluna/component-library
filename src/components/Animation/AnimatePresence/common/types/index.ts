import { ReactNode } from 'react';

import { AnimatePresenceProps as APProps } from 'framer-motion';

export type AnimatePresenceProps = APProps & {
	children: ReactNode;
};
