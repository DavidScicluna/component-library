import type { ElementType } from 'react';

import type { PickFrom } from '@common/types';
import type { IconType } from '@common/types/icons';
import type { CommonAppThemeProps } from '@common/types/theme';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

export type IconElement = PickFrom<ElementType, 'span'>;

export type IconCategory = 'filled' | 'outlined' | 'twoTone';

export type IconVariant = 'contained' | 'light' | 'outlined' | 'monochrome' | 'transparent' | 'unstyled';

type IconOtherProps = CommonAppThemeProps & {
	icon?: IconType;
	category?: IconCategory;
	variant?: IconVariant;
};

export type IconProps<Element extends IconElement> = BoxProps<Element, IconOtherProps>;

export type IconRef<Element extends IconElement> = BoxRef<Element>;
