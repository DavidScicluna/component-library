import type { ElementType } from 'react';

import type { MotionProps } from 'framer-motion';

import type { TransitionProps } from '@components/Animation';
import type { BoxProps, BoxRef } from '@components/Box';

export type MotionBoxProps<Element extends ElementType> = BoxProps<Element, TransitionProps & MotionProps>;

export type MotionBoxRef<Element extends ElementType> = BoxRef<Element>;
