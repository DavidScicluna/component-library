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

export type CheckboxLabelPosition = 'left' | 'right';

export type CheckboxSize = FormsCommonSize;

export type CheckboxNonResponsiveValueProps = Omit<FormsNonResponsiveValueProps, 'variant'> & {
	/**
	 * If true, the checkbox will be in a checked state
	 *
	 * @default false
	 */
	isChecked?: boolean;
	/**
	 * If true, the checkbox will be clickable
	 *
	 * @default false
	 */
	isClickable?: boolean;
	/**
	 * If true, the checkbox will be in indeterminate state, checked prop is ignored
	 *
	 * @default false
	 */
	isIndeterminate?: boolean;
	/**
	 * Position of the label relative to the checkbox
	 *
	 * @default 'right'
	 */
	labelPosition?: CheckboxLabelPosition;
} & Pick<PushableOverlayProps<PolymorphicDefaultElement>, 'isActive'>;
export type CheckboxResponsiveValueProps = Omit<FormsResponsiveValueProps, 'variant'> &
	ResponsiveValueProps<CheckboxNonResponsiveValueProps>;

export type CheckboxUniqueProps = ThemeAppAppearanceProps & {
	renderLabel?: (props: TextProps<TextDefaultElement>) => ReactNode;
	onToggle?: (isChecked: boolean) => void;
} & CheckboxResponsiveValueProps;

export type CheckboxProps<Element extends PolymorphicElementType> = Omit<
	BoxProps<Element, CheckboxUniqueProps>,
	'children'
>;

export type CheckboxRef<Element extends PolymorphicElementType> = BoxRef<Element>;
