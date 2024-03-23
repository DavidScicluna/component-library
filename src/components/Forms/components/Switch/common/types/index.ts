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

export type SwitchLabelPosition = 'left' | 'right';

export type SwitchSize = FormsCommonSize;

export type SwitchNonResponsiveValueProps = Omit<FormsNonResponsiveValueProps, 'variant'> & {
	/**
	 * If true, the switch will contain I (Switch on) and O (Switch off) labels
	 *
	 * @default true
	 */
	hasIOLabel?: boolean;
	/**
	 * If true, the switch will be in a checked state
	 *
	 * @default false
	 */
	isChecked?: boolean;
	/**
	 * If true, the switch will be clickable
	 *
	 * @default false
	 */
	isClickable?: boolean;
	/**
	 * Position of the label relative to the switch
	 *
	 * @default 'right'
	 */
	labelPosition?: SwitchLabelPosition;
} & Pick<PushableOverlayProps<PolymorphicDefaultElement>, 'isActive'>;
export type SwitchResponsiveValueProps = Omit<FormsResponsiveValueProps, 'variant'> &
	ResponsiveValueProps<SwitchNonResponsiveValueProps>;

export type SwitchUniqueProps = SwitchResponsiveValueProps & {
	renderLabel?: (props: TextProps<TextDefaultElement>) => ReactNode;
	onToggle?: (isChecked: boolean) => void;
} & ThemeAppAppearanceProps;

export type SwitchProps<Element extends PolymorphicElementType> = Omit<
	BoxProps<Element, SwitchUniqueProps>,
	'children'
>;

export type SwitchRef<Element extends PolymorphicElementType> = BoxRef<Element>;
