import type { ForwardedRef, ReactNode, RefAttributes } from 'react';
import type { Nullish } from 'utility-types';

declare module 'react' {
	function forwardRef<T, P = {}>(
		render: (props: P, ref: Ref<T>) => Nullish<ReactNode>
	): (props: P & RefAttributes<T>) => Nullish<ReactNode>;
}

declare module '*.png';
