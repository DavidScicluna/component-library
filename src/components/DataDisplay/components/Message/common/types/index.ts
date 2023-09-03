import type { ElementType } from 'react';

import type {
	BorderStyleClass,
	PickFrom,
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

export type MessageProps<Element extends ElementType> = VStackProps<Element> & MessageOtherProps;

export type MessageRef<Element extends ElementType> = VStackRef<Element>;

export type MessageContext<Element extends ElementType> = Pick<
	MessageProps<Element>,
	'color' | 'colorMode' | 'spacing'
>;
