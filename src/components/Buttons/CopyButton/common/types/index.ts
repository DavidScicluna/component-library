import type { ReactNode } from 'react';

import type { ThemeDuration } from '@common/types';

export type CopyButtonTimeout = ThemeDuration | number;

export type CopyButtonChildrenProps = {
	isCopied: boolean;
	onCopy: () => void;
};

export type CopyButtonProps = {
	children: (props: CopyButtonChildrenProps) => ReactNode;
	/**
	 * Copied status timeout in ms
	 *
	 * @default 'ultra-slow' || 1000ms
	 */
	timeout?: CopyButtonTimeout;
	/**
	 * Value that should be copied to the clipboard
	 */
	value: string;
};
