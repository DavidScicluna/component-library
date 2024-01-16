import type {
	BorderStyleClass,
	PickFrom,
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValue,
	ThemeAppAppearanceProps,
	ThemeRadius
} from '@common/types';

import type { VStackProps, VStackRef } from '@components/Layout';

export type MessageVariant = PickFrom<BorderStyleClass, 'dashed' | 'dotted' | 'solid'> | 'transparent';

type MessageOtherProps = ThemeAppAppearanceProps & {
	radius?: ResponsiveValue<ThemeRadius>;
	variant?: ResponsiveValue<MessageVariant>;
};

export type MessageProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = VStackProps<Element> &
	MessageOtherProps;

export type MessageRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = VStackRef<Element>;

export type MessageContext = Pick<MessageProps, 'color' | 'colorMode' | 'spacing'>;
