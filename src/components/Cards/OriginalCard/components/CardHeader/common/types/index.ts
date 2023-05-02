import { ReactNode } from 'react';

import { StackProps, TextProps } from '@chakra-ui/react';

import { CommonCardProps } from '../../../../../common/types';

export type CardHeaderRenderProps = Pick<CommonCardProps, 'color' | 'colorMode'> & {
	width?: number; // In Pixels
	height?: number; // In Pixels
	// size?: ButtonSize;
};

export type CardHeaderProps = Omit<StackProps, 'children' | 'direction'> & {
	renderLeft?: (props: CardHeaderRenderProps) => ReactNode;
	renderRight?: (props: CardHeaderRenderProps) => ReactNode;
	renderTitle?: (props: TextProps) => ReactNode;
	renderSubtitle?: (props: TextProps) => ReactNode;
	actions?: ReactNode;
};
