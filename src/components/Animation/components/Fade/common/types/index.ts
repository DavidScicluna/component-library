import type { ElementType } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

import type { AnimationCommonProps, AnimationCommonRef } from '@components/Animation';

export type FadeProps<Element extends ElementType = PolymorphicDefaultElement> = AnimationCommonProps<Element>;

export type FadeRef<Element extends ElementType = PolymorphicDefaultElement> = AnimationCommonRef<Element>;
