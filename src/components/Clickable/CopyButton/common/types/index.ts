import { MouseEvent as ME, ReactNode } from 'react';

import { ColorMode } from '@chakra-ui/react';

import { AppColor } from '../../../../../common/types';
import { Duration } from '../../../../../theme/types';

export type CopyButtonMouseEvent = ME<unknown>;

export type CopyButtonChildrenProps = Pick<CopyButtonProps, 'color' | 'colorMode'> & {
	isCopied: boolean;
	onCopy: (event: CopyButtonMouseEvent) => void;
};

export type CopyButtonProps = {
	children: (props: CopyButtonChildrenProps) => ReactNode;
	color?: AppColor;
	colorMode?: ColorMode;
	timeout?: Duration | number;
	value: string;
};
