import type { ElementType } from 'react';

import type { ResponsiveValue } from '@common/types';

import type { ButtonProps } from '@components/Buttons';
import type { StackProps, StackRef } from '@components/Layout';

type PickedButtonProps =
	| 'color'
	| 'colorMode'
	| 'isCompact'
	| 'isDisabled'
	| 'isFullWidth'
	| 'isRound'
	| 'size'
	| 'variant';

type ButtonGroupOtherProps = Pick<ButtonProps, PickedButtonProps> & {
	/**
	 * If true, the borderRadius of button that are direct children will be altered to look flushed together
	 *
	 * @default false
	 */
	isAttached?: ResponsiveValue<boolean>;
};

export type ButtonGroupProps<Element extends ElementType> = StackProps<Element> & ButtonGroupOtherProps;

export type ButtonGroupRef<Element extends ElementType> = StackRef<Element>;

export type ButtonGroupContext<Element extends ElementType> = Pick<
	ButtonGroupProps<Element>,
	| 'color'
	| 'colorMode'
	| 'direction'
	| 'isAttached'
	| 'isCompact'
	| 'isDisabled'
	| 'isFullWidth'
	| 'isRound'
	| 'size'
	| 'variant'
>;
