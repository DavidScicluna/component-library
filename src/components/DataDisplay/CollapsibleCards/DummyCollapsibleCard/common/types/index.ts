import { ReactNode } from 'react';

import { TextProps } from '@chakra-ui/react';

import { Nullable } from '../../../../../../common/types';
import { CommonCollapsibleCardProps } from '../../../common/types';

export type DummyCollapsibleCardRenderProps = Pick<CommonCollapsibleCardProps, 'color' | 'colorMode'> & {
	width?: number; // In Pixels
	height?: number; // In Pixels
	// size?: ButtonSize;
};

type Omitted = 'children' | 'isActive' | 'isDisabled' | 'isDivisible' | 'isClickable' | 'isFixed';

export type DummyCollapsibleCardProps = Omit<CommonCollapsibleCardProps, Omitted> & {
	renderLeft?: (props: DummyCollapsibleCardRenderProps) => ReactNode;
	renderRight?: (props: DummyCollapsibleCardRenderProps) => ReactNode;
	renderTitle?: (props: TextProps) => ReactNode;
	renderSubtitle?: (props: TextProps) => ReactNode;
	actions?: ReactNode;
};

export type DummyCollapsibleCardRef = Nullable<HTMLDivElement>;
