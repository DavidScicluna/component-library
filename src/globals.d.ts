import type { ForwardedRef, ReactElement, RefAttributes } from 'react';

declare module 'react' {
	// eslint-disable-next-line @typescript-eslint/ban-types
	function forwardRef<T, P = {}>(
		render: (props: P, ref: ForwardedRef<T>) => ReactElement | null
	): (props: P & RefAttributes<T>) => ReactElement | null;
}

declare module '*.png';
