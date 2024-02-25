/// <reference types="vite/client" />
/// <reference types="@emotion/react/types/css-prop" />

import type { ForwardedRef, ReactNode, RefAttributes } from 'react';
import type { Nullish } from 'utility-types';

declare module 'react' {
	function forwardRef<T, P = {}>(
		render: (props: P, ref: Ref<T>) => Nullish<ReactNode>
	): (props: P & RefAttributes<T>) => Nullish<ReactNode>;
}

declare module '*.png';

declare global {
	interface Window {
		// Declare properties or methods here
	}
}
