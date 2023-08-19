import type { ElementType } from 'react';

import type { CommonAnimationProps, CommonAnimationRef } from '@components/Animation/common/types';

export type TooltipTransitionProps<Element extends ElementType> = CommonAnimationProps<Element>;

export type TooltipTransitionRef<Element extends ElementType> = CommonAnimationRef<Element>;
