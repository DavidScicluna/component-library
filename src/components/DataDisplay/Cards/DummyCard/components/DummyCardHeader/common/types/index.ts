import { ReactNode } from 'react';

import { StackProps, TextProps } from '@chakra-ui/react';

import { CommonCardProps } from '../../../../../common/types';

export type DummyCardHeaderRenderProps = Pick<CommonCardProps, 'color' | 'colorMode'> & {
	width?: number; // In Pixels
	height?: number; // In Pixels
	// size?: ButtonSize;
};

export type DummyCardHeaderProps = Omit<StackProps, 'children' | 'direction'> & {
	renderLeft?: (props: DummyCardHeaderRenderProps) => ReactNode;
	renderRight?: (props: DummyCardHeaderRenderProps) => ReactNode;
	renderTitle?: (props: TextProps) => ReactNode;
	renderSubtitle?: (props: TextProps) => ReactNode;
	actions?: ReactNode;
};
