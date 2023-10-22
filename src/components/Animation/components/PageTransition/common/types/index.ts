import type { ElementType } from 'react';

import type { AnimationCommonProps, AnimationCommonRef } from '@components/Animation';

export type PageTransitionProps<Element extends ElementType> = AnimationCommonProps<Element> & { blur?: number };

export type PageTransitionRef<Element extends ElementType> = AnimationCommonRef<Element>;
