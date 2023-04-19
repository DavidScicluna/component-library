import { ReactNode } from 'react';

import { GridProps } from '@chakra-ui/react';

import {
	BoxColor,
	BoxFilter,
	BoxFlexbox,
	BoxGradient,
	BoxGrid,
	BoxOther,
	BoxPosition,
	BoxPseudo,
	BoxShadow} from '../../../common/types/box';

export type StateOverlayState = 'error' | 'empty' | 'loading' | 'default';

export type StateOverlayRenderProps = Pick<StateOverlayProps, 'state'>;

type Omitted =
	| BoxColor
	| BoxGradient
	| BoxFlexbox
	| BoxGrid
	| BoxPosition
	| BoxShadow
	| BoxFilter
	| BoxPseudo
	| BoxOther
	| 'as'
	| 'children';

export type StateOverlayProps = Omit<GridProps, Omitted> & {
	renderError?: (props: StateOverlayRenderProps) => ReactNode;
	renderEmpty?: (props: StateOverlayRenderProps) => ReactNode;
	renderSpinner?: (props: StateOverlayRenderProps) => ReactNode;
	renderContent: (props: StateOverlayRenderProps) => ReactNode;
	hasGlass?: boolean;
	hasContentAlwaysVisible?: boolean;
	state: StateOverlayState;
};
