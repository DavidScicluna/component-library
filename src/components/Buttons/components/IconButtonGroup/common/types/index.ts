import type { PolymorphicDefaultElement, PolymorphicElementType, ResponsiveValue } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { IconButtonDefaultElement, IconButtonProps } from '@components/Buttons';
import type { StackProps } from '@components/Layout';

export type IconButtonGroupDefaultElement = PolymorphicDefaultElement;
export type IconButtonGroupElement = Extract<PolymorphicElementType, 'div'>;

type PickedIconButtonProps = 'color' | 'colorMode' | 'isCompact' | 'isDisabled' | 'isRound' | 'size' | 'variant';

type IconButtonGroupOtherProps = Pick<IconButtonProps<IconButtonDefaultElement>, PickedIconButtonProps> & {
	/**
	 * If true, the borderRadius of button that are direct children will be altered to look flushed together
	 *
	 * @default false
	 */
	isAttached?: ResponsiveValue<boolean>;
} & Pick<StackProps<PolymorphicDefaultElement>, 'direction' | 'spacing'>;

export type IconButtonGroupProps<Element extends IconButtonGroupElement> = BoxProps<Element, IconButtonGroupOtherProps>;

export type IconButtonGroupRef<Element extends IconButtonGroupElement> = BoxRef<Element>;

export type IconButtonGroupContext<Element extends IconButtonGroupElement> = Pick<
	IconButtonGroupProps<Element>,
	'color' | 'colorMode' | 'direction' | 'isAttached' | 'isCompact' | 'isDisabled' | 'isRound' | 'size' | 'variant'
>;
