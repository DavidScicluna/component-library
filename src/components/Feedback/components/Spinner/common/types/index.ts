import type { ElementType } from 'react';
import type { Style } from 'react-loader-spinner/dist/type';

import type { PickFrom } from '@common/types';
import type { FontSize, Radius } from '@common/types/theme';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

export type SpinnerSize = FontSize | number;

export type SpinnerVariant =
	| 'bars'
	| 'color_ring'
	| 'oval'
	| 'puff'
	| 'rings'
	| 'rotating_lines'
	| 'tail_spin'
	| 'three_dots';

export interface SpinnerBarsVariant {
	color: string;
	variant?: PickFrom<SpinnerVariant, 'bars'>;
}
export interface SpinnerColorRingVariant {
	colors: [string, string, string, string, string];
	variant?: PickFrom<SpinnerVariant, 'color_ring'>;
}
export interface SpinnerOvalVariant {
	color: string;
	secondaryColor: string;
	strokeWidth?: string | number;
	strokeWidthSecondary?: string | number;
	variant?: PickFrom<SpinnerVariant, 'oval'>;
}
export interface SpinnerPuffVariant {
	color: string;
	radius?: Radius;
	variant?: PickFrom<SpinnerVariant, 'puff'>;
}
export interface SpinnerRingsVariant {
	color: string;
	radius?: Radius;
	variant?: PickFrom<SpinnerVariant, 'rings'>;
}
export interface SpinnerRotatingLinesVariant {
	strokeColor: string;
	strokeWidth?: string;
	variant?: PickFrom<SpinnerVariant, 'rotating_lines'>;
}
export interface SpinnerTailSpinVariant {
	color: string;
	radius?: Radius;
	variant?: PickFrom<SpinnerVariant, 'tail_spin'>;
}
export interface SpinnerThreeDotsVariant {
	color: string;
	radius?: Radius;
	variant?: PickFrom<SpinnerVariant, 'three_dots'>;
}

type SpinnerOtherProps = {
	isVisible?: boolean;
	wrapperStyle?: Style;
	size?: SpinnerSize;
} & (
	| SpinnerBarsVariant
	| SpinnerColorRingVariant
	| SpinnerOvalVariant
	| SpinnerPuffVariant
	| SpinnerRingsVariant
	| SpinnerRotatingLinesVariant
	| SpinnerTailSpinVariant
	| SpinnerThreeDotsVariant
);

export type SpinnerProps<Element extends ElementType> = Omit<BoxProps<Element, SpinnerOtherProps>, 'children'>;

export type SpinnerRef<Element extends ElementType> = BoxRef<Element>;
