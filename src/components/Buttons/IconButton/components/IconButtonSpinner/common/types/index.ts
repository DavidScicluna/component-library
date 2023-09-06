import type { ElementType } from 'react';

import type { SpinnerProps, SpinnerRef } from '@components/Feedback';

export type IconButtonSpinnerProps<Element extends ElementType> = Omit<
	SpinnerProps<Element>,
	'color' | 'isVisible' | 'size'
>;

export type IconButtonSpinnerRef<Element extends ElementType> = SpinnerRef<Element>;
