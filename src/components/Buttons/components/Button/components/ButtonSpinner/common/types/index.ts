import type { ElementType } from 'react';

import type { SpinnerProps, SpinnerRef } from '@components/Feedback';

export type ButtonSpinnerProps<Element extends ElementType> = Omit<
	SpinnerProps<Element>,
	'color' | 'isVisible' | 'size'
>;

export type ButtonSpinnerRef<Element extends ElementType> = SpinnerRef<Element>;
