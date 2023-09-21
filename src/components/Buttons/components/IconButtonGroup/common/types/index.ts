import type { ElementType } from 'react';

import type { IconButtonProps } from '@components/Buttons/components/IconButton';
import type { HStackProps, HStackRef } from '@components/Layout';

type PickedIconButtonProps = 'color' | 'colorMode' | 'isCompact' | 'isDisabled' | 'isRound' | 'size' | 'variant';

type IconButtonGroupOtherProps = Pick<IconButtonProps, PickedIconButtonProps> & {
	/**
	 * If true, the borderRadius of button that are direct children will be altered to look flushed together
	 *
	 * @default false
	 */
	isAttached?: boolean;
};

export type IconButtonGroupProps<Element extends ElementType> = HStackProps<Element> & IconButtonGroupOtherProps;

export type IconButtonGroupRef<Element extends ElementType> = HStackRef<Element>;

export type IconButtonGroupContext<Element extends ElementType> = Pick<
	IconButtonGroupProps<Element>,
	'color' | 'colorMode' | 'isAttached' | 'isCompact' | 'isDisabled' | 'isRound' | 'size' | 'variant'
>;
