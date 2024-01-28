import type {
	BorderStyleClass,
	PickFrom,
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValue,
	ThemeAppAppearanceProps,
	ThemeRadius
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { VStackProps } from '@components/Layout';

export type MessageDefaultElement = PolymorphicDefaultElement;
export type MessageElement = Extract<PolymorphicElementType, 'div'>;

export type MessageVariant = PickFrom<BorderStyleClass, 'dashed' | 'dotted' | 'solid'> | 'transparent';

type MessageOtherProps = ThemeAppAppearanceProps & {
	radius?: ResponsiveValue<ThemeRadius>;
	variant?: ResponsiveValue<MessageVariant>;
} & Pick<VStackProps<PolymorphicDefaultElement>, 'spacing'>;

export type MessageProps<Element extends MessageElement> = BoxProps<Element, MessageOtherProps>;

export type MessageRef<Element extends MessageElement> = BoxRef<Element>;

export type MessageContext<Element extends MessageElement> = Pick<
	MessageProps<Element>,
	'color' | 'colorMode' | 'spacing'
>;
