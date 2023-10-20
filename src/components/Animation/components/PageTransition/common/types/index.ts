import type { ElementType } from 'react';

import type { CommonAnimationProps, CommonAnimationRef } from '@components/Animation';

export type PageTransitionProps<Element extends ElementType> = CommonAnimationProps<Element> & { blur?: number };

export type PageTransitionRef<Element extends ElementType> = CommonAnimationRef<Element>;
