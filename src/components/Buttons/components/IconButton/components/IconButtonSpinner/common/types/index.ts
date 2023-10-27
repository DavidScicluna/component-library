import type { ElementType } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

import type { SpinnerProps, SpinnerRef } from '@components/Feedback';

export type IconButtonSpinnerProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	SpinnerProps<Element>,
	'color' | 'isVisible' | 'size'
>;

export type IconButtonSpinnerRef<Element extends ElementType = PolymorphicDefaultElement> = SpinnerRef<Element>;
