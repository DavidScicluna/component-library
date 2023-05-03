import { ReactNode } from 'react';

import { StackProps, TextProps } from '@chakra-ui/react';

import { CommonCollapsibleCardProps } from '../../../../../common/types';

export type CollapsibleCardHeaderRenderProps = Pick<CommonCollapsibleCardProps, 'color' | 'colorMode'> & {
	width?: number; // In Pixels
	height?: number; // In Pixels
	// size?: ButtonSize;
};

export type CollapsibleCardHeaderProps = Omit<StackProps, 'children' | 'direction'> & {
	renderLeft?: (props: CollapsibleCardHeaderRenderProps) => ReactNode;
	renderRight?: (props: CollapsibleCardHeaderRenderProps) => ReactNode;
	renderTitle?: (props: TextProps) => ReactNode;
	renderSubtitle?: (props: TextProps) => ReactNode;
	actions?: ReactNode;
};
