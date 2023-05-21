import { MouseEvent as ME, ReactNode } from 'react';

import { CommonThemeProps } from '../../../../../common/types';
import { Duration } from '../../../../../theme/types';

export type CopyButtonMouseEvent = ME<unknown>;

export type CopyButtonChildrenProps = Pick<CopyButtonProps, 'color' | 'colorMode'> & {
	isCopied: boolean;
	onCopy: (event: CopyButtonMouseEvent) => void;
};

export type CopyButtonProps = {
	children: (props: CopyButtonChildrenProps) => ReactNode;
	timeout?: Duration | number;
	value: string;
} & CommonThemeProps;
