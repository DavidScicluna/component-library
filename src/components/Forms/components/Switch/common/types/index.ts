import type { ReactNode } from 'react';

import type {
	PolymorphicChangeEvent,
	PolymorphicDefaultElement,
	PolymorphicElementType,
	PolymorphicFocusEvent,
	PolymorphicMouseEvent,
	ResponsiveValue
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { FormsCommonProps, FormsCommonSize } from '@components/Forms/common/types';
import type { PushableOverlayProps } from '@components/Overlay';
import type { TextDefaultElement, TextProps } from '@components/Typography';

export type SwitchMouseEvent<Element extends PolymorphicElementType> = PolymorphicMouseEvent<Element>;
export type SwitchChangeEvent<Element extends PolymorphicElementType> = PolymorphicChangeEvent<Element>;
export type SwitchFocusEvent<Element extends PolymorphicElementType> = PolymorphicFocusEvent<Element>;

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
	renderLabel?: (props: TextProps<TextDefaultElement>) => ReactNode;
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

export type SwitchProps<Element extends PolymorphicElementType> = Omit<BoxProps<Element, SwitchOtherProps>, 'children'>;

export type SwitchRef<Element extends PolymorphicElementType> = BoxRef<Element>;
