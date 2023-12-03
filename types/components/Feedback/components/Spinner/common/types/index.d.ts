import type { ElementType } from 'react';
import type { Style } from 'react-loader-spinner/dist/type';
import type { PickFrom, PolymorphicDefaultElement, ThemeFontSize, ThemeRadius } from '@common/types';
import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
export type SpinnerSize = ThemeFontSize | number | string;
export type SpinnerSizes = Array<SpinnerSize>;
export type SpinnerVariant = 'bars' | 'color_ring' | 'oval' | 'puff' | 'rings' | 'rotating_lines' | 'tail_spin' | 'three_dots';
export type SpinnerBarsVariant = {
    variant?: PickFrom<SpinnerVariant, 'bars'>;
};
export type SpinnerColorRingVariant = {
    colors: [string, string, string, string, string];
    variant?: PickFrom<SpinnerVariant, 'color_ring'>;
};
export type SpinnerOvalVariant = {
    color: string;
    secondaryColor: string;
    strokeWidth?: string | number;
    strokeWidthSecondary?: string | number;
    variant?: PickFrom<SpinnerVariant, 'oval'>;
};
export type SpinnerPuffVariant = {
    radius?: ThemeRadius;
    variant?: PickFrom<SpinnerVariant, 'puff'>;
};
export type SpinnerRingsVariant = {
    radius?: ThemeRadius;
    variant?: PickFrom<SpinnerVariant, 'rings'>;
};
export type SpinnerRotatingLinesVariant = {
    strokeColor: string;
    strokeWidth?: string;
    variant?: PickFrom<SpinnerVariant, 'rotating_lines'>;
};
export type SpinnerTailSpinVariant = {
    radius?: ThemeRadius;
    variant?: PickFrom<SpinnerVariant, 'tail_spin'>;
};
export type SpinnerThreeDotsVariant = {
    radius?: ThemeRadius;
    variant?: PickFrom<SpinnerVariant, 'three_dots'>;
};
type SpinnerOtherProps = {
    color?: string;
    isVisible?: boolean;
    wrapperStyle?: Style;
    size?: SpinnerSize;
} & (SpinnerBarsVariant | SpinnerPuffVariant | SpinnerRingsVariant | SpinnerTailSpinVariant | SpinnerThreeDotsVariant);
export type SpinnerProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<BoxProps<Element>, keyof BoxOtherProps | 'children'> & SpinnerOtherProps;
export type SpinnerRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
export {};
//# sourceMappingURL=index.d.ts.map