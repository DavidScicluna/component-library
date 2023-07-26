import { MotionProps } from 'framer-motion';

import { PolymorphicDefaultElement } from '@common/types/polymorphic';

import { TransitionProps } from '@components/Animation/common/types';
import type { BoxProps, BoxRef } from '@components/Box/common/types';

type MotionBoxElement = PolymorphicDefaultElement;

export type MotionBoxProps = BoxProps<MotionBoxElement, TransitionProps & MotionProps>;

export type MotionBoxRef = BoxRef<MotionBoxElement>;
