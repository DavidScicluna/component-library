import type { ElementType } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

import type { AnimationCommonProps, AnimationCommonRef } from '@components/Animation';

export type PageTransitionProps<Element extends ElementType = PolymorphicDefaultElement> =
	AnimationCommonProps<Element> & { blur?: number };

export type PageTransitionRef<Element extends ElementType = PolymorphicDefaultElement> = AnimationCommonRef<Element>;
