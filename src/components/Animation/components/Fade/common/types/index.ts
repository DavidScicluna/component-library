import type { ElementType } from 'react';

import type { CommonAnimationProps, CommonAnimationRef } from '@components/Animation/common/types';

export type FadeProps<Element extends ElementType> = CommonAnimationProps<Element>;

export type FadeRef<Element extends ElementType> = CommonAnimationRef<Element>;
