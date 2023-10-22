import type { ElementType } from 'react';

import type { AnimationCommonProps, AnimationCommonRef } from '@components/Animation';

export type FadeProps<Element extends ElementType> = AnimationCommonProps<Element>;

export type FadeRef<Element extends ElementType> = AnimationCommonRef<Element>;
