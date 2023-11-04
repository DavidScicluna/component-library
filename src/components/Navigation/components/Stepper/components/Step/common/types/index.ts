import type { ElementType, ReactNode } from 'react';

import type {
	PickFrom,
	PolymorphicMouseEvent,
	ResponsiveValue,
	ThemeAppAppearanceProps,
	ThemeSpacing
} from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type StepMouseEvent<Element extends StepElement = StepDefaultElement> = PolymorphicMouseEvent<Element>;

export type StepDefaultElement = 'button';
export type StepElement = PickFrom<ElementType, 'button'>;

export type StepRenderProps<Element extends StepElement = StepDefaultElement> = Pick<
	StepOtherProps<Element>,
	'color' | 'colorMode'
> & { w?: number; h?: number };

type StepOtherProps<Element extends StepElement = StepDefaultElement> = ThemeAppAppearanceProps & {
	renderTop?: (props: StepRenderProps<Element>) => ReactNode;
	renderBottom?: (props: StepRenderProps<Element>) => ReactNode;
	renderLeft?: (props: StepRenderProps<Element>) => ReactNode;
	renderRight?: (props: StepRenderProps<Element>) => ReactNode;
	index: number;
	/**
	 * If `true`, the step will have the active styling
	 *
	 * @default false
	 */
	isActive?: ResponsiveValue<boolean>;
	/**
	 * If true, the step will be styled in a more compressed state
	 *
	 * @default false
	 */
	isCompact?: ResponsiveValue<boolean>;
	/**
	 * If `true`, the step will have the disabled styling
	 *
	 * @default false
	 */
	isDisabled?: ResponsiveValue<boolean>;
	/**
	 * If true, the step text will be in uppercase else it will be capitalized
	 *
	 * @default true
	 */
	isUppercase?: ResponsiveValue<boolean>;
	spacing?: ResponsiveValue<ThemeSpacing>;
};

export type StepProps<Element extends StepElement = StepDefaultElement> = Omit<BoxProps<Element>, keyof BoxOtherProps> &
	StepOtherProps<Element>;

export type StepRef<Element extends StepElement = StepDefaultElement> = BoxRef<Element>;