import type { ReactNode } from 'react';

import type {
	PolymorphicChangeEvent,
	PolymorphicDefaultElement,
	PolymorphicElementType,
	PolymorphicFocusEvent,
	PolymorphicMouseEvent,
	ResponsiveValue
} from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { FormsCommonProps, FormsCommonSize } from '@components/Forms/common/types';
import type { PushableOverlayProps } from '@components/Overlay';
import type { TextDefaultElement, TextProps } from '@components/Typography';

export type CheckboxMouseEvent<Element extends PolymorphicElementType> = PolymorphicMouseEvent<Element>;
export type CheckboxChangeEvent<Element extends PolymorphicElementType> = PolymorphicChangeEvent<Element>;
export type CheckboxFocusEvent<Element extends PolymorphicElementType> = PolymorphicFocusEvent<Element>;

export type CheckboxLabelPosition = 'left' | 'right';

export type CheckboxSize = FormsCommonSize;

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

type CheckboxOtherProps = Pick<FormsCommonProps, PickedFormsCommonProps> & {
	renderLabel?: (props: TextProps<TextDefaultElement>) => ReactNode;
	/**
	 * If true, the checkbox will be in a checked state
	 *
	 * @default false
	 */
	isChecked?: ResponsiveValue<boolean>;
	/**
	 * If true, the checkbox will be clickable
	 *
	 * @default false
	 */
	isClickable?: ResponsiveValue<boolean>;
	/**
	 * If true, the checkbox will be in indeterminate state, checked prop is ignored
	 *
	 * @default false
	 */
	isIndeterminate?: ResponsiveValue<boolean>;
	/**
	 * Position of the label relative to the checkbox
	 *
	 * @default 'right'
	 */
	labelPosition?: ResponsiveValue<CheckboxLabelPosition>;
	onToggle?: (isChecked: boolean) => void;
} & Pick<PushableOverlayProps<PolymorphicDefaultElement>, 'isActive'>;

type OmittedBoxProps = 'children' | keyof Omit<BoxOtherProps, 'w' | 'minW' | 'maxW' | 'h' | 'minH' | 'maxH'>;

export type CheckboxProps<Element extends PolymorphicElementType> = Omit<
	BoxProps<Element, CheckboxOtherProps>,
	OmittedBoxProps
>;

export type CheckboxRef<Element extends PolymorphicElementType> = BoxRef<Element>;
