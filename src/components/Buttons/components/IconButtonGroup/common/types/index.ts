import type { ElementType } from 'react';

import type { ResponsiveValue } from '@common/types';

import type { IconButtonProps } from '@components/Buttons';
import type { StackProps, StackRef } from '@components/Layout';

type PickedIconButtonProps = 'color' | 'colorMode' | 'isCompact' | 'isDisabled' | 'isRound' | 'size' | 'variant';

type IconButtonGroupOtherProps = Pick<IconButtonProps, PickedIconButtonProps> & {
	/**
	 * If true, the borderRadius of button that are direct children will be altered to look flushed together
	 *
	 * @default false
	 */
	isAttached?: ResponsiveValue<boolean>;
};

export type IconButtonGroupProps<Element extends ElementType> = StackProps<Element> & IconButtonGroupOtherProps;

export type IconButtonGroupRef<Element extends ElementType> = StackRef<Element>;

export type IconButtonGroupContext<Element extends ElementType> = Pick<
	IconButtonGroupProps<Element>,
	'color' | 'colorMode' | 'direction' | 'isAttached' | 'isCompact' | 'isDisabled' | 'isRound' | 'size' | 'variant'
>;
