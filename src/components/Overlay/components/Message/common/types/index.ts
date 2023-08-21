import type { ElementType } from 'react';

import type { PickFrom } from '@common/types';
import type { BorderStyle } from '@common/types/classes';
import type { BorderWidth, CommonAppThemeProps, Radius } from '@common/types/theme';

import type { VStackProps, VStackRef } from '@components/Layout';

export type MessageVariant = PickFrom<BorderStyle, 'dashed' | 'dotted' | 'solid'> | 'transparent';

type MessageOtherProps = CommonAppThemeProps & {
	radius?: Radius;
	size?: BorderWidth;
	variant?: MessageVariant;
};

export type MessageProps<Element extends ElementType> = VStackProps<Element> & MessageOtherProps;

export type MessageRef<Element extends ElementType> = VStackRef<Element>;

export type MessageContext<Element extends ElementType> = Pick<
	MessageProps<Element>,
	'color' | 'colorMode' | 'spacing'
>;
