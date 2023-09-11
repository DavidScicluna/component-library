import type { ElementType } from 'react';

import type { ButtonProps } from '@components/Buttons/Button';
import type { HStackProps, HStackRef } from '@components/Layout';

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
	isAttached?: boolean;
};

export type ButtonGroupProps<Element extends ElementType> = HStackProps<Element> & ButtonGroupOtherProps;

export type ButtonGroupRef<Element extends ElementType> = HStackRef<Element>;

export type ButtonGroupContext<Element extends ElementType> = Pick<
	ButtonGroupProps<Element>,
	'color' | 'colorMode' | 'isAttached' | 'isCompact' | 'isDisabled' | 'isFullWidth' | 'isRound' | 'size' | 'variant'
>;
