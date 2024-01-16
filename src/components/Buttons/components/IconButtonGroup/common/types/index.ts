import type { PolymorphicDefaultElement, PolymorphicElementType, ResponsiveValue } from '@common/types';

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

export type IconButtonGroupProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> =
	StackProps<Element> & IconButtonGroupOtherProps;

export type IconButtonGroupRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = StackRef<Element>;

export type IconButtonGroupContext = Pick<
	IconButtonGroupProps,
	'color' | 'colorMode' | 'direction' | 'isAttached' | 'isCompact' | 'isDisabled' | 'isRound' | 'size' | 'variant'
>;
