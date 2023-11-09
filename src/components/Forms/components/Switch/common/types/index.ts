import type { ElementType, ReactNode } from 'react';

import type {
	PolymorphicChangeEvent,
	PolymorphicDefaultElement,
	PolymorphicFocusEvent,
	PolymorphicMouseEvent,
	ResponsiveValue
} from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { FormsCommonProps, FormsCommonSize } from '@components/Forms';
import type { PushableOverlayProps } from '@components/Overlay';
import type { TextProps } from '@components/Typography';

export type SwitchMouseEvent<Element extends ElementType = PolymorphicDefaultElement> = PolymorphicMouseEvent<Element>;
export type SwitchChangeEvent<Element extends ElementType = PolymorphicDefaultElement> =
	PolymorphicChangeEvent<Element>;
export type SwitchFocusEvent<Element extends ElementType = PolymorphicDefaultElement> = PolymorphicFocusEvent<Element>;

export type SwitchLabelPosition = 'left' | 'right';

export type SwitchSize = FormsCommonSize;

type PickedFormsCommonProps =
	| 'color'
	| 'colorMode'
	| 'isCompact'
	| 'isDisabled'
	| 'isError'
	| 'isFocused'
	| 'isOutlined'
	| 'isReadOnly'
	| 'isRequired'
	| 'isSuccess'
	| 'isWarning'
	| 'size';

type SwitchOtherProps = Pick<FormsCommonProps, PickedFormsCommonProps> & {
	renderLabel?: (props: TextProps) => ReactNode;
	/**
	 * If true, the switch will contain I (Switch on) and O (Switch off) labels
	 *
	 * @default true
	 */
	hasIOLabel?: ResponsiveValue<boolean>;
	/**
	 * If true, the switch will be in a checked state
	 *
	 * @default false
	 */
	isChecked?: ResponsiveValue<boolean>;
	/**
	 * If true, the switch will be clickable
	 *
	 * @default false
	 */
	isClickable?: ResponsiveValue<boolean>;
	/**
	 * Position of the label relative to the switch
	 *
	 * @default 'right'
	 */
	labelPosition?: ResponsiveValue<SwitchLabelPosition>;
	onToggle?: (isChecked: boolean) => void;
} & Pick<PushableOverlayProps<PolymorphicDefaultElement>, 'isActive'>;

type OmittedBoxProps = 'children' | 'size' | keyof Omit<BoxOtherProps, 'w' | 'minW' | 'maxW' | 'h' | 'minH' | 'maxH'>;

export type SwitchProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	BoxProps<Element>,
	OmittedBoxProps
> &
	SwitchOtherProps;

export type SwitchRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
