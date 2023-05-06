import { BoxProps } from '@chakra-ui/react';

import { AnimatePresenceProps as APProps } from 'framer-motion';

export type AnimatePresenceProps = Pick<BoxProps, 'children'> & APProps;
