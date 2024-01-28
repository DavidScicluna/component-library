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

export type RadioMouseEvent<Element extends PolymorphicElementType> = PolymorphicMouseEvent<Element>;
export type RadioChangeEvent<Element extends PolymorphicElementType> = PolymorphicChangeEvent<Element>;
export type RadioFocusEvent<Element extends PolymorphicElementType> = PolymorphicFocusEvent<Element>;

export type RadioLabelPosition = 'left' | 'right';

export type RadioSize = FormsCommonSize;

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

type RadioOtherProps = Pick<FormsCommonProps, PickedFormsCommonProps> & {
	renderLabel?: (props: TextProps<TextDefaultElement>) => ReactNode;
	/**
	 * If true, the radio will be in a checked state
	 *
	 * @default false
	 */
	isChecked?: ResponsiveValue<boolean>;
	/**
	 * If true, the radio will be clickable
	 *
	 * @default false
	 */
	isClickable?: ResponsiveValue<boolean>;
	/**
	 * Position of the label relative to the radio
	 *
	 * @default 'right'
	 */
	labelPosition?: ResponsiveValue<RadioLabelPosition>;
	onToggle?: (isChecked: boolean) => void;
} & Pick<PushableOverlayProps<PolymorphicDefaultElement>, 'isActive'>;

type OmittedBoxProps = 'children' | keyof Omit<BoxOtherProps, 'w' | 'minW' | 'maxW' | 'h' | 'minH' | 'maxH'>;

export type RadioProps<Element extends PolymorphicElementType> = Omit<
	BoxProps<Element, RadioOtherProps>,
	OmittedBoxProps
>;

export type RadioRef<Element extends PolymorphicElementType> = BoxRef<Element>;
