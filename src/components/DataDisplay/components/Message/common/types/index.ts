import type { ElementType } from 'react';

import type {
	BorderStyleClass,
	PickFrom,
	PolymorphicDefaultElement,
	ResponsiveValue,
	ThemeAppAppearanceProps,
	ThemeBorderWidth,
	ThemeRadius
} from '@common/types';

import type { VStackProps, VStackRef } from '@components/Layout';

export type MessageVariant = PickFrom<BorderStyleClass, 'dashed' | 'dotted' | 'solid'> | 'transparent';

type MessageOtherProps = ThemeAppAppearanceProps & {
	radius?: ResponsiveValue<ThemeRadius>;
	size?: ResponsiveValue<ThemeBorderWidth>;
	variant?: ResponsiveValue<MessageVariant>;
};

export type MessageProps<Element extends ElementType = PolymorphicDefaultElement> = VStackProps<Element> &
	MessageOtherProps;

export type MessageRef<Element extends ElementType = PolymorphicDefaultElement> = VStackRef<Element>;

export type MessageContext<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	MessageProps<Element>,
	'color' | 'colorMode' | 'spacing'
>;
