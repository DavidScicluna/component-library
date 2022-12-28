import { ReactNode } from 'react';

import { StackProps, TextProps } from '@chakra-ui/react';

import { CommonCardProps } from '../../../common/types';

export type CardHeaderRenderProps = {
	width?: number; // In Pixels
	height?: number; // In Pixels
	// size?: ButtonSize;
} & Pick<CommonCardProps, 'color' | 'colorMode'>;

export type CardHeaderProps = {
	renderLeft?: (props: CardHeaderRenderProps) => ReactNode;
	renderRight?: (props: CardHeaderRenderProps) => ReactNode;
	renderTitle?: (props: TextProps) => ReactNode;
	renderSubtitle?: (props: TextProps) => ReactNode;
	actions?: ReactNode;
} & Omit<StackProps, 'children' | 'direction'>;
