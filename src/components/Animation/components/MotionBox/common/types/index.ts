import type { MotionProps } from 'framer-motion';

import type { PolymorphicDefaultElement } from '@common/types/polymorphic';

import type { TransitionProps } from '@components/Animation';
import type { BoxProps, BoxRef } from '@components/Box/common/types';

type MotionBoxElement = PolymorphicDefaultElement;

export type MotionBoxProps = BoxProps<MotionBoxElement, TransitionProps & MotionProps>;

export type MotionBoxRef = BoxRef<MotionBoxElement>;
