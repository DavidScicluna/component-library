import type { ElementType } from 'react';

import type { Orientation, PickFrom, ResponsiveValue } from '@common/types';
import type { BorderWidth } from '@common/types/classes';
import type { CommonAppThemeProps, Space } from '@common/types/theme';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box/common/types';

export type DividerDefaultElement = 'div';
export type DividerElement = PickFrom<ElementType, 'div'>;

export type DividerPlacement = 'left' | 'center' | 'right';

export type DividerVariant = 'dotted' | 'dashed' | 'solid';

type DividerOtherProps = CommonAppThemeProps & {
	orientation?: ResponsiveValue<Orientation>;
	placement?: ResponsiveValue<DividerPlacement>;
	size?: ResponsiveValue<BorderWidth>;
	spacing?: ResponsiveValue<Space>;
	variant?: ResponsiveValue<DividerVariant>;
};

export type DividerProps<Element extends DividerElement> = Omit<
	BoxProps<Element, DividerOtherProps>,
	keyof BoxOtherProps
>;

export type DividerRef<Element extends DividerElement> = BoxRef<Element>;
