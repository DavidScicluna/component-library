import type { ElementType, ReactNode } from 'react';

import type { PolymorphicMouseEvent, ResponsiveValue, ThemeAppAppearanceProps, ThemeSpacing } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type StepMouseEvent<Element extends StepElement = StepDefaultElement> = PolymorphicMouseEvent<Element>;

export type StepDefaultElement = 'button';
export type StepElement = Extract<ElementType, 'button'>;

export type StepStatus = 'idle' | 'success' | 'error' | 'warning' | 'active';

export type StepRenderProps<Element extends StepElement = StepDefaultElement> = Pick<
	StepOtherProps<Element>,
	'color' | 'colorMode'
> & { w?: number; h?: number };

type StepOtherProps<Element extends StepElement = StepDefaultElement> = ThemeAppAppearanceProps & {
	renderTop?: (props: StepRenderProps<Element>) => ReactNode;
	renderBottom?: (props: StepRenderProps<Element>) => ReactNode;
	renderLeft?: (props: StepRenderProps<Element>) => ReactNode;
	renderRight?: (props: StepRenderProps<Element>) => ReactNode;
	/**
	 * The index of the step
	 */
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
	/**
	 * The current status of the step
	 *
	 * @default 'idle'
	 */
	status?: ResponsiveValue<StepStatus>;
	spacing?: ResponsiveValue<ThemeSpacing>;
};

export type StepProps<Element extends StepElement = StepDefaultElement> = Omit<
	BoxProps<Element, StepOtherProps<Element>>,
	keyof BoxOtherProps
>;

export type StepRef<Element extends StepElement = StepDefaultElement> = BoxRef<Element>;

export type StepContext = Pick<StepProps, 'id' | 'index' | 'status'>;
