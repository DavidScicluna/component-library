import { ReactNode } from 'react';

import { StackProps } from '@chakra-ui/react';

import { CommonCardProps } from '../../../common/types';

export type DummyCardHeaderRenderProps = {
	width?: number; // In Pixels
	height?: number; // In Pixels
	// size?: ButtonSize;
} & Pick<CommonCardProps, 'color' | 'colorMode'>;

export type DummyCardHeaderProps = {
	renderLeft?: (props: DummyCardHeaderRenderProps) => ReactNode;
	renderRight?: (props: DummyCardHeaderRenderProps) => ReactNode;
	hasTitle?: boolean;
	hasSubtitle?: boolean;
	actions?: ReactNode;
} & Omit<StackProps, 'children' | 'direction'>;
