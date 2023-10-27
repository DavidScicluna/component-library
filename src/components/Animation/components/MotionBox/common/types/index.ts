import type { ElementType } from 'react';

import type { MotionProps } from 'framer-motion';

import type { PolymorphicDefaultElement } from '@common/types';

import type { TransitionProps } from '@components/Animation';
import type { BoxProps, BoxRef } from '@components/Box';

export type MotionBoxProps<Element extends ElementType = PolymorphicDefaultElement> = BoxProps<Element> &
	TransitionProps &
	MotionProps;

export type MotionBoxRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
