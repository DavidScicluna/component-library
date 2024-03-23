import type { ReactNode } from 'react';

import type {
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValueProps,
	ThemeAppAppearanceProps
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type {
	FormsCommonSize,
	FormsNonResponsiveValueProps,
	FormsResponsiveValueProps
} from '@components/Forms/common/types';
import type { PushableOverlayProps } from '@components/Overlay';
import type { TextDefaultElement, TextProps } from '@components/Typography';

export type RadioLabelPosition = 'left' | 'right';

export type RadioSize = FormsCommonSize;

export type RadioNonResponsiveValueProps = Omit<FormsNonResponsiveValueProps, 'variant'> & {
	/**
	 * If true, the radio will be in a checked state
	 *
	 * @default false
	 */
	isChecked?: boolean;
	/**
	 * If true, the radio will be clickable
	 *
	 * @default false
	 */
	isClickable?: boolean;
	/**
	 * Position of the label relative to the radio
	 *
	 * @default 'right'
	 */
	labelPosition?: RadioLabelPosition;
} & Pick<PushableOverlayProps<PolymorphicDefaultElement>, 'isActive'>;
export type RadioResponsiveValueProps = Omit<FormsResponsiveValueProps, 'variant'> &
	ResponsiveValueProps<RadioNonResponsiveValueProps>;

export type RadioUniqueProps = RadioResponsiveValueProps & {
	renderLabel?: (props: TextProps<TextDefaultElement>) => ReactNode;
	onToggle?: (isChecked: boolean) => void;
} & ThemeAppAppearanceProps;

export type RadioProps<Element extends PolymorphicElementType> = Omit<BoxProps<Element, RadioUniqueProps>, 'children'>;

export type RadioRef<Element extends PolymorphicElementType> = BoxRef<Element>;
