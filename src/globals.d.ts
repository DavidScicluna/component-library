import type { ForwardedRef, ReactNode, RefAttributes } from 'react';

import type { Nullish } from 'utility-types';

declare module 'react' {
	// eslint-disable-next-line @typescript-eslint/ban-types
	function forwardRef<T, P = {}>(
		render: (props: P, ref: ForwardedRef<T>) => Nullish<ReactNode>,
		displayName: string
	): (props: P & RefAttributes<T>) => Nullish<ReactNode>;
}

declare module '*.png';
